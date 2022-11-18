import isObjectsEqual from './compare.objects';

describe('isObjectsEqual', () => {
	it('should return true if objects are equal', () => {
		const obj1 = { a: 1, b: 2 };
		const obj2 = { a: 1, b: 2 };
		expect(isObjectsEqual(obj1, obj2)).toBe(true);
	});

	it('should return false if objects are not equal', () => {
		const obj1 = { a: 1, b: 2 };
		const obj2 = { a: 1, b: 3 };
		expect(isObjectsEqual(obj1, obj2)).toBe(false);
	});
});
