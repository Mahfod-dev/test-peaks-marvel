import { describe, test } from 'vitest';
import fetch from 'node-fetch';
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { HeroesContext } from '../../src/context/HeroesContext';
import { HeroList } from '../../src/components/HeroList';
import { loadHeroesCharacters } from '../../src/api/fetchApiMarvel';

describe('HeroList', () => {
	test('should render Spinner if loading is true', () => {
		render(
			<HeroesContext.Provider value={{ heroes: [], loading: true }}>
				<HeroList />
			</HeroesContext.Provider>
		);

		expect(screen.getByTestId('spinner')).toBeTruthy();
	});

	test('should render HeroList if loading is false', async () => {
		global.fetch = fetch;

		const heroesData = await loadHeroesCharacters();

		render(
			<HeroesContext.Provider value={{ heroes: heroesData[0], loading: false }}>
				<HeroList />
			</HeroesContext.Provider>,
			{ wrapper: BrowserRouter }
		);

		expect(heroesData.length).toBeGreaterThan(0);
	});
});
