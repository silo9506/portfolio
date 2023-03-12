import Home from "components/organisms/Home";
import { useEffect, useRef, useState } from "react";
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
  const [prevTouchY, setPrevTouchY] = useState(null);

  useEffect(() => {
    init();
  }, [toggle, curPage]);

  useEffect(() => {
    dispatch(setMaxPage(sections.current.children.length));
  }, [setMaxPage, dispatch]);

  const init = () => {
    if (curPage !== 0 && curPage !== maxPage - 1) {
      let num = 1;
      while (num <= curPage) {
        sections.current.children[curPage - num].classList.add("scroll-down");
        sections.current.children[curPage].classList.remove("scroll-down");
        num++;
      }
      num = 1;
    }
    if (curPage === 0) {
      let num = 0;
      while (num < maxPage) {
        sections.current.children[curPage + num].classList.remove(
          "scroll-down"
        );
        num++;
      }
      num = 0;
    }

    if (curPage === maxPage - 1) {
      let num = 1;
      while (num < maxPage) {
        sections.current.children[curPage - num].classList.add("scroll-down");
        num++;
      }
      num = 1;
    }
  };

  const scrollDown = () => {
    if (curPage < maxPage - 1) {
      let CURPAGE = curPage + 1;
      dispatch(onScroll(CURPAGE));
      sections.current.children[CURPAGE - 1].classList.add("scroll-down");
      CURPAGE = null;
    }
  };

  const scrollUp = () => {
    if (curPage !== 0) {
      let CURPAGE = curPage - 1;
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
    if (e._reactName === "onTouchEnd") {
      const currTouchY = e.changedTouches[0].pageY;
      if (prevTouchY !== null) {
        const deltaY = currTouchY - prevTouchY;
        if (deltaY > 150) {
          scrollUp();
        } else if (deltaY < -150) {
          scrollDown();
        }
      }
      setPrevTouchY(null);
    } else {
      let delta = e.deltaY;
      if (delta < 0) {
        scrollUp();
      } else {
        scrollDown();
      }
    }
  }, 1000);

  return (
    <Container
      onWheel={handleScroll}
      onTouchStart={(e) => setPrevTouchY(e.touches[0].clientY)}
      onTouchEnd={handleScroll}
    >
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
            <Project />
          </div>
        </Background>
        <Background toggle={toggle}>
          <div className="content">
            <About />
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
    transform: translateY(80vh);
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    padding-left: ${({ toggle }) => (toggle ? "12.5rem" : "70px")};
    @media screen and (max-width: 600px) {
      padding-left: unset;
    }
  }

  &:first-child {
    transform: translateY(-15vh);
    background-color: #1a1a1a;
    z-index: 10;
    .content {
      transform: translateY(15vh);
    }
  }
  &:nth-child(2) {
    z-index: 9;
    background: linear-gradient(to top, #1a1a1a 0%, #382d21 32%, #04343a 100%);
  }

  &:nth-child(3) {
    z-index: 8;
    background: linear-gradient(
      to right,
      rgba(36, 31, 31, 1) 0%,
      rgba(36, 31, 31, 1) 32%,
      rgba(74, 71, 70, 1) 100%
    );
  }

  &.scroll-down {
    transform: translateY(-130vh);
  }

  &.scroll-down > .content {
    transform: translateY(20vh);
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
  left: ${({ toggle }) => (toggle ? 10 : 0)}rem;
  transform: ${({ toggle }) => toggle && `translateX(-50%)`};
  z-index: 102;
  width: 1.5rem;
  height: 1.5rem;
  margin-top: 20px;
  margin-left: 20px;
  svg {
    fill: white;
    width: 100%;
    height: 100%;
  }
  &:hover {
    svg path {
      fill: red;
      transition: fill ease-in 1s;
    }
  }
  @media screen and (max-width: 600px) {
    display: none;
  }
`;
