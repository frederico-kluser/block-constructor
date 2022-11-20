export const formatDecimal = (number: number) => {
	if (number < 10) {
		return `0${Math.floor(number)}`;
	}
	return Math.floor(number);
};
