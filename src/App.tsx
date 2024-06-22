import Header from "./components/Header/Header";
import imgCupCoffee from "../src/assets/img-cup-coffee.png";
import { IntroducaoContainer, TextContainer } from "./styles";

function App() {
  return (
    <div>
      <Header />
      <IntroducaoContainer>
        <TextContainer>
          <h1>Encontre o café prefeito para qualquer hora do dia</h1>
          <span>
            Com o Coffe Delivery você recebe seu café onde estiver, a qualquer hora
          </span>
        </TextContainer>

        <img src={imgCupCoffee} />
      </IntroducaoContainer>
    </div>
  );
}

export default App;
