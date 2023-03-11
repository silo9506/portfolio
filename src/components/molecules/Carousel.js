import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { ReactComponent as ArrowRight } from "assets/svg/arrow-right.svg";
import { ReactComponent as ArrowLeft } from "assets/svg/arrow-left.svg";
import { carouselActions } from "modules/carouselReducer";
import Work from "./Work";

const Carousel = () => {
  const { counte, max, trans, work } = useSelector(
    (state) => state.carouselReducer
  );
  console.log(counte);
  const dispatch = useDispatch();
  const { carouselMove, carouselLastMove } = carouselActions;

  const onClickUp = (e) => {
    dispatch(carouselMove("up"));
    setTimeout(() => {
      e.target.disabled = false;
    }, 300);

    if (counte === max - 1) {
      setTimeout(() => {
        dispatch(carouselLastMove("up"));
      }, 300);
    }
    e.target.disabled = true;
  };

  const onClickDown = (e) => {
    dispatch(carouselMove("down"));
    setTimeout(() => {
      e.target.disabled = false;
    }, 300);
    if (counte === 0) {
      setTimeout(() => {
        dispatch(carouselLastMove("down"));
      }, 300);
    }
    e.target.disabled = true;
  };

  return (
    <Container>
      <Carousels max={max} counter={counte} trans={trans}>
        {work.map((works, index) => (
          <Work key={index} works={works} />
        ))}
      </Carousels>
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
  width: 80%;
  height: 100%;
  overflow: hidden;
  margin: 0 auto;
  position: relative;
`;
const Carousels = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  transition: ${({ trans }) => trans && "0.3s"};
  transform: ${({ max, counter }) => `translateX(-${(counter + max) * 100}%)`};
`;

const Btnwrapper = styled.div`
  position: absolute;
  cursor: pointer;
  right: ${({ left }) => (left ? "unset" : "10%")};
  top: 50%;
  transform: translatey(-50%);
  left: ${({ left }) => (left ? "10%" : "unset")};
  svg {
    width: 60px;
    height: 60px;
  }
`;

export default Carousel;
