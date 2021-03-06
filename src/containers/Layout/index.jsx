import React from "react";
import useBoardLists from "../../hooks/useBoardLists";

import "./Layout.css";

const Layout = () => {
  const { lists } = useBoardLists({ id: 'LOmGJfmG' });
  console.log(lists);

  return (
    <div className="container">
      <h1>Hello World!</h1>
    </div>
  );
};

export default Layout;
