import styled from "styled-components";

export const ProductCard = styled.table`
  width: 500px;
  padding: 1px;

  td {
    border: 5px solid #dcdefe;
    border-radius: 20px;
    width: 100px;
    text-align: center;
    padding: 10px;
  }

  img {
    width: 60px;
    height: 110px;
    object-fit: contain;
  }

  @media only screen and (min-width: 320px) and (max-width: 768px) {
    font-size: 12px;
    padding: unset;
    width: 100vw;
    text-align: left;

    td,
    th {
      border: 1px solid #dcdefe;
      width: 200px;
      text-align: left;
    }

    img,
    th {
      display: none;
    }

    .tdPic {
      display: none;
    }

    .tdBtn {
      border: none;
    }

    button {
      padding: 5px;
    }
  }
`;
