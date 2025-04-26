// src/data/projectsData.ts

export type Project = {
  imagem: string;
  titulo: string;
  descricao: string;
  tags: string[]; // antes era `tipo: string`
  externalLink?: string;
  slug: string;
};

export const projects: Project[] = [
  {
    imagem: "/images/projects/RH.png",
    titulo: "Dashboard de RH",
    descricao: "Dashboard interativo criado no Power BI com análise de KPIs de vendas.",
    tags: ["Power BI"],
    slug: "dashboard-rh",
    externalLink: "https://app.powerbi.com/view?r=eyJrIjoiNzE1NTIyMzUtZDQ1OS00MzE4LTk0NTItZjhmNjJkMzlhNWQzIiwidCI6ImJhZTkwYjYxLTg4OTItNDQyMC1hMTEyLTE0NTQ4MzBkYmJiOSJ9",
  },
  {
    imagem: "/images/projects/marketing.png",
    titulo: "Dashboard de Marketing",
    descricao: "Projeto de análise preditiva de churn com Python e Pandas.",
    tags: ["Power BI"],
    slug: "marketing",
    externalLink: "https://app.powerbi.com/view?r=eyJrIjoiYjU5NmE5MGYtZWQ3Zi00NDkzLWE5YTEtODU1MDZlOWY5NTdjIiwidCI6ImJhZTkwYjYxLTg4OTItNDQyMC1hMTEyLTE0NTQ4MzBkYmJiOSJ9&pageName=134ed5756e9c2c0d7574",
  },
  {
    imagem: "/assets/imagens/analise-churn.png",
    titulo: "Análise de Churn",
    descricao: "Projeto de análise preditiva de churn com Python e Pandas.",
    tags: ["Python", "Pandas", "Machine Learning"],
    slug: "analise-churn",
    externalLink: "https://github.com/seuusuario/projeto-churn",
  },
  {
    imagem: "/assets/imagens/analise-churn.png",
    titulo: "Análise de Churn",
    descricao: "Projeto de análise preditiva de churn com Python e Pandas.",
    tags: ["Python", "Pandas", "Machine Learning"],
    slug: "analise-churn",
    externalLink: "https://github.com/seuusuario/projeto-churn",
  },
  {
    imagem: "/assets/imagens/analise-churn.png",
    titulo: "Análise de Churn",
    descricao: "Projeto de análise preditiva de churn com Python e Pandas.",
    tags: ["Python", "Pandas", "Machine Learning"],
    slug: "analise-churn",
    externalLink: "https://github.com/seuusuario/projeto-churn",
  },
  {
    imagem: "/assets/imagens/analise-churn.png",
    titulo: "Análise de Churn",
    descricao: "Projeto de análise preditiva de churn com Python e Pandas.",
    tags: ["Python", "Pandas", "Machine Learning"],
    slug: "analise-churn",
    externalLink: "https://github.com/seuusuario/projeto-churn",
  },
  // outros projetos...
];
