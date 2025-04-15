import { NavLink, Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import { BiMenu } from "react-icons/bi";
import { useRef, useEffect, useContext } from "react";
import { AuthContext } from "../AuthContext.jsx"
import { HashLoader } from "react-spinners/HashLoader"
import { useState } from "react";

const navLinks = [
  { path: "/home", display: "Home" },
  { path: "/doctors", display: "Doctors" },
  { path: "/services", display: "Services" },
  { path: "/contact", display: "Contact" }
];

const Header = () => {
  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const { user, role, token } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const handleStickyHeader = () => {
    window.addEventListener("scroll", () => {
      if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        headerRef.current?.classList.add("sticky__header");
      } else {
        headerRef.current?.classList.remove("sticky__header");
      }
    });
  };

  useEffect(() => {
    handleStickyHeader();
    return () => {
      window.removeEventListener("scroll", handleStickyHeader);
    };
  }, []);

  return (
    <header className="header flex items-center" ref={headerRef}>
      <div className="container">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div>
            <img src={logo} alt="Logo" />
          </div>

          {/* Navigation */}
          <div className="navbar">
            <ul className="menu flex items-center gap-[2.7rem]">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      isActive
                        ? "text-blue-950 text-[16px] leading-7 font-[600]"
                        : "text-emerald-950 text-[16px] leading-7 font-[500] hover:text-green-600"
                    }
                  >
                    {link.display}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Profile & Login Section */}
          <div className="flex items-center gap-4">
            {token && user ? (
              <div className="flex items-center gap-4">
                <Link to={`${role === 'doctor' ? '/doctors/profile/me' : '/users/profile/me'}`} className="flex items-center gap-2">
                  <figure className="w-[35px] h-[35px] rounded-full cursor-pointer">
                    <img src={user?.photo} alt="User" className="w-full h-full object-cover rounded-full" />
                  </figure>
                  <h2 className="text-base font-semibold">{user?.name}</h2>
                </Link> 
              </div>
            ) : (
              <Link to="/login">
                <button className="bg-amber-500 py-2 px-6 text-white font-semibold text-lg rounded-lg shadow-md hover:bg-amber-600 hover:shadow-lg transition-all duration-300 ease-in-out">
                {loading ? <HashLoader size={25} color="#ffffff" /> : "Login"}
                </button>
              </Link>
            )}
            {/* Menu Icon (for Mobile) */}
            <span className="md:hidden">
              <BiMenu className="w-6 h-6 cursor-pointer" />
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
