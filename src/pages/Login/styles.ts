import styled from "styled-components";

export const ContainerLogin = styled.div`
  max-width: 1100px;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: auto;
  background-color: #fff;
  margin-top: 5px;

  h1 {
    margin: 20px;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  input {
    border-radius: 4px;
  }

  span .cadastro {
    color: #5956e9;

    &:hover {
      text-decoration: underline;
    }
  }
`;
