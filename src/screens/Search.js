import axios from 'axios'
import styled from 'styled-components'
import React from 'react'
import { Alert } from '../common-components/Alert/Alert';
import { Button } from '../common-components/Button/Button';
import { ButtonLink } from '../common-components/ButtonLink/ButtonLink';
import { Flex, Box } from 'reflexbox';
import { HeroCard } from '../components/HeroCard';
import { SearchField } from '../common-components/SearchField/SearchField';
import { Spaces } from '../shared/DesignTokens';
const HeroesGrid = styled(Box)`
    display: grid;
    grid-template-columns: 1fr;
    gap: ${Spaces.ONE_HALF};
    @media (min-width: 1024px){
        grid-template-columns:  1fr 1fr 1fr 1fr;
        gap: ${Spaces.TWO};
    }
`

async function searchHero(heroName){
    const { data } = await axios.get(`/search/${heroName}`, {
        baseURL: `${process.env.REACT_APP_SUPER_HERO_API_BASE_URL}/${process.env.REACT_APP_SUPER_HERO_API_KEY}`
    });
    return data.results || []
}

export function Search() {

    const [heroes, setHeroes] = React.useState([]);

    React.useEffect(() => {
        searchHero('captain').then((heroes) => {
            setHeroes(heroes);
        });
    }, [])

    return (
        <>
            <Flex
                width={['100%', '600px']}
                mx={[Spaces.NONE, 'auto']}
                mt={[Spaces.THREE, Spaces.FIVE]}
                px={[Spaces.ONE, Spaces.NONE]}
                mb={[Spaces.TWO, Spaces.FOUR]}
            >

                <Box flexGrow="1">
                    <SearchField placeholder="Digite um nome de herói ou heroína" />
                </Box>
                <Box ml={Spaces.TWO}>
                    <Button>Buscar</Button>
                </Box>
            </Flex>

            <HeroesGrid
                px={[Spaces.ONE, Spaces.TWO]}
                pb={[Spaces.ONE, Spaces.TWO]}
            >

            {heroes.map((hero) => (
                <HeroCard
                    key={hero.id}
                    id={hero.id}
                    secretIdentity={hero.biography['full-name']}
                    name={hero.name}
                    picture={hero.image.url}
                    universe={hero.biography.publisher}
                />
            ))}

            </HeroesGrid>
        </>
    );
}