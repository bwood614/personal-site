import React, { useState } from "react";
import emailjs from "emailjs-com";

const Emailer = () => {
  const style = {
    container: {
      width: "80%",
      margin: "0px auto",
    },
    table: {
      width: "100%",
    },
  };

  const [fromEmail, setFromEmail] = useState("");
  const [subjectLine, setSubjectLine] = useState("");
  const [emailMessage, setEmailMessage] = useState("");

  const handleChange = (e) => {
    if (e.target.name === "emailMessage") {
      setEmailMessage(e.target.value);
    }
    if (e.target.name === "fromEmail") {
      setFromEmail(e.target.value);
    }
    if (e.target.name === "subjectLine") {
      setSubjectLine(e.target.value);
    }
  };

  const handleSubmit = () => {
    console.log(fromEmail, subjectLine, emailMessage);
    emailjs
      .send(
        "service_5bf8b3g",
        "template_nzwxvwd",
        {
          from_email: fromEmail,
          message: emailMessage,
          subject_line: subjectLine,
        },
        "user_ewaFLLx52ca6fxvhHSppX"
      )
      .then(
        (result) => {
          alert("Message Sent, We will get back to you shortly", result.text);
        },
        (error) => {
          alert("An error occurred, Please try again", error.text);
        }
      );
    setFromEmail("");
    setSubjectLine("");
    setEmailMessage("");
  };

  return (
    <div style={style.container}>
      <table style={style.table}>
        <tr>
          <td style={{ width: "150px" }}>Email Address</td>
          <td>
            <input
              type="text"
              name="fromEmail"
              value={fromEmail}
              onChange={handleChange}
              style={{ width: "50%" }}
            />
          </td>
        </tr>
        <tr>
          <td>Subject</td>
          <td>
            <input
              type="text"
              name="subjectLine"
              value={subjectLine}
              onChange={handleChange}
              style={{ width: "50%" }}
            />
          </td>
        </tr>
        <tr>
          <td>Message</td>
          <td>
            <textarea
              name="emailMessage"
              value={emailMessage}
              onChange={handleChange}
              style={{ width: "100%", height: "300px", resize: "none" }}
            />
          </td>
        </tr>
      </table>
      <button onClick={handleSubmit}>Send Message</button>
    </div>
  );
};

export default Emailer;
