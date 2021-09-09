import Administrador from "../models/Adiministrador";

export default class AdministradorService {
  private administradores: Administrador[];

  constructor(administradores: Administrador[]) {
    this.administradores = administradores;
  }

  public cadastrar(administrador: Administrador) {
    this.administradores.push(administrador);
  }

  public visualizar(cpf: string) {
    this.administradores.forEach((administrador) => {
      if (administrador.getCpf() === cpf) return administrador;
    });
  }

  public listar() {
    return this.administradores;
  }

  public remover(cpf: string) {
    this.administradores = this.administradores.filter((administrador) => {
      return administrador.getCpf() !== cpf;
    });
  }
}
