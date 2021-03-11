import React from 'react';
import styled from 'styled-components';

// local components
import Hamburger from './hamburger';

// styled components
const Header = styled.header`
	padding-left: 96px;
	padding-right: 96px;
`;

const Nav = styled.nav`
	width: 100%;
	height: 55px;
	display: flex;
`;

// markup
const Navbar = () => {
	return (
		<Header>
			<Nav>
				<Hamburger />
			</Nav>
		</Header>
	);
};

export default Navbar;
