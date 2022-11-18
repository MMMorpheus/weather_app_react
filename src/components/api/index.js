import constants from "../config/constants";

export const getWeather = (location) => {
    const {API_KEY, BASE_URL, DEFAULT_LIMIT} = constants;
    const defaultlocation = 'khust';
    
    const finalLocation = location ? location : defaultlocation;

    return fetch(`${BASE_URL}q=${finalLocation}&limit=${DEFAULT_LIMIT}&units=metric&lang=ua&appid=${API_KEY}`)
}