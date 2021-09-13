import { Curso } from "../entities/Curso";

export interface ICursoRepository {
  save(usuario: Curso): void;
  buscarPorCategoria(categoria: string): Curso | void;
  buscarPorTitulo(titulo: string): Curso | void;
  removerPorTitulo(titulo: string): void;
  listar(): Curso[];
}