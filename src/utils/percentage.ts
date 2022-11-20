export const getPercentageOfTwoNumbers = (num: number, total: number): number => {
	const percentage = (num / total) * 100;
	return percentage;
};

export const getPercentageOfNumber = (percentage: number, total: number): number => {
	const num = (percentage / 100) * total;
	return num;
};
