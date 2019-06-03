import React, { Component } from "react";
import { connect } from "react-redux";
import { signIn } from "../../store/actions/authActions";
import { Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import img from "../image/lady.jpg";
const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    color: "black",
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: "25%"
  },
  tit: {
    borderRight: "2px #663399 solid",
    borderBottom: "2px #663399 solid",
    color: "#663399",
    fontSize: 26,
    textTransform: "uppercase",
    alignItems: "center",
    paddingBottom: theme.spacing.unit,
    fontFamily: "'Montserrat', sans-serif",
    "@media screen and (max-width: 900px)": {
      marginBottom: "2%"
    }
  },
  dense: {
    marginTop: 19
  },
  menu: {
    width: 200
  },
  ima: {
    opacity: 0.9,
    width: "50%",
    height: "170%"
  }
});
class SignIn extends Component {
  state = {
    email: "",
    password: ""
  };
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.signIn(this.state);
  };
  render() {
    const { authError, auth, classes } = this.props;
    if (auth.uid) return <Redirect to="/" />;
    return (
      <div className="body">
        <form className="form auth" onSubmit={this.handleSubmit}>
          <p className={classes.tit}>Kroz objektiv</p>
          <p className="middle">
            Voliš fotografiju i želiš nešto novog naučiti?
            <br /> Imaš iskustva za podijeliti? Prijavi se!
          </p>{" "}
          <input
            type="email"
            id="email"
            className="form__textbox"
            placeholder="Email"
            required
            onChange={this.handleChange}
          />
          <input
            type="password"
            id="password"
            className="form__textbox"
            required
            placeholder="Lozinka"
            onChange={this.handleChange}
          />
          <Button type="submit" className="form__button">
            {" "}
            Prijava{" "}
          </Button>
          <div className="center red-text">
            {authError ? <p>{authError}</p> : null}
          </div>
          <p className="form__signup">
            Nemaš korisnički račun?
            <NavLink to="/signup" className="register">
              Registriraj se
            </NavLink>
          </p>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signIn: creds => dispatch(signIn(creds))
  };
};
SignIn.propTypes = {
  classes: PropTypes.object.isRequired
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(SignIn));
