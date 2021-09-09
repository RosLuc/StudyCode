import Curso from "./models/Curso";
import Comum from "./models/Comum";
import Adiministrador from "./models/Adiministrador";

export const cursosDb = [
  new Curso(
    "Seus primeiro jogo 2D",
    "Tech",
    "Udemy",
    "www.algumacoisa.com",
    1.2,
    3.5,
    "45 Horas",
    "Muito bom"
  ),
  new Curso(
    "Seus primeiro jogo 3D",
    "Tech",
    "Udemy",
    "www.algumacoisa.com",
    1.2,
    3.5,
    "60 Horas",
    "Muito bom"
  ),
];

export const usuarioComumDb = [
  new Comum(
    "rafael@gmail.com",
    "123456",
    "Rafael Lincon",
    "UX Design",
    "https://www.documentodoestudante.com.br/blog/wp-content/uploads/2020/03/onde-usar-sua-carteira-de-estudante.jpg",
    [
      new Curso(
        "Seus primeiro jogo 2D",
        "Tech",
        "Udemy",
        "www.algumacoisa.com",
        1.2,
        3.5,
        "60 Horas",
        "Muito bom"
      ),
    ]
  ),
];

export const administradorDb = [
  new Adiministrador(
    "adm02@gmail.com",
    "senhaBoa",
    "Administrador Top",
    "293.862.780-73"
  ),
  new Adiministrador(
    "adm03@gmail.com",
    "senhaBoa",
    "Administrador Top 2",
    "132.338.660-20"
  ),
  new Adiministrador(
    "adm01@gmail.com",
    "senhaBoa",
    "Administrador Top 3",
    "253.184.900-93"
  ),
];
