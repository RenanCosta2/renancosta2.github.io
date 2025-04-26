import React from 'react';
import { useParams } from "react-router-dom";
import {projects} from "../data/projectsData";

const ProjectDetail = () => {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) return <p>project não encontrado.</p>;

  return (
    <div>
      <h1>{project.titulo}</h1>
      <img src={project.imagem} alt={project.titulo} />
      <p>{project.descricao}</p>
      <a
        href={project.externalLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        Acessar project externo
      </a>
    </div>
  );
};

export default ProjectDetail;
