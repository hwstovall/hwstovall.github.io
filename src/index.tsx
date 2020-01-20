import * as React from 'react';

import './styles/main.scss';

import { hot } from 'react-hot-loader';

import { PageSection } from './components/page-section';
import { Hero } from './components/hero';
import { Project } from './components/project';

export const Index = hot(module)(() => (
  <main>
    <Hero />
    <PageSection title="Experience">

    </PageSection>
    <PageSection title="Education">

    </PageSection>
    <PageSection title="Projects">
      <Project
        name="Guage Cluster"
        description=""
        gitHubURL=""
      />
      <Project
        name="Weather"
        description=""
        gitHubURL=""
      />
      <Project
        name="React Canvas"
        description=""
        gitHubURL=""
      />
      <Project
        name="r-triple-d"
        description=""
        gitHubURL=""
      />
    </PageSection>
  </main>
));
