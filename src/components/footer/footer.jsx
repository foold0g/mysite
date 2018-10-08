import React, { Component } from "react";

class Footer extends Component {
  state = {};
  render() {
    return (
      <div>
        <div className="footer">
          <div className="footer-column column-one">
            Products
            <div className="footer-list-item">Product - 1</div>
            <div className="footer-list-item">Product - 2</div>
            <div className="footer-list-item">Product - 3</div>
            <div className="footer-list-item">Product - 4</div>
          </div>
          <div className="footer-column column-two">Blogs & Community</div>
          <div className="footer-column column-three">Support</div>
          <div className="footer-column column-four">Contact</div>
        </div>
        <div className="footer-horizontal-separator" />
      </div>
    );
  }
}

export default Footer;
