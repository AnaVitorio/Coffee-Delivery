import { MapPin, ShoppingCart } from "phosphor-react";
import logoCoffeeShop from "../../assets/logo-coffee-delivery.png";
import { HeaderContainer, Location, LocationAndShoopingCardContainer, ShoppingCartStyled } from "./styles";

export default function Header() {
  return (
    <HeaderContainer>
      <img src={logoCoffeeShop} />
      <LocationAndShoopingCardContainer>
        <Location>
          <MapPin size={24} weight="fill" color="#8047F8" />
          Porto Alegre, RS
        </Location>
        <ShoppingCartStyled>
          <ShoppingCart size={24} weight="fill" color="#C47F17" />
        </ShoppingCartStyled>
      </LocationAndShoopingCardContainer>
    </HeaderContainer>
  );
}
