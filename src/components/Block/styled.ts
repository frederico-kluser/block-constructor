import styled from 'styled-components';
import { InterfaceContainer, InterfaceResizeDot } from './types';

const Container = styled.div<InterfaceContainer>`
	background-color: ${(props) => props.backgroundColor};
	box-sizing: border-box;
	height: ${({ height }) => height + 100}px;
	width: ${({ width }) => width + 100}px;
	position: relative;
	top: 0px;
	left: 0px;
`;

export const positions = {
	topLeft: `
		top: 0;
		left: 0;
	`,
	topRight: `
		top: 0;
		right: 0;
	`,
	bottomLeft: `
		bottom: 0;
		left: 0;
	`,
	bottomRight: `
		bottom: 0;
		right: 0;
	`,
};

export const icons = {
	topLeft: 'nw-resize',
	topRight: 'nesw-resize',
	bottomLeft: 'nesw-resize',
	bottomRight: 'nw-resize',
};

export const ResizeDot = styled.div<InterfaceResizeDot>`
	background-color: gray;
	border: 1px solid black;
	height: 10px;
	margin: -5px;
	position: absolute;
	width: 10px;
	${({ position }) => positions[position]}
`;

export default Container;
