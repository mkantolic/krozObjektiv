import React from "react";
import { NavLink, Link } from "react-router-dom";
import { connect } from "react-redux";
import { signOut } from "../../store/actions/authActions";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Fab from "@material-ui/core/Fab";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import SideBar from "../layout/Sidebar";
const styles = theme => ({
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  appbar: {
    backgroundColor: "black",
    height: "5em",
    display: "flex",
    flexWrap: "wrap"
  },
  second: {
    backgroundColor: "black",
    height: "4em",
    alignItems: "center"
  },
  tit: {
    borderRight: "2px #d6d7da solid",
    borderBottom: "2px #d6d7da solid",
    textTransform: "uppercase",
    alignItems: "center",
    paddingBottom: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    textDecoration: "none",
    color: "#d6d7da",
    fontSize: 25,
    alignItems: "center",
    height: 50,
    fontFamily: "'Montserrat', sans-serif",
    "@media screen and (max-width: 900px)": {
      marginLeft: "20%"
    }
  },
  button: {
    textDecoration: "none",
    color: "white",
    fontSize: 16,
    fontFamily: "'Montserrat', sans-serif"
  },
  buttonLog: {
    textDecoration: "none",
    color: "white",
    fontSize: 16,
    fontFamily: "'Montserrat', sans-serif",
    "@media screen and (max-width: 900px)": {
      display: "none"
    }
  },
  fab: {
    backgroundColor: "#8c57a8",
    fontFamily: "'Montserrat', sans-serif",
    fontSize: 20,
    color: "white",
    alignItems: "center"
  },
  fabSmall: {
    backgroundColor: "#8c57a8",
    fontFamily: "'Montserrat', sans-serif",
    fontSize: 20,
    color: "white",
    alignItems: "center",
    boxShadow: "none",
    marginLeft: 10,
    marginTop: 10
  },
  cat: {
    textDecoration: "none",
    color: "#d6d7da",
    fontSize: 15,
    alignItems: "center",
    fontFamily: "'Montserrat', sans-serif",
    "@media screen and (max-width: 900px)": {
      marginLeft: "20%"
    }
  }
});

const SignedInLinks = props => {
  function burgerToggle() {
    let linksEl = document.querySelector(".narrowLinks");
    if (linksEl.style.display === "block") {
      linksEl.style.display = "none";
    } else {
      linksEl.style.display = "block";
    }
  }
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appbar}>
        <Toolbar>
          <Typography variant="h6" color="inherit" className={classes.grow}>
            <Link to="/" className={classes.tit}>
              Kroz objektiv
            </Link>
          </Typography>

          <Link to="/create" className="navWide">
            <Button className={classes.button}>Novi članak</Button>{" "}
          </Link>
          <Link to="/kviz" className="navWide">
            <Button className={classes.button}>Kviz</Button>{" "}
          </Link>
          <Button onClick={props.signOut} className={classes.buttonLog}>
            Izađi
          </Button>
          <Link to="/" className="navWide">
            <Fab className={classes.fab}> {props.profile.initials}</Fab>
          </Link>
          <ul id="menu">
            <a
              class="menu-button icon-plus"
              href="#menu"
              title="Show navigation"
            >
              <Fab
                className={classes.fabSmall}
                style={{ backgroundColor: "transparent" }}
              >
                {props.profile.initials}
              </Fab>
            </a>
            <a
              className="menu-button icon-minus"
              href="#0"
              title="Hide navigation"
            />
            <li className="menu-item">
              <Link to="/create">
                <svg
                  className="add-button"
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                >
                  <path d="M38 26H26v12h-4V26H10v-4h12V10h4v12h12v4z" />
                </svg>
              </Link>
            </li>
            <li className="menu-item">
              <Link to="/kviz">
                <svg
                  className="camera-button"
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                >
                  <path
                    xmlns="http://www.w3.org/2000/svg"
                    d="M18.8 21l9.53-16.51C26.94 4.18 25.49 4 24 4c-4.8 0-9.19 1.69-12.64 4.51l7.33 12.69.11-.2zm24.28-3c-1.84-5.85-6.3-10.52-11.99-12.68L23.77 18h19.31zm.52 2H28.62l.58 1 9.53 16.5C41.99 33.94 44 29.21 44 24c0-1.37-.14-2.71-.4-4zm-26.53 4l-7.8-13.5C6.01 14.06 4 18.79 4 24c0 1.37.14 2.71.4 4h14.98l-2.31-4zM4.92 30c1.84 5.85 6.3 10.52 11.99 12.68L24.23 30H4.92zm22.54 0l-7.8 13.51c1.4.31 2.85.49 4.34.49 4.8 0 9.19-1.69 12.64-4.51L29.31 26.8 27.46 30z"
                  />
                </svg>
              </Link>
            </li>
            <li className="menu-item" onClick={props.signOut}>
              <svg
                className="close-button"
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                viewBox="0 0 36 36"
              >
                <path d="M28.5 9.62L26.38 7.5 18 15.88 9.62 7.5 7.5 9.62 15.88 18 7.5 26.38l2.12 2.12L18 20.12l8.38 8.38 2.12-2.12L20.12 18z" />{" "}
              </svg>
            </li>
          </ul>
        </Toolbar>
      </AppBar>
      <nav>
        <div className="navWide">
          <div className="wideDiv">
            <Link to="/fotoaparati">
              <Button className={classes.cat}> Fotoaparati</Button>
            </Link>
            <Link to="/recenzije">
              <Button className={classes.cat}> Recenzije fotoaparata</Button>
            </Link>
            <Link to="/tips">
              <Button className={classes.cat}>Tips'n'tricks</Button>
            </Link>
            <Link to="/oprema">
              <Button className={classes.cat}>Oprema</Button>
            </Link>
          </div>
        </div>
        <div className="navNarrow">
          <i className="fa fa-bars fa-2x" onClick={burgerToggle} />
          <div className="narrowLinks">
            <Link to="/fotoaparati" onClick={burgerToggle}>
              <Button className={classes.cat}> Fotoaparati</Button>
            </Link>
            <Link to="/recenzije" onClick={burgerToggle}>
              <Button className={classes.cat}>Recenzije fotoaparata</Button>
            </Link>
            <Link to="/tips" onClick={burgerToggle}>
              <Button className={classes.cat}> Tips'n'tricks</Button>
            </Link>
            <Link to="/oprema" onClick={burgerToggle}>
              <Button className={classes.cat}> Oprema</Button>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};
SignedInLinks.propTypes = {
  classes: PropTypes.object.isRequired
};
const mapDispatchToProps = dispatch => {
  return {
    signOut: () => dispatch(signOut())
  };
};

export default connect(
  null,
  mapDispatchToProps
)(withStyles(styles)(SignedInLinks));
/* 
<div className={classes.root}>
        <AppBar className={classes.appbar}>
          <Toolbar className={classes.toolApp}>
            <Typography variant="h6">
              <Link to="/" className={classes.tit}>
                Kroz objektiv
              </Link>{" "}
            </Typography>
            <div className={classes.link}>
              <Link to="/create" className={classes.button1}>
                <Button className={classes.button}>Novi članak</Button>{" "}
              </Link>
              <Link to="/kviz" className={classes.button1}>
                <Button className={classes.kviz}>Kviz</Button>{" "}
              </Link>
              <Button onClick={props.signOut} className={classes.logout}>
                Izađi
              </Button>
              <NavLink to="/">
                <Fab className={classes.fab}> {props.profile.initials}</Fab>
              </NavLink>
            </div>
          </Toolbar>

          <Toolbar className={classes.second}>
            <Link to="/">
              <Button className={classes.cat}> Fotoaparati</Button>
            </Link>
            <Link to="/">
              <Button className={classes.cat}> Recenzije fotoaparata</Button>
            </Link>
            <Link to="/">
              <Button className={classes.cat}>Tips'n'tricks</Button>
            </Link>
            <Link to="/">
              <Button className={classes.cat}> Oprema</Button>
            </Link>
          </Toolbar>
        </AppBar>{" "}
      </div>{" "}
*/
