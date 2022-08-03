import React from "react";
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <>
      <h1>Error!</h1>
      <p>This page does not, and will never, exist.</p>
      <Link to='/'>Return Home</Link>
    </>
  );
};

export default NotFoundPage;
