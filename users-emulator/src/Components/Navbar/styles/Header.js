import styled from "styled-components/macro";
import MEDIA from "../../../media";
import darwinProSemiBold from "../../../resources/fonts/DarwinPro-SemiBold.otf";

const Header = styled.header`
  @font-face {
    font-family: "Darwin Pro SemiBold";
    font-style: normal;
    font-weight: 600;
    src: url(${darwinProSemiBold});
  }
  height: 70px;
  background-color: white;
  box-shadow: 0px 0px 20px 0px lightgrey;
  display: flex;
  align-items: center;
  position: fixed;
  width: 100%;
  left: 0;
  top: 0;
  z-index: 9;
  a {
    margin-left: 100px;
    text-decoration: none;
    color: #2f659e;
    font-size: 20px;
    font-family: "Darwin Pro SemiBold";
  }
  @media only screen and (min-width: ${MEDIA.phone}) and (max-width: ${MEDIA.tablet}) {
    a {
      margin-left: 50px;
    }
  }
  @media (max-width: ${MEDIA.phone}) {
    justify-content: center;
    a {
      margin-left: 0px;
      font-size: 40px;
    }
  }
`;

export default Header;
