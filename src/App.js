import Home from "components/organisms/Home";
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { scrollReducerAction } from "./modules/scrollReducer";
import { ReactComponent as Hamburger } from "assets/svg/hamburger.svg";
import { ReactComponent as X } from "assets/svg/x.svg";
import Sidebar from "components/molecules/Sidebar";
import { navReducerAction } from "modules/navReducer";
import About from "components/organisms/About";
import Project from "components/organisms/Project";

const App = () => {
  const { onToggle } = navReducerAction;
  const sections = useRef();
  const { curPage, maxPage, throttle } = useSelector(
    (state) => state.scrollReducer
  );
  const { toggle } = useSelector((state) => state.navReducer);

  const { setMaxPage, onScroll, onThrottle } = scrollReducerAction;
  const dispatch = useDispatch();

  useEffect(() => {
    init();
  }, [toggle, curPage]);

  useEffect(() => {}, []);

  useEffect(() => {
    dispatch(setMaxPage(sections.current.children.length));
  }, [setMaxPage, dispatch]);

  const init = () => {
    if (curPage !== 0 && curPage !== maxPage - 1) {
      let num = 1;
      while (num <= curPage) {
        sections.current.children[curPage - num].classList.add("scroll-down");
        num++;
      }
    }
    if (curPage === 0) {
      let num = 0;
      while (num < maxPage) {
        sections.current.children[curPage + num].classList.remove(
          "scroll-down"
        );
        num++;
      }
    }

    if (curPage === maxPage - 1) {
      let num = 1;
      while (num < maxPage) {
        console.log(num);
        sections.current.children[curPage - num].classList.add("scroll-down");
        num++;
      }
    }
  };

  const scrollDown = () => {
    if (curPage < maxPage - 1) {
      let CURPAGE = curPage + 1;
      console.log(CURPAGE);
      dispatch(onScroll(CURPAGE));

      sections.current.children[CURPAGE - 1].classList.add("scroll-down");
      CURPAGE = null;
    }
  };

  const scrollUp = () => {
    if (curPage !== 0) {
      let CURPAGE = curPage - 1;
      console.log(CURPAGE);

      dispatch(onScroll(CURPAGE));
      sections.current.children[CURPAGE].classList.remove("scroll-down");
    }
  };

  const useThrottle = (fn, delay) => {
    return function (e) {
      if (!throttle) {
        fn(e);
        dispatch(onThrottle(true));
        setTimeout(() => {
          dispatch(onThrottle(false));
        }, delay);
      }
    };
  };

  const handleScroll = useThrottle((e) => {
    let delta = e.deltaY;
    if (delta < 0) {
      scrollUp();
    } else {
      scrollDown();
    }
  }, 1000);

  return (
    <Container onWheel={handleScroll}>
      <ToggleBtn toggle={toggle} onClick={() => dispatch(onToggle())}>
        {toggle ? <X /> : <Hamburger />}
      </ToggleBtn>
      <Sidebar
        change={(num) => dispatch(onScroll(num))}
        maxPage={maxPage}
        toggle={toggle}
        curPage={curPage}
      />
      <Sections ref={sections}>
        <Background toggle={toggle}>
          <div className="content">
            <Home />
          </div>
        </Background>
        <Background toggle={toggle}>
          <div className="content">
            <About />
          </div>
        </Background>
        <Background toggle={toggle}>
          <div className="content">
            <Project />
          </div>
        </Background>
      </Sections>
    </Container>
  );
};

export default App;

const Container = styled.div`
  perspective: 1px;
  height: 100vh;
  overflow: hidden;
`;

const Background = styled.section`
  position: fixed;
  height: 130vh;
  width: 100%;
  transition: all 1s cubic-bezier(0.22, 0.44, 0, 1);
  transform: translateY(20vh);
  font-size: 30px;
  font-weight: bold;
  color: white;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  & .content {
    height: 100vh;
    width: 100%;
    transition: all 1s cubic-bezier(0.22, 0.44, 0, 1);
    transform: translateY(40vh);
    padding-left: ${({ toggle }) => toggle && "15rem"};
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &:first-child {
    background-color: #1a1a1a;
    transform: translateY(-15vh);
    z-index: 10;
    .content {
      transform: translateY(15vh);
    }
  }
  &:nth-child(2) {
    background-color: #2b2b2b;
    z-index: 9;
  }

  &:nth-child(3) {
    z-index: 8;
    background-color: #343a40;
  }

  &.scroll-down {
    transform: translateY(-130vh);
    transform: translateY(-131vh);
  }

  &.scroll-down > .content {
    transform: translateY(40vh);
    transform: translateY(30vh);
  }

  &.scroll-down + &:not(.scroll-down) {
    transform: translateY(-15vh);
  }

  &.scroll-down + &:not(.scroll-down) > .content {
    transform: translateY(15vh);
  }
`;

const Sections = styled.div`
  height: 100vh;
`;

const ToggleBtn = styled.div`
  position: absolute;
  cursor: pointer;
  top: 0px;
  left: ${({ toggle }) => (toggle ? 12 : 0)}rem;
  transform: ${({ toggle }) => toggle && `translateX(-50%)`};
  z-index: 102;
  width: 30px;
  height: 30px;
  margin: 20px;
  svg {
    fill: white;
    width: 100%;
    height: 100%;
  }
`;
