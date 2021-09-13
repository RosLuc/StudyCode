import ListaDesejo from "../entities/ListaDesejo";


export interface IListaDesejoRepository {
  save(listaDesejo: ListaDesejo): void;
  listar(email: string): ListaDesejo[];
}