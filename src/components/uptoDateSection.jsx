import React from "react";

const UptoDateSection = () => {
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
              <form>
                <div className="form-group d-flex justify-content-center">
                  <input
                    className="form-control"
                    type="email"
                    id="subEmail"
                    name="subEmail"
                    placeholder="Email"
                  />
                  <label id="subLabel" htmlFor="subEmail">
                    Subscribe
                  </label>
                </div>
              </form>
            </td>
            <td className="col-4"></td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default UptoDateSection;
