import React from "react";
import ProjectSummary from "./ProjectSummary";
import { Link } from "react-router-dom";
import Footer from "../layout/Footer";

const ProjectList = ({ projects }) => {
  return (
    <div className="project-list section">
      {projects &&
        projects.map(project => {
          return (
            <Link to={"/project/" + project.id} key={project.id}>
              <ProjectSummary project={project} />
            </Link>
          );
        })}
      <Footer />
    </div>
  );
};

export default ProjectList;
