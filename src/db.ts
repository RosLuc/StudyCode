import { Curso } from "./entities/Curso";
import Comum from "./entities/Comum";
import Adiministrador from "./entities/Adiministrador";

// export const cursosDb = [
//   new Curso(
//     "Seus primeiro jogo 2D",
//     "Tech",
//     "Udemy",
//     "www.algumacoisa.com",
//     1.2,
//     3.5,
//     "45 Horas",
//     "Muito bom"
//   ),
//   new Curso(
//     "Seus primeiro jogo 3D",
//     "Tech",
//     "Udemy",
//     "www.algumacoisa.com",
//     1.2,
//     3.5,
//     "60 Horas",
//     "Muito bom"
//   ),
// ];

export const usuarioComumDb = [
  new Comum({
    email: "rafael@gmail.com",
    senha: "123456",
    nome: "Rafael Lincon",
    areaInteresse: "UX Design",
    fotoUrl:
      "https://www.documentodoestudante.com.br/blog/wp-content/uploads/2020/03/onde-usar-sua-carteira-de-estudante.jpg",
  }),
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
