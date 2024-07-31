import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 16rem;
  height: 19.375rem;
  background-color: #f3f2f2;
  border-top-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-top-right-radius: 36px;
  border-bottom-left-radius: 36px;
  padding: 1rem;
  gap: 8px;
`;

export const HeaderCoffeCard = styled.header`
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
  bottom: 75px;

  span {
    display: flex;
    color: #c47f17;
    background-color: #f1e9c9;
    border-radius: 100px;
    padding: 4px;
    margin-top: 4px;
    width: 5.5rem;
    height: 1.31rem;
    align-items: center;
    justify-content: center;
  }
`;

export const MainCoffeeCard = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 14rem;

  span{
    font-weight: bold;
    font-size: larger;
  }


`;

export const FooterCoffeCard = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  gap: 8px;
  width: 14rem;


  span{
    color: #574F4D;
  }
`;


export const IconeStyle = styled.div`
  background-color: ${(props) => props.color};
  padding: 6px;
  border-radius: 30%;
  align-items: center;
  display: flex;
`;


export const ItemQuantity = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background-color: #E6E5E5;
  width: 4.5rem;
  height: 2.4rem;
  border-radius: 10px;
`

export const CarrinhoStyle = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;

`