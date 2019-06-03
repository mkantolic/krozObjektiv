import React from "react";
import { Link } from "react-router-dom";
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";
import { connect } from "react-redux";
import PropTypes from "prop-types";
const Navbar = props => {
  const { auth, profile, classes } = props;
  // console.log(auth);
  const links = auth.uid ? (
    <SignedInLinks profile={profile} />
  ) : (
    <SignedOutLinks />
  );

  return (
    <div>
      <div className="links">{links}</div>
    </div>
  );
};
Navbar.propTypes = {
  classes: PropTypes.object.isRequired
};
const mapStateToProps = state => {
  // console.log(state);
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  };
};

export default connect(mapStateToProps)(Navbar);
