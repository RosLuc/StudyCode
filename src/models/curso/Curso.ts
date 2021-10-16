import { ICurso } from "./interfaces/curso";

export class Curso {
  private titulo: string;
  private categoria: string;
  private plataformaOrigem: string;
  private linkDeReferencia: string;
  private preco: number;
  private avaliacao: number;
  private cargaHoraria: string;
  private descricao: string;

  constructor(props: ICurso) {
      this.titulo = props.titulo;
      this.categoria = props.categoria;
      this.plataformaOrigem = props.plataformaOrigem;
      this.linkDeReferencia = props.linkDeReferencia;
      this.preco = props.preco;
      this.avaliacao = props.avaliacao;
      this.cargaHoraria = props.cargaHoraria;
      this.descricao = props.descricao;
    }

  public getCategoria(): string {
    return this.categoria;
  }

  public getTitulo(): string {
    return this.titulo;
  }
}
