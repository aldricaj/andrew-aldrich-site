import * as React from 'react';

import '@fontsource/fira-code';
import '@fontsource/oswald';

import * as styles from './layout.module.css';
import '../styles/global.scss';
import { StaticImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';

const Layout = ({ pageTitle, children }) => {
  return (
    <div className={styles.container}>
      <title>Andrew Aldrich</title>
      <main>
        <div className={styles.headerContainer}>
          <div className={styles.headerTextContainer}>
            <h1 className={styles.heading}>Andrew Aldrich</h1>
            <p className={styles.subtitle}>Software Developer</p>
          </div>
          <div className={styles.headerImageContainer}>
            <StaticImage
              className={styles.portrait}
              alt="Portrait of Andrew Aldrich"
              src="../images/andrew-aldrich-portrait.jpg"
            />
          </div>
        </div>
        <nav>
          <Link to="/">About Me</Link>
          <Link to="/skills">Skills</Link>
          <Link to="/experience">Experience</Link>
          <Link to="/education">Education and Certifications</Link>
          <a href="andrew-aldrich-resume.pdf">Resume</a>
        </nav>
        {children}
      </main>
    </div>
  );
};

export default Layout;
