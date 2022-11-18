import React from 'react';
import './card.css';

// Styled components and material icons
import styled from 'styled-components';
import { MoreHoriz } from '@styled-icons/material/MoreHoriz';
import {Tune} from '@styled-icons/material/Tune';

// Images
import sunny from '../../weather_icons/main/clear_sky_d.png'

const MoreIcon = styled(MoreHoriz)`
    color: white;
    width: 36px;
`
const SettingsIcon = styled(Tune)`
    color: white;
    width: 36px;
`
const WeatherCard = styled.article`
    background-color: #4dabfb;
    color: white;
    width: 400px;
    height: 600px;
    border-radius: 15px;
    padding: 1rem;
    position: relative;
    overflow: hidden;
        &::after {
        content: '';
        position: absolute;
        background: linear-gradient(0deg, rgba(77,171,251,1) 30%, rgba(59,136,214,1) 100%);
        top: 30%;
        left: -25%;
        right: -25%;
        bottom: 0;
        width: 150%;
        border-top-left-radius: 50%;
        border-top-right-radius: 50%;
        z-index: 0;
        }
`
const Options = styled.div`
    display: flex;
    justify-content: space-between;

`

const WeatherContent = styled.section`
        position: relative;
        z-index: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
`
const Temp = styled.p`
        margin: 0;
        font-size: 6rem;
        font-weight: 800;
        position: relative;
            &:after {
                content: '°';
                font-size: 4rem;
                font-weight: 200;
                position: absolute;
                color: hsl(0, 0%, 85%)
            }     
`
const OtherOptions = styled.section`
            display: flex;
            justify-content: space-around;
            position: relative;
            z-index: 5;
`
const SmallMeasurementContainer = styled.div`
            margin-top: 2rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
`

const Card = () => {
    return (
        <WeatherCard>
            <Options>
                <p>Day</p>
                <MoreIcon />
                <SettingsIcon />
            </Options>
            <WeatherContent>
                <img src={sunny}/>
                <Temp>32</Temp>
                <p style={{fontSize: '1.5rem'}}>Monterey</p>
            </WeatherContent>
            <OtherOptions>
                <SmallMeasurementContainer>
                    <p>Wind now</p>
                    <p>15km</p>
                </SmallMeasurementContainer>
                <SmallMeasurementContainer>
                    <p>Humidity</p>
                    <p>32%</p>
                </SmallMeasurementContainer>
                <SmallMeasurementContainer>
                    <p>Precipitaition</p>
                    <p>87%</p>
                </SmallMeasurementContainer>
            </OtherOptions>
        </WeatherCard>
    );
}

export default Card;
