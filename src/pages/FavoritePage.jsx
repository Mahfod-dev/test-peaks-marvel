import { useState, useEffect } from 'react';
import { Favorite } from '../components/Favorite';
import NoFavorite from '../components/ui/NoFavorite';
import { heroesLocalStorage } from '../helpers/localFavorite';
import { useHeroes } from '../context/HeroesContext';

export const FavoritePage = () => {
	const [favorite, setFavorite] = useState(() => heroesLocalStorage());

	const { heroes } = useHeroes();

	const favoriteHero = favorite.map((favorite) => {
		return heroes.find((hero) => hero.id === favorite);
	});

	const onDeleteFavorite = (id) => {
		const newFavorite = favorite.filter((favorite) => favorite !== id);
		setFavorite(newFavorite);

		localStorage.setItem('favorites', JSON.stringify(newFavorite));
	};

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
