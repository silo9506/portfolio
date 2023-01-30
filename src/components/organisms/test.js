import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { ReactComponent as ArrowRight } from "assets/svg/arrow-right.svg";
import { ReactComponent as ArrowLeft } from "assets/svg/arrow-left.svg";
import { carouselActions } from "modules/carouselReducer";
import Work from "components/molecules/Work";

const Project = () => {
  const { counte, max, trans, work } = useSelector(
    (state) => state.carouselReducer
  );
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
      <CarouselWrapper>
        <Carousel max={max} counter={counte} trans={trans}>
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
  max-width: 40rem;
  height: 70%;
  position: relative;
  background-color: skyblue;
`;
const CarouselWrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const Carousel = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  transition: ${({ trans }) => trans && "0.3s"};
  transform: ${({ max, counter }) => `translateX(-${(counter + max) * 100}%)`};
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

export default Project;
