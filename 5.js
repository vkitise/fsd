import React from "react";
const issues = [
  { id: 1, title: "Bug in Login", description: "Fix login button not working", status: "Open" },
  { id: 2, title: "UI Fix", description: "Align header text properly", status: "Closed" },
  { id: 3, title: "Performance Issue", description: "Optimize API calls for dashboard", status: "Open" },
  { id: 4, title: "Security Alert", description: "Check SQL injection vulnerability", status: "Closed" }
];
export default () => (
  <div style={{ maxWidth:600, margin:"20px auto", fontFamily:"Arial" }}>
    <h2>Issue Tracker</h2>
    {issues.map(({ id, title, description, status }) => (
      <div key={id} style={{
        border:"1px solid #ddd", borderRadius:8, padding:10, margin:"10px 0",
        backgroundColor: status==="Open" ? "#ffeb3b" : "#c8e6c9"
      }}>
        <h3>{title}</h3>
        <p>{description}</p>
        <b>Status: {status}</b>
      </div>
    ))}
  </div>
);
