import Comum from "../entities/Comum";

export interface IComumRepository{
  save(usuario: Comum): void;
  findByEmail(email: string): Comum | void;
  removeByEmail(email: string): void;
  listarUsuariosComum(): Comum[];
}