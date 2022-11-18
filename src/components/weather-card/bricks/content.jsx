import React from "react";
import styled from 'styled-components'

const StyledP = styled.p`
    font-size: ${({size}) => size || '1rem'};
    font-weight: ${({weight}) => weight || '300'};
    text-align: ${({align}) => align || 'start'};
    padding: ${({padding}) => padding || '0'};
`
const Content = (props) => {
    return <StyledP {...props}/>
}

export default Content;
