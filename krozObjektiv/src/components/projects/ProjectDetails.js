import React, { Component } from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import moment from "moment";
import Footer from "../layout/Footer";
class ProjectDetails extends Component {
  handleChangeInput = event => {
    this.setState({ comment: event.target.value });
    console.log(this.setState);
  };

  handleClick = () => {
    const { firestore, id } = this.props;
    firestore.delete({ collection: "projects", doc: id });
    this.props.history.push("/");
  };
  render() {
    const { project, id, auth } = this.props;
    if (!auth.uid) return <Redirect to="/signin" />;
    //napravi delete button

    if (project) {
      return (
        <div>
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-md-6 col-sm-12">
                <div
                  className="card"
                  dangerouslySetInnerHTML={{ __html: project.naslovna }}
                />
                <Typography className="col-lg-4 col-md-6 col-sm-12">
                  <h1 className="post-title">{project.title}</h1>
                  <span className="signature">
                    Autor : {project.authorFirstName} {project.authorLastName}
                  </span>
                </Typography>
              </div>
            </div>
          </div>
          <div className="subject">
            <Typography>
              <div
                className="post-quill"
                dangerouslySetInnerHTML={{ __html: project.content }}
              />
            </Typography>{" "}
            {project.authorId === auth.uid && (
              <button className="button-delete" onClick={this.handleClick}>
                Izbriši članak <i className="far fa-trash-alt" />
              </button>
            )}
            <span className="time">
              Kreirano: {moment(project.createdAt.toDate()).format(" LLL ")}
            </span>
            <p className="post-category">Kategorija: {project.category} </p>
          </div>{" "}
          <div className="horizontal-line">
            <hr />
          </div>{" "}
          <Footer />
        </div>
      );
    } else {
      return (
        <div className="container center">
          <p>Učitavanje...</p>
        </div>
      );
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const projects = state.firestore.data.projects;
  const project = projects ? projects[id] : null;
  return {
    project: project,
    auth: state.firebase.auth,
    id: ownProps.match.params.id,
    doc: ownProps.match.params.id
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {
      collection: "projects"
    }
  ])
)(ProjectDetails);
