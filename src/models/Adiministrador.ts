import Usuario from "./Usuario";

export default class Administrador extends Usuario {
  private cpf: string;

  constructor(email: string, senha: string, nome: string, cpf: string) {
    super(email, senha, nome);
    this.cpf = cpf;
  }

  public setCpf(cpf: string): void {
    this.cpf = cpf;
  }

  public getCpf(): string {
    return this.cpf;
  }
}
