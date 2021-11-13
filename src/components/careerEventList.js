import { MDXRenderer } from 'gatsby-plugin-mdx';
import * as React from 'react';
import * as styles from './careerEventList.module.css';

const CareerEvent = ({ event }) => {
  return (
    <div className={styles.careerEvtListItem}>
      <div>
        <h3>
          {event.frontmatter.organization} - {event.frontmatter.title}
        </h3>
        <p>
          {event.frontmatter.startDate} - {event.frontmatter.endDate}
        </p>
      </div>
      <div className={styles.careerEvtDescriptionContainer}>
        <MDXRenderer>{event.body}</MDXRenderer>
      </div>
    </div>
  );
};
const CareerEventList = ({ eventList }) => {
  const eventCompnonents = eventList
    .sort((a, b) => {
      const aDate = getDateFromEvent(a.frontmatter.startDate);
      const bDate = getDateFromEvent(b.frontmatter.startDate);

      if (aDate < bDate) return -1;
      if (aDate == bDate) return 0;
      if (aDate > bDate) return 1;
    })
    .map((event, index) => {
      return <CareerEvent event={event} />;
    });

  return <div className={styles.careerEvtList}>{eventCompnonents}</div>;
};

function getDateFromEvent(dateString) {
  let dateComponents = dateString.split(' ');
  let month = dateComponents[0];
  let year = dateComponents[1];

  return new Date(year, month, 1);
}

export default CareerEventList;
