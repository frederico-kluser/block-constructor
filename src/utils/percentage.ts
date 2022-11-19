const getPercetage = (num: number, total: number): number => {
	const percentage = (num / total) * 100;
	return percentage;
};

export default getPercetage;
