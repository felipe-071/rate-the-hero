import styled from 'styled-components';
import {
    Colors,
    FontFamilies,
    FontLineHeights,
    FontSizes,
    FontWeights
} from '../../shared/DesignTokens';

export const Description = styled.h1`
    font-family: ${FontFamilies.PRIMARY};
    font-weight: ${FontWeights.REGULAR};
    line-height: ${FontLineHeights.SMALL};
    font-size: ${FontSizes.ONE_QUARTER};
    color: ${(props) => props.color};
    margin: 0;
    padding: 0;
    strong {
        font-weight: ${FontWeights.BOLD};
    }
`

// Define as propriedades padrão, que podem ser alteradas durante a instanciação do componente, 
// garantindo a escalabilidade dos tokens, somada à flexibilidade das props
Description.defaultProps = {
    color: Colors.NEUTRAL_BLACK,
}