import {create} from "axios";

const APIKey = 'a3e98a2c';

export const axios = create({
    baseURL: `https://www.omdbapi.com/`
})

axios.interceptors.request.use(function (config) {
	console.log(config);
    const newConfig = {...config}
    newConfig.url = `?apikey=${APIKey}${newConfig.url}`
    return newConfig;
});