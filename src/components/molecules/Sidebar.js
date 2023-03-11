import styled, { keyframes } from "styled-components";
import profile from "assets/img/profile04.jpg";
const Sidebar = ({ toggle, maxPage, change, curPage }) => {
  return (
    <Container>
      {toggle ? (
        <div className="sidebar">
          <img className="profile" src={profile} alt="profile" />
          <span className="name">KIM HYEON CHUL</span>
          <SlideingBox>
            <div className="fixed">
              <div className="moving">
                <div>성장하는</div>
                <div>분석하는</div>
                <div>생각하는</div>
              </div>
              개발자가 되겠습니다.
            </div>
          </SlideingBox>
          <div className="navbox">
            {Array.from(Array(maxPage), (x, index) => (
              <NavBtn
                key={index}
                active={index === curPage}
                index={index}
                onClick={() => change(index)}
              >
                {index === 0 && "Home"}
                {index === 1 && "Project"}
                {index === 2 && "About"}
              </NavBtn>
            ))}
          </div>
        </div>
      ) : (
        <MiniSidebar>
          <div className="navBox">
            {Array.from(Array(maxPage), (x, index) => (
              <MiniNavBtn
                active={index === curPage}
                onClick={() => change(index)}
                key={index}
              ></MiniNavBtn>
            ))}
          </div>
        </MiniSidebar>
      )}
    </Container>
  );
};

export default Sidebar;

const slide = keyframes`
   0% {margin-top:-200%;}
  5% {margin-top:-100%;}
  33% {margin-top:-100%;}
  38% {margin-top:-50%;}
  66% {margin-top:-50%;}
  71% {margin-top:0%;}
  100% {margin-top:0%;}`;

const Container = styled.div`
  @media screen and (max-width: 600px) {
    display: none;
  }
  .sidebar {
    padding: 20px 0px;
    color: white;
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    z-index: 100;
    width: 12.5rem;
    display: flex;
    align-items: center;
    background-color: #212529;
    flex-direction: column;
    .profile {
      width: 150px;
      width: 65%;
      height: 180px;
      border: 5px solid #f8f7f7;
      border-radius: 50%;
    }
    .name {
      font-size: 1rem;
    }
    .navbox {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      flex: 1;
    }
  }
`;
const NavBtn = styled.div`
  padding: 1rem;
  color: ${({ active }) => active && "#eb4a4c"};
  cursor: ${({ active }) => (!active ? "pointer" : "unset")};
  font-weight: bold;
  &:hover {
    transform: ${({ active }) => (!active ? "scale(1.3)" : "unset")};
    transition: transform 1s ease-in;
  }
`;

const MiniSidebar = styled.div`
  color: white;
  position: absolute;
  left: 0;
  top: 50%;
  bottom: 0;
  z-index: 100;
  transform: translateY(-50%);
  .navBox {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 20px;
    width: 30px;
    height: 100%;
  }
`;
const MiniNavBtn = styled.div`
  background-color: rgb(247, 241, 227);
  width: 16px;
  height: 16px;
  border-radius: 50%;
  cursor: pointer;
  background-color: ${({ active }) => active && "#d1a386"};
  & + & {
    margin-top: 20px;
  }
  &:hover {
    transform: scale(1.3);
    transition: transform ease-in-out 1s;
  }
`;

const SlideingBox = styled.div`
  padding: 10px 0;
  .fixed {
    font-size: 0.8rem;
    color: #fff;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .moving {
    height: 0.8rem;
    overflow: hidden;
    margin-bottom: 0.5px;
    padding-right: 5px;
    div {
      height: 0.8rem;
      width: fit-content;
      color: #eb4a4c;
      margin-bottom: 0.8rem;
    }
    & :first-child {
      animation: ${slide} 5s linear infinite;
    }
  }
`;
