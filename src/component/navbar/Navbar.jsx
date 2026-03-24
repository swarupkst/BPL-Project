import React from "react";
import dollerImg from "../../assets/dollar_1.png";
import logoImg from "../../assets/logo.png"

const Navbar = () => {
    return (
      <div className="pt-4">
        <div className="navbar bg-base-100 shadow-sm">
  <div className="flex-1">
    <img src={logoImg} alt="logo" />
  </div>
  <div className="flex items-center gap-6">
  
  {/* Menu */}
  <ul className="flex items-center gap-6">
    <li>Home</li>
    <li>Fixture</li>
    <li>Teams</li>
    <li>Schedules</li>
  </ul>

  {/* Button */}
  <button className="btn flex items-center gap-2 font-bold text-xl">
    0 coins
    <img src={dollerImg} alt="dollar icon" className="w-6 h-6"/>
  </button>

</div>
</div>
</div>
    )
    }

    export default Navbar;