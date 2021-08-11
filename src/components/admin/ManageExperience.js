import React, { useEffect } from "react";
import * as experienceActions from "../../redux/actions/experienceActions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

const ManageExperience = ({ experience, experiences, actions }) => {
  useEffect(() => {
    if (experiences.length === 0) {
      actions.loadExperiences().catch((error) => {
        alert("Loading experiences failed" + error);
      });
    }
  }, []);

  return (
    <div>
      <h1>Edit Experience</h1>
      {experience.jobTitle}
      {experience.company}
    </div>
  );
};

export function getExperienceById(experiences, id) {
  return (
    experiences.find((experience) => experience.id === parseInt(id, 10)) || null
  );
}

const newExperience = {
  id: 111,
  jobTitle: "",
  startDate: "",
  endDate: "",
  company: "",
  location: "",
  imgURL: "",
  actionBullets: [],
};

function mapStateToProps(state, ownProps) {
  const experienceId = ownProps.match.params.id;

  const experience =
    experienceId && state.experiences.length > 0
      ? getExperienceById(state.experiences, experienceId)
      : newExperience;

  return {
    experience: experience,
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

export default connect(mapStateToProps, mapDispatchToProps)(ManageExperience);
