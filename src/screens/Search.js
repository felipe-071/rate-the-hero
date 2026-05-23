import styled from 'styled-components'
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

export function Search() {
    return (
        <>
            <Flex
                width={['100%', '600px']}
                mx={[Spaces.NONE, 'auto']}
                mt={[Spaces.THREE, Spaces.FIVE]}
                px={[Spaces.ONE, Spaces.NONE]}
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
                <HeroCard 
                    secretIdentity="Bruce Wayne" 
                    name="Batman" 
                    universe="DC Comics" 
                    picture=""/>
                <HeroCard 
                    secretIdentity="Terry McGinnis"
                    name="Batman"
                    picture=""
                    universe="DC Comics"
                />
                <HeroCard 
                    secretIdentity="Dick Grayson"
                    name="Batman II"
                    picture=""
                    universe="DC Comics"
                />
            </HeroesGrid>
        </>
    );
}