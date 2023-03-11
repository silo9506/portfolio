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

const About = () => {
  return (
    <Container>
      {/* <div className="shadow" /> */}

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
                <td>silo9506@gmail.com</td>
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
  padding: 50px;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  /*  */
  .shadow {
    left: 0;
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
  /* grid-template-columns: repeat(2, 50%); */
  /* grid-template-rows: repeat(3, 100%); */
  color: white;
  font-family: "Bellefair", serif;
  height: 70%;
  width: 100%;
  max-width: 700px;
  height: 50%;
  .circle-1 {
    max-width: 650px;
    border-radius: 50% 50% 50% 70%/50% 50% 70% 60%;
    position: absolute;
    top: -15%;
    left: 0;
    right: 0;
    bottom: -15%;
    background: #4c4e33;
    animation: ${spin} 6s infinite linear;
    z-index: 2;
  }
  .circle-2 {
    max-width: 650px;
    border-radius: 80% 30% 50% 50%/50%;
    position: absolute;
    top: -15%;
    left: 0;
    bottom: -15%;
    right: 0;
    background: #897171;
    animation: ${spin} 6.5s infinite linear;
    z-index: 2;
  }
  .circle-3 {
    max-width: 650px;
    background: #d19f9f;
    border-radius: 40% 40% 50% 40%/30% 50% 50% 50%;
    position: absolute;
    top: -15%;
    left: 0;
    bottom: -15%;
    right: 0;
    animation: ${spin} 7s infinite linear;
    z-index: 2;
  }
`;

const Category = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  width: 100%;
  height: 100%;
  z-index: 3;
  font-size: 0.8rem;

  ul {
    list-style: circle;
    padding: 0 20px;
    li + li {
      margin-top: 2.5px;
    }
  }
  .iconBox {
    margin: 0 auto;
  }
  table {
    /* width: fit-content; */
    /* width: 100%; */

    td {
      padding: 2.5px 0;
    }
    td + td {
      word-break: break-all;
      padding-left: 24px;
      padding-bottom: 8px;
      /* text-align: center; */
    }
  }
  .skillIcon {
    width: 2rem;
    height: 2rem;
  }
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  font-size: 1rem;
  margin: 10px 0;
  padding-bottom: 8px;
  svg {
    fill: white;
    width: 20px;
    height: 20px;
    margin-right: 10px;
  }
`;
