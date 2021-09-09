export default class Curso {
  private titulo: string;
  private categoria: string;
  private plataformaOrigem: string;
  private linkDeReferencia: string;
  private preco: number;
  private avaliacao: number;
  private cargaHoraria: string;
  private descricao: string;

  constructor(
    titulo: string,
    categoria: string,
    plataformaOrigem: string,
    linkDeReferencia: string,
    preco: number,
    avaliacao: number,
    cargaHoraria: string,
    descricao: string
  ) {
      this.titulo = titulo;
      this.categoria = categoria;
      this.plataformaOrigem = plataformaOrigem;
      this.linkDeReferencia = linkDeReferencia;
      this.preco = preco;
      this.avaliacao = avaliacao;
      this.cargaHoraria = cargaHoraria;
      this.descricao = descricao;
    }

  public getCategoria(): string {
    return this.categoria;
  }

  public getTitulo(): string {
    return this.titulo;
  }
}
