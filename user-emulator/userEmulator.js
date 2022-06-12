const axios = require("axios");
const inquirer = require("inquirer");
require("dotenv").config();
("use strict");

const createNewUser = "Crear un nuevo usuario";
const obtainAllUser = "Obtener todos los usuarios";
const associatePaymentsMethod = "Asociar metodos de pago";
const getUser = "Obtener un usuario";
const exit = "Salir";

const main = async () => {
  inquirer
    .prompt([
      {
        type: "rawlist",
        name: "action",
        message: "¿Que acción quieres realizar?",
        choices: [
          createNewUser,
          getUser,
          associatePaymentsMethod,
          obtainAllUser,
          exit,
        ],
      },
    ])
    .then(async (answers) => {
      switch (answers.action) {
        case createNewUser:
          console.log(
            "Ingrese los datos del usuario que se muestran a continuación:"
          );
          inquirer
            .prompt(userAttributesQuestions)
            .then(async (answers) => {
              console.log("Email: " + answers["email"]);
              console.log("Contraseña: " + answers["password"]);
              console.log("Nombre: " + answers["name"]);
              console.log("Apellido: " + answers["lastname"]);
              console.log("Nombre de usuario: " + answers["username"]);
              console.log("Fecha de nacimiento: " + answers["birthday"]);
              console.log("País: " + answers["location"]);
              console.log("Idioma de preferencia: " + answers["language"]);

              const response = await postUser(answers);
              console.log(response.data);
              return main();
            })
            .catch((err) => {
              console.log("Un error ha ocurrido: " + err);
            });
          break;

        case getUser:
          inquirer
            .prompt(getUserUsenameQuestion)
            .then(async (answers) => {
              console.log(
                "Obteniendo usuario con nombre de usuario: " +
                  answers[usernameAttribute]
              );

              const response = await getUserByUsername(
                answers[usernameAttribute]
              );
              console.log(
                response.data && response.data.length
                  ? response.data
                  : `Nombre de usuario: ` +
                      answers[usernameAttribute] +
                      ` no fue encontrado en el sistema.`
              );
              return main();
            })
            .catch((err) => {
              console.log("Un error ha ocurrido: " + err);
            });
          break;

        case obtainAllUser:
          console.log(
            "Tratando de obtener todos los usuarios registrados en el sistema: "
          );

          const response = await getAllUsers();
          console.log(response.data);
          if (response) {
            return main();
          }
          break;

        case associatePaymentsMethod:
          inquirer
            .prompt(getUserUsenameQuestion)
            .then(async (answers) => {
              console.log(
                "Attempting to delete the client with email: " +
                  answers[emailAttribute]
              );

              const response = await deleteUserByEmail(answers[emailAttribute]);
              console.log(response.data);
              return main();
            })
            .catch((err) => {
              console.log(err);
            });
          break;

        case exit:
          console.log(
            "Muchas gracias por usar nuestro sistema, hasta la próxima."
          );
          break;

        default:
          console.log("Por favor ingrese una opción correcta.");
      }
    })
    .catch((err) => {
      console.log("Ha ocurrido un error: " + err);
    });
};

main();

const emailAttribute = "Email";
const passwordAttribute = "Password";
const nameAttribute = "Name";
const lastnameAttribute = "Lastname";
const usernameAttribute = "Username";
const birthdayAttribute = "Birthday";
const locationAttribute = "Location";
const language = "Language";

const confirmValidInput = async (input) => {
  if (!input || !input.trim().length) {
    return "Por favor ingrese un campo no vacío.";
  }
  return true;
};

const validateEmail = (email) => {
  if (
    !String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
  ) {
    return "Por favor ingrese un email correcto.";
  }
  return true;
};

const userAttributesQuestions = [
  {
    type: "input",
    name: emailAttribute,
    message: "Email:",
    validate: validateEmail,
  },
  {
    type: "password",
    name: passwordAttribute,
    message: "Contraseña:",
    validate: confirmValidInput,
  },
  {
    type: "input",
    name: nameAttribute,
    message: "Nombre:",
    validate: confirmValidInput,
  },
  {
    type: "input",
    name: lastnameAttribute,
    message: "Apellido:",
    validate: confirmValidInput,
  },
  {
    type: "input",
    name: usernameAttribute,
    message: "Nombre de usuario:",
    validate: confirmValidInput,
  },
  {
    type: "input",
    name: birthdayAttribute,
    message: "Fecha de nacimiento: (dd-mm-aaaa)",
    validate: confirmValidInput,
  },
  {
    type: "input",
    name: locationAttribute,
    message: "País:",
    validate: confirmValidInput,
  },
  {
    type: "rawlist",
    name: language,
    message: "Idioma de preferencia:",
    choices: [
      "Español",
      "Inglés",
      "Portugués",
      "Francés",
      "Chino Mandarín",
      "Ruso",
      "Otro",
    ],
  },
];

const getUserUsenameQuestion = [
  {
    type: "input",
    name: usernameAttribute,
    message: "Nombre de usuario:",
    validate: confirmValidInput,
  },
];

postUser = function (user) {
  console.log(user);
  return axios.post(process.env.API_URL, user);
};

getUserByUsername = function (username) {
  console.log(username);
  return axios.get(process.env.API_URL + username);
};

getAllUsers = function () {
  return axios.get(process.env.API_URL, {});
};
