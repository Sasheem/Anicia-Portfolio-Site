import * as React from 'react';

// styles
const pageStyles = {
	color: '#232129',
	padding: '96px',
	fontFamily: '-apple-system, Roboto, sans-serif, serif',
};
const headingStyles = {
	marginTop: 0,
	marginBottom: 64,
	maxWidth: 420,
};
const headingAccentStyles = {
	color: '#663399',
};
const paragraphStyles = {
	marginBottom: 48,
};
const codeStyles = {
	color: '#8A6534',
	padding: 4,
	backgroundColor: '#FFF4DB',
	fontSize: '1.25rem',
	borderRadius: 4,
};
const listStyles = {
	marginBottom: 96,
	paddingLeft: 0,
};
const listItemStyles = {
	fontWeight: '300',
	fontSize: '24px',
	maxWidth: '560px',
};

const linkStyle = {
	color: '#8954A8',
	fontWeight: 'bold',
	fontSize: '16px',
	verticalAlign: '5%',
};

const docLinkStyle = {
	...linkStyle,
	listStyleType: 'none',
	marginBottom: 24,
};

const descriptionStyle = {
	color: '#232129',
	fontSize: '14px',
};

const docLink = {
	text: 'Github',
	url: 'https://github.com/ShaolinSunset',
	color: '#8954A8',
};
// data
const links = [
	{
		text: 'Project One',
		url: 'https://www.gatsbyjs.com/docs/tutorial/',
		description: 'Small summary describing the project.',
		color: '#E95800',
	},
	{
		text: 'Project Two',
		url: 'https://www.gatsbyjs.com/docs/how-to/',
		description: 'Small summary describing the project.',
		color: '#1099A8',
	},
	{
		text: 'Project Three',
		url: 'https://www.gatsbyjs.com/docs/reference/',
		description: 'Small summary describing the project.',
		color: '#BC027F',
	},
	{
		text: 'Project Four',
		url: 'https://www.gatsbyjs.com/docs/conceptual/',
		description: 'Small summary describing the project.',
		color: '#0D96F2',
	},
	{
		text: 'Project Five',
		url: 'https://www.gatsbyjs.com/plugins',
		description: 'Small summary describing the project.',
		color: '#000000',
	},
];

// markup
const IndexPage = () => {
	return (
		<main style={pageStyles}>
			<title>Home Page</title>
			<h1 style={headingStyles}>
				Hi my name is Anicia
				<br />
				<span style={headingAccentStyles}>
					Welcome to my portfolio website!{' '}
				</span>
				<span role='img' aria-label='Party popper emojis'>
					🎉🎉🎉
				</span>
			</h1>

			<ul style={listStyles}>
				<li style={docLinkStyle}>
					<a style={linkStyle} target='_blank' href={docLink.url}>
						{docLink.text}
					</a>
				</li>
				{links.map((link) => (
					<li key={link.url} style={{ ...listItemStyles, color: link.color }}>
						<span>
							<a style={linkStyle} href={`/`}>
								{link.text}
							</a>
							<p style={descriptionStyle}>{link.description}</p>
						</span>
					</li>
				))}
			</ul>
		</main>
	);
};

export default IndexPage;
