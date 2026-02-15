import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex gap-6">
        <Link to="/" className="text-white hover:text-gray-200">
          Home
        </Link>
        <Link to="/flexbox" className="text-white hover:text-gray-200">
          Flexbox
        </Link>
        <Link to="/form" className="text-white hover:text-gray-200">
          Form
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
