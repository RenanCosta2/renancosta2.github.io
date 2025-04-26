import React from 'react';
import { projects } from '../data/projectsData';
import { ProjectCard } from './ProjectCard';

export function Portfolio() {
  return (
    <section className='portfolio'>
      {projects.map((project) => (
        <ProjectCard key={project.slug} project={project} />
      ))}
    </section>
  );
}
