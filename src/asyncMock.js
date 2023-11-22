const products = [
  {
    id: "1",
    name: "Zapatillas 47 Strett Trucks",
    img: "../public/img/productos/zapatillas-trucks.jpg",
    price: 69999,
    category: "calzados",
    description:
      "Zapatilla de PU con interior al tono, lengueta grande, cordones anchos. Base con camara de aire.",
    stock: 10,
  },
  {
    id: "2",
    name: "Zapatillas 47 Strett Glint",
    img: "../public/img/productos/zapatillas-glint.jpg",
    price: 59999,
    category: "calzados",
    description:
      "Zapatilla con recortes de PU, red y goma. Con base de un solo color. Con cordones.",
    stock: 10,
  },
  {
    id: "3",
    name: "Zapatillas Bando Urbanas",
    img: "../public/img/productos/zapas-bando.webp",
    price: 32999,
    category: "calzados",
    description:
      "Zapatilla urbana de gamuza color beige interior al tono y cordones blancos",
    stock: 10,
  },
  {
    id: "4",
    name: "Zapatillas Bando Jogger",
    img: "../public/img/productos/zapas-jogger.webp",
    price: 35799,
    category: "calzados",
    description:
      "zapatilla jogger en negro con suela blanca, cuero con cordones e interior negro",
    stock: 10,
  },
  {
    id: "5",
    name: "Zapatos Bando Style",
    img: "../public/img/productos/zapatos-bando.webp",
    price: 41999,
    category: "calzados",
    description:
      "Zapatos style negro de cuero con suela marron caramelo, para todo uso formal ",
    stock: 10,
  },
  {
    id: "6",
    name: "Remeron 47 Strett Mystery",
    img: "../public/img/productos/remeron-mystery.webp",
    price: 22999,
    category: "remeras",
    description:
      "Remeron vestido de jersey 30/1. Manga corta. Cuello redondo aplicado.",
    stock: 10,
  },
  {
    id: "7",
    name: "Remera 47 Strett Kitty Bow H",
    img: "../public/img/productos/remra-kitty-bow-h.webp",
    price: 15699,
    category: "remeras",
    description:
      "Remera basica manga corta de morley viscosa con cuello aplicado.",
    stock: 10,
  },
  {
    id: "8",
    name: "Remera Bross By Society",
    img: "../public/img/productos/remera-overize.webp",
    price: 15699,
    category: "remeras",
    description:
      "Remera overozice larga manga corta, color negro con estampa bross by society ",
    stock: 10,
  },
  {
    id: "9",
    name: "Remera Bross Los Angeles",
    img: "../public/img/productos/remera-los-angeles.webp",
    price: 11699,
    category: "remeras",
    description:
      "Remera larga manga corta y cuello con altura, color negro con estampa bross los angeles ",
    stock: 10,
  },
  {
    id: "10",
    name: "Remera Bando Lokonga",
    img: "../public/img/productos/remera-bando-lokonga.webp",
    price: 12799,
    category: "remeras",
    description: "Remera lokonga larga manga corta color negro con estampa",
    stock: 10,
  },
  {
    id: "11",
    name: "Jean 47 Strett Straight Right",
    img: "../public/img/productos/jean-straight-right.webp",
    price: 41999,
    category: "pantalones",
    description: "Una Pantalón",
    stock: 10,
  },
  {
    id: "12",
    name: "Jean 47 Strett Aomori",
    img: "../public/img/productos/Jean-Aomori.webp",
    price: 54999,
    category: "pantalones",
    description: "Jean tiro medio babucha, con recortes y bolsillos laterales.",
    stock: 10,
  },
  {
    id: "13",
    name: "Jean Bross Super Skinny",
    img: "../public/img/productos/jean-super-skynny.webp",
    price: 28999,
    category: "pantalones",
    description: "Jean negro super skinny con rotura y marcas laser",
    stock: 10,
  },
  {
    id: "14",
    name: "Jean Bross Localizado Skinny",
    img: "../public/img/productos/jean-bross-gris.webp",
    price: 24299,
    category: "pantalones",
    description: "Jean localizado gris skinny con marcas laser",
    stock: 10,
  },
  {
    id: "15",
    name: "Jean Bando Bruyne",
    img: "../public/img/productos/jean-bando-bruyne.webp",
    price: 34399,
    category: "pantalones",
    description: "Jean bruyne spandex azul con marcas laser",
    stock: 10,
  },
  {
    id: "16",
    name: "Pañuelo 47 Strett Witched",
    img: "../public/img/productos/pañuelo-witched.webp",
    price: 15699,
    category: "accesorios",
    description: "Pañuelo multiuso con estampa witched. Medidas 70 cm X 70 cm.",
    stock: 10,
  },
  {
    id: "17",
    name: "Gorra 47 Strett Loss",
    img: "../public/img/productos/cap-loss.webp",
    price: 20999,
    category: "accesorios",
    description:
      "Cap color rosa con bordado frontal y en visera. Con regulador metálico posterior y chapita marcaria lateral.",
    stock: 10,
  },
  {
    id: "18",
    name: "Gorra FTE Bross London",
    img: "../public/img/productos/gorra-bross-gastada.webp",
    price: 8799,
    category: "accesorios",
    description: "Gorra color crudo gastada con aplique london frontal",
    stock: 10,
  },
  {
    id: "19",
    name: "Mochila Bross London",
    img: "../public/img/productos/mochila-bross.webp",
    price: 25299,
    category: "accesorios",
    description:
      "Mochila lisa con cierres y costuras reforzadas, color azul francia",
    stock: 10,
  },
  {
    id: "20",
    name: "Mochila Bando Cordura",
    img: "../public/img/productos/mochila-bando-cordura.webp",
    price: 26899,
    category: "accesorios",
    description:
      "Mochila Cordura amarrillo conmbinado en negro con cierres y costuras reforzadas",
    stock: 10,
  },
];

export const getProducts = () => {
  return new Promise((resolve, reject) => {
    if (products.length > 0) {
      setTimeout(() => {
        resolve(products);
      }, 2000);
    } else {
      reject("No hay productos");
    }
  });
};

export const getProductById = (id) => {
  return new Promise((resolve, reject) => {
    if (products.length > 0) {
      const product = products.find((p) => p.id === id);

      setTimeout(() => {
        if (!product) {
          reject(`No se encuentra el productos con el id ${id}`);
        }
        resolve(product);
      }, 2000);
    } else {
      reject("No hay productos");
    }
  });
};
