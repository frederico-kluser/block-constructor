import getRandomColor from './random-color';

describe('getRandomColor', () => {
	it('should return a random color', () => {
		const color = getRandomColor();
		expect(color).toMatch(/^#[0-9A-F]{6}$/);
	});

	it('should return a different color each time', () => {
		const color1 = getRandomColor();
		const color2 = getRandomColor();
		expect(color1).not.toEqual(color2);
	});
});
