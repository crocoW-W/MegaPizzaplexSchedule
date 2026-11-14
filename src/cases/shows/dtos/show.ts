export type Show = {
    id: number;
    name: string;
    description: string;
    date: string;
    imageSource: string;
}

export const shows: Show[] = [
    {
        id: 1,
        name: "Show Clássico",
        description: "19:00 às 21:00 no palco principal",
        date: "14/11",
        imageSource: "/assets/img/TeaserImage.webp"
    },
    {
        id: 2,
        name: "Show de Fim de Semana",
        description: "20:00 às 23:00 no palco principal",
        date: "20/11",
        imageSource: "/assets/img/TeaserImage.webp"
    },
    {
        id: 3,
        name: "Show Infantil",
        description: "18:00 às 19:30 no palco exterior da creche",
        date: "28/11",
        imageSource: "/assets/img/TeaserImage.webp"
    },
    {
        id: 4,
        name: "Show da Roxy",
        description: "20:00 às 22:00 no palco principal",
        date: "19/12",
        imageSource: "/assets/img/TeaserImage.webp"
    },
    {
        id: 5,
        name: "Show de Natal",
        description: "18:00 às 24:00 no palco principal",
        date: "25/12",
        imageSource: "/assets/img/TeaserImage.webp"
    },
    {
        id: 6,
        name: "Show de Ano Novo",
        description: "20:00 às 02:00 no palco principal",
        date: "31/12",
        imageSource: "/assets/img/TeaserImage.webp"
    }
]