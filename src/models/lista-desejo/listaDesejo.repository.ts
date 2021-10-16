
import Administrador from "../entities/Adiministrador";
import ListaDesejo from "../entities/ListaDesejo";
import { IListaDesejoRepository } from "../interfaces/listaDesejoRepository";

export class ListaDesejoRepository implements IListaDesejoRepository {
  private listasDesejos: ListaDesejo[] = [];

  public save(listaDesejo: ListaDesejo) {
    this.listasDesejos.push(listaDesejo);
  }

  public listar(email: string) {
    return this.listasDesejos.filter((listaDesejo) => {
      return listaDesejo.getComumEmail() === email;
    })
  }
}
