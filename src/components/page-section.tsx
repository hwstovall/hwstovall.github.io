import * as React from 'react';

import '../styles/components/page-section.scss';

interface PageSectionProps {
  readonly title: string;
  readonly children: React.ReactNode;
  readonly className?: string;
}

export const PageSection = ({ title, children, className = '' }: PageSectionProps) => (
  <section className={`page-section ${className}`}>
    <h2 className="title">{title}</h2>
    <div className="content">
      {children}
    </div>
  </section>
);
