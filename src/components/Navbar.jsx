import Navlinks from './Navlinks';
import { BsList } from 'react-icons/bs';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import hero from '../assets/home/desktop/image-hero.jpg';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${hero})`,
      }}
    >
      <div className="align-element text-white">
        <div className="navbar border-b-2 py-9 flex justify-between">
          <div className="lg:hidden dropdown dropdown-bottom">
            <div tabIndex={0} role="button" className="btn m-1">
              <BsList />
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] text-black menu menu-vertical p-2 shadow bg-base-100 rounded-box w-52"
            >
              <Navlinks />
            </ul>
          </div>
          <div className="">
            <span>AUDIOPHILE</span>
          </div>
          <div className="lg:flex hidden">
            <Navlinks />
          </div>
          <div className="dropdown dropdown-end text-black">
            <AiOutlineShoppingCart
              className="w-6 h-6 text-white"
              tabIndex={0}
              role="button"
            />
            <div
              tabIndex={0}
              className="dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-80"
            >
              <div className="flex flex-col p-5">
                <div className="flex justify-between items-center mb-8">
                  <span className="text-2xl">Cart</span>
                  <button className="underline">Remove all</button>
                </div>
                <div className="cart mb-4 flex justify-between">
                  <div className="mb-4">
                    <h3></h3>
                    <span></span>
                  </div>
                  <div className="flex btn items-center gap-4 bg-base-200">
                    <button
                      className="text-[14px] pl-3 text-black hover:text-cream font-bold tracking-[1px] cursor-pointer"
                    >
                      -
                    </button>
                    <div className="text-[14px] text-black font-bold tracking-[1px]">
                      0
                    </div>
                    <button
                      className="text-[14px] pr-3 text-black hover:text-cream font-bold tracking-[1px] cursor-pointer"
                    >
                      +
                    </button>
                  </div>
                </div>
                <button className="btn bg-orange-400 text-white">
                  <Link to="/checkout">Checkout</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;