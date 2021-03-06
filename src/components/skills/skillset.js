import * as React from 'react';
import * as styles from './skillset.module.css';
const Skill = (skill) => {
  // Making into a component since I am planning on adding more information to this
  console.log(skill.skill);
  return (
    <li className={styles.skillListItem} id={skill.name}>
      {skill.skill.name}
    </li>
  );
};

const SkillSet = ({ skillset }) => {
  const skillComponents = skillset.skills
    .sort((a, b) => {
      console.log(a);
      return a.name.localeCompare(b.name);
    })
    .map((skill) => {
      return <Skill skill={skill} />;
    });
  return (
    <div className={styles.skillsetContainer}>
      <h3>{skillset.skillset}</h3>
      <ul className={styles.skillList}>{skillComponents}</ul>
    </div>
  );
};

export default SkillSet;
