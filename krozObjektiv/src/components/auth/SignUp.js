import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { signUp } from "../../store/actions/authActions";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core";
const styles = theme => ({
  tit: {
    borderRight: "2px #663399 solid",
    borderBottom: "2px #663399 solid",
    color: "#663399",
    fontSize: 28,
    textTransform: "uppercase",
    alignItems: "center",
    paddingBottom: theme.spacing.unit,
    fontFamily: "'Montserrat', sans-serif",
    "@media screen and (max-width: 900px)": {
      marginBottom: "2%"
    }
  }
});
class SignUp extends Component {
  state = {
    email: "",
    password: "",
    firstName: "",
    lastName: ""
  };
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.signUp(this.state);
  };
  render() {
    const { auth, authError, classes } = this.props;
    if (auth.uid) return <Redirect to="/" />;
    return (
      <div className="body">
        <form className="form reg" onSubmit={this.handleSubmit}>
          <p className={classes.tit}>Kroz objektiv</p>
          <p className="middle">
            Voliš fotografiju i želiš nešto novog naučiti?
            <br /> Imaš iskustva za podijeliti? Prijavi se!
          </p>{" "}
          <input
            className="form__textbox"
            type="email"
            id="email"
            placeholder="Email"
            onChange={this.handleChange}
            required
          />
          <input
            className="form__textbox"
            type="password"
            id="password"
            onChange={this.handleChange}
            placeholder="Lozinka"
            required
          />
          <input
            className="form__textbox"
            type="firstName"
            id="firstName"
            onChange={this.handleChange}
            placeholder="Ime"
            required
          />
          <input
            className="form__textbox"
            type="lastName"
            id="lastName"
            onChange={this.handleChange}
            placeholder="Prezime"
            required
          />
          <Button type="submit" className="form__button">
            {" "}
            Registriraj se{" "}
          </Button>
          <div className="center red-text">
            {authError ? <p>{authError}</p> : null}
          </div>
          <p className="form__signup">
            Već imaš korisnički račun?
            <NavLink to="/signin" className="login">
              Ulogiraj se
            </NavLink>
          </p>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
    authError: state.auth.authError
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signUp: creds => dispatch(signUp(creds))
  };
};
SignUp.propTypes = {
  classes: PropTypes.object.isRequired
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(SignUp));
