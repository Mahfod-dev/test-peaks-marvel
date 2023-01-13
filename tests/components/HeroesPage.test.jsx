import { describe, test } from 'vitest';
import { HeroesPage } from '../../src/pages/HeroesPage';
import { render, screen } from '@testing-library/react';
import { HeroesContext } from '../../src/context/HeroesContext';

describe('HeroesPage', () => {
	const title = 'Marvel Heroes';

	test('should render title h1', () => {
		render(
			<HeroesContext.Provider value={{ loading: false, heroes: [] }}>
				<HeroesPage />
			</HeroesContext.Provider>
		);

		expect(screen.getByRole('heading', { level: 1 }).innerHTML).toBe(title);
	});
});
