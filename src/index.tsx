import * as React from 'react';

import './styles/main.scss';

import { hot } from 'react-hot-loader';

import { PageSection } from './components/page-section';
import { Hero } from './components/hero';
import { Project } from './components/project';
import { Position } from './components/position';
import { Education } from './components/education';

export const Index = hot(module)(() => (
  <React.Fragment>
    <Hero />
    <main>
      <PageSection title="About">
        <p>
          I'm an Atlanta based Software Engineer working in the travel industry. I like to find
          elegant ways to leverage technology to solve problems. I find teaching programming 
          skills to others to be an exciting challenge.
        </p>
        <p>
          While I currently work on a stack using Kubernetes, Python + Django, TypeScript, and
          React, I am always learning new technologies.
        </p>
      </PageSection>

      <PageSection title="Experience">
        <Position
          company="Volantio"
          title="Senior Software Engineer"
          description={
            'Currently working with a fantastic team to implement a class-leading revenue ' +
            'optimization platform for the airline industry. Built key components of a ' +
            'platform capable of integrating with many exgternal data sources and APIs. ' +
            'Worked to implement multiple well-tested, internatiionalized, and accessible ' +
            'client applications. Researched and implemented a global network of Kubernetes ' +
            'clusters with high availability and high fault-tolerance.'
          }
          startYear={2016}
          current={true}
        />
        <Position
          company="Tuch"
          title="Web Developer"
          description={
            'Led implementation of an administration application for tablet menu systems ' +
            'used by multiple hotels accross the United States.'
          }
          startYear={2013}
          endYear={2015}
        />
        <Position
          company="University of Arizona"
          title="Teaching Assistant"
          description={
            'Assisted with lesson planning and grading of CS337 Web Applications. Held office ' +
            'hours and assisted students.'
          }
          startYear={2013}
        />
      </PageSection>

      <PageSection title="Education">
        <Education
          institution="University of Arizona"
          startYear={2012}
          endYear={2016}
          major="Bachelor of Science, Biomedical Engineering"
          minor="Minor in Mechanical Engineering"
        />
      </PageSection>

      <PageSection title="Personal Projects">
        <Project
          name="guage-cluster"
          description={
            'I had been wanting to learn Qt for a while so I decided to try and replicate ' +
            'the Porsche Taycan\'s guage cluster in QML.'
          }
          gitHubURL="https://github.com/hwstovall/gauge-cluster"
        />
        <Project
          name="weather-app"
          description={
            'A simple weather application built to showcase a simple design using react, ' +
            'recharts, and react-spring.'
          }
          gitHubURL="https://github.com/hwstovall/weather-app"
        />
        <Project
          name="react-canvas"
          description={
            'A simple library that allows management of HTML canvas drawables using the ' +
            'react virtual DOM.'
          }
          gitHubURL="https://github.com/hwstovall/react-canvas"
        />
        <Project
          name="r-triple-d"
          description={
            'A basic react graphing library using d3 for computation and React for rendering.'
          }
          gitHubURL="https://github.com/hwstovall/r-triple-d"
        />
      </PageSection>
    </main>
  </React.Fragment>
));
