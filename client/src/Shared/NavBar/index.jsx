import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faEnvelope, faBars } from '@fortawesome/free-solid-svg-icons';
import image from "../../assets/gouda_beard_glasses_dark_long_jacket_1f4260f7-23b5-4a77-be84-993331fb3fa9 - Copy.png"
import { useSelector } from 'react-redux';

const Navbar = () => {

  const { user } = useSelector((state) => state.user);
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="relative flex w-full flex-wrap items-center justify-between bg-[#FBFBFB] py-2 text-neutral-500 shadow-sm lg:py-4">
      <div className="flex w-full flex-wrap items-center justify-between px-3 pt-2">
        <div className="flex">
          <p className="text-3xl font-bold ml-10">Hello {user.name},</p>
        </div>

        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-2xl p-2">
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>

        <form className="lg:flex hidden">
          <input
            type="search"
            className="relative m-0 block w-[250px] min-w-0 flex-auto rounded-full border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-500 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary motion-reduce:transition-none"
            placeholder="Search"
          />
          <span
            className="input-group-text mr-7 flex items-center whitespace-nowrap rounded px-3 text-center text-base font-normal text-neutral-700 dark:text-neutral-200"
            id="basic-addon2"
          >
            <FontAwesomeIcon icon={faEnvelope} className="h-6 w-6 mx-2 text-[#448d9b]" />
            <FontAwesomeIcon icon={faBell} className="h-6 w-6 mx-2 text-[#448d9b]" />
            <img
              src={image}
              className="h-8 w-8 rounded-full mx-1"
              alt=""
              loading="lazy"
              />
          </span>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
