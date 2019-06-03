import React from "react";
import { withStyles } from "@material-ui/core/styles";
import CardMedia from "@material-ui/core/CardMedia";
import PropTypes from "prop-types";
import "../layout/Style.css";
const styles = theme => ({
  card: {
    maxWidth: 400
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  }
});
const ProjectSummary = ({ project, classes }) => {
  return (
    <div className="tile">
      <CardMedia className={classes.card}>
        <div dangerouslySetInnerHTML={{ __html: project.naslovna }} />
        <div className="text">
          <h2>{project.title}</h2>
          <p className="animate-text">
            <span className="sazetak"> {project.sazetak}</span>
          </p>
          <p className="animate-text">
            <span>
              Autor:{project.authorFirstName} {project.authorLastName}{" "}
            </span>{" "}
            <br />
          </p>
        </div>
      </CardMedia>
    </div>
  );
};
ProjectSummary.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ProjectSummary);
