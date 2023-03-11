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
        <div className="label">주요기능</div>
        <div>{works.Description.Feature}</div>
      </Description>

      <Description>
        <div className="label">URL</div>
        <div className="urls">
          <div>
            <span style={{ fontWeight: 900, color: "lightblue" }}>깃허브</span>{" "}
            <a target="_blank" href={works.git}>
              {works.git}
            </a>
          </div>
          <div>
            <span style={{ fontWeight: 900, color: "lightblue" }}>페이지</span>{" "}
            <a target="_blank" href={works.url}>
              {works.url}
            </a>
          </div>
        </div>
      </Description>
      <Description>
        <div className="label">SKILL</div>
        <Skills icons={works.Description.skill} />
      </Description>
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
  max-height: 250px;
  margin: 20px 0;
  border-radius: 15px;
  @media screen and (max-width: 600px) {
    height: 250px;
  }
`;

const Description = styled.div`
  width: 100%;
  margin: auto;
  font-size: 1rem;
  align-items: center;
  text-align: center;
  display: flex;
  word-break: keep-all;
  & > * {
    width: 100%;
  }
  .label {
    font-weight: 900;
    width: 9rem;
  }

  .urls {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 0.8rem;
    div {
      padding: 5px 0px;
    }
  }
  @media screen and (max-width: 600px) {
    font-size: 0.5rem;
  }
`;
