import Administrador from "./Administrador";
import { IAdministrador } from "./interfaces/administrador";
import { IAdministradorRepository } from "./interfaces/administradorRepository";


export class AdministradorService {
  constructor(private administradorRepository: IAdministradorRepository) {}

  public cadastrar(novoUsuario: IAdministrador) {
    const usuarioJaExiste = this.administradorRepository.findByEmail(novoUsuario.email);
    if (usuarioJaExiste) {
      throw new Error("Usuário já existe");
    }

    const usuarioAdministrador = new Administrador(novoUsuario);

    this.administradorRepository.save(usuarioAdministrador);
  }

  public visualizar(email: string): Administrador {
    const usuarioExiste = this.administradorRepository.findByEmail(email);
    if (!usuarioExiste) {
      throw new Error("Usuário não encontrado");
    }

    return usuarioExiste;
  }

  public listar(): Administrador[] {
    const usuarios = this.administradorRepository.listarUsuariosAdministrador();
    return usuarios;
  }

  public remover(email: string) {
    const usuarioJaExiste = this.administradorRepository.findByEmail(email);
    if (!usuarioJaExiste) {
      throw new Error("Usuário não encontrado");
    }

    this.administradorRepository.removeByEmail(email);
  }
}
