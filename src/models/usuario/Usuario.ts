import { uuid } from "uuidv4";

export class Usuario {
  private id: string;
  private email: string;
  private senha: string;
  private nome: string;

  constructor(email: string, senha: string, nome: string, id?: string) {
    this.id = id ? id : uuid();
    this.email = email;
    this.senha = senha;
    this.nome = nome;
  }

  public setNome(nome: string): void {
    this.nome = nome;
  }

  public getNome(): string {
    return this.nome;
  }

  public setEmail(email: string): void {
    this.email = email;
  }

  public getEmail(): string {
    return this.email;
  }

  public setSenha(senha: string): void {
    this.senha = senha;
  }

  public getSenha(): string {
    return this.senha;
  }
}
