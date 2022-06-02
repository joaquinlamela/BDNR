import styled from "styled-components/macro";
import MEDIA from "../../../media";
import darwinProLight from "../../../resources/fonts/DarwinPro-Light.otf";

const Nav = styled.nav`
  @font-face {
    font-family: "Darwin Pro Light";
    font-style: normal;
    font-weight: 100;
    src: url(${darwinProLight});
  }
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-left: 200px;
  gap: 15px;
  a {
    margin: 0 0px;
    text-decoration: none;
    color: #1c1a46;
    font-size: 20px;
    font-family: "Darwin Pro Light";
    width: 95px;
  }
  a:hover {
    color: #b23d3d;
  }
  @media only screen and (min-width: ${MEDIA.phone}) and (max-width: ${MEDIA.tablet}) {
    margin-left: 110px;
    a {
      font-size: 18px;
    }
  }
  @media (max-width: ${MEDIA.phone}) {
    display: none;
  }
`;

export default Nav;
