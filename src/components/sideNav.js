import React from 'react';
import styled from 'styled-components';

// styled components
const Ul = styled.ul`
	list-style: none;
	display: flex;
	justify-content: space-between;
	margin: 0;
	padding: 0;
    width: 100%;

	li {
		padding: 30px 0;
		margin: 0;
	}
	a,
	p {
		text-decoration: none;
		background-color: none;
	}
	a:hover,
	a:active,
	p:hover,
	p:active {
		cursor: pointer;
		color: #8a8a8a;
	}

	@media only screen and (max-width: 768px) {
		flex-direction: column;
		justify-content: flex-start;
		background-color: #0D2538;
		position: fixed;
		transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
		top: 0;
		right: 0;
		height: 100vh;
		width: 300px;
		padding-top: 3.5rem;
		transition: transform 0.3s ease-in-out;

		p {
			color: #a0aec0;
		}

        li {
			padding: 20px 0 20px 30px;
		}
	}
`;

const NavText = styled.p`
	margin: 0;
	font-size: 1.15rem;
	font-weight: 700;
`;

// markup
const SideNav = ({ open }) => {
    return (
        <Ul open={open}>
            <li>
                <NavText>Home</NavText>
            </li>
            <li>
                <NavText>About</NavText>
            </li>
            <li>
                <NavText>Services</NavText>
            </li>
            <li>
                <NavText>Gallery</NavText>
            </li>
            <li>
                <NavText>Contact</NavText>
            </li>
        </Ul>
    );
};

export default SideNav;