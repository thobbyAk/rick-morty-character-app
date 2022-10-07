const initialState = {
	data: [],
};
export const initData = (state = initialState, action) => {
	switch (action.type) {
		case "FETCH_INIT_DATA_ACTION":
			return {
				...state,
				data: action.payload,
			};
		default:
			return {};
	}
};
