import React, { Component } from "react";
class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      current: 0,
      value: 0,
      message: localStorage.getItem("message") || ""
    };
  }
  componentDidMount() {
    window.addEventListener("scroll", this.handeleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handeleScroll);
  }
  handeleScroll() {
    if (
      document.body.scrollTop > 50 ||
      document.documentElement.scrollTop > 50
    ) {
      document.getElementById("myBtn").style.display = "block";
    } else {
      document.getElementById("myBtn").style.display = "none";
    }
  }
  topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  render() {
    return (
      <div>
        <button
          onClick={this.topFunction}
          id="myBtn"
          className="sticky"
          title="Idi na početak"
        >
          <i class="fas fa-angle-up" />
        </button>
      </div>
    );
  }
}
export default Footer;
