import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: rgb(44, 25, 141);
  display: flex;
  align-items: center;
`;

const Title = styled.h3`
  color: #fff;
  font-size: 42px;
`;

const Container = styled.div`
  margin: auto;
  background-color: red;
`;

const Cases = styled.div`
    /* width: 470px;
    height: 237px; */
`

const Case = styled.div`
    width: 470px;
    height: 237px;
`

const data = [
  {},
]

const Testimonial = () => {
  return (
    <Wrapper>
      <Container>
        <Title>Our Happy Clients</Title>
        <Cases>
            <Case></Case>
        </Cases>
      </Container>
    </Wrapper>
  );
};

export default Testimonial;
