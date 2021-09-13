import { Curso } from "../entities/Curso";
import { ICursoRepository } from "../interfaces/cursoRepository";

export class CursoRepository implements ICursoRepository {
  private cursos: Curso[] = [];

  public save(curso: Curso) {
    this.cursos.push(curso);
  }

  public buscarPorCategoria(categoria: string): Curso | void {
    let cursoTemp;
    this.cursos.forEach((curso) => {
      if (curso.getCategoria() === categoria) cursoTemp = curso;
    });
    return cursoTemp;
  }

  public buscarPorTitulo(titulo: string): Curso | void {
    let cursoTemp;
    this.cursos.forEach((curso) => {
      if (curso.getTitulo() === titulo) cursoTemp = curso;
    });
    return cursoTemp;
  }

  public listar(): Curso[] {
    return this.cursos;
  }

  public removerPorTitulo(titulo: string) {
    this.cursos.forEach((curso, index) => {
      if (curso.getTitulo() === titulo) {
        this.cursos.splice(index, 1);
        return;
      }
    });
  }
}
