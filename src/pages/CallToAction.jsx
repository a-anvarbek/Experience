import styled from "styled-components";

import BG from "../images/CallToAction.jpg";
import Image5 from "../images/img5.png";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: rgb(184, 172, 247);
  background-image: url("${BG}");
  background-size: cover;
  background-position: center;
  background-blend-mode: multiply;
  display: flex;
  align-items: center;
  color: #fff;
`;

const Container = styled.div`
  margin: auto;
  width: 500px;
  text-align: center;
`;

const Title = styled.p`
  font-size: 58px;
  margin: 35px 0;
`;

const P = styled.p`
  font-size: 22px;
  margin: 35px 0;
`;

const Div = styled.div`
  margin: 35px 0;
  width: 100%;
  height: 75px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const RedImg = styled.img`
  width: 70px;
  height: 70px;
  margin: 0 35px;
`;

const GreenBtn = styled.button`
  width: 213px;
  height: 70px;
  border-radius: 100px;
  border: none;
  background-color: #25dac5;
  color: #fff;
  font-size: 20px;
`;

const CallToAction = () => {
  return (
    <Wrapper>
      <Container>
        <Title>Easy to setup. Easy to maintain</Title>
        <P>
          Bootstrap is a widely-used, sleek, intuitive and powerful front-end
          framework for faster and easier web development.
        </P>
        <Div>
          <RedImg src={Image5} />
          <GreenBtn>Get Started</GreenBtn>
        </Div>
      </Container>
    </Wrapper>
  );
};

export default CallToAction;
