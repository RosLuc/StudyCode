import { IListaDesejo } from "./interfaces/listaDesejo";
import ListaDesejo from "./ListaDesejo";
import { ListaDesejoRepository } from "./listaDesejo.repository";

export default class ListaDesejoService {
  constructor(private listaDesejoRepository: ListaDesejoRepository) {}

  public cadastrar(lista: IListaDesejo) {
    const novaLista = new ListaDesejo(lista)
    this.listaDesejoRepository.save(novaLista);
  }

  public listar(email: string) {
    return this.listaDesejoRepository.listar(email);
  }
}
