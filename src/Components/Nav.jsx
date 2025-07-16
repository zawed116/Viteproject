import { CgNametag } from 'react-icons/cg';
import { AiOutlineClose } from 'react-icons/ai';
import { HiMenuAlt1 } from 'react-icons/hi';
import { useState } from 'react';

const Nav = () => {
  const [toggle, setToggle] = useState(false);

  function openMenu() {
    setToggle(true);
  }

  function closeMenu() {
    setToggle(false);
  }

  return (
    <div className="flex items-center justify-between p-6 bg-indigo-700 lg:flex-row">
      <a href="#" className="text-white font-mono text-3xl flex items-center gap-2">
        <CgNametag /> AUCODE
      </a>

      <div className="space-x-4">
        <div className="hidden lg:block space-x-2">
          <a href="#" className="text-white hover:bg-indigo-800 rounded-full px-5 py-2 text-xl">Skills</a>
          <a href="#" className="text-white hover:bg-indigo-800 rounded-full px-5 py-2 text-xl">Projects</a>
          <a href="#" className="text-white hover:bg-indigo-800 rounded-full px-5 py-2 text-xl">Testimonials</a>
        </div>

        <div className="block lg:hidden">
          {toggle ? (
            <AiOutlineClose onClick={closeMenu} size={30} className="text-white cursor-pointer" />
          ) : (
            <HiMenuAlt1 onClick={openMenu} size={30} className="text-white cursor-pointer" />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {toggle && (
        <div className="absolute top-20 right-6 bg-indigo-800 p-4 rounded-lg shadow-md lg:hidden">
          <ul className="space-y-2">
            <li className="text-white text-xl cursor-pointer">Skills</li>
            <li className="text-white text-xl cursor-pointer">Projects</li>
            <li className="text-white text-xl cursor-pointer">Testimonials</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Nav;
