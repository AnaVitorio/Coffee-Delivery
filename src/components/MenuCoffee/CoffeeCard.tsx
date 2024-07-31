import {
  Card,
  CarrinhoStyle,
  FooterCoffeCard,
  HeaderCoffeCard,
  IconeStyle,
  ItemQuantity,
  MainCoffeeCard,
} from "./styles";
import { Minus, Plus, ShoppingCart } from "phosphor-react";
import imgCafeTradicional from "../../assets/cafe-tradicional.png";

export default function CoffeeCard() {
  return (
    <Card>
      <HeaderCoffeCard>
        <img src={imgCafeTradicional} />
        <span>Tradicional</span>
      </HeaderCoffeCard>
      <MainCoffeeCard>
        <span>Expresso Tradicional</span>
        <p>O tradicional café feito com água quente e grãos moídos.</p>
      </MainCoffeeCard>
      <FooterCoffeCard>
        <div style={{ display: "flex", gap: 2, alignItems: "center" }}>
          <span style={{ fontSize: "small" }}>R$</span>
          <span style={{ fontSize: "larger", fontWeight: "800" }}>9,90</span>
        </div>
        <CarrinhoStyle>
          <ItemQuantity>
            <Minus size={16} />
            <span>1</span>
            <Plus size={16} />
          </ItemQuantity>
          <IconeStyle color="#8047F8">
            <ShoppingCart size={24} color="#ffffff" />
          </IconeStyle>
        </CarrinhoStyle>
      </FooterCoffeCard>
    </Card>
  );
}
