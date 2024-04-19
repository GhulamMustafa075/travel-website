import "./navbar.css";
import { SiYourtraveldottv } from "react-icons/si";
import { AiFillCloseCircle } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";
import { useState } from "react";

const Navbar = () => {
  const [active, setActive] = useState("navBar");
  const [transparent, setTransparent] = useState("header");

  const showNav = () => {
    setActive("navBar activeNavbar");
  };
  const removeNav = () => {
    setActive("navBar");
  };

  const addBg = () => {
    if (window.scrollY >= 10) {
      setTransparent("header activeHeader");
    } else {
      setTransparent("header");
    }
  };
  window.addEventListener("scroll", addBg);

  return (
    <section className="navBarSection">
      <div className={transparent}>
        <div className="logoDiv">
          <a href="dot" className="logo">
            <h1 className="flex">
              <SiYourtraveldottv className="icon" />
              Dot
            </h1>
          </a>
        </div>

        <div className={active}>
          <ul className="navLists flex">
            <li className="navItem">
              <a href="home" className="navLink">
                Home
              </a>
            </li>
            <li className="navItem">
              <a href="products" className="navLink">
                Products
              </a>
            </li>
            <li className="navItem">
              <a href="resources" className="navLink">
                Resources
              </a>
            </li>
            <li className="navItem">
              <a href="contact" className="navLink">
                Contact
              </a>
            </li>
            <li className="navItem">
              <a href="blog" className="navLink">
                Blog
              </a>
            </li>

            <div className="headerBtns flex">
              <button className="btn loginBtn">
                <a href="login">Login</a>
              </button>
              <button className="btn">
                <a href="sign">Sign up</a>
              </button>
            </div>
          </ul>

          <div onClick={removeNav} className="closeNavbar">
            <AiFillCloseCircle className="icon" />
          </div>
        </div>

        <div onClick={showNav} className="toggleNavbar">
          <TbGridDots className="icon" />
        </div>
      </div>
    </section>
  );
};
export default Navbar;
