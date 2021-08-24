import * as React from 'react';
import { hot } from 'react-hot-loader';
import { Education } from './components/education';
import { Hero } from './components/hero';
import { PageSection } from './components/page-section';
import { Position } from './components/position';
import { Project } from './components/project';

import './styles/main.scss';

export const Index = hot(module)(() => (
  <React.Fragment>
    <Hero />
    <main>
      <PageSection title="About">
        <p>
          I am someone who is passionate about people and code. There is always an elegant 
          solution out there if you are willing to fully understand the problem. Recently
          I have been working to empower others in their careers both in my job and my
          volunteer work.
        </p>
        <p>
          While I currently work on a stack using Node, GraphQL, TypeScript, and
          React, I am always learning new technologies at work and on personal projects.
        </p>
      </PageSection>

      <PageSection title="Experience">
        <Position
          company="Carvana"
          title="Engineering Team Lead"
          description={
            'Building a fantastic team and equipping them to solve the challenges facing a ' +
            'rapidly growing organization.'
          }
          startYear={2021}
          current={true}
        />
        <Position
          company="Carvana"
          title="Senior Engineer I"
          description={
            'Helping build the new way to buy a car. Working on key frontend ' +
            'components and helping develop modern replacements for internal tools.'
          }
          startYear={2020}
          endYear={2021}
        />
        <Position
          company="Volantio"
          title="Senior Software Engineer"
          description={
            'Worked with a fantastic team to implement a class-leading revenue ' +
            'optimization platform for the airline industry. Built key components of a ' +
            'platform capable of integrating with many external data sources and APIs. ' +
            'Worked to implement multiple well-tested, internationalized, and accessible ' +
            'client applications. Researched and implemented a global network of Kubernetes ' +
            'clusters with high availability and high fault-tolerance.'
          }
          startYear={2016}
          endYear={2020}
        />
        <Position
          company="Tuch"
          title="Web Developer"
          description={
            'Led implementation of an administration application for tablet menu systems ' +
            'used by multiple hotels across the United States.'
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
            'the Porsche Taycan\'s gauge cluster in QML.'
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
