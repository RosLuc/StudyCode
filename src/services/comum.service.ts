import Comum from "../entities/Comum";
import { IComum } from "../interfaces/comum";
import { IComumRepository } from "../interfaces/comumRepository";

export class ComumService {
  constructor(private comumRepository: IComumRepository) {}

  public cadastrar(novoUsuario: IComum) {
    const usuarioJaExiste = this.comumRepository.findByEmail(
      novoUsuario.email
    );
    if (usuarioJaExiste) {
      throw new Error("Usuário já existe");
    }

    const usuarioComum = new Comum(novoUsuario);

    this.comumRepository.save(usuarioComum);
  }

  public visualizar(email: string): Comum {
    const usuarioExiste = this.comumRepository.findByEmail(email);
    if (!usuarioExiste) {
      throw new Error("Usuário não encontrado");
    }

    return usuarioExiste;
  }

  public listar(): Comum[] {
    const usuarios = this.comumRepository.listarUsuariosComum();
    return usuarios;
  }

  public remover(email: string) {
    const usuarioJaExiste = this.comumRepository.findByEmail(email);
    if (!usuarioJaExiste) {
      throw new Error("Usuário não encontrado");
    }

   this.comumRepository.removeByEmail(email);
  }
}
