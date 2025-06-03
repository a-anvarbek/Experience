import styled from "styled-components";

import Image1 from "../images/img1.jpg";
import Image2 from "../images/img2.jpg";
import Image3 from "../images/img3.jpg";
import Image4 from "../images/img4.jpg";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: rgb(44, 25, 141);
  display: flex;
  align-items: center;
`;

const Title = styled.h3`
  font-size: 42px;
  color: #fff;
  font-weight: normal;
  margin-bottom: 35px;
`;

const Container = styled.div`
  margin: auto;
`;

const Cases = styled.div`
  width: 970px;
  height: 504px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 30px;
`;

const Case = styled.div`
  padding: 35px;
  display: flex;
  justify-content: center;
  border: 2px solid #3f509b;
  border-radius: 15px;
`;

const Img = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 10px;
  margin-right: 35px;
`;

const H1 = styled.h1`
  font-size: 18px;
  color: #fff;
  font-weight: normal;
  margin-bottom: 35px;
`;

const P = styled.p`
  color: #3f509b;
  margin-top: auto;
`;

const Div1 = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

const Div2 = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const data = [
  {
    image: Image1,
    text: "Get a fully retina ready site when you build with Startup Framework. Websites look sharper and more gorgeous on devices with retina display support",
    foot: "Rayhan Curran",
  },
  {
    image: Image2,
    text: "As a business targeting high net worth individuals, we were looking for a slick, cool and mini-malistic design for our website",
    foot: "Kayley Frame",
  },
  {
    image: Image3,
    text: "The most important part of the Startup Framework is the samples",
    foot: "Gene Whitfield",
  },
  {
    image: Image4,
    text: "I’ve built my website with Startup just in one day, and it was ready-to-go. ",
    foot: "Allan Kim",
  },
];

const Testimonial = () => {
  return (
    <Wrapper>
      <Container>
        <Title>Our Happy Clients</Title>
        <Cases>
          {data.map((item, index) => (
            <Case key={index}>
              <Div1>
                <Img src={item.image} alt="" />
              </Div1>
              <Div2>
                <H1>{item.text}</H1>
                <P>{item.foot}</P>
              </Div2>
            </Case>
          ))}
        </Cases>
      </Container>
    </Wrapper>
  );
};

export default Testimonial;
