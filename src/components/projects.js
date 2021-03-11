import React from 'react';
import styled from 'styled-components';

// styled components
const DivStyled = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: space-between;

	// active when browser window is 768px or smaller
	@media only screen and (max-width: 768px) {
		flex-direction: column;
	}
`;
const ProjectColumnStyled = styled.div`
	display: flex;
	flex-direction: column;

	// active when browser window is 768px or smaller
	@media only screen and (max-width: 768px) {
		align-items: center;
	}
`;
const HeaderThreeStyled = styled.h3`
	text-align: center;
`;
const ProjectBlock = styled.div`
	background-color: lightblue;
	height: 150px;
	width: 300px;
	border-radius: 3%;
	margin-bottom: 36px;
`;

// markup
const Projects = () => {
	return (
		<DivStyled>
			<ProjectColumnStyled>
				<HeaderThreeStyled>
					Digital Art{' '}
					<span role='img' aria-label='Alien monster emoji'>
						👾
					</span>
				</HeaderThreeStyled>
				<ProjectBlock />
				<ProjectBlock />
				<ProjectBlock />
				<ProjectBlock />
			</ProjectColumnStyled>
			<ProjectColumnStyled>
				<HeaderThreeStyled>
					Paintings{' '}
					<span role='img' aria-label='Artist palette emoji'>
						🎨
					</span>
				</HeaderThreeStyled>
				<ProjectBlock />
				<ProjectBlock />
				<ProjectBlock />
				<ProjectBlock />
			</ProjectColumnStyled>
			<ProjectColumnStyled>
				<HeaderThreeStyled>
					Photography{' '}
					<span role='img' aria-label='Camera emoji'>
						📷
					</span>
				</HeaderThreeStyled>
				<ProjectBlock />
				<ProjectBlock />
				<ProjectBlock />
				<ProjectBlock />
			</ProjectColumnStyled>
		</DivStyled>
	);
};

export default Projects;
