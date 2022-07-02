import { setTimeout } from "timers/promises";
import axios from 'axios';

export const getRandomNumber = (min,max)=>{
    return Math.random()*(max - min) + min
}

export const createCarBot = async (vehicleId) => {
  await setTimeout(Math.floor(getRandomNumber(1,6))*1000);
    while (true) {
      await setTimeout(30000);
      const data = {
        "vehicle_id": vehicleId,
        "waves":getRandomNumber(0, 100).toFixed(2),
        "temperature":getRandomNumber(-10, 50).toFixed(2),
        "vibration":getRandomNumber(0, 1000).toFixed(2),
        "pressure":getRandomNumber(0, 1000).toFixed(2),
        "voltage":getRandomNumber(0, 100).toFixed(2),
        "speed":getRandomNumber(-40, 300).toFixed(2),
        "time":Date.now()
      }
      await axios.post(process.env.API_URL, data)
      console.log(`VEHICLE ${vehicleId} SEND DATA ${JSON.stringify(data)}`)
    }
  }
  
  