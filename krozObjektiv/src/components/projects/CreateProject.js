import React, { Component } from "react";
import { connect } from "react-redux";
import { createProject } from "../../store/actions/projectActions";
import { Redirect } from "react-router-dom";
import ReactQuill from "react-quill";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import "../layout/Style.css";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";

const styles = theme => ({
  container: {
    paddingTop: 50,
    marginLeft: 10,
    marginRight: 15,
    paddingLeft: 30
  },
  root: {
    marginLeft: 10
  },
  quill: {
    marginTop: "2%",
    marginBottom: "3%",
    resize: "vertical",
    "@media screen and (max-width: 480px)": {
      marginBottom: "30% !important"
    }
  },
  head: {
    fontSize: 30,
    fontFamily: "'Montserrat', sans-serif",
    textAlign: "center",
    textTransform: "uppercase",
    letterSpacing: 0.5,
    position: "absolute",
    color: "rgb(115, 70, 124)",
    fontWeight: 900,
    marginLeft: 50,
    whiteSpace: "nowrap",
    marginTop: 10
  },
  link: {
    textDecoration: "none"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    marginTop: theme.spacing.unit,
    paddingBottom: 20
  },
  input: {
    marginLeft: 5,
    fontSize: 20,
    resize: "vertical",
    "@media screen and (max-width: 900px)": {
      height: 160,
      marginBottom: "5%"
    }
  },
  inputCat: {
    fontFamily: "'Montserrat', sans-serif",
    width: "20%"
  },
  buttonPost: {
    margin: theme.spacing.unit,
    fontFamily: "'Montserrat', sans-serif",
    textAlign: "center",
    textTransform: "uppercase",
    letterSpacing: 0.5,
    border: "none",
    borderRadius: "2px",
    color: "#EEEEEE",
    backgroundColor: "rgb(115, 70, 124)",
    fontSize: 20,
    width: 120,
    height: 50,
    marginTop: "5%",
    marginLeft: 5,
    "@media screen and (max-width: 900px)": {
      marginTop: "5%"
    }
  }
});
class CreateProject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      content: "",
      naslovna: "",
      category: "",
      sazetak: ""
    };
    this.handleChangeNaslovna = this.handleChangeNaslovna.bind(this);
    this.handleChangeContent = this.handleChangeContent.bind(this);
    this.handleChangeOption = this.handleChangeOption.bind(this);
  }
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handleChangeNaslovna(values) {
    console.log(this.state);
    this.setState({ naslovna: values });
  }
  handleChangeContent(values) {
    console.log(this.state);
    this.setState({ content: values });
  }
  handleChangeOption = e => {
    this.setState({ category: e.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    // console.log(this.state);
    this.props.createProject(this.state);
    this.props.history.push("/");
  };
  handleChangeInput = event => {
    this.setState({ valu: event.target.value });
  };
  render() {
    const { auth, classes } = this.props;
    if (!auth.uid) return <Redirect to="/signin" />;
    return (
      <div>
        <h4 className={classes.head}>Novi članak</h4>
        <form onSubmit={this.handleSubmit} className={classes.container}>
          <TextField
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true
            }}
            label="Upiši naslov"
            type="text"
            id="title"
            onChange={this.handleChange}
          />
          <br />
          <TextField
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true
            }}
            id="sazetak"
            type="text"
            label="Ukratko opišite o čemu pišete u Vašem članku"
            onChange={this.handleChange}
          />{" "}
          <br />
          <div className={classes.quill}>
            {" "}
            <ReactQuill
              type="quill"
              id="naslovna"
              placeholder="Učitajte sliku za naslovnu, koristite CTRL+V kako biste samo kopirali sliku sa interneta, ili ju samo dovucite iz Vaše datoteke."
              modules={CreateProject.modulesNaslovna}
              formats={CreateProject.formatsNaslovna}
              onChange={this.handleChangeNaslovna}
              className={classes.input}
            />{" "}
          </div>
          <br />
          <div className={classes.quill}>
            <ReactQuill
              type="quill"
              id="content"
              placeholder="Sadržaj Vašeg članka (koristite slike manjeg formata), koristite CTRL+V kako biste samo kopirali sliku sa interneta, ili ju samo dovucite iz Vaše datoteke."
              modules={CreateProject.modules}
              formats={CreateProject.formats}
              onChange={this.handleChangeContent}
              className={classes.input}
            />{" "}
          </div>
          <br />
          <div className="category">
            <InputLabel className="input-label">
              Izaberi kategoriju:{" "}
            </InputLabel>
            <Select
              className={classes.inputCat}
              id="category"
              value={this.state.category}
              onChange={this.handleChangeOption}
              displayEmpty
              inputProps={{
                name: "category",
                id: "age-simple"
              }}
            >
              <MenuItem value={"Fotoaparati"}>Fotoaparati</MenuItem>
              <MenuItem value={"Recenzije fotoaparata"}>
                Recenzije fotoaparata{" "}
              </MenuItem>
              <MenuItem value={"Tips'n'tricks"}>Tips'n'tricks</MenuItem>
              <MenuItem value={"Oprema"}>Oprema</MenuItem>
            </Select>{" "}
          </div>
          <div>
            <button className={classes.buttonPost}>Kreiraj</button>
          </div>
        </form>
      </div>
    );
  }
}
CreateProject.modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }],
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" }
    ],
    ["link", "image", "video"],
    ["clean"]
  ],

  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false
  }
};

CreateProject.formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
  "video"
];
CreateProject.modulesNaslovna = {
  toolbar: [["image"]],
  clipboard: {
    matchVisual: false
  }
};

CreateProject.formatsNaslovna = ["image"];

CreateProject.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createProject: project => dispatch(createProject(project))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(CreateProject));
