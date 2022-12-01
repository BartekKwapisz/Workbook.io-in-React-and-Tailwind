import { Link } from 'react-router-dom';

function Button(props) {
  return (
    <button className="inline-block py-4 text-xl text-white bg-gray-800 px-7 hover:bg-gray-700 rounded-xl m-1">
     
      <span className="">
        {props.text}
      </span>
    </button>
  );
}

function Navbar() {
  return (
    <header className="p-4 bg-white shadow md:px-6 md:py-8 dark:bg-gray-900 flex items-center h-[80px] flex items-center justify-center">
      <Link to='/'><span className="text-white text-center text-3xl w-1/5">
          <span className="text-orange-400">Wb</span>.io
      </span></Link>
      <nav className="text-3xl font-bold text-center w-4/5">
        <Link to='/offer-workers'><Button text="Offer workers"></Button></Link>
        <Link to='/search-jobs'><Button text="Search jobs"></Button></Link>
        <Link to='/search-workers'><Button text="Search workers"></Button></Link>
        <Link to='/offer-jobs'><Button text="Offer jobs"></Button></Link>
        <Link to='/account'><Button text="Account"></Button></Link>
      </nav>
    </header>
  );
}

export default Navbar;
