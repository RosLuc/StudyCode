import Curso from "../models/Curso";

export default class CursoService {
  private cursos: Curso[];

  constructor(cursos: Curso[]) {
    this.cursos = cursos;
  }

  public cadastrar(curso: Curso) {
    this.cursos.push(curso);
  }

  public buscarPorCategoria(categoria: string): Curso[] {
    return this.cursos.filter((curso) => {
      return curso.getCategoria() === categoria
    });
  }

  public listar(): Curso[] {
    return this.cursos;
  }

  public removerCurso(titulo: string) {
    this.cursos = this.cursos.filter((curso) => {
      return curso.getTitulo() !== titulo;
    })
  }
}
