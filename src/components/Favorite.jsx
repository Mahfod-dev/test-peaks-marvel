import { Link } from 'react-router-dom';
import { getHeroImage } from '../helpers/getHeroById';

/**
 * Favorite is a reusable component that displays a card of favorites.
 * @component
 * @param {number} id - The id of the hero.
 * @param {string} name - The name of the hero.
 * @param {object} thumbnail - The thumbnail of the hero.
 * @param {func} onDeleteFavorite - The function to delete a favorite.
 * @returns {JSX.Element} - A JSX element that displays a card of favorites.
 * @example
 *
 * const id = 1;
 * const name = 'superman';
 * const thumbnail = { path: 'http://i.annihil.us/u/prod/marvel/i/mg/3/50/537ba56d31087', extension: 'jpg' };
 * const onDeleteFavorite = () => {};
 * return (
 * <Favorite id={id} name={name} thumbnail={thumbnail} onDeleteFavorite={onDeleteFavorite} />
 * )
 *
 * */

export const Favorite = ({ id, name, thumbnail, onDeleteFavorite }) => {
	const image = getHeroImage(thumbnail);

	return (
		<div style={{ height: '100vh', marginTop: '10px' }}>
			<div className='card ms-3' style={{ maxWidth: 750 }}>
				<div className='row no-gutters'>
					<div className='col-md-4'>
						<img src={image} className='card-img' alt={name} />
					</div>
					<div className='col-md-8'>
						<div className='card-body d-flex row'>
							<Link to={`/hero/${id}`} className='card-title'>
								{name}
							</Link>
							<button
								className='btn btn-primary w-25'
								onClick={() => onDeleteFavorite(id)}>
								Delete Favori
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
