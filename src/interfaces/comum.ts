import { Curso } from "../entities/Curso";

export interface IComum {
  id?: string;
  email: string;
  senha: string;
  nome: string;
  areaInteresse: string;
  fotoUrl: string;
}
