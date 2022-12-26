import styled from "styled-components";
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
          <li>재사용 가능한 코드를 작성하고자 노력하겠습니다.</li>
          <li>무분별한 라이브러리 사용을 하지않겠습니다.</li>
          <li>다른사람의 코드를 읽는것을 게을리 하지 않겠습니다.</li>
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
    </Container>
  );
};

export default About;

const Container = styled.div`
  background-color: rgb(238, 234, 232);
  display: grid;
  color: #000;
  padding: 100px 50px;
  max-width: 40rem;
  height: 70%;
  grid-gap: 20px;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
`;

const Category = styled.div`
  display: flex;
  flex-direction: column;
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
    fill: black;
    width: 20px;
    height: 20px;
    margin-right: 10px;
  }
`;
