import { describe, test } from 'vitest';
import fetch from 'node-fetch';
import { loadHeroesCharacters } from '../../src/api/fetchApiMarvel';

describe('fetchApiMarvel()', () => {
	test('should render an array de heroes', async () => {
		global.fetch = fetch;

		const heroes = await loadHeroesCharacters();

		expect(heroes.length).toBeGreaterThan(0);
		expect(heroes[0]).toEqual({
			id: expect.any(Number),
			comics: expect.any(Object),
			series: expect.any(Object),
			stories: expect.any(Object),
			events: expect.any(Object),
			urls: expect.any(Array),
			resourceURI: expect.any(String),
			modified: expect.any(String),
			name: expect.any(String),
			description: expect.any(String),
			thumbnail: expect.any(Object),
		});
	});
});
