import { Curso } from "../Curso";

export interface ICursoRepository {
  save(usuario: Curso): void;
  buscarPorCategoria(categoria: string): Curso | void;
  buscarPorTitulo(titulo: string): Curso | void;
  removerPorTitulo(titulo: string): void;
  listar(): Curso[];
}