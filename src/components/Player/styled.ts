import styled from 'styled-components';
import THEME from '../style/theme';
import { InterfaceProgressButton } from './types';

const CONTAINER_HEIGHT = 50;
const CONTAINER_WIDTH = CONTAINER_HEIGHT * 1.5;
const CLICK_EFFECT = `
&:hover {
  background-color: ${THEME.colors.gray[800]};
}

&:active {
  background-color: ${THEME.colors.gray[700]};
}
`;

const Container = styled.div`
	border-top: 2px solid ${THEME.colors.gray[900]};
	bottom: 0px;
	display: flex;
	height: ${CONTAINER_HEIGHT}px;
	left: 0px;
	overflow: hidden;
	position: absolute;
	width: 100%;
`;

export const PlayButton = styled.button`
	background-color: ${THEME.colors.gray[900]};
	border: none;
	height: 100%;
	position: relative;
	width: ${CONTAINER_HEIGHT}px;

	> svg {
		fill: ${THEME.colors.gray[50]};
		height: 25%;
		width: 25%;
	}

	${CLICK_EFFECT}
`;

export const Progress = styled.div`
	align-items: center;
	background-color: ${THEME.colors.white};
	display: flex;
	height: 100%;
	padding: 0px 16px;
	position: relative;
	width: calc(100% - ${CONTAINER_HEIGHT + CONTAINER_WIDTH}px);
`;

export const ProgressLine = styled.div`
	align-items: center;
	background-color: ${THEME.colors.gray[900]};
	display: flex;
	height: 4px;
	position: relative;
	width: 100%;
`;

export const ProgressButton = styled.button<InterfaceProgressButton>`
	background-color: ${THEME.colors.white};
	border-radius: 50%;
	height: 20px;
	left: calc(-10px + ${({ percentage }) => percentage}%);
	padding: 0px;
	position: relative;
	width: 20px;
`;

export const ProgressTime = styled.div`
	background-color: ${THEME.colors.gray[900]};
	color: ${THEME.colors.gray[50]};
	font-family: monospace;
	font-size: 18px;
	height: 100%;
	line-height: ${CONTAINER_HEIGHT}px;
	text-align: center;
	width: ${CONTAINER_WIDTH}px;
	${CLICK_EFFECT}
`;

export default Container;
