import Curso from "./Curso";
import Usuario from "./Usuario";

export default class Comum extends Usuario {
  private fotoUrl: string;
  private areaInteresse: string;
  private listaDesejo: Curso[];

  constructor(
    email: string,
    senha: string,
    nome: string,
    areaInteresse: string,
    fotoUrl: string,
    listaDesejo: Curso[] = []
  ) {
    super(email, senha, nome);
    this.fotoUrl = fotoUrl;
    this.areaInteresse = areaInteresse;
    this.listaDesejo = listaDesejo;
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

  public setListaDesejo(listaDesejo: Curso[]): void {
    this.listaDesejo = listaDesejo;
  }

  public getListaDesejo(): Curso[] {
    return this.listaDesejo;
  }
}
