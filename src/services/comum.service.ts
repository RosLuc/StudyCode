import Comum from "../models/Comum";

export default class ControllerComum {
  private comums: Comum[];

  constructor(comums: Comum[]) {
    this.comums = comums;
  }

  public cadastrar(comum: Comum) {
    this.comums.push(comum);
  }

  public visualizar(email: string): Comum {
    let comumTemp = null
    this.comums.forEach((comum) => {
      if (comum.getEmail() === email) comumTemp = comum;
    });
    return comumTemp;
  }

  public listar() {
    return this.comums;
  }

  public remover(email: string) {
    this.comums = this.comums.filter((administrador) => {
      return administrador.getEmail() !== email;
    });
  }
}
