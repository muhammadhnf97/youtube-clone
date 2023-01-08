const BASE_URL = 'https://youtube-v31.p.rapidapi.com/search?'
const VIDEO_URL = 'https://youtube-v31.p.rapidapi.com/videos?part=contentDetails%2Csnippet%2Cstatistics&id='

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '6f8c93a50amshea0626b1a8ee514p1a9e5djsnade62b9207e5',
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
};

export const fetchSuggestedVideos = async () => {
    const res = await fetch('https://youtube-v31.p.rapidapi.com/search?relatedToVideoId=7ghhRHRP6t4&part=id%2Csnippet&type=video&maxResults=50', options)
    const data  = await res.json()
    return data;
}


export const fetchChannelDetails = async (url) => {
    const res = await fetch(`${BASE_URL}${url}`, options)
    const data  = await res.json()
    return data;
}

export const fetchSearch = async (url) => {
    const res = await fetch(`${BASE_URL}q=${url}&part=snippet%2Cid&regionCode=US&maxResults=50&order=date`, options)
    const data  = await res.json()
    return data;
}

export const fetchVideoDetail = async (id) => {
    const res = await fetch(`https://youtube-v31.p.rapidapi.com/videos?part=contentDetails%2Csnippet%2Cstatistics&id=${id}`, options)
    const data = await res.json()
    console.log(id)
    return data
}



    