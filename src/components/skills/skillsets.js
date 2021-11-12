import * as React from 'react';
import SkillSet from './skillset';
import * as styles from './skillsets.module.css';

const SkillSets = ({ skillsetList }) => {
  let skillsetComponents = skillsetList.map((skillset, n) => {
    return <SkillSet skillset={skillset} />;
  });
  return (
    <div>
      <h2>Skills</h2>
      <div className={styles.skillsetListContainer}>{skillsetComponents}</div>
    </div>
  );
};

export default SkillSets;
