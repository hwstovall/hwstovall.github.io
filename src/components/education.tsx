import * as React from 'react';

import '../styles/components/education.scss';

interface EducationProps {
  readonly institution: string;
  readonly startYear: number;
  readonly endYear: number;
  readonly major: string;
  readonly minor: string;
}

export const Education = (props: EducationProps) => {
  const { institution, startYear, endYear, major, minor } = props;

  return (
    <div className="education">
      <div className="basic-information">
        <h3 className="institution">{institution}</h3>
        <span className="text-italic">{startYear} - {endYear}</span>
      </div>
      <div className="major">{major}</div>
      <div className="text-italic">{minor}</div>
    </div>
  );
}
