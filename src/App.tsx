import Header from "./components/Header/Header";
import imgCupCoffee from "../src/assets/img-cup-coffee.png";
import {
  IconesContainer,
  IconeStyle,
  IntroducaoContainer,
  Menu,
  TextContainer,
} from "./styles";
import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import CoffeeCard from "./components/MenuCoffee/CoffeeCard";

function App() {
  return (
    <div>
      <Header />
      <IntroducaoContainer>
        <TextContainer>
          <h1>Encontre o café prefeito para qualquer hora do dia</h1>
          <span>
            Com o Coffe Delivery você recebe seu café onde estiver, a qualquer
            hora
          </span>
          <IconesContainer>
            <div>
              <IconeStyle color="#C47F17">
                <ShoppingCart size={24} weight="fill" color="#ffffff" />
              </IconeStyle>
              <span>Compra simples e segura</span>
            </div>
            <div>
              <IconeStyle color="#574F4D">
                <Package size={24} weight="fill" color="#ffffff" />
              </IconeStyle>
              <span>Embalagem mantém o café intacato</span>
            </div>
            <div>
              <IconeStyle color="#DBAC2C">
                <Timer size={24} weight="fill" color="#ffffff" />
              </IconeStyle>
              <span>Entrega rápida e rastreada</span>
            </div>
            <div>
              <IconeStyle color="#8047F8">
                <Coffee size={24} weight="fill" color="#ffffff" />
              </IconeStyle>
              <span>O café chega fresquinho até você</span>
            </div>
          </IconesContainer>
        </TextContainer>

        <img src={imgCupCoffee} />
      </IntroducaoContainer>
      <Menu>
        <h1>Nossos cafés</h1>
        <CoffeeCard />
      </Menu>
    </div>
  );
}

export default App;
