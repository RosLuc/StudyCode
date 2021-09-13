import Administrador from "../entities/Adiministrador";
import { IAdministradorRepository } from "../interfaces/administradorRepository";

export class AdministradorRepository implements IAdministradorRepository {
  private usuarios: Administrador[] = [];

  public save(usuario: Administrador) {
    this.usuarios.push(usuario);
  }

  public findByEmail(email: string): Administrador | void {
    let admTemp;
    this.usuarios.forEach((usuario) => {
      if (usuario.getEmail() === email) admTemp = usuario;
    });
    return admTemp;
  }

  public listarUsuariosAdministrador(): Administrador[] {
    return this.usuarios;
  }

  public removeByEmail(email: string) {
    this.usuarios.forEach((usuario, index) => {
      if(usuario.getEmail() === email) {
        this.usuarios.splice(index, 1);
        return;
      }
    });
  }
}
