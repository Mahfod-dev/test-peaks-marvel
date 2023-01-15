import { useState, useEffect } from 'react';
import { Favorite } from '../components/Favorite';
import NoFavorite from '../components/ui/NoFavorite';
import { heroesLocalStorage } from '../helpers/localFavorite';

export const FavoritePage = () => {
	const [favorite, setFavorite] = useState([]);

	useEffect(() => {
		setFavorite(heroesLocalStorage());
	}, []);


	return (
		<>
			{favorite.length === 0 ? (
				<NoFavorite />
			) : (
				<div className='row'>
					{favorite.map((favorite, index) => (
						<Favorite key={index} favorite={favorite} />
					))}
				</div>
			)}
		</>
	);
};
