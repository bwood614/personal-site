import React from "react";
import ExperienceCard from "./ExperienceCard";

const ExperienceCardContainer = () => {
  const style = {
    width: "70%",
    margin: "0px auto",
  };

  const MOCK_DATA = [
    {
      jobTitle: "Software Engineer Intern",
      startDate: "June 2021",
      endDate: "August 2021",
      company: "Cvent",
      location: "Remote",
      imgURL: "",
      actionBullets: [
        "Designed and developed new websites from scratch using the ASP.NET MVC framework to accommodate the needs of customers",
        "Maintained over 30 existing websites by implementing customer requested changes and fixing reported bugs in order to ensure high quality user experiences",
        "Communicated directly with customers to discuss project requirements, provide solutions, and thereby establish trusting relationships",
        "Participated in weekly team meetings to report progress and provide help and support for one another",
      ],
    },
    {
      jobTitle: "Web Developer",
      startDate: "January 2021",
      endDate: "Present",
      company: "BYU College of Family, Home, and Social Sciences",
      location: "Provo, UT",
      imgURL: "",
      actionBullets: [
        "Designed and developed new websites from scratch using the ASP.NET MVC framework to accommodate the needs of customers",
        "Maintained over 30 existing websites by implementing customer requested changes and fixing reported bugs in order to ensure high quality user experiences",
        "Communicated directly with customers to discuss project requirements, provide solutions, and thereby establish trusting relationships",
        "Participated in weekly team meetings to report progress and provide help and support for one another",
      ],
    },
  ];

  return (
    <div style={style}>
      {MOCK_DATA.map((job) => (
        <ExperienceCard
          jobTitle={job.jobTitle}
          startDate={job.startDate}
          endDate={job.endDate}
          company={job.company}
          location={job.location}
          imgURL={job.imgURL}
          actionBullets={job.actionBullets}
        />
      ))}
    </div>
  );
};

export default ExperienceCardContainer;
