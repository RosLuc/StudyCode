import { IListaDesejo } from "../interfaces/listaDesejo";

export default class ListaDesejo {
  private comumEmail: string;
  private cursoTitulo: string;

  constructor(props: IListaDesejo) {
    this.comumEmail = props.comumEmail;
    this.cursoTitulo = props.cursoTitulo;
  }

  public getComumEmail(): string {
    return this.comumEmail
  }

  public getCursoTitulo(): string {
    return this.cursoTitulo
  }
}
