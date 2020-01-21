import * as React from 'react';

import '../styles/components/page-section.scss';

import { animated, useSpring } from 'react-spring';

import { useOnScreen } from '../hooks';

interface PageSectionProps {
  readonly title: string;
  readonly children: React.ReactNode;
  readonly className?: string;
}

const config = { mass: 5, tension: 2000, friction: 200 }

export const PageSection = ({ title, children, className = '' }: PageSectionProps) => {
  const ref = React.useRef();
  const [isIntersecting, hasIntersected] = useOnScreen(ref, '-150px');

  const { rotateY } = useSpring({
    config,
    rotateY: hasIntersected ? 0 : 90,
    from: { opacity: 0 },
  });

  return (
    <section className={`page-section ${className}`} ref={ref}>
      <h2 className="page-section-title">
        <div className="title-text">{title}</div>
        <animated.div
          style={{ transform: rotateY.interpolate(r => `rotateY(${r}deg)`) }}
          className="title-underline"
        />
      </h2>
      <div className="page-section-content">
        {children}
      </div>
    </section>
  );
};
