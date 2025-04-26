// src/data/projectsData.ts

export type Project = {
  imagem: string;
  titulo: string;
  objetivo: string;
  requisitos: string[] | undefined;
  tags: string[]; // antes era `tipo: string`
  documentacao: string;
  externalLink?: string;
  slug: string;
};

export const projects: Project[] = [
  {
    imagem: "/images/projects/RH.png",
    titulo: "Dashboard de RH",
    objetivo: "O projeto desenvolvido no Power BI tem como objetivo oferecer uma visão estratégica do setor de Recursos Humanos da empresa, facilitando a análise e o acompanhamento de informações relevantes sobre os colaboradores. O Dashboard permite responder perguntas-chave de negócio, como o total de funcionários, tempo médio de experiência, distribuição por gênero e função, média salarial, disponibilidade para hora extra e níveis de envolvimento no trabalho.",
    requisitos: [
      "Obter o total atual de funcionários ativos na empresa.",
      "Calcular o tempo médio de experiência dos colaboradores, em anos.",
      "Identificar o total e o percentual de funcionários por gênero (masculino e feminino).",
      "Apresentar a média salarial mensal dos colaboradores.",
      "Exibir o total de funcionários por função/cargo na organização.",
      "Calcular o percentual de funcionários disponíveis para hora extra, com base em um campo específico.",
      "Classificar os colaboradores de acordo com o seu nível de envolvimento no trabalho, categorizando-os como Ruim, Baixo, Médio ou Alto.",
      "Determinar o total e o percentual de funcionários elegíveis para promoção, com base na regra de 5 anos ou mais desde a última promoção (mesmo que esse indicador não seja exibido no Dashboard, ele deve ser calculado)."
    ],
    tags: ["Power BI"],
    slug: "dashboard-rh",
    documentacao: "https://github.com/RenanCosta2/rh-powerbi/blob/main/README.md",
    externalLink: "https://app.powerbi.com/view?r=eyJrIjoiNzE1NTIyMzUtZDQ1OS00MzE4LTk0NTItZjhmNjJkMzlhNWQzIiwidCI6ImJhZTkwYjYxLTg4OTItNDQyMC1hMTEyLTE0NTQ4MzBkYmJiOSJ9",
  },
  {
    imagem: "/images/projects/marketing.png",
    titulo: "Dashboard de Marketing",
    objetivo: "Este projeto tem como objetivo apresentar métricas gerais sobre a percepção do cliente, seu comportamento de compra, a performance das campanhas de marketing desenvolvidas e os padrões de consumo por ponto de venda (país).",
    requisitos: [
      "Obter o total de clientes analisados.",
      "Calcular a média do salário anual dos clientes.",
      "Identificar o total de compras realizadas e segmentar por canal (loja, web, catálogo, desconto).",
      "Exibir o total e percentual de clientes por país.",
      "Apresentar a distribuição de clientes por estado civil.",
      "Apresentar a distribuição de clientes por escolaridade.",
      "Calcular o total de gastos por categoria de produto (Eletrônicos, Brinquedos, Móveis, Utilidades, Alimentos, Vestuário).",
      "Analisar o padrão de gastos por salário anual, estado civil, escolaridade e quantidade de filhos em casa.",
      "Determinar o percentual de clientes que compraram e não compraram.",
      "Avaliar a performance das campanhas de marketing, identificando o número de clientes que compraram por campanha.",
      "Verificar o número de visitas ao website por clientes que compraram e não compraram.",
      "Cruzar a quantidade de filhos em casa com o comportamento de compra em campanhas.",
      "Analisar a evolução dos gastos ao longo dos anos por país.",
      "Classificar os países com base no volume de gastos e identificar padrões globais de consumo."
    ],
    tags: ["Power BI"],
    slug: "marketing",
    documentacao: "https://github.com/RenanCosta2/marketing-powerbi/blob/main/README.md",
    externalLink: "https://app.powerbi.com/view?r=eyJrIjoiYjU5NmE5MGYtZWQ3Zi00NDkzLWE5YTEtODU1MDZlOWY5NTdjIiwidCI6ImJhZTkwYjYxLTg4OTItNDQyMC1hMTEyLTE0NTQ4MzBkYmJiOSJ9&pageName=134ed5756e9c2c0d7574",
  },
  // outros projetos...
];
