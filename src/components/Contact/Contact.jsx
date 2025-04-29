import React from "react";

const Contact = ({ name, number, onDelete }) => (
  <li>
    {name}: {number}
    <button onClick={onDelete}>Delete</button>
  </li>
);

export default Contact;
