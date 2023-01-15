export const toogleFavorite = (id) => {
	let favorites = JSON.parse(localStorage.getItem('favorites')) || [];




	if (favorites.includes(id)) {
		favorites = favorites.filter((heroId) => heroId !== id);
	} else {
		favorites.push(id);
	}

	localStorage.setItem('favorites', JSON.stringify(favorites));
};

export const existInFavorites = (id) => {
	const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
	return favorites.includes(id);
};

export const heroesLocalStorage = () => {
	const heroes = JSON.parse(localStorage.getItem('favorites')) || [];
	return heroes;
};
