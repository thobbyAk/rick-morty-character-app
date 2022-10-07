export const fetchInitialData = (data) => {
	return {
		type: "FETCH_INIT_DATA_ACTION",
		payload: data,
	};
};
