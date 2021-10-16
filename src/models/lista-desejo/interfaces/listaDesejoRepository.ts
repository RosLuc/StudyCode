import ListaDesejo from "../ListaDesejo";

export interface IListaDesejoRepository {
  save(listaDesejo: ListaDesejo): void;
  listar(email: string): ListaDesejo[];
}