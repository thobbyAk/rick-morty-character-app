export const range = (start, end) => {
	return [...Array(end).keys()].map((el) => el + start);
};

export const shortenText = (text) => {
	let length = 16;
	if (!text) return "";

	if (text.length > length) {
		return text.slice(0, 16) + "...";
	} else {
		return text;
	}
};

export const selectCharacterById = (state, characterId) => {
	const character = state.data.results.filter(
		(character) => character.id == characterId
	);
	return character[0];
};
