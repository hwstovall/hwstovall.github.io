import * as React from 'react';

import '../styles/components/project.scss';

interface ProjectProps {
  readonly name: string;
  readonly description: string;
  readonly gitHubURL: string;
}

export const Project = ({ name, description, gitHubURL }: ProjectProps) => (
  <section className="project">
    <div className="name-and-link">
      <h3>{name}</h3>
      <a href={gitHubURL}>View Project</a>
    </div>
    <div className="description">
      <p>{description}</p>
    </div>
  </section>
);
