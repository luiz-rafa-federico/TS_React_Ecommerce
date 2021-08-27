import styled from "styled-components";

export const ProductCard = styled.div`
  width: 300px;
  height: 430px;
  display: flex;
  text-align: center;
  justify-content: space-between;
  align-items: center;
  border: 15px solid #dcdefe;
  border-radius: 20px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19);

  figure {
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 160px;
      height: 200px;
      object-fit: contain;
    }
  }

  .productInfo {
    padding: 15px;
    width: 270px;
    height: 200px;
    background-color: #edeef6;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;
