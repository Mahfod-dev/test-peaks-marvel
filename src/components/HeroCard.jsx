import { useState } from 'react';
import { Link } from 'react-router-dom';
import { getHeroImage } from '../helpers/getHeroById';
import PropTypes from 'prop-types';

/**
 * HeroCard is a reusable component that displays a card of heroes.
 *
 * @component
 * @param {number} id - The id of the hero.
 * @param {string} name - The name of the hero.
 * @param {string} description - The description of the hero.
 * @param {object} thumbnail - The thumbnail of the hero.
 * @param {func} getHeroImage - The function to get the hero image.
 * @returns {JSX.Element} - A JSX element that displays a card of heroes.
 * @example
 * const id = 1;
 * const name='superman';
 * const description='superman is a hero';
 * const thumbnail = { path: 'http://i.annihil.us/u/prod/marvel/i/mg/3/50/537ba56d31087', extension: 'jpg' };
 * return (
 *  <HeroCard id={id} name={name} description={description} thumbnail={thumbnail} />
 * )
 *
 *
 *
 */

export function HeroCard({ id, description, name, thumbnail }) {
	const heroImageUrl = getHeroImage(thumbnail);

	return (
		<div className='col'>
			<div className='card' style={{ width: '18rem' }}>
				<img className='card-img-top' src={heroImageUrl} alt={name} />

				<div className='card-body'>
					<Link to={`/hero/${id}`} className='card-title'>
						{name}
					</Link>

					{description ? (
						<p className='card-text'>{description}</p>
					) : (
						<p className='card-text'>sorry we will soon have the description</p>
					)}
				</div>
			</div>
		</div>
	);
}

HeroCard.propTypes = {
	/**
	 * The id of the hero.
	 */
	id: PropTypes.number.isRequired,
	/**
	 * The name of the hero.
	 */
	name: PropTypes.string.isRequired,
	/**
	 * The description of the hero.
	 * @default 'sorry we will soon have the description'
	 */
	description: PropTypes.string,
	/**
	 * The thumbnail of the hero.
	 * @default 'http://i.annihil.us/u/prod/marvel/i/mg/3/50/537ba56d31087'
	 * @default 'jpg'
	 */
	thumbnail: PropTypes.object.isRequired,
};
