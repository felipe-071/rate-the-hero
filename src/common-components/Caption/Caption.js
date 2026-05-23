import styled from 'styled-components';
import {
    Colors,
    FontFamilies,
    FontLetterSpacings,
    FontLineHeights,
    FontSizes,
    FontWeights
} from '../../shared/DesignTokens';

export const Caption = styled.h1`
    font-family: ${FontFamilies.PRIMARY};
    font-weight: ${FontWeights.REGULAR};
    line-height: ${FontLineHeights.SMALL};
    font-size: ${FontSizes.ONE_QUARTER};
    color: ${(props) => props.color};
    margin: 0;
    padding: 0;
    text-transform: uppercase;
    letter-spacing: ${FontLetterSpacings.MEDIUM}
`

// Define as propriedades padrão, que podem ser alteradas durante a instanciação do componente, 
// garantindo a escalabilidade dos tokens, somada à flexibilidade das props
// Caption.defaultProps = {
//     color: Colors.NEUTRAL_BLACK,
// }