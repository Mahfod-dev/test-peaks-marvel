/**
 *  toogleFavorite - Function to add or remove a hero from favorites
 * @param {string} id - Hero id
 * @returns {void}
 * @example
 * toogleFavorite(id){
 * 	   return void
 * }
 *  existInFavorites - Function to check if a hero is in favorites
 * @param {string} id - Hero id
 * @returns {boolean}
 * @example
 * existInFavorites(id){
 * 	   return boolean
 * }
 * heroesLocalStorage - Function to get all heroes in favorites
 * @param {string} id - Hero id
 * @returns {Array}
 * @example
 * heroesLocalStorage(id){
 * 	   return Array
 * }
 */



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



