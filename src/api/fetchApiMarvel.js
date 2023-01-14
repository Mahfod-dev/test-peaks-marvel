import md5 from 'js-md5';
import { paginate } from '../helpers/paginate';

/**
 * @description load heroes characters
 * @returns {Array} heroes
 * @example
 * loadHeroesCharacters(){
 * 		return heroes
 * }
 *
 *
 */

const PUBLIC_KEY = import.meta.env.VITE_API_KEY;
const PRIVATE_KEY = import.meta.env.VITE_PRIVATE_KEY;
const limit = 100;

export async function loadHeroesCharacters() {
	const ts = Number(new Date());

	const hash = md5.create();
	hash.update(ts + PRIVATE_KEY + PUBLIC_KEY);

	const response = await fetch(
		`https://gateway.marvel.com/v1/public/characters?ts=${ts}&orderBy=name&limit=${limit}&apikey=${PUBLIC_KEY}&hash=${hash.hex()}`
	);

	if (response.ok) {
		const { data } = await response.json();
		console.log(data.results);
		return paginate(data.results);
	} else {
		throw new Error('Error to load list of heroes');
	}
}
