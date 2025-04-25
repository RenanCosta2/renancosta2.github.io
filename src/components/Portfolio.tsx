import React from 'react';
import { projects } from '../data/projectsData';
import { ProjectCard } from './ProjectCart';

export function Portfolio() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {projects.map((project) => (
        <ProjectCard key={project.slug} project={project} />
      ))}
    </section>
  );
}
