import { Curso } from "./Curso";
import { ICurso } from "./interfaces/curso";
import { ICursoRepository } from "./interfaces/cursoRepository";

export class CursoService {
  constructor(private cursoRepository: ICursoRepository) {}

  public cadastrar(curso: ICurso) {
    const cursoJaExiste = this.cursoRepository.buscarPorTitulo(curso.titulo);
    if (cursoJaExiste) throw new Error("Curso já existe");
    const novoCurso = new Curso(curso);
    this.cursoRepository.save(novoCurso);
  }

  public buscarPorCategoria(categoria: string) {
    return this.cursoRepository.buscarPorCategoria(categoria);
  }

  public listar(): Curso[] {
    return this.cursoRepository.listar();
  }

  public removerCurso(titulo: string) {
    const cursoJaExiste = this.cursoRepository.buscarPorTitulo(titulo);
    if (!cursoJaExiste) throw new Error("Curso não encontrado");
    this.cursoRepository.removerPorTitulo(titulo);
  }
}
