import React from "react";
import dollerImg from "../../assets/dollar_1.png";
import logoImg from "../../assets/logo.png"
import { FaBars } from "react-icons/fa";

const Navbar = () => {
    return (
      <div className="pt-4">
      <div className="navbar bg-base-100 shadow-sm px-2">

        {/* LEFT: Logo + Mobile Menu */}
        <div className="flex-1 flex items-center gap-2">

          {/* Mobile Dropdown */}
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              ☰
            </div>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-40"
            >
              <li><a>Home</a></li>
              <li><a>Fixture</a></li>
              <li><a>Teams</a></li>
              <li><a>Schedules</a></li>
            </ul>
          </div>

          {/* Logo */}
          <img src={logoImg} alt="logo" className="w-28 md:w-32" />
        </div>

        {/* RIGHT: Desktop Menu + Button */}
        <div className="flex items-center gap-4">

          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center gap-6">
            <li>Home</li>
            <li>Fixture</li>
            <li>Teams</li>
            <li>Schedules</li>
          </ul>

          {/* Coins Button */}
          <button className="btn flex items-center gap-2 font-bold text-sm md:text-lg px-3 md:px-4">
            0 coins
            <img src={dollerImg} alt="dollar icon" className="w-5 h-5 md:w-6 md:h-6"/>
          </button>

</div>
</div>
</div>
    )
    }

    export default Navbar;