import { render, screen, fireEvent } from '@testing-library/react';
import { describe, test, vi } from 'vitest';
import { Paginate } from '../../src/components/Paginate';

describe('Paginate', () => {
	test('should render click paginate', () => {
		const heroes = [
			{
				id: 1,
				name: 'Spider',
				description: 'Spider description',
				thumbnail: {
					path: 'http://i.annihil.us/u/prod/marvel/i/mg/3/50/526548a343e4b',
					extension: 'jpg',
				},
			},
			{
				id: 2,
				name: 'Superman',
				description: 'Superman description',
				thumbnail: {
					path: 'http://i.annihil.us/u/prod/marvel/i/mg/3/50/526548a343e4b',
					extension: 'jpg',
				},
			},
		];

		const page = 1;

		const nextPage = vi.fn();
		const prevPage = vi.fn();

		render(
			<Paginate
				heroes={heroes}
				page={page}
				nextPage={nextPage}
				prevPage={prevPage}
			/>
		);

		const prevButton = screen.getByRole('button', { name: /previous/i });
		const nextButton = screen.getByRole('button', { name: /next/i });

		fireEvent.click(nextButton);
		fireEvent.click(prevButton);

		expect(nextPage).toHaveBeenCalledTimes(1);
		expect(prevPage).toHaveBeenCalledTimes(1);
	});
});
