import * as React from 'react';

import '../styles/components/hero.scss';

import { animated, useTrail, useChain } from 'react-spring';

const config = { mass: 5, tension: 2000, friction: 200 }

export const Hero = () => {
  const first = 'Harrison'.split('');
  const last = 'Stovall'.split('');
  const title = ['Software', 'Engineer'];

  const firstTrailRef = React.useRef();
  const firstTrail = useTrail(first.length, {
    config,
    opacity: 1,
    from: { opacity: 0 },
    ref: firstTrailRef,
  });
  const lastTrailRef = React.useRef();
  const lastTrail = useTrail(last.length, {
    config,
    opacity: 1,
    from: { opacity: 0 },
    ref: lastTrailRef,
  });
  const titleTrailRef = React.useRef();
  const titleTrail = useTrail(title.length, {
    config,
    translateY: 0,
    opacity: 1,
    from: { translateY: 100, opacity: 0 },
    ref: titleTrailRef,
  });
  useChain([firstTrailRef, lastTrailRef, titleTrailRef], [0, 0.25, 1]);

  return (
    <section className="hero">
      <div className="inner">
        <div className="name">
          <h1 className="first">
            {firstTrail.map((props, i) => (
              <animated.span key={i} style={props}>{first[i]}</animated.span>
            ))}
          </h1>
          <h1 className="last">
            {lastTrail.map((props, i) => (
              <animated.span key={i} style={props}>{last[i]}</animated.span>
            ))}
          </h1>
        </div>
        <h2 className="title">
          {titleTrail.map(({ opacity, translateY }, i) => (
            <animated.span
              key={i}
              style={{
                opacity,
                transform: translateY.interpolate((t) => `translateY(${t}%)`),
              }}
            >
              {title[i]}
            </animated.span>
          ))}
        </h2>
      </div>
    </section >
  );
};
