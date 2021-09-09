import Comum from "../models/Comum";
import Curso from "../models/Curso";

export default class ListaDesejoService {

  public cadastrarCurso(usuario: Comum, curso: Curso): void {
    const listaDesejo = usuario.getListaDesejo();
    listaDesejo.forEach((item) => {
      if(item.getTitulo() === curso.getTitulo()) return;
    })
    listaDesejo.push(curso);
    usuario.setListaDesejo(listaDesejo);
  }

  public removerCurso(usuario: Comum, titulo: string): void {
    const listaDesejo = usuario.getListaDesejo();
    const novaListaDesejo = listaDesejo.filter((item) => {
      return item.getTitulo() !== titulo;
    })
    usuario.setListaDesejo(novaListaDesejo);
  }
}
