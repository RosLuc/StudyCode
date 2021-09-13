import Administrador from "../entities/Adiministrador";

export interface IAdministradorRepository{
  save(usuario: Administrador): void;
  findByEmail(email: string): Administrador | void;
  removeByEmail(email: string): void;
  listarUsuariosAdministrador(): Administrador[];
}