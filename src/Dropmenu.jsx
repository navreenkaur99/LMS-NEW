import React from 'react';

const Dropmenu = () => {
  return (
    <nav id="sidebar" className="bg-light">
      <div className="sidebar-header">
        <h3>My Sidebar</h3>
      </div>
      <ul className="list-unstyled components">
        <li>
          <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">
            Home
          </a>
          <ul className="collapse list-unstyled" id="homeSubmenu">
            <li>
              <a href="#">Home 1</a>
            </li>
            <li>
              <a href="#">Home 2</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">
            Pages
          </a>
          <ul className="collapse list-unstyled" id="pageSubmenu">
            <li>
              <a href="#">Page 1</a>
            </li>
            <li>
              <a href="#">Page 2</a>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default Dropmenu;
