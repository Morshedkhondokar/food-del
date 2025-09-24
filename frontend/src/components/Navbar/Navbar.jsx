import { assets } from "../../assets/assets";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <div className="p-4 flex justify-between items-center">
      <img src={assets.logo} alt="logo" className="w-[125px]" />
      <ul className="flex gap-8 text-xl text-[#49557e] outfit_font">
        <li>
          <NavLink to={"/"}>Home</NavLink>
        </li>
        <li>
          <NavLink to={"/menu"}>Menu</NavLink>
        </li>
        <li>Mobile-app</li>
        <li>Contact us</li>
      </ul>
      {/* nabvar right */}
      <div className="flex items-center gap-6">
        <img src={assets.search_icon} alt="" />
        <div className="relative">
          <img src={assets.basket_icon} alt="" />
          <div className="absolute bg-[#f16449] size-5 -top-4 -right-3 rounded-xl text-center
           text-white">
            1
          </div>
        </div>
        <button
          className="bg-transparent text-[#49557e] border border-[#f16449] py-2 px-4 
        rounded-full cursor-pointer transition hover:bg-[#fff4f2] "
        >
          Sign in
        </button>
      </div>
    </div>
  );
};

export default Navbar;
