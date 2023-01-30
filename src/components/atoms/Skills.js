import styled from "styled-components";

const Skills = ({ icons }) => {
  return (
    <Container>
      {icons.map((icon) => (
        <Icon key={icon} icon={icon} />
      ))}
    </Container>
  );
};

export default Skills;

const Container = styled.div`
  display: flex;
  justify-content: center;
`;
const Icon = styled.div`
  background-image: ${({ icon }) => `url(${icon})`};
  background-size: 100% 100%;
  width: 40px;
  height: 40px;
`;
