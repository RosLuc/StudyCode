import IUsuario from "./usuario.interface";

export default interface IComum extends IUsuario {
  fotoUrl: string;
  areaInteresse: string;
}