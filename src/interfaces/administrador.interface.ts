import IUsuario from "./usuario.interface";

export default interface IAdministrador extends IUsuario {
  cpf: string;
}