import React from "react";

const ContactUsSection = () => {
  return (
    <section className="section-white">
      <table style={{ width: "100%" }}>
        <tbody>
          <tr className="row">
            <td className="col">
              <h1>Contact Us</h1>
            </td>
          </tr>
          <tr className="row">
            <td className="col-3"></td>
            <td className="col-6">
              <form className="form-border-curved">
                <div>
                  <label className="form-labels" htmlFor="name">
                    Name
                  </label>
                  <br />
                  <input
                    className="form-fields "
                    type="text"
                    id="name"
                    name="name"
                  />
                </div>

                <div>
                  <label className="form-labels" htmlFor="email">
                    Email
                  </label>
                  <input
                    className="form-fields"
                    type="email"
                    id="email"
                    name="email"
                  />
                </div>

                <div>
                  <label className="form-labels" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    className="no-textarea-border"
                    name="message"
                    id="message"
                    cols="30"
                    rows="5"
                  ></textarea>
                </div>
                <div className="button-div">
                  <input
                    type="submit"
                    value="Send"
                    className="form-submit-button"
                  />
                </div>
              </form>
            </td>
            <td className="col-3"></td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default ContactUsSection;
