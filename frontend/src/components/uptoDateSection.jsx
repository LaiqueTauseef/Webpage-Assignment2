import React, { Component } from "react";
import axios from "axios";

class UpToDateSection extends Component {
  state = { email: "" };

  sendPostRequest = async (url, data) => {
    await axios.post(url, data);
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.setState({ email: e.target.value });
    this.sendPostRequest("http://localhost:4000/subscription", {
      email: this.state.email,
    });
  };

  handleChange = ({ currentTarget: input }) => {
    const data = { ...this.state };
    data["email"] = input.value;

    this.setState({ email: data["email"] });
  };

  render() {
    return (
      <section className="section-blue">
        <table style={{ width: "100%" }}>
          <tbody>
            <tr className="row">
              <td className="col">
                <h1>Stay up to date!</h1>
              </td>
            </tr>
            <tr className="row">
              <td className="col-4"></td>
              <td className="col-4">
                <form onSubmit={this.handleSubmit}>
                  <div className="form-group d-flex justify-content-center">
                    <input
                      className="form-control"
                      type="email"
                      id="subEmail"
                      name="subEmail"
                      placeholder="Email"
                      onChange={this.handleChange}
                    />
                    <input
                      type="submit"
                      id="subBtn"
                      className="btn btn-sm btn"
                      value="Subscribe"
                    />
                  </div>
                </form>
              </td>
              <td className="col-4"></td>
            </tr>
          </tbody>
        </table>
      </section>
    );
  }
}

export default UpToDateSection;
