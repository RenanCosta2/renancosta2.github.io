import React from 'react';
import { Link } from "react-router-dom";
import { Project } from "../data/projectsData";

type Props = {
    project: Project;
  };

export function ProjectCard({ project }: Props) {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg p-4 bg-white">
          <img src={project.imagem} alt={project.titulo} className="w-full h-48 object-cover" />
          <div className="py-4">
            <h2 className="text-xl font-bold">{project.titulo}</h2>
            <p className="text-gray-700 text-base">{project.descricao}</p>
            <span className="text-sm text-blue-500 italic">{project.tipo}</span>
    
            <Link
              to={`/portfolio/${project.slug}`}
              className="block mt-3 text-indigo-600 hover:underline"
            >
              Ver projeto
            </Link>
          </div>
        </div>
      );
}
