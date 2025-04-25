export type Project = {
  imagem: string;
  titulo: string;
  descricao: string;
  tipo: string;
  externalLink?: string; // opcional, só se quiser link externo
  slug: string; // para navegação interna
};
  
  export const projects: Project[] = [
    {
      imagem: "/assets/imagens/dashboard-vendas.png",
      titulo: "Dashboard de Vendas",
      descricao: "Dashboard interativo criado no Power BI com análise de KPIs de vendas.",
      tipo: "Power BI",
      slug: "dashboard-vendas",
      externalLink: "https://app.powerbi.com/...", // se quiser
    },
    {
      imagem: "/assets/imagens/analise-churn.png",
      titulo: "Análise de Churn",
      descricao: "Projeto de análise preditiva de churn com Python e Pandas.",
      tipo: "Python",
      slug: "analise-churn",
      externalLink: "https://github.com/seuusuario/projeto-churn",
    },
    // ...
  ];
  