import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className='navbar bg-secondary shadow-xl mb-3 sticky top-0'>
      <div className='container mx-auto'>
        <div className='me-auto'>
          <NavLink to='/' className='btn btn-ghost normal-case text-xl'>
            Home
          </NavLink>
          <NavLink to='/about' className='btn btn-ghost normal-case text-xl'>
            About
          </NavLink>
          <NavLink to='/store' className='btn btn-ghost normal-case text-xl'>
            Store
          </NavLink>
        </div>
        <button className='btn btn-circle btn-sm outline relative'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth='1.5'
            stroke='currentColor'
            className='w-6 h-6'>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z'
            />
          </svg>
          <div className='absolute w-4 h-4 bottom-0 right-0 rounded-full translate-x-1/4	translate-y-1/4 flex justify-center items-center text-black bg-primary-focus'>
            <span className='text-sm'>3</span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
