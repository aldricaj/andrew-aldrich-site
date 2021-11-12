import * as React from 'react';
import Layout from '../components/layout';
import { graphql } from 'gatsby';
import SkillSets from '../components/skills/skillsets';

const SkillsPage = ({ data }) => {
  const skillsetList = data.allSkillsYaml.nodes;
  return (
    <Layout pageTitle="Home Page">
      <SkillSets skillsetList={skillsetList} />
    </Layout>
  );
};

export const query = graphql`
  query SkillsQuery {
    allSkillsYaml {
      nodes {
        skillset
        skills {
          color
          name
        }
      }
    }
  }
`;

export default SkillsPage;
