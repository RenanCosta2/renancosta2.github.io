// src/data/projectsData.ts

export type Project = {
  imagem: string;
  titulo: string;
  objetivo: string;
  metricas: string[] | undefined;
  tags: string[];
  repositorio: string;
  externalLink?: string;
  slug: string;
};

export const projects: Project[] = [
  {
    imagem: "/images/projects/mercado-acoes.png",
    titulo: "Análise Histórica de Ações (2020–2025): IBM, Microsoft, Oracle, Tesla e Walmart",
    objetivo: "Dashboard em Power BI para análise estratégica do comportamento do mercado de ações de cinco empresas selecionadas (IBM, Microsoft, Oracle, Tesla e Walmart), permitindo análises detalhadas ao longo do tempo. Os dados analisados abrangem o período de 25 de abril de 2020 até 25 de abril de 2025, garantindo uma visão histórica consistente dos últimos cinco anos.",
    metricas: [
      "Total de volume negociado de ações ao longo do tempo para as 5 empresas analisadas.",
      "Valor médio de abertura (Open), mais alto (High), mais baixo (Low), de fechamento (Close) e do Volume das ações de todas as empresas, para todos os meses do período analisado (5 anos).",
      "Variação da média do valor de fechamento (Close) das ações de todas as empresas ao longo do tempo, mês a mês.",
      "Principais características e tendências nos dados."
    ],
    tags: ["Power BI", "Python"],
    slug: "mercado-acoes",
    repositorio: "https://github.com/RenanCosta2/mercado-acoes-powerbi/blob/main/README.md",
    externalLink: "https://app.powerbi.com/view?r=eyJrIjoiNGUwYTA0MDctMmE4NS00Y2MxLTkzODktYjVjMzZhOTViOTRjIiwidCI6ImJhZTkwYjYxLTg4OTItNDQyMC1hMTEyLTE0NTQ4MzBkYmJiOSJ9",
  },
  {
    imagem: "/images/projects/RH.png",
    titulo: "Análise de dados de RH",
    objetivo: "Dashboard em Power BI focado em oferecer uma visão estratégica do setor de Recursos Humanos da empresa, facilitando a análise e o acompanhamento de informações relevantes sobre os colaboradores.",
    metricas: [
      "Total atual de funcionários ativos na empresa.",
      "Tempo médio de experiência dos colaboradores, em anos.",
      "Total e o percentual de funcionários por gênero (masculino e feminino).",
      "Média salarial mensal dos colaboradores.",
      "Total de funcionários por função/cargo na organização.",
      "Percentual de funcionários disponíveis para hora extra, com base em um campo específico.",
      "Classificação dos colaboradores de acordo com o seu nível de envolvimento no trabalho, categorizando-os como Ruim, Baixo, Médio ou Alto.",
      "Total e percentual de funcionários elegíveis para promoção, com base na regra de 5 anos ou mais desde a última promoção (mesmo que esse indicador não seja exibido no Dashboard, ele deve ser calculado)."
    ],
    tags: ["Power BI"],
    slug: "rh",
    repositorio: "https://github.com/RenanCosta2/rh-powerbi/blob/main/README.md",
    externalLink: "https://app.powerbi.com/view?r=eyJrIjoiNzE1NTIyMzUtZDQ1OS00MzE4LTk0NTItZjhmNjJkMzlhNWQzIiwidCI6ImJhZTkwYjYxLTg4OTItNDQyMC1hMTEyLTE0NTQ4MzBkYmJiOSJ9",
  },
  {
    imagem: "/images/projects/marketing.png",
    titulo: "Análise de dados de Marketing",
    objetivo: "Apresentação de métricas gerais sobre a percepção do cliente, seu comportamento de compra, a performance das campanhas de marketing desenvolvidas e os padrões de consumo por ponto de venda (país).",
    metricas: [
      "Total de clientes analisados.",
      "Média do salário anual dos clientes.",
      "Total de compras realizadas e segmentar por canal (loja, web, catálogo, desconto).",
      "Total e percentual de clientes por país.",
      "Distribuição de clientes por estado civil e escolaridade.",
      "Total de gastos por categoria de produto (Eletrônicos, Brinquedos, Móveis, Utilidades, Alimentos, Vestuário).",
      "Análise do padrão de gastos por salário anual, estado civil, escolaridade e quantidade de filhos em casa.",
      "Performance das campanhas de marketing, identificando o número de clientes que compraram por campanha.",
      "Número de visitas ao website por clientes que compraram e não compraram.",
      "Relação da quantidade de filhos em casa com o comportamento de compra em campanhas.",
      "Evolução dos gastos ao longo dos anos por país.",
      "Classificação dos países com base no volume de gastos e identificar padrões globais de consumo."
    ],
    tags: ["Power BI"],
    slug: "marketing",
    repositorio: "https://github.com/RenanCosta2/marketing-powerbi/blob/main/README.md",
    externalLink: "https://app.powerbi.com/view?r=eyJrIjoiYjU5NmE5MGYtZWQ3Zi00NDkzLWE5YTEtODU1MDZlOWY5NTdjIiwidCI6ImJhZTkwYjYxLTg4OTItNDQyMC1hMTEyLTE0NTQ4MzBkYmJiOSJ9&pageName=134ed5756e9c2c0d7574",
  },
  // outros projetos...
];
