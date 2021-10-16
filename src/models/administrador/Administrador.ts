import { IAdministrador } from "../interfaces/administrador";
import { Usuario } from "./Usuario";

export default class Administrador extends Usuario {
  private cpf: string;

  constructor(props: IAdministrador) {
    super(props.email, props.senha, props.nome, props.id ? props.id : null);
    this.cpf = props.cpf;
  }

  public setCpf(cpf: string): void {
    this.cpf = cpf;
  }

  public getCpf(): string {
    return this.cpf;
  }
}
