import {
	useContext,
	createContext,
	useState,
	useEffect,
	useCallback,
} from 'react';
import { loadHeroesCharacters } from '../api/fetchApiMarvel';

/**
 *  HeroesContext is a context that provides the heroes and loading state.
 * @module HeroesContext
 * @param {object} children - The children object.
 * @param {object} heroes - The heroes object.
 * @param {boolean} loading - The loading state.
 * @example
 * const heroes = [
 * {
 * id: 1,
 * name: 'superman',
 * description: 'superman is a hero',
 * thumbnail: { path: 'http://i.annihil.us/u/prod/marvel/i/mg/3/50/537ba56d31087', extension: 'jpg' }
 * }];
 * const loading = false;
 * return (
 * <HeroesContext.Provider value={{ heroes, loading }}>
 * {children}
 * </HeroesContext.Provider>
 * )
 *
 * @returns {JSX.Element} - A JSX element that provides the heroes and loading state.
 *
 * Load heroes characters from the API.
 * @function loadHeroesCharacters
 * @returns {object} - The heroes object.
 *
 * useHeroes is a custom hook that returns the heroes and loading state.
 * @function useHeroes
 * @returns {object} - The heroes and loading state.
 *
 */

export const HeroesContext = createContext();

export const HeroesProvider = ({ children }) => {
	const [heroes, setHereos] = useState([]);
	const [loading, setLoading] = useState(true);
	const [page, setPage] = useState(0);

	useEffect(() => {
		setLoading(true);
		try {
			loadHeroesCharacters().then((heroes) => {
				setHereos(heroes[page]);
				setLoading(false);
			});
		} catch (error) {
			setLoading(true);
			console.log(error);
		}
	}, [page]);

	const nextPage = useCallback(() => {
		setPage((oldPage) => {
			let next = oldPage + 1;
			if (next > heroes.length - 1) {
				next = 0;
			}
			return next;
		});
	}, [setPage, heroes.length]);

	const prevPage = useCallback(() => {
		setPage((oldPage) => {
			let prev = oldPage - 1;
			if (prev < 0) {
				prev = heroes.length - 1;
			}
			return prev;
		});
	}, [setPage, heroes.length]);



	return (
		<HeroesContext.Provider
			value={{ heroes, loading, page, setPage, prevPage, nextPage }}>
			{children}
		</HeroesContext.Provider>
	);
};

export const useHeroes = () => {
	const context = useContext(HeroesContext);
	if (!context) {
		throw new Error('useHeroes must be used within a HeroesProvider');
	}
	return context;
};
