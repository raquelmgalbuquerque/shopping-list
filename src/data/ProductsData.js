const ProductsList = [
  {
    id: 0,
    title: "Arroz Carolino",
    category: "Arroz, Massa e Farinha",
    price: 1.99,
    rating: "⭐⭐⭐⭐⭐",
    imageURL:
      "https://www.continente.pt/dw/image/v2/BDVS_PRD/on/demandware.static/-/Sites-col-master-catalog/default/dw7aa5f296/images/col/220/2203031-frente.jpg?sw=2000&sh=2000",
  },
  {
    id: 1,
    title: "Ovos",
    category: "Laticínios e Ovos",
    price: 2.99,
    rating: "⭐⭐⭐⭐",
    imageURL:
      "https://www.continente.pt/dw/image/v2/BDVS_PRD/on/demandware.static/-/Sites-col-master-catalog/default/dwa3b18627/images/col/666/6664918-esquerdo.jpg?sw=2000&sh=2000",
  },
  {
    id: 2,
    title: "Leite meio-gordo",
    category: "Laticínios e Ovos",
    price: 1.04,
    rating: "⭐⭐⭐⭐",
    imageURL:
      "https://www.continente.pt/dw/image/v2/BDVS_PRD/on/demandware.static/-/Sites-col-master-catalog/default/dw419dfa6e/images/col/581/5816596-frente.jpg?sw=2000&sh=2000",
  },
  {
    id: 3,
    title: "Chocapic",
    category: "Cereais e barras",
    price: 4.69,
    rating: "⭐⭐",
    imageURL:
      "https://www.continente.pt/dw/image/v2/BDVS_PRD/on/demandware.static/-/Sites-col-master-catalog/default/dw1bf9f3b2/images/col/247/2478141-hero.jpg?sw=2000&sh=2000",
  },
  {
    id: 4,
    title: "Esparguete",
    category: "Arroz, Massa e Farinha",
    price: 0.96,
    rating: "⭐⭐⭐",
    imageURL:
      "https://www.continente.pt/dw/image/v2/BDVS_PRD/on/demandware.static/-/Sites-col-master-catalog/default/dwa36b605c/images/col/200/2003312-frente.jpg?sw=2000&sh=2000",
  },
  {
    id: 5,
    title: "Café solúvel",
    category: "Café, Chá e Chocolate Solúvel",
    price: 3.89,
    rating: "⭐⭐⭐⭐",
    imageURL:
      "https://www.continente.pt/dw/image/v2/BDVS_PRD/on/demandware.static/-/Sites-col-master-catalog/default/dwac075bb7/images/col/532/5323452-hero.jpg?sw=2000&sh=2000",
  },
  {
    id: 6,
    title: "Bifanas de porco",
    category: "Talho",
    price: 4.89,
    rating: "⭐⭐⭐⭐",
    imageURL:
      "https://www.continente.pt/dw/image/v2/BDVS_PRD/on/demandware.static/-/Sites-col-master-catalog/default/dw7ff87476/images/col/428/4285344-frente.jpg?sw=2000&sh=2000",
  },
  {
    id: 7,
    title: "Salmão",
    category: "Peixaria",
    price: 14.49,
    rating: "⭐⭐⭐⭐⭐",
    imageURL:
      "https://www.continente.pt/dw/image/v2/BDVS_PRD/on/demandware.static/-/Sites-col-master-catalog/default/dw561cd123/images/col/471/4716958-frente.jpg?sw=2000&sh=2000",
  },
  {
    id: 8,
    title: "Orégãos",
    category: "Molhos, Temperos e Sal",
    price: 1.09,
    rating: "⭐⭐⭐",
    imageURL:
      "https://www.continente.pt/dw/image/v2/BDVS_PRD/on/demandware.static/-/Sites-col-master-catalog/default/dweca32041/images/col/200/2003405-frente.jpg?sw=2000&sh=2000",
  },
  {
    id: 9,
    title: "Banana da Madeira",
    category: "Frutas e Legumes",
    price: 2.3,
    rating: "⭐⭐⭐⭐⭐",
    imageURL:
      "https://www.continente.pt/dw/image/v2/BDVS_PRD/on/demandware.static/-/Sites-col-master-catalog/default/dwd4c8df36/images/col/207/2076480-frente.jpg?sw=2000&sh=2000",
  },
  {
    id: 10,
    title: "Pêra Rocha",
    category: "Frutas e Legumes",
    price: 1.94,
    rating: "⭐⭐⭐⭐",
    imageURL:
      "https://www.continente.pt/dw/image/v2/BDVS_PRD/on/demandware.static/-/Sites-col-master-catalog/default/dw58ef9d28/images/col/703/7036485-frente.jpg?sw=2000&sh=2000",
  },
  {
    id: 11,
    title: "Detergente roupa",
    category: "Limpeza da Roupa e Calçado",
    price: 19.99,
    rating: "⭐⭐⭐⭐",
    imageURL:
      "https://www.continente.pt/dw/image/v2/BDVS_PRD/on/demandware.static/-/Sites-col-master-catalog/default/dw7c75d590/images/col/720/7207636-frente.jpg?sw=2000&sh=2000",
  },
  {
    id: 12,
    title: "Detergente loiça",
    category: "Limpeza da Cozinha",
    price: 1.99,
    rating: "⭐⭐⭐",
    imageURL:
      "https://www.continente.pt/dw/image/v2/BDVS_PRD/on/demandware.static/-/Sites-col-master-catalog/default/dw3d1d1517/images/col/551/5511735-frente.jpg?sw=2000&sh=2000",
  },
  {
    id: 13,
    title: "Gel de Banho",
    category: "Beleza e Higiene",
    price: 6.99,
    rating: "⭐⭐⭐⭐⭐",
    imageURL:
      "https://www.continente.pt/dw/image/v2/BDVS_PRD/on/demandware.static/-/Sites-col-master-catalog/default/dw224e14fd/images/col/385/3859284-frente.jpg?sw=2000&sh=2000",
  },
];

export default ProductsList;
