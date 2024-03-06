// CustomNavbar.jsx

"user client";


import React from 'react';

const CustomNavbar = () => {


  // Your component logic here
  return (
    <nav className="bg-blue-600 h-12 py-2 px-3 flex justify-between items-center">
      <div className="brand">
          <h1 className="text-2xl font-semibold">
              <a href="">
                  Work Manager
              </a>
          </h1>
      </div>

      <div>
          <ul className="flex space-x-3">
              <li>
                  <a href="#!">Home</a>
              </li>
              <li>
                  <a href="#!">Add Task</a>
              </li>
              <li>
                  <a href="#!">Show Task</a>
              </li>
          </ul>
      </div>

        <div>
            <ul className="flex space-x-3">
                <li>
                    <a href="#!">Sign Up</a>
                </li>
                <li>
                    <a href="#!">Login</a>
                </li>
            </ul>
        </div>


    </nav>
  );
};

export default CustomNavbar;
