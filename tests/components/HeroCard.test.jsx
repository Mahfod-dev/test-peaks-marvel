import { describe, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import { HeroCard } from '../../src/components/HeroCard';
import { BrowserRouter } from 'react-router-dom';

describe('HeroCard', () => {
	const id = 1017100;
	const name = 'A-Bomb (HAS)';
	const description =
		"Rick Jones has been Hulk's best bud since day one, but now he's more than a friend...he's a teammate! Transformed by a Gamma energy explosion, A-Bomb's thick, armored skin is just as strong and powerful as it is blue. And when he curls into action, he uses it like a giant bowling ball of destruction!  A-Bomb (HAS)";
	const thumbnail = {
		path: 'http://i.annihil.us/u/prod/marvel/i/mg/3/20/5232158de5b16',
		extension: 'jpg',
	};

	test('should render match snapshot ', () => {
		const { container } = render(
			<HeroCard
				id={id}
				name={name}
				description={description}
				thumbnail={thumbnail}
			/>,
			{ wrapper: BrowserRouter }
		);

		expect(container).toMatchSnapshot();
	});

	test('should render image with src and alt', () => {
		render(
			<HeroCard
				id={id}
				name={name}
				description={description}
				thumbnail={thumbnail}
			/>,
			{ wrapper: BrowserRouter }
		);

		

		const { src, alt } = screen.getByRole('img');

		expect(src).toBe(thumbnail.path + '.' + thumbnail.extension);
		expect(alt).toBe(name);
	});
});
