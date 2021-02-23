import React from 'react';
import styled from 'styled-components';

import Header from './header';

const MainStyled = styled.main`
	color: #232129;
	padding: 96px;
	font-family: -apple-system, Roboto, sans-serif, serif;

	// active when browser window is 600px or smaller
	@media only screen and (max-width: 600px) {
		padding: 48px;
	}
`;

const Layout = ({ children }) => {
	return (
		<div>
			<Header />
			<MainStyled>{children}</MainStyled>
		</div>
	);
};

export default Layout;
