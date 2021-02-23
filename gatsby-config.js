module.exports = {
	siteMetadata: {
		title: 'Anicia Portfolio Site',
		siteUrl: 'http://anicia-portfolio-site.s3-website-us-east-1.amazonaws.com/',
	},
	plugins: [
		'gatsby-plugin-sharp',
		'gatsby-plugin-react-helmet',
		'gatsby-plugin-sitemap',
		'gatsby-transformer-sharp',
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'images',
				path: './src/images/',
			},
			__key: 'images',
		},
		{
			resolve: `gatsby-plugin-s3`,
			options: {
				bucketName: 'anicia-portfolio-site',
			},
		},
	],
};
