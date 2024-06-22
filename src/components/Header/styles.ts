import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 10rem 0rem 10rem;
`;

export const Location = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  background-color: #ebe5f9;
  color: #4b2995;
  border-radius: 6px;
  padding: 8px;
`;

export const ShoppingCartStyled = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px;
  background-color: #f1e9c9;
  border-radius: 6px;
`;
export const LocationAndShoopingCardContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
`;
