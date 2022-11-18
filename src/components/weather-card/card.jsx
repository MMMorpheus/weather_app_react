import React from 'react';
import Flex from './bricks/flex';
import Content from './bricks/content';

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
    z-index: 0;
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
        z-index: -1;
        }
`
const Temperature = styled(Content)`
    &:after {
        content: '°';
        font-size: 4rem;
        font-weight: 200;
        position: absolute;
        color: hsl(0, 0%, 85%)
            }     
`
const Card = ({data}) => {

    const roundTemperature = Math.round(data.main.temp);

    return (
        <WeatherCard>
            <Flex justify="space-between">
                <p>Day</p>
                <MoreIcon />
                <SettingsIcon />
            </Flex>
            <Flex direction="column" justify="center" align="center">
                <img src={sunny}/>
                <Temperature size="6rem" weight="800">{roundTemperature}</Temperature>
                <Content size="1.7rem">{data.name}</Content>
            </Flex>
            <Flex justify="space-around">
                <Flex direction="column" justify="center" align="center" margin="2rem 0 0 0">
                    <Content>Wind now</Content>
                    <Content size="2rem" weight="600">{data.wind.speed}km</Content>
                </Flex>
                <Flex direction="column" justify="center" align="center" margin="2rem 0 0 0">
                    <Content>Humidity</Content>
                    <Content size="2rem" weight="600">{data.main.humidity}%</Content>
                </Flex>
                <Flex direction="column" justify="center" align="center" margin="2rem 0 0 0">
                    <Content>Precipitaition</Content>
                    <Content size="2rem" weight="600">87%</Content>
                </Flex>
            </Flex>
        </WeatherCard>
    );
}

export default Card;
