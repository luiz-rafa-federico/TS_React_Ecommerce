import styled from "styled-components";

export const Container = styled.button`
  background-color: #5956e9;
  color: #fff;
  height: 45px;
  border-radius: 8px;
  border: 2px solid var(--black);
  margin-top: 16px;
  width: 100%;
  transition: 0.5s;

  :hover {
    filter: brightness(1.1);
  }
`;
