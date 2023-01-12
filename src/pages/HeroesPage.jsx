import { HeroList } from '../components/HeroList';
import Spinner from '../components/ui/Spinner';
import { useHeroes } from '../context/HeroesContext';

export const HeroesPage = () => {
	const { loading } = useHeroes();

	if (loading) {
		return <Spinner />;
	}
console.log(loading);
	return (
		<div>
			<h1>Marvel Heroes</h1>
			<HeroList />
		</div>
	);
};
