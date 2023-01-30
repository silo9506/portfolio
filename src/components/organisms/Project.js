import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { ReactComponent as ArrowRight } from "assets/svg/arrow-right.svg";
import { ReactComponent as ArrowLeft } from "assets/svg/arrow-left.svg";
import { carouselActions } from "modules/carouselReducer";
import Work from "components/molecules/Work";
import { useState } from "react";

const Introduce = () => {
  const [transX, setTransX] = useState(0);
  const [start, setStart] = useState(0);
  const [isDrag, setIsDrag] = useState(false);
  const { counte, max, trans, work } = useSelector(
    (state) => state.carouselReducer
  );
  const dispatch = useDispatch();
  const { carouselMove, carouselLastMove } = carouselActions;

  const onClickUp = (e) => {
    dispatch(carouselMove("up"));
    if (e !== null) {
      setTimeout(() => {
        e.target.disabled = false;
      }, 300);
      e.target.disabled = true;
    }
    if (counte === max - 1) {
      setTimeout(() => {
        dispatch(carouselLastMove("up"));
      }, 300);
    }
  };

  const onClickDown = (e) => {
    dispatch(carouselMove("down"));
    if (e !== null) {
      setTimeout(() => {
        e.target.disabled = false;
      }, 300);
      e.target.disabled = true;
    }
    if (counte === 0) {
      setTimeout(() => {
        dispatch(carouselLastMove("down"));
      }, 300);
    }
  };

  const onMouseDown = (e) => {
    e.preventDefault();
    let pageX = e.pageX;
    setIsDrag(true);
    setStart(pageX);
    pageX = null;
  };

  const onMouseLeave = (e) => {
    if (transX > 200) {
      // console.log("200보다 큼");
      onClickDown(null);
    }
    if (transX < -200) {
      // console.log("200보다 작음");
      onClickUp(null);
    }
    e.preventDefault();
    setIsDrag(false);
    setTransX(0);
  };

  const onMouseUp = (e) => {
    if (transX > 150) {
      // console.log("200보다 큼");
      onClickDown(null);
    }
    if (transX < -150) {
      // console.log("200보다 작음");
      onClickUp(null);
    }
    e.preventDefault();
    setIsDrag(false);
    setTransX(0);
  };

  const onMouseMove = (e) => {
    if (!isDrag) return;
    let pageX = -start + e.pageX;
    setTransX(pageX);
    pageX = null;
  };

  return (
    <Container>
      <CarouselWrapper>
        <Carousel
          max={max}
          counter={counte}
          trans={trans}
          transX={transX}
          onMouseDown={onMouseDown}
          onMouseLeave={onMouseLeave}
          onMouseUp={onMouseUp}
          onMouseMove={onMouseMove}
        >
          {work.map((works, index) => (
            <Work key={index} works={works} />
          ))}
        </Carousel>
      </CarouselWrapper>
      <Btnwrapper onClick={onClickDown} left={true}>
        <ArrowLeft />
      </Btnwrapper>
      <Btnwrapper onClick={onClickUp}>
        <ArrowRight />
      </Btnwrapper>
    </Container>
  );
};

const Container = styled.div`
  /* max-width: 40rem; */
  height: 80%;
  border-radius: 10%;
  width: calc(100% - 20%);
  position: relative;
  background-color: #453b36;
`;
const CarouselWrapper = styled.div`
  /* width: 100%; */
  /* max-width: 40rem; */
  height: 100%;
  overflow: hidden;
`;

const Carousel = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  transition: ${({ trans }) => trans && "0.3s"};
  transform: ${({ max, counter, transX }) =>
    `translateX(calc(-${(counter + max) * 100}% + ${transX}px))`};
`;

const Btnwrapper = styled.div`
  position: absolute;
  right: ${({ left }) => (left ? "unset" : "-10%")};
  top: 50%;
  transform: translatey(-50%);
  left: ${({ left }) => (left ? "-10%" : "unset")};
  svg {
    width: 60px;
    height: 60px;
    fill: #ff6363;
  }
`;

export default Introduce;
