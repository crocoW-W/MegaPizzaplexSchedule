export type Pass = {
    id: number;
    name: string;
    description: string;
    price: number;
    imageSource: string;
}

export const passes: Pass[] = [
    {
        id: 1,
        name: "Passe de Entrada",
        description: "Um passe para entrar no Mega Pizzaplex",
        price: 10,
        imageSource: "assets/img/EntryPass.webp"
    },
    {
        id: 2,
        name: "Passe de Dança",
        description: "Acesse uma secção exclusiva na frente do palco",
        price: 15,
        imageSource: "assets/img/DancePass.webp"
    },
    {
        id: 3,
        name: "Passe de Bastidores",
        description: "Conheça as estrelas pós-show",
        price: 40,
        imageSource: "assets/img/BackstagePass.webp"
    },
    {
        id: 4,
        name: "Passe de Foto",
        description: "Tire fotos com as estrelas no Rockstar Row",
        price: 20,
        imageSource: "assets/img/PhotoPass.webp"
    },
    {
        id: 5,
        name: "Passe de Festa",
        description: "Acesso para o Fazer Blast ou Monty's golf",
        price: 20,
        imageSource: "assets/img/PartyPass.webp"
    },
    {
        id: 6,
        name: "Ticket de Boliche",
        description: "Jogue uma rodada no Boliche do Bonnie",
        price: 30,
        imageSource: "assets/img/BowlingTicket.webp"
    },
    {
        id: 7,
        name: "Ticket do Mazercise",
        description: "Venha se divertir no Mazercise",
        price: 25,
        imageSource: "assets/img/MazerciseTicket.webp"
    },
    {
        id: 8,
        name: "Passe da Creche",
        description: "Acesse a creche por tempo limitado",
        price: 30,
        imageSource: "assets/img/DaycarePass.webp"
    }
]