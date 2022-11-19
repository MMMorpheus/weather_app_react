import React from 'react';
import Flex from '../weather-card/bricks/flex';


import styled from 'styled-components';
import {keyframes} from 'styled-components'
import {StyledIconBase} from '@styled-icons/styled-icon'
import { EditLocationAlt } from '@styled-icons/material/EditLocationAlt';
import { Search } from '@styled-icons/material/Search';

// Animation func defined using styled-components
const flip = keyframes`
0% {
    transform: perspective(400px) rotateY(0);
    animation-timing-function: ease-out;
}
40% {
    transform: perspective(400px) translateZ(150px) rotateY(170deg);
    animation-timing-function: ease-out;
}
50% {
    transform: perspective(400px) translateZ(150px) rotateY(190deg) scale(1);
    animation-timing-function: ease-in;
}
80% {
    transform: perspective(400px) rotateY(360deg) scale(.95);
    animation-timing-function: ease-in;
}
100% {
    transform: perspective(400px) scale(1);
    animation-timing-function: ease-in;
}
`
// Animated block with an icon
const FlippedDiv = styled.div`
    position: absolute;
    top: 1.9rem;
    left: .5rem;
    backface-visibility: visible;
        &:hover {
            animation: ${flip} 2s ease;
        }
`
// An icon wrapper
const IconStyleWrapper = styled.div`
  ${StyledIconBase} {
    color: black;
    width: 36px;
  }
`
const SearchContainer = styled(Flex)`
    width: 400px;
    height: 100px;
`

// Styled input using styled-components
const StyledInput = styled.input`
    width: 100%;
    height: 75%;
    border: none;
    outline: none;
    border-radius: 1rem;
    font-size: 1.7rem;
    text-indent: 3rem;
    text-transform: uppercase;
`
// Styled button using styled-components
const SearchBtn = styled.button`
    position: absolute;
    top: 1.9rem;
    right: 1rem;
    border: none;
    background-color: inherit;
    border-radius: 50%;
    cursor: pointer;
        &:hover {
            background-color: #9cacbb;
            color: white;
            transition: .3s ease-in-out;
        }
`

const HoveredIcon = styled(Search)`
    &{SearchBtn}:hover {
        color: #ffff;
    }
  
`;

const SearchBar = ({location, setLocation, request}) => {

    return (
        <SearchContainer align="center" padding="10px 0" position="relative">
            <FlippedDiv><IconStyleWrapper><EditLocationAlt /></IconStyleWrapper></FlippedDiv>
            <StyledInput type='text' name='location' value={location} onChange={({target}) => {setLocation(target.value)}} placeholder="enter your location"/>
            <SearchBtn onClick={request}>
                <IconStyleWrapper><HoveredIcon /></IconStyleWrapper>
            </SearchBtn>
        </SearchContainer>
    );
}

export default SearchBar;