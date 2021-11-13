import { graphql } from 'gatsby';
import * as React from 'react';
import CareerEventList from '../components/careerEventList';

import Layout from '../components/layout';

const EducationPage = ({ data }) => {
  const educationList = data.educationMDFiles.events;

  return (
    <Layout pageTitle="About Me">
      <h2>Education</h2>
      <CareerEventList careerEventList={educationList} />
    </Layout>
  );
};

export const query = graphql`
  query EducationQuery {
    educationMDFiles: allMdx(filter: { slug: { regex: "/education/.*/" } }) {
      events: nodes {
        slug
        frontmatter {
          organization
          endDate
          location
          startDate
          title
          hideDates
        }
        body
      }
    }
  }
`;

export default EducationPage;
