const BASE_URL = 'https://youtube-v31.p.rapidapi.com/search?'

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '6f8c93a50amshea0626b1a8ee514p1a9e5djsnade62b9207e5',
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
};

export const fetchFromAPI = async (urls) => {
    const res = await fetch(`${BASE_URL}${urls}`, options)
    const data  = await res.json()
    return data;
}




    