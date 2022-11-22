import styled from 'styled-components';
import THEME from '../../style/theme';

const Container = styled.div`
	position: fixed;
	right: 0px;
	top: 0px;
	width: 300px;
	height: calc(100% - ${THEME.spacing.playerHeight}px);
	background-color: lightcoral;
	transition: 0.5s ease-in-out;
	transform: translateX(300px);
`;

export default Container;
