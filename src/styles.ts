import styled from "styled-components";

export const IntroducaoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 4rem 10rem 0 10rem;

  img{
    width: 26rem;
    height: 22.5rem;
    margin-right: 4rem;
  }

`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
`;

export const IconesContainer = styled.div`
  display: grid;
  padding-top: 4rem;
  grid-template-columns: auto auto;
  gap: 1rem;
  width: 35.43rem;

  div{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;
  }

  span{
    padding-right: 2.5rem;
  }

`

export const IconeStyle = styled.div`
  background-color: ${(props) => props.color};
  padding: 8px;
  border-radius: 100%;

`
