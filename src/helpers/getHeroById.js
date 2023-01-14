/**
 * @description Get hero by id
 * @param {number} id
 * @param {Array} heroes
 * @returns {Object} hero
 *
 * @example
 * getHeroById(1017100, heroes){
 * 		return hero
 * }
 *
 * @description Get hero image
 * @param {Object} image
 * @returns {string} image
 *
 * @example
 * getHeroImage(image){
 * 		return image
 * }
 *
 * @description Get comics by third
 * @param {Object} comics
 * @example
 * getComicsByThird(comics){
 * 		return comics
 * }
 * @returns {Array} comics
 *
 *
 *
 */

export const getHeroById = (id, heroes) => {
	return heroes.find((hero) => hero.id === id);
};

export const getHeroImage = (image) => {
	return `${image?.path}.${image?.extension}`;
};

export const getComicsByThird = ({ comics }) => {
	const comicsDetails = comics.items.slice(0, 3).map((comic) => {
		return comic.name;
	});
	return comicsDetails;
};
