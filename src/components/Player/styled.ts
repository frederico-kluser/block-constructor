import styled from 'styled-components';

const CONTAINER_HEIGHT = 75;

const Container = styled.div`
	border-top: 1px solid #000;
	bottom: 0px;
	height: ${CONTAINER_HEIGHT}px;
	left: 0px;
	overflow: hidden;
	position: absolute;
	width: 100%;
`;

export const PlayButton = styled.button`
	background-color: green;
	border: none;
	height: ${CONTAINER_HEIGHT}px;
	width: ${CONTAINER_HEIGHT}px;
`;

export default Container;
