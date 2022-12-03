import { Link } from 'react-router-dom';
import { useState } from 'react';

function Button(props) {
  const buttonClasses = ["inline-block", "py-4", "text-xl", "text-white", "bg-gray-800", "px-7", "hover:bg-gray-700", "active:bg-gray-600", "rounded-xl", "m-1", "focus:ring", "focus:ring-orange-400"];
  const [activeButton, setActiveButton] = useState(buttonClasses);
  //try with isActive boolean
  function activateButton(){
    if(activeButton.includes("line-through")) {
      setActiveButton(activeButton.filter(a => a !== "line-through"));
    } else {
      setActiveButton([
        ...activeButton, "line-through"
      ])
    }
  }
  return (
    <button className={activeButton.join(" ")}
     onClick={activateButton}>
      <span className="">
        {props.text}
      </span>
    </button>
  );
}
// https://stackoverflow.com/questions/70570025/only-one-active-button-in-react
function Navbar() {
  return (
    <header className="p-4 bg-white shadow md:px-6 md:py-8 dark:bg-gray-900 flex items-center h-[80px] flex items-center justify-center">
      <Link to='/'><span className="text-white text-center text-3xl w-1/5 font-bold">
          <span className="text-orange-400">Wb</span>.io
      </span></Link>
      <nav className="text-3xl font-bold text-center w-4/5">
        <Link to='/offer-workers'><Button text="Offer workers" value="1"></Button></Link>
        <Link to='/search-jobs'><Button text="Search jobs" value="2"></Button></Link>
        <Link to='/search-workers'><Button text="Search workers" value="3"></Button></Link>
        <Link to='/offer-jobs'><Button text="Offer jobs" value="4"></Button></Link>
        <Link to='/account'><Button text="Account" value="5"></Button></Link>
      </nav>
    </header>
  );
}

export default Navbar;
