import { graphql } from 'gatsby';
import * as React from 'react';
import CareerEventList from '../components/careerEventList';

import Layout from '../components/layout';

const ExperiencePage = ({ data }) => {
  const jobsList = data.jobMDFiles.jobs;

  return (
    <Layout pageTitle="About Me">
      <h2>Experience</h2>
      <CareerEventList careerEventList={jobsList} />
    </Layout>
  );
};

export const query = graphql`
  query JobsQuery {
    jobMDFiles: allMdx(filter: { slug: { regex: "/jobs/.*/" } }) {
      jobs: nodes {
        slug
        frontmatter {
          organization
          endDate
          location
          startDate
          title
        }
        body
      }
    }
  }
`;

export default ExperiencePage;
