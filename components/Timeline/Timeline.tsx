import React from 'react';
import { VerticalTimeline } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Event from './Event';
import events from '../../pages/history/history.json';

// TODO: Get events out of this component

const Timeline = () => {
  return (
    <VerticalTimeline>
      {events.map((event, idx) => (
        <Event
          date={event.date}
          title={event.title}
          body={event.body}
          img={event.img}
          link={event.link}
          buttonText={event.buttonText}
          key={event.link}
          idx={idx}
        />
      ))}
    </VerticalTimeline>
  );
};

export default Timeline;
