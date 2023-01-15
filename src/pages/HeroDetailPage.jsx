import { useState, useEffect } from 'react';
import { Navigate, useParams, useNavigate } from 'react-router-dom';
import { useHeroes } from '../context/HeroesContext';
import {
	getHeroById,
	getHeroImage,
	getComicsByThird,
} from '../helpers/getHeroById';
import { toogleFavorite,existInFavorites } from '../helpers/localFavorite';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';

/**
 *  Component HeroDetailPage to show the detail of the hero
 * @component
 * @param {number} heroId - The id of the hero.
 * @param {func} navigate - The function to navigate.
 * @param {object} heroes - The heroes.
 * @param {object} hero - The hero.
 * @param {func} onNavigateBack - The function to navigate back.
 * @param {string} heroImageUrl - The hero image url.
 * @param {array} heroThirdComics - The hero third comics.
 * @returns {JSX.Element} - A JSX element that displays the detail of the hero.
 * @example
 * const heroId = 1;
 * const navigate = () => {};
 * const heroes = [{ id: 1, name: 'superman' }];
 * const hero = { id: 1, name: 'superman' };
 * const onNavigateBack = () => {};
 * const heroImageUrl = 'http://i.annihil.us/u/prod/marvel/i/mg/3/50/537ba56d31087';
 * const heroThirdComics = [{ id: 1, name: 'superman' }];
 * return (
 * <HeroDetailPage  />
 * )
 */

export const HeroDetailPage = () => {
	const [isFavorite, setIsFavorite] = useState(
		existInFavorites(+useParams().heroId)
	);

	const { heroId } = useParams();
	const navigate = useNavigate();

	const { heroes } = useHeroes();

	const hero = getHeroById(+heroId, heroes);

	if (!hero) {
		return <Navigate to='/' />;
	}

	const onNavigateBack = () => {
		navigate(-1);
	};

	const heroImageUrl = getHeroImage(hero.thumbnail);
	const heroThirdComics = getComicsByThird(hero);

	const onClickFavorite = () => {
		
		setIsFavorite(!isFavorite);
		toogleFavorite(hero.id);
	};

	return (
		<div className='row mt-5' style={{ height: '100vh' }}>
			<div className='col-4'>
				<img src={heroImageUrl} alt={hero.name} className='img-thumbnail' />
			</div>
			<div className='col-8'>
				<div style={{ width: '80px' }} onClick={onClickFavorite}>
					{isFavorite ? (
						<div>
							<AiFillHeart className='icon-heart' /> <span>Favorite</span>
						</div>
					) : (
						<div>
							<AiOutlineHeart className='icon-heart' />
							<span>Delete Favorite</span>
						</div>
					)}
				</div>

				<h3>{hero.name}</h3>
				<ul className='list-group list-group-flush'>
					<li className='list-group-item'>
						<b>description:</b> :
						{hero.description
							? hero.description
							: 'sorry we will soon have the description'}
					</li>
					<li className='list-group-item'>
						<b>Comics:</b> {hero.comics.available}
					</li>
					<b>Comics:</b>
					{heroThirdComics.map((comic, index) => {
						return (
							<li key={index} className='list-group-item'>
								{comic}
							</li>
						);
					})}
				</ul>

				<button className='btn btn-outline-info' onClick={onNavigateBack}>
					Back
				</button>
			</div>
		</div>
	);
};
