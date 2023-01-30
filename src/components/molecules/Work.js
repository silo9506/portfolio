import Skills from "components/atoms/Skills";
import styled from "styled-components";

const Work = ({ works }) => {
  return (
    <Container>
      <h1>{works.Description.title}</h1>
      <Img src={works.img} alt={Description.title}></Img>
      <Description>
        <div className="label">목표</div>
        <div>{works.Description.Objectives}</div>
      </Description>
      <Description>
        <div className="label">GitHub</div>
        <a href={works.git}>{works.git}</a>
      </Description>
      <Description>
        <div className="label">URL</div>
        <a href={works.url}>{works.url}</a>
      </Description>
      <Description>
        <div className="label">SKILL</div>
        <Skills icons={works.Description.skill} />
      </Description>
      {/* <div className=""></div>
      <div>{works.Description.Feature}</div>
      <Skills icons={works.Description.skill} /> */}
      {/* <Btns github={works.git} url={works.url}></Btns> */}
    </Container>
  );
};

export default Work;

const Container = styled.div`
  width: 100%;
  height: 100%;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 20px;
`;

const Img = styled.img`
  width: 100%;
  height: 400px;
  margin: 20px 0;
  border-radius: 15px;
`;

const Description = styled.div`
  width: 100%;
  margin: auto;
  font-size: 1rem;
  text-align: center;
  display: flex;
  & > * {
    width: 100%;
  }
  .label {
    font-weight: 900;
    width: 9rem;
  }
`;
