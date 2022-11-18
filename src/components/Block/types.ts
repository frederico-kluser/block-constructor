export interface InterfaceContainer {
	backgroundColor: string;
	children?: boolean;
	height: number;
	width: number;
}

export type TypePosition = 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight' | string;

export type TypeResizeDotsPositions = {
	pageX: number;
	pageY: number;
};

export interface InterfaceResizeDot {
	position: string;
}
