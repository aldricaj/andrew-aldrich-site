import * as React from 'react';
import * as styles from './skillset.module.css';
const Skill = (skill) => {
  // Making into a component since I am planning on adding more information to this
  console.log(skill.skill);
  return <p>{skill.skill.name}</p>;
};

const SkillSet = ({ skillset }) => {
  const skillComponents = skillset.skills.map((skill) => {
    return (
      <li className={styles.skillListItem} id={skill.name}>
        <Skill skill={skill} />
      </li>
    );
  });
  return (
    <div className={styles.skillsetContainer}>
      <h3>{skillset.skillset}</h3>
      <ul className={styles.skillList}>{skillComponents}</ul>
    </div>
  );
};

export default SkillSet;
