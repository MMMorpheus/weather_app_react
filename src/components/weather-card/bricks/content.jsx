import React from "react";
import styled, {css} from 'styled-components'

const StyledP = styled.p`
    font-size: ${({size}) => size || '1rem'};
    font-weight: ${({weight}) => weight || '300'};
    text-align: ${({align}) => align || 'start'};
    padding: ${({padding}) => padding || '0'};
    
    ${({addUnits}) => addUnits && css`
        position: relative;
        &:after {
            content: attr(data-units);
            font-size: 1rem;
            font-weight: 300;
            position: absolute;
            bottom: 0.2rem;
            color: hsl(0, 0%, 95%)
        }
    `
    }
`
const Content = ({units, ...props}) => {
    return <StyledP data-units={units} {...props}/>
}

export default Content;