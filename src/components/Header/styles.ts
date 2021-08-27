import styled from "styled-components";

export const Container = styled.div`
  max-width: 1100px;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: auto;
  background-color: #fff;
  border-bottom: 3px solid #dcdefe;
  padding: 20px 0px;

  h2 a {
    margin-top: 5px;
    color: #5956e9;

    &:hover {
      text-decoration: underline;
    }
  }

  button {
    width: 100px;
    margin: auto 0px;
  }

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;

    span a {
      font-weight: bold;
      color: #5956e9;
      margin: 0px 5px;

      &:hover {
        text-decoration: underline;
      }
    }

    .MuiButtonBase-root {
      width: 0px;
      height: 0px;
    }
  }

  @media only screen and (min-width: 320px) and (max-width: 768px) {
    flex-direction: column;
  }
`;
