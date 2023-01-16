import React from 'react';
import { describe, test, vi } from 'vitest';
import { screen, render, fireEvent } from '@testing-library/react';
import { Favorite } from '../../src/components/Favorite';
import { BrowserRouter } from 'react-router-dom';

describe('Favorite', () => {
	test('should render', () => {
		const id = 1;
		const name = 'superman';
		const thumbnail = {
			path: 'http://i.annihil.us/u/prod/marvel/i/mg/3/50/537ba56d31087',
			extension: 'jpg',
		};
		const onDeleteFavorite = vi.fn();

		render(
			<Favorite
				id={id}
				name={name}
				thumbnail={thumbnail}
				onDeleteFavorite={onDeleteFavorite}
			/>,
			{ wrapper: BrowserRouter }
		);

		

		expect(screen.getByRole('link', { name: /superman/i })).toBeTruthy();

		const { src, alt } = screen.getByRole('img');

		expect(src).toBe(thumbnail.path + '.' + thumbnail.extension);
		expect(alt).toBe(name);

		const buttonDelete = screen.getByRole('button', { name: /delete favori/i });

		fireEvent.click(buttonDelete);

		expect(onDeleteFavorite).toHaveBeenCalledWith(id);

		onDeleteFavorite.mockClear();


	});
});
