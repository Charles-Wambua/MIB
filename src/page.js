import React from "react";
import { Link } from "react-router-dom";

function Page() {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/contacts">Contacts</Link>
      <Link to="/about">about</Link>
      <Link to="/services">help</Link>
    </div>
  );
}

export default Page;
