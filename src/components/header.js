import React from 'react';
import styled from 'styled-components';

// styled components
const HeaderStyled = styled.header``;
const NavStyled = styled.nav``;
const ListStyled = styled.ul`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	list-style-type: none;
	margin: 0;
	padding-top: 24px;
	padding-left: 96px;
	padding-right: 96px;

	// active when browser window is 600px or smaller
	@media only screen and (max-width: 600px) {
		flex-direction: column;
		padding-left: 48px;
		padding-right: 48px;
	}
`;

const Header = () => {
	return (
		<HeaderStyled>
			<NavStyled>
				<ListStyled>
					<li>Home</li>
					<li>About Me</li>
					<li>Services</li>
					<li>Contact</li>
					<li>Gallery</li>
				</ListStyled>
			</NavStyled>
		</HeaderStyled>
	);
};

export default Header;
