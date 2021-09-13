import { ComumService } from "./services/comum.service";
import { ComumRepository } from "./repositories/comum.repository";
import { AdministradorRepository } from "./repositories/administrador.repository";
import { AdministradorService } from "./services/administrador.service";
import { CursoRepository } from "./repositories/curso.repository";
import { CursoService } from "./services/curso.service";
import { ListaDesejoRepository } from "./repositories/listaDesejo.repository";
import ListaDesejoService from "./services/lista-desejos.service";

const comumRepository = new ComumRepository();
const comumService = new ComumService(comumRepository);

const administradorRepository = new AdministradorRepository();
const administradorService = new AdministradorService(administradorRepository);

const cursoRepository = new CursoRepository();
const cursoService = new CursoService(cursoRepository);

const listaDesejoRepository = new ListaDesejoRepository();
const listaDesejoService = new ListaDesejoService(listaDesejoRepository);

//--------->Cadastro do usuário Comum<----------

console.log("Cadastrando Novo usuário comum");
console.log("------------------------");
console.log(`Estado inicial:`);
console.log(comumService.listar());
const novoUsuario = {
  email: "joao@gmail.com",
  senha: "senhaTop",
  nome: "João",
  areaInteresse: "Design",
  fotoUrl: "",
};
comumService.cadastrar(novoUsuario);
console.log(`\nEstado final:`);
console.log(comumService.listar());

// //--------->Remover usuário Comum<----------

console.log("Removendo Novo usuário comum");
console.log("------------------------");
console.log(`Estado inicial:`);
console.log(comumService.listar());
comumService.remover("joao@gmail.com");
console.log(`\nEstado final:`);
console.log(comumService.listar());

//--------->Cadastro do usuário Administrador<----------

console.log("Cadastrando Novo administrador");
console.log("------------------------");
console.log(`Estado inicial:`);
console.log(administradorService.listar());
const novoAdm = {
  email: "rosendo@gmail.com",
  senha: "senhaTop",
  nome: "João",
  cpf: "123456789"
};
administradorService.cadastrar(novoAdm);
console.log(`\nEstado final:`);
console.log(administradorService.listar());

// //--------->Remover usuário Administrador<----------

console.log("Removendo administrador");
console.log("------------------------");
console.log(`Estado inicial:`);
console.log(administradorService.listar());
administradorService.remover("rosendo@gmail.com");
console.log(`\nEstado final:`);
console.log(administradorService.listar());

//--------->Cadastro de um curso<----------

console.log("Cadastrando Curso");
console.log("------------------------");
console.log(`Estado inicial:`);
console.log(cursoService.listar());
const novoCurso = {
  titulo: "Faça seu primeiro jogo 2D",
  categoria: "tech",
  plataformaOrigem: "Udemy",
  linkDeReferencia: "www.udemy.com/curso-jogo-2d",
  preco: 150,
  avaliacao: 4.5,
  cargaHoraria: "40H",
  descricao: "Aprenda a fazer um jogo 2D",
};
cursoService.cadastrar(novoCurso);
console.log(`\nEstado final:`);
console.log(cursoService.listar());

// //--------->Remover curso<----------

console.log("Removendo Curso");
console.log("------------------------");
console.log(`Estado inicial:`);
console.log(cursoService.listar());
cursoService.removerCurso("Faça seu primeiro jogo 2D");
console.log(`\nEstado final:`);
console.log(cursoService.listar());

//--------->Cadastro de um curso na lsita de desejos<----------

console.log("Cadastrando Curso na lista");
console.log("------------------------");
console.log(`Estado inicial:`);
console.log(listaDesejoService.listar("Alguem@gmail.com"));
const novaLista = {
  comumEmail: "Alguem@gmail.com",
  cursoTitulo: "Fazer jogos em 4D"
};
const novaLista2 = {
  comumEmail: "Alguem@gmail.com",
  cursoTitulo: "Fazer jogos em 2D"
};
listaDesejoService.cadastrar(novaLista);
listaDesejoService.cadastrar(novaLista2);
console.log(`\nEstado final:`);
console.log(listaDesejoService.listar("Alguem@gmail.com"));