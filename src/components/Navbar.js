import { Link } from "react-router-dom";
import React, { useState } from "react";
import Hamburger from "./Hamburger";

function Buttons() {
  const buttonClasses = [
    "inline-block",
    "py-4",
    "text-xl",
    "text-white",
    "bg-gray-800",
    "px-7",
    "hover:bg-gray-700",
    "active:bg-gray-600",
    "rounded-xl",
    "m-1",
    "shrink-on-medium-screen"
  ];

  const inactiveButtonClasses = buttonClasses.join(" ");

  const activeButtonClasses = [
    ...buttonClasses,
    "ring",
    "ring-orange-400",
  ].join(" ");

  const buttonsText = [
    "Offer workers",
    "Search jobs",
    "Search workers",
    "Offer jobs",
    "Account",
  ];

  const linkTo = [
    "/offer-workers",
    "/search-jobs",
    "/search-workers",
    "/offer-jobs",
    "/account",
  ];

  const [activeBtn, setActive] = useState({
    activeObject: null,
    objects: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }],
  });

  function toggleActive(index) {
    setActive({ ...activeBtn, activeObject: activeBtn.objects[index] });
  }

  function toggleActiveStyles(index) {
    if (activeBtn.objects[index] === activeBtn.activeObject) {
      return activeButtonClasses;
    } else {
      return inactiveButtonClasses;
    }
  }

  return (
    <>
      {activeBtn.objects.map((elements, index) => (
        <Link key={index} to={linkTo[index]}>
          <button
            key={index}
            className={toggleActiveStyles(index)}
            onClick={() => {
              toggleActive(index);
            }}
          >
            {buttonsText[index]}
          </button>
        </Link>
      ))}
    </>
  );
}

function Navbar() {
  return (
    <header className="p-4 bg-white shadow md:px-6 md:py-8 dark:bg-gray-900 flex items-center h-[80px] flex items-center justify-center">
      <Link to="/">
        <span className="text-white text-center text-3xl w-1/5 font-bold">
          <span className="text-orange-400">Wb</span>.io
        </span>
      </Link>
      <nav className="text-3xl font-bold text-center w-4/5 hide-on-small-screen">
        <Buttons></Buttons>
      </nav> 
      
      <Hamburger></Hamburger>
    </header>
  );
}

export default Navbar;
