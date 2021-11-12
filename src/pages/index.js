import * as React from 'react';
import AboutMe from '../components/aboutMe';
import Layout from '../components/layout';
import { graphql } from 'gatsby';

const IndexPage = ({ data }) => {
  return (
    <Layout pageTitle="Home Page">
      <AboutMe data={data} />
    </Layout>
  );
};

export const query = graphql`
  query AboutQuery {
    mdx(slug: { eq: "about-me" }) {
      body
    }
  }
`;

export default IndexPage;
