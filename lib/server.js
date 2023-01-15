const BASE_URL = 'https://youtube-v31.p.rapidapi.com/'

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': process.env.NEXT_PUBLIC_API_KEY,
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
};

export const fetchSuggestedVideos = async (videoId) => {
    const res = await fetch(`https://youtube-v31.p.rapidapi.com/search?relatedToVideoId=${videoId}&part=id%2Csnippet&type=video&maxResults=15`, options)
    const data  = await res.json()
    return data;
}


export const fetchChannelDetails = async (chId) => {
    const res = await fetch(`${BASE_URL}channels?part=snippet%2Cstatistics&id=${chId}`, options)
    const data  = await res.json()
    return data;
}

export const fetchSearch = async (url) => {
    const res = await fetch(`${BASE_URL}search?q=${url}&part=snippet%2Cid&regionCode=US&maxResults=15&order=date`, options)
    const data  = await res.json()
    return data;
}

export const fetchVideoDetail = async (id) => {
    const res = await fetch(`${BASE_URL}videos?part=contentDetails%2Csnippet%2Cstatistics&id=${id}`, options)
    const data = await res.json()
    return data
}


export const fetchVideoComments = async (id) => {
    const res = await fetch(`${BASE_URL}commentThreads?part=snippet&videoId=${id}&maxResults=15`, options)
    const data = await res.json()
    console.log(data)
    return data
}


export const fetchChannelVideos = async (id) => {
    const res = await fetch(`${BASE_URL}search?channelId=${id}&part=snippet%2Cid&order=date&maxResults=15`, options)
    const data = await res.json()
    console.log(data)
    return data
}



    