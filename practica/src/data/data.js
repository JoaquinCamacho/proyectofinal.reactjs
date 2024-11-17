const productos = [
  {
    id: 1,
    nombre: "Balbo",
    precio: 15,
    categoria: "Tinto",
    img: "/img/balbotinto.webp",
    stock: 4,
    descripcion:
      "Vino tinto accesible y popular, conocido por su sabor suave y equilibrio, ideal para maridar con carnes y platos tradicionales.",
  },
  {
    id: 2,
    nombre: "Santa Filomena",
    precio: 30,
    categoria: "Tinto",
    stock: 10,
    img: "/img/santafilomena.jpg",
    descripcion:
      "Otro vino tinto que destaca por su calidad superior y notas complejas. Perfecto para acompañar cenas especiales y comidas con sabores intensos.",
  },
  {
    id: 3,
    nombre: "Marló",
    precio: 50,
    categoria: "Blanco",
    stock: 6,
    img: "/img/marloblanco.jfif",
    descripcion:
      "Vino blanco con un perfil fresco y afrutado, ideal para quienes disfrutan de una bebida ligera y refrescante. A menudo marida bien con pescados y ensaladas.",
  },
  {
    id: 4,
    nombre: "Cosecha Tardía",
    precio: 10,
    categoria: "Blanco",
    stock:8,
    img: "/img/cosecha.jfif",
    descripcion:
      "Vino blanco dulce, hecho con uvas cosechadas tardíamente para obtener un sabor más concentrado y azucarado. Es una excelente opción para postres.",
  },
  {
    id: 5,
    nombre: "New Age",
    precio: 80,
    categoria: "Espumoso",
    stock: 10,
    img: "/img/espumoso.jfif",
    descripcion:
      "Vino espumoso con un toque moderno y vibrante, conocido por su versatilidad y frescura. Perfecto para celebraciones o para beber con hielo en días cálidos.",
  },
  {
    id: 6,
    nombre: "Chandon",
    precio: 15,
    categoria: "Espumoso",
    stock:5,
    img: "/img/chandon.jfif",
    descripcion:
      "Vino espumoso de una marca reconocida por su calidad, proveniente de la casa Moët & Chandon. Ideal para brindar y acompañar ocasiones especiales.",
  },
];

const getProducts = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(productos);
    }, 1000);
  });
};

export { getProducts };
