import * as React from 'react';

import '../styles/components/position.scss';

interface PositionProps {
  readonly company: string;
  readonly title: string;
  readonly description: string;
  readonly startYear: number;
  readonly endYear?: number;
  readonly current?: boolean;
}

export const Position = (props: PositionProps) => {
  const { company, title, description, startYear, endYear, current = false } = props;

  return (
    <div className="position">
      <div className="basic-information">
        <h3 className="title-and-company">
          <span className="company">{company}</span>
          <span className="divider"> | </span>
          <span className="title">{title}</span>
        </h3>
        <div className="text-italic">
          <span className="start-year">{startYear}</span>
          {(endYear || current) && <span className="end-year"> - {endYear || 'Current'}</span>}
        </div>
      </div>
      <div className="description">
        <p>{description}</p>
      </div>
    </div>
  );
}
