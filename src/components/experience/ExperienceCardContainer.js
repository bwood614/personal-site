import React, { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as experienceActions from "../../redux/actions/experienceActions";
import ExperienceCard from "./ExperienceCard";

const ExperienceCardContainer = ({ experiences, actions }) => {
  const style = {
    width: "70%",
    margin: "0px auto",
  };

  useEffect(() => {
    actions.loadExperiences().catch((error) => {
      alert("Loading experiences failed" + error);
    });
  }, []);

  return (
    <div style={style}>
      {experiences.map((job) => (
        <ExperienceCard
          key={job.id}
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

function mapStateToProps(state) {
  return {
    experiences: state.experiences,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      loadExperiences: bindActionCreators(
        experienceActions.loadExperiences,
        dispatch
      ),
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExperienceCardContainer);
