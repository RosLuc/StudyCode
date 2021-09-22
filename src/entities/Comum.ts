import { IComum } from "../interfaces/comum";
import { Usuario } from "./Usuario";

export default class Comum extends Usuario {
  private fotoUrl: string;
  private areaInteresse: string;

  constructor(props: IComum) {
    super(props.email, props.senha, props.nome, props.id ? props.id : null);
    this.fotoUrl = props.fotoUrl;
    this.areaInteresse = props.areaInteresse;
  }

  public setAreaInteresse(areaInteresse: string): void {
    this.areaInteresse = areaInteresse;
  }

  public getAreaInteresse(): string {
    return this.areaInteresse;
  }

  public setFotoUrl(fotoUrl: string): void {
    this.fotoUrl = fotoUrl;
  }

  public getFotoUrl(): string {
    return this.fotoUrl;
  }

  // public setListaDesejo(listaDesejo: Curso[]): void {
  //   this.listaDesejo = listaDesejo;
  // }

  // public getListaDesejo(): Curso[] {
  //   return this.listaDesejo;
  // }
}
