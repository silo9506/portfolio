import { Fragment, useEffect, useRef, useState } from "react";
import styled, { keyframes } from "styled-components";
import { ReactComponent as ArrowDown } from "assets/svg/arrow-down.svg";

const Home = () => {
  // const title = "Hyeon Chul's Portfolio";
  const savedCallback = useRef();
  const [top1, setTop1] = useState();
  const [top2, setTop2] = useState();
  const [btm1, setBtm1] = useState();
  const [btm2, setBtm2] = useState();
  const [skew, setSkew] = useState();

  const callback = () => {
    setTop1(Math.random() * 200);
    setTop2(Math.random() * 200);
    setBtm1(Math.random() * 200);
    setBtm2(Math.random() * 200);
    setSkew(Math.random() * 10);
  };

  useEffect(() => {
    savedCallback.current = callback;
  });

  useEffect(() => {
    const tick = () => {
      savedCallback.current();
    };
    const timer = setInterval(tick, 100);
    return () => clearInterval(timer);
  }, []);

  return (
    <Container>
      <Title skew={skew}>
        Hyeon Chul's{"\n"}Portfolio
        <Before top1={top1} btm1={btm1}>
          Hyeon Chul's{"\n"}Portfolio
        </Before>
        <After top2={top2} btm2={btm2}>
          Hyeon Chul's{"\n"}Portfolio
        </After>
      </Title>
      <Arrowbox>
        <span>스크롤</span>
        <ArrowDown />
      </Arrowbox>
    </Container>
  );
};

const arrowBounce = keyframes`
  0%,
  20%,
  50%,
  80%,
  100% {
    -webkit-transform: translateY(0);
    transform: translateX(0);
  }
  40% {
    -webkit-transform: translateY(-30px);
    transform: translateY(-30px);
  }
  60% {
    -webkit-transform: translateY(-15px);
    transform: translateY(-15px);
  }`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  font-size: 4rem;
  height: 100%;
`;

const Title = styled.h1.attrs(({ skew }) => ({
  style: {
    transform: `skew(${skew}deg)`,
  },
}))`
  color: #f1f1f1;
  position: relative;
  white-space: pre-wrap;
  text-align: center;
  padding: 0 2px;
  & span {
    position: absolute;
    top: 0;
    transition: clip-path 50ms ease-in;
  }
`;
const Before = styled.span.attrs(({ top1, btm1 }) => ({
  style: {
    clipPath: `polygon(0 ${top1}%,100% ${top1}%,100% ${btm1}%,0 ${btm1}%)`,
  },
}))`
  left: 2px;
  text-shadow: 2px -2px #2a96d4;
  position: relative;
`;
const After = styled.span.attrs(({ top2, btm2 }) => ({
  style: {
    clipPath: `polygon(0 ${top2}%,100% ${top2}%,100% ${btm2}%,0 ${btm2}%)`,
  },
}))`
  left: -2px;
  text-shadow: -2px 2px #cc2a1f;
  position: relative;
`;

const Arrowbox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  bottom: 5%;
  font-size: 15px;

  svg {
    margin-top: 45px;
    fill: #ff6363;
    width: 42px;
    height: 42px;
    animation: ${arrowBounce} 2s infinite;
  }
`;

export default Home;

// const bounce = keyframes`
//  100% {
//     top: -20px;
//     text-shadow: 0 1px 0 #ccc, 0 2px 0 #ccc, 0 3px 0 #ccc, 0 4px 0 #ccc,
//       0 5px 0 #ccc, 0 6px 0 #ccc, 0 7px 0 #ccc, 0 8px 0 #ccc, 0 9px 0 #ccc,
//       0 50px 25px rgba(0, 0, 0);
//   }
// `;
/* const Text = styled.span`
  position: relative;
  top: 20px;
  animation: ${bounce} 0.3s ease infinite alternate;
  font-size: 80px;
  color: #fff;
  animation-delay: ${(props) => 0.1 + props.index / 10}s;
`; */
