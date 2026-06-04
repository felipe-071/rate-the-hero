import useAxios from 'axios-hooks';

export function useHero(heroId) {
	const [{ data: hero, loading: isLoadingHero }] = useAxios(`/${heroId}`);
	return {
		hero,
		isLoadingHero,
	};
}