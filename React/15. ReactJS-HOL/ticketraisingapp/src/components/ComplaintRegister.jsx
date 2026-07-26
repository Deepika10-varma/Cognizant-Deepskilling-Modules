import { useState } from "react";

function ComplaintRegister() {
  const [ename, setEname] = useState("");
  const [complaint, setComplaint] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const referenceId = Math.floor(10000 + Math.random() * 90000);

    alert(
      `Thanks ${ename}\nYour Complaint was Submitted.\nTransaction ID is: ${referenceId}`
    );

    setEname("");
    setComplaint("");
  };

  return (
    <div className="form-container">
      <h1>Register your complaints here!!!</h1>

      <form onSubmit={handleSubmit}>
        <table>
          <tbody>
            <tr>
              <td>Name:</td>
              <td>
                <input
                  type="text"
                  value={ename}
                  onChange={(e) => setEname(e.target.value)}
                  required
                />
              </td>
            </tr>

            <tr>
              <td>Complaint:</td>
              <td>
                <textarea
                  rows="4"
                  cols="25"
                  value={complaint}
                  onChange={(e) => setComplaint(e.target.value)}
                  required
                ></textarea>
              </td>
            </tr>

            <tr>
              <td></td>
              <td>
                <button type="submit">Submit</button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
}

export default ComplaintRegister;