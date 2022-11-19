import React from 'react';
import styled from 'styled-components';

const StyledFlex = styled.div`
    display: flex;
    flex-direction: ${({direction}) => direction || 'row'};
    justify-content: ${({justify}) => justify || 'stretch'};
    align-items: ${({align}) => align || 'stretch'};
    margin: ${({margin}) => margin || '0'};
    padding: ${({padding}) => padding || '0'};
    position: ${({position}) => position || 'static'};
    z-index: ${({zIndex}) => zIndex || 'auto'};
`

const Flex = (props) => {
    return <StyledFlex {...props}/>
}

export default Flex;
