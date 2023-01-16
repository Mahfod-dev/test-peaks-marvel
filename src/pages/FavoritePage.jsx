import { useState, useCallback } from 'react';
import { Favorite } from '../components/Favorite';
import NoFavorite from '../components/ui/NoFavorite';
import { heroesLocalStorage } from '../helpers/localFavorite';
import { useHeroes } from '../context/HeroesContext';

/**
 * Component FavoritePage to show the favorite heroes
 * @component
 * @param {array} favorite - The favorite heroes.
 * @param {func} setFavorite - The function to set the favorite.
 * @param {object} heroes - The heroes.
 * @param {array} favoriteHero - The favorite heroes.
 * @param {func} onDeleteFavorite - The function to delete the favorite.
 * @param {func} useState - The function to use state.
 * @param {func} useEffect - The function to use effect.
 * @param {func} useHeroes - The function to use heroes.
 * @param {func} heroesLocalStorage - The function to get the heroes from local storage.
 *
 * @returns {JSX.Element} - A JSX element that displays the favorite heroes.
 * @example
 *
 * const favorite = [{ id: 1, name: 'superman' }];
 * const setFavorite = () => {};
 * const heroes = [{ id: 1, name: 'superman' }];
 * const favoriteHero = [{ id: 1, name: 'superman' }];
 * const onDeleteFavorite = () => {};
 *
 * return (
 * <FavoritePage  />
 * )
 * */

const FavoritePage = () => {
	const [favorite, setFavorite] = useState(() => heroesLocalStorage());

	const { heroes } = useHeroes();

	const favoriteHero = favorite.map((favorite) => {
		return heroes.find((hero) => hero.id === favorite);
	});

	const onDeleteFavorite = useCallback(
		(id) => {
			const newHeroFavorite = [...favorite];

			const newFavorite = newHeroFavorite.filter((favorite) => favorite !== id);
			setFavorite(newFavorite);

			localStorage.setItem('favorites', JSON.stringify(newFavorite));
		},
		[favorite]
	);

	return (
		<>
			{favorite.length === 0 ? (
				<NoFavorite />
			) : (
				<div className='row'>
					{favoriteHero.map((favorite, index) => (
						<Favorite
							key={index}
							{...favorite}
							onDeleteFavorite={onDeleteFavorite}
						/>
					))}
				</div>
			)}
		</>
	);
};

export default FavoritePage;
