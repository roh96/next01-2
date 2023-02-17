import React, { Children } from "react";

const Layout = ({ children }) => {
  return (
    <>
      <header></header>
      {children}
      <footer></footer>
    </>
  );
};

export default Layout;
