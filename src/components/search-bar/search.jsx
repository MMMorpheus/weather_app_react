import React, {useState} from 'react';

import styled from 'styled-components';
import {keyframes} from 'styled-components'
import {StyledIconBase} from '@styled-icons/styled-icon'
import { EditLocationAlt } from '@styled-icons/material/EditLocationAlt';
import { Search } from '@styled-icons/material/Search';

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
const FlippedDiv = styled.div`
    position: absolute;
    top: 1.9rem;
    left: .5rem;
    backface-visibility: visible;
        &:hover {
            animation: ${flip} 2s ease;
        }
`
const SearchContainer = styled.div`
    width: 400px;
    display: flex;
    align-items: center;
    height: 100px;
    padding: 10px 0;
    position: relative;
`
const StyledInput = styled.input`
    width: 100%;
    height: 75%;
    border: none;
    outline: none;
    border-radius: 1rem;
    font-size: 1.9rem;
    text-indent: 3rem;
`
const IconStyleWrapper = styled.div`
  ${StyledIconBase} {
    color: black;
    width: 36px;
  }
`
const SearchBtn = styled.button`
    position: absolute;
    top: 1.9rem;
    right: 1rem;
    border: none;
    background-color: inherit;
    cursor: pointer;
`
const Input = () => {

    const [inValue, setInValue] = useState('')
    const changer = (event) => {
        setInValue(event.target.value)

    }

    return (
        <SearchContainer>
            <FlippedDiv><IconStyleWrapper><EditLocationAlt /></IconStyleWrapper></FlippedDiv>
            <StyledInput type='text' name='inValue' value={inValue} onChange={changer} placeholder="Enter location"/>
            <SearchBtn>
                <IconStyleWrapper><Search /></IconStyleWrapper>
            </SearchBtn>
        </SearchContainer>
    );
}

export default Input;