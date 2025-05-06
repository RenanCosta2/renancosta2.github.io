import React from 'react';
import { useParams } from "react-router-dom";
import { projects } from "../data/projectsData";

const ProjectDetail = () => {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) return <p className='project-detail-notfound'>Projeto não encontrado.</p>;

  return (
    <div className="project-detail-container">
      {/* Título do Projeto */}
      <h1 className='project-detail-title'>{project.titulo}</h1>

      {/* Objetivo */}
      <h2 className='project-detail-objective'>Objetivo</h2>
      <p className='project-details-objective-description'>{project.objetivo}</p>

      {/* Requisitos */}
      <h2 className='project-detail-requirements'>Requisitos</h2>
      {project.requisitos?.length ? (
        <ul className='project-detail-requirements-list'>
          {project.requisitos.map((req, index) => (
            <li key={index} className='project-detail-requirements-item'>{req}</li>
          ))}
        </ul>
      ) : (
        <p className='project-detail-no-requirements'>Nenhum requisito listado.</p>
      )}

      {/* Link para a documentação */}
      {project.repositorio && (
        <div className='project-detail-doc'>
          <a
            href={project.repositorio}
            target="_blank"
            className='project-detail-doc-link'
            rel="noopener noreferrer"
          >
            <button className="doc-button">Acessar Projeto</button>
          </a>
        </div>
      )}

      {/* Embutir Power BI ou outra visualização */}
      {project.tags.includes("Power BI") && project.externalLink && (
        <div className='project-detail-powerbi'>
          <h2 className='project-detail-powerbi-title'>Visualização do Power BI</h2>
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
