import React, { Component } from "react";
// import { Link } from "react-router-dom";

class Contact extends Component {
  render() {
    if (this.props.data) {
      // var name = this.props.data.name;
      // var street = this.props.data.address.street;
      // var city = this.props.data.address.city;
      // var state = this.props.data.address.state;
      // var zip = this.props.data.address.zip;
      // var phone = this.props.data.phone;
      // var email = this.props.data.email;
      var message = this.props.data.contactmessage;
    }

    return (
      <section id="contact">
        <div className="row section-head">
          <div className="two columns header-col">
            <h1>
              <span>Get In Touch.</span>
            </h1>
          </div>

          <div className="ten columns">
            <p className="lead">{message}</p>
          </div>
        </div>
        <div className="contactform">
          <a href="/contact.html" target="_blank">
            <button className="submit">Contact Form</button>
          </a>
        </div>
      </section>
    );
  }
}

export default Contact;
