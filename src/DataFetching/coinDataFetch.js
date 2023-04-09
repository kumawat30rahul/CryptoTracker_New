import axios from 'axios'

export const coinData = (id) =>{
    const data = axios
        .get(`https://api.coingecko.com/api/v3/coins/${id}`, { crossDomain: true })
        .then(res => {
            return res.data
        })
        .catch(error => console.log(error))

        return data
}