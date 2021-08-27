import styled from "styled-components";

export const CartContainer = styled.div`
  max-width: 1100px;
  width: 100vw;
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
  margin: auto;
  margin-top: 5px;
  background-color: #fff;
  padding: 20px;

  @media only screen and (min-width: 320px) and (max-width: 768px) {
    flex-direction: column;
    width: 100%;
  }
`;

export const CardsDisplay = styled.div`
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 50%;

  @media only screen and (min-width: 320px) and (max-width: 768px) {
    justify-content: flex-end;
    width: 100%;
  }
`;

export const CheckoutCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  border: 15px solid #dcdefe;
  margin-top: 20px;
  border-radius: 15px;
  width: 300px;

  @media only screen and (min-width: 320px) and (max-width: 768px) {
    font-size: 12px;
    width: 100%;
  }
`;

export const Container404 = styled(CheckoutCard)`
  border: none;
  border-radius: unset;
  margin: auto;
  width: 100vw;
  height: 100vh;
  max-width: 1100px;
  margin-top: 5px;
  background-color: #fff;
  h1 {
    margin-bottom: -20px;
    margin-top: -20px;
    text-align: center;
  }
  button {
    width: 25%;
  }

  @media only screen and (min-width: 320px) and (max-width: 768px) {
    img {
      width: 70%;
    }

    button {
      width: 85%;
    }
  }
`;
