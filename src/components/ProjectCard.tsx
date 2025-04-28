import React from 'react';
import { Link } from "react-router-dom";
import { Project } from "../data/projectsData";

type Props = {
  project: Project;
};

export function ProjectCard({ project }: Props) {
  return (
    <div className="project">
      <Link to={`/portfolio/${project.slug}`} className='link'>
        <img src={project.imagem} alt={project.titulo} className="project-img" />

      <div>
        <h2 className="project-title">{project.titulo}</h2>

        <div className="project-tags">
          {project.tags.map((tag) => (
            <span key={tag} className="project-tags-item">
              {tag}
            </span>
          ))}
        </div>
      </div>
      </Link>
    </div>
  );
}
