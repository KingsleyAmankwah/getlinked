import React from "react";

const TimelineItem = ({ date, title, content }) => (
  <li>
    <div className="timeline-content">
      <div className="date tertiary-color">{date}</div>
      <h1 className="font-semibold text-lg mb-2 tertiary-color">{title}</h1>
      <p className="font-light text-base">{content}</p>
    </div>
  </li>
);

function Timeline() {
  const timelineData = [
    {
      title: "Hackathon Announcement",
      content:
        "The GetLinked Tech Hackathon 1.0 is formally announced to the general public, and teams begin to get ready to register.",
      date: "November 18, 2023",
    },
    {
      number: 2,
      title: "Teams Registration Begins",
      content:
        "Interested teams can now show their interest in the GetLinked Tech Hackathon 1.0 2023 by proceeding to register.",
      date: "November 18, 2023",
    },
    {
      number: 3,
      title: "Teams Registration Ends",
      content: "Interested participants are no longer allowed to register.",
      date: "November 18, 2023",
    },
    {
      number: 4,
      title: "Announcement of Accepted Teams and Ideas",
      content:
        "All teams whose ideas have been accepted into GetLinked Tech Hackathon 1.0 2023 are formally announced.",
      date: "November 18, 2023",
    },
    {
      number: 5,
      title: "GetLinked Hackathon 1.0 Officially Begins",
      content:
        "Accepted teams can now proceed to build their groundbreaking skill-driven solutions.",
      date: "November 18, 2023",
    },
    {
      number: 6,
      title: "Demo Day",
      content:
        "Teams get the opportunity to pitch their projects to judges. The winner of the hackathon will also be announced on this day.",
      date: "November 18, 2023",
    },
  ];

  return (
    <>
      <div className="timeline-container ">
        <div className="md:py-24 py-12 text-center">
          <h3 className="timeline-header">Timeline</h3>
          <p className="timeline-paragraph text-center">
            Here is the breakdown of the time we anticipate using for the
            upcoming event.
          </p>
        </div>
        <div className="timeline">
          <ul>
            {timelineData.map((item, index) => (
              <TimelineItem
                key={index}
                date={item.date}
                title={item.title}
                content={item.content}
              />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Timeline;
