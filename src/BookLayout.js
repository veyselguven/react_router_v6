import React from "react";
import { Link, Outlet } from "react-router-dom";

function BookLayout() {
  return (
    <div>
      <Link to="/books/1">Book1</Link>
      <br />
      <Link to="/books/2">Book2</Link>
      <br />
      <Link to="/books/new">New Book</Link>
      <Outlet context={{ hello: "World" }} />
    </div>
  );
}

export default BookLayout;
