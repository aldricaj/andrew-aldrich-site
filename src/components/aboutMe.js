import { MDXRenderer } from 'gatsby-plugin-mdx';
import * as React from 'react';

const AboutMe = ({ data }) => {
  return (
    <div>
      <h2>About Me</h2>
      <MDXRenderer>{data.mdx.body}</MDXRenderer>
    </div>
  );
};

export default AboutMe;
