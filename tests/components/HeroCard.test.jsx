import { render } from '@testing-library/react';
import { HeroCard } from '../../src/components/HeroCard';
import { MemoryRouter } from 'react-router-dom';

describe('HeroCard', () => {
	test('should render snapshot', () => {
		render(<HeroCard name='' description='' />,{wrapper: MemoryRouter});
	});
});
