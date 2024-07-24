interface MenuType{
    label: {id: number, nome: string}[],
    typeCoffe: string,
    descricao: string,
    preco: string
}

export const menu: MenuType[] = [{
    label: [{"id": 1, "nome": "Tradicional"}],
    typeCoffe: "Expresso Tradicional",
    descricao: "O Tradicional café feito com água queste e grãos moídos.",
    preco: "9,90"
},
{
    label: [{"id": 1, "nome": "Tradicional"}],
    typeCoffe: "Expresso Americano",
    descricao: "O Tradicional café feito com água queste e grãos moídos.",
    preco: "9,90"
},
{
    label: [{"id": 1, "nome": "Tradicional"}],
    typeCoffe: "Expresso Cremoso",
    descricao: "O Tradicional café feito com água queste e grãos moídos.",
    preco: "9,90"
},
{
    label: [{"id": 1, "nome": "Tradicional"}, {"id": 2, "nome": "Gelado"}],
    typeCoffe: "Expresso Gelado",
    descricao: "O Tradicional café feito com água queste e grãos moídos.",
    preco: "9,90"
}
]