import styled, { keyframes } from "styled-components";
import { ReactComponent as Profile } from "assets/svg/profile.svg";
import { ReactComponent as Contact } from "assets/svg/contact.svg";
import { ReactComponent as Skill } from "assets/svg/skill.svg";
import { ReactComponent as Introduce } from "assets/svg/introduce.svg";
import cssIcon from "assets/img/css.png";
import firebaseIcon from "assets/img/firebase.png";
import htmlIcon from "assets/img/html.png";
import jsIcon from "assets/img/js.png";
import reactIcon from "assets/img/react.png";
import reduxIcon from "assets/img/redux.png";
import { useEffect } from "react";

const About = () => {
  useEffect(() => {}, []);

  return (
    <Container>
      <div className="shadow" />

      <Gridbox>
        <div className="circle-1"></div>
        <div className="circle-2"></div>
        <div className="circle-3"></div>
        <Category>
          <Title>
            <Profile />
            Profile
          </Title>
          <table>
            <tbody>
              <tr>
                <td>이름</td>
                <td>김현철</td>
              </tr>
              <tr>
                <td>생년월일</td>
                <td>1995.04.23</td>
              </tr>
              <tr>
                <td>거주지</td>
                <td>서울 강북구 수유동</td>
              </tr>
            </tbody>
          </table>
        </Category>
        <Category>
          <Title>
            <Skill />
            Skill
          </Title>
          <div className="iconBox">
            <img className="skillIcon" alt="skillIcon" src={cssIcon}></img>
            <img className="skillIcon" alt="skillIcon" src={jsIcon}></img>
            <img className="skillIcon" alt="skillIcon" src={htmlIcon}></img>
            <img className="skillIcon" alt="skillIcon" src={firebaseIcon}></img>
            <img className="skillIcon" alt="skillIcon" src={reactIcon}></img>
            <img className="skillIcon" alt="skillIcon" src={reduxIcon}></img>
          </div>
        </Category>
        <Category>
          <Title>
            <Introduce />
            Introduce
          </Title>
          <ul>
            <li>123</li>
          </ul>
        </Category>
        <Category>
          <Title>
            <Contact />
            Contact
          </Title>
          <table>
            <tbody>
              <tr>
                <td>Tel</td>
                <td>010 9506 2826</td>
              </tr>
              <tr>
                <td>Email</td>
                <td>eyeless356@naver.com</td>
              </tr>
            </tbody>
          </table>
        </Category>
      </Gridbox>
    </Container>
  );
};

export default About;

const spin = keyframes`
  0%{transform:rotate(0deg)};
  50%{transform:rotate(180deg)};
  100% { transform: rotate(360deg)}
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  /* background: linear-gradient(
    to right,
    rgba(36, 31, 31, 1) 0%,
    rgba(36, 31, 31, 1) 32%,
    rgba(74, 71, 70, 1) 100%
  ); */
  color: #fff;

  .shadow {
    position: absolute;
    width: 100%;
    height: 100%;
    box-shadow: inset 0px 0px 150px 20px black;
    mix-blend-mode: multiply;
  }
`;

const Gridbox = styled.div`
  border-radius: 50%;
  position: relative;
  display: grid;
  color: #000;
  color: white;
  font-family: "Bellefair", serif;
  padding: 100px 50px;
  max-width: 40rem;
  height: 70%;
  grid-gap: 20px;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  .circle-1 {
    border-radius: 50% 50% 50% 70%/50% 50% 70% 60%;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: #4c4e33;
    animation: ${spin} 5s infinite linear;
    z-index: 2;
  }
  .circle-2 {
    border-radius: 80% 30% 50% 50%/50%;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: #897171;
    animation: ${spin} 5s infinite linear;
    z-index: 2;
  }
  .circle-3 {
    background: #d19f9f;
    border-radius: 40% 40% 50% 40%/30% 50% 50% 50%;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    animation: ${spin} 6s infinite linear;
    z-index: 2;
  }
`;

const Category = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 3;
  font-size: 15px;
  ul {
    list-style: circle;
    padding: 0 20px;
    li + li {
      margin-top: 2.5px;
    }
  }
  table {
    width: fit-content;
    td {
      min-width: 80px;
      max-width: fit-content;
      text-align: start;
      padding: 2.5px 0;
    }
  }
  .skillIcon {
    width: 40px;
    height: 40px;
  }
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  font-size: 18px;
  margin: 10px 0;
  svg {
    fill: white;
    width: 20px;
    height: 20px;
    margin-right: 10px;
  }
`;
