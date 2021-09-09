import { cursosDb, administradorDb, usuarioComumDb } from './db';
import Administrador from './models/Adiministrador';
import Comum from './models/Comum';
import AdministradorService from './services/administrador.service';
import ControllerComum from './services/comum.service';
import CursoService from './services/curso.service';
import ListaDesejoService from './services/lista-desejos.service';

const comumService = new ControllerComum(usuarioComumDb);

//--------->Cadastro do usuário Comum<----------

console.log("Cadastrando Novo usuário comum");
console.log("------------------------");
console.log(`Estado inicial:`);
console.log(comumService.listar())
const novoComum = new Comum("joao@gmail.com", "senhaTop", "João", "Design", "", []);
comumService.cadastrar(novoComum);
console.log(`\nEstado final:`);
console.log(comumService.listar());

//--------->Remover usuário Comum<----------

console.log("Removendo usuário comum");
console.log("------------------------");
console.log(`Estado inicial:`);
console.log(comumService.listar())
comumService.remover("joao@gmail.com");
console.log(`\nEstado final:`);
console.log(comumService.listar());

console.log("\n------------------------");
console.log("------------------------\n");

const administradorService = new AdministradorService(administradorDb);

//--------->Cadastro do usuário ADM<----------

console.log("Cadastrando Novo usuário administrador");
console.log("------------------------");
console.log(`Estado inicial:`);
console.log(administradorService.listar())
const novoAdm = new Administrador("fatima@gmail.com", "senhaMassa", "Fatima", "000.111.222-33");
administradorService.cadastrar(novoAdm);
console.log(`\nEstado final:`);
console.log(administradorService.listar());

//--------->Remover usuário ADM<----------

console.log("Removendo usuário administrador");
console.log("------------------------");
console.log(`Estado inicial:`);
console.log(administradorService.listar())
administradorService.remover("000.111.222-33");
console.log(`\nEstado final:`);
console.log(administradorService.listar());

console.log("\n------------------------");
console.log("------------------------\n");

//--------->Cadastrar Curso<----------

const cursosService = new CursoService(cursosDb);

console.log("Listar Cursos");
console.log(cursosService.listar());

//--------->Adicionar Curso a lista de Desejo<----------


const outroComum = comumService.visualizar("rafael@gmail.com");
console.log("Adicionando Curso a lista de desejo");
console.log("------------------------");
console.log(`Estado inicial:`);
console.log(outroComum.getListaDesejo());
console.log(`\nEstado final:`);
const algumCurso = cursosService.listar()[1];
const listaDesejo = new ListaDesejoService();
listaDesejo.cadastrarCurso(outroComum, algumCurso);
console.log(outroComum.getListaDesejo());

console.log("\n------------------------");
console.log("------------------------\n");


//--------->Removendo Curso a lista de Desejo<---------
console.log("Removendo curso da lista de desejo");
console.log("------------------------");
console.log(`Estado inicial:`);
console.log(outroComum.getListaDesejo());
console.log(`\nEstado final:`);
listaDesejo.removerCurso(outroComum, "Seus primeiro jogo 3D");
console.log(outroComum.getListaDesejo());