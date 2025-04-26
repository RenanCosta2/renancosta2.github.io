import React from 'react';
import { useParams } from "react-router-dom";
import { projects } from "../data/projectsData";

const ProjectDetail = () => {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) return <p>Projeto não encontrado.</p>;

  return (
    <div className="p-6 max-w-4xl mx-auto">
      {/* Título do Projeto */}
      <h1 className="text-3xl font-bold mb-4">{project.titulo}</h1>
      
      {/* Objetivo */}
      <h2 className="text-2xl font-semibold mb-2">Objetivo</h2>
      <p className="text-gray-700 mb-6">{project.objetivo}</p>

      {/* Requisitos */}
      <h2 className="text-2xl font-semibold mb-2">Requisitos</h2>
      <ul className="list-disc pl-5 mb-6">
        {project.requisitos?.map((req, index) => (
          <li key={index} className="text-gray-700">{req}</li>
        ))}
      </ul>

      {/* Link para a documentação */}
      {project.documentacao && (
        <div className="mb-6">
          <a
            href={project.documentacao}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
          >
            Acessar Documentação
          </a>
        </div>
      )}

      {/* Embutir Power BI ou outra visualização */}
      {project.tags.includes("Power BI") && project.externalLink && (
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Visualização do Power BI</h2>
          <iframe
            title="Power BI Dashboard"
            src={project.externalLink}
            width="100%"
            height="600"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      )}
    </div>
  );
};

export default ProjectDetail;
