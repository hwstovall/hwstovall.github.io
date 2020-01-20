import * as React from 'react';

interface ProjectProps {
  readonly name: string;
  readonly description: string;
  readonly gitHubURL: string;
  readonly liveURL?: string;
}

export const Project = ({name, description, gitHubURL, liveURL}: ProjectProps) => (
  <section className="project">
    <h3>{name}</h3>
    <div className="description">
      {description}
    </div>
  </section>
);
