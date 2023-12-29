'use client';

import { useState } from 'react';
import { IoMenu } from 'react-icons/io5';
import { IoMdClose } from 'react-icons/io';

const Navbar = () => {
	let Links = [
		{ name: 'HOME', link: '/' },
		{ name: 'ADD ITEM', link: '/add-todo' },
		{ name: 'ABOUT', link: '/about' },
	];
	let [open, setOpen] = useState(false);
	return (
		<nav className='shadow-md w-full fixed top-0 left-0'>
			<div className='md:flex items-center justify-between bg-slate_gray-100 py-4 md:px-10 px-7'>
				<div
					className='font-bold text-2xl cursor-pointer flex items-center
    text-gray-800'
				>
					<h1 className='text-3xl text-french_gray-800 mr-1 pt-1'>NT</h1>
				</div>

				<div
					onClick={() => setOpen(!open)}
					className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden text-french_gray-800'
				>
					{open ? <IoMdClose /> : <IoMenu />}
				</div>

				<ul
					className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-slate_gray-100 md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-200 ease-in ${
						open ? 'top-20 ' : 'top-[-490px]'
					}`}
				>
					{Links.map((link) => (
						<li
							key={link.name}
							className='md:ml-8 text-xl md:my-0 my-7'
						>
							<a
								href={link.link}
								className='text-french_gray-700 hover:text-slate_gray-700 duration-100'
							>
								{link.name}
							</a>
						</li>
					))}
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
