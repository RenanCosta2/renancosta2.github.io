import React from 'react';
import { useParams } from "react-router-dom";
import {projects} from "../data/projectsData";

const ProjectDetail = () => {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) return <p>project não encontrado.</p>;

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{project.titulo}</h1>
      <img src={project.imagem} alt={project.titulo} className="mb-6 w-full h-64 object-cover rounded" />
      <p className="mb-4 text-gray-700">{project.descricao}</p>
      <a
        href={project.externalLink}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
      >
        Acessar project externo
      </a>
    </div>
  );
};

export default ProjectDetail;
