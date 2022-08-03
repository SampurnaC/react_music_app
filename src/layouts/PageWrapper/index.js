import React from "react";
import { Outlet, NavLink, useNavigate } from "react-router-dom";

const PageWrapper = () => {

  const navigator = useNavigate();

  const handleBack = () => {
    navigator(-1);
  }

  return (
    <>
      <header>
        <nav>
          <NavLink to ='/'>Home</NavLink>
          <NavLink to ='/aboutartists'>About Artists</NavLink>
          <NavLink to ='/albums'>Albums</NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer><button onClick={handleBack}>Back</button></footer>
    </>
  );
};

export default PageWrapper;
