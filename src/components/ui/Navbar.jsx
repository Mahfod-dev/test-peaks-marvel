import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Component for showing Navbar.
 *
 * @component
 * @example
 * return (
 * <Navbar />
 * )
 * @returns {JSX.Element} - A JSX element that displays a Navbar.
 */

export function Navbar() {
	return (
		<nav className='navbar navbar-expand-sm navbar-dark bg-dark p-2'>
			<Link className='navbar-brand' to='/'>
				Heroes
			</Link>
			<div
				className='d-flex justify-content-end mr-10 collapse navbar-collapse'
				id='navbarNavAltMarkup'>
				<div className='navbar-nav'>
					<Link className='nav-link' to='/favorites'>
						Favorite
					</Link>
				</div>
			</div>
		</nav>
	);
}
