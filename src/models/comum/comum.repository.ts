import Comum from "./Comum";
import { IComumRepository } from "./interfaces/comumRepository";

export class ComumRepository implements IComumRepository {
  private usuarios: Comum[] = [];

  public save(usuario: Comum) {
    this.usuarios.push(usuario);
  }

  public findByEmail(email: string): Comum | void {
    let usuarioTemp;
    this.usuarios.forEach((usuario) => {
      if (usuario.getEmail() === email) usuarioTemp = usuario;
    });
    return usuarioTemp;
  }

  public listarUsuariosComum(): Comum[] {
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
