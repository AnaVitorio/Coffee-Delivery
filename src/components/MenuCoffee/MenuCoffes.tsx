import { CoffeeCard, MenuCard } from "./styles";
import { ShoppingCart } from "phosphor-react";
import imgCafeTradicional from "../../assets/cafe-tradicional.png";

export default function MenuCoffee(){

    return(
        <MenuCard>
            <CoffeeCard>
                <img src={imgCafeTradicional}/>
                <span>Tradicional</span>
                <span>Expresso Tradicional</span>
                <p>O tradicional café feito com água queste e grãos moídos.</p>
                <div>
                    <span>R$ 9,90</span>
                    <ShoppingCart/>
                </div>
            </CoffeeCard>
        </MenuCard>
    )
}