const API_KEY = 'AIzaSyAZPlePGsO04xUX5ri1pAxSAxebndqeIsQ';
const BASE_URL = 'https://www.googleapis.com/youtube/v3';

async function fetchYouTube(endpoint, params = {}) {
    // Build the URL with the API Key and parameters
    const queryString = new URLSearchParams({
        key: API_KEY,
        part: 'snippet',
        maxResults: 20,
        ...params
    }).toString();

    const response = await fetch(`${BASE_URL}/${endpoint}?${queryString}`);

    if (!response.ok) {
        throw new Error("YouTube API Error");
    }

    return response.json();
}

// Function to fetch trending videos for your Home Feed
export const getTrendingVideos = () =>
    fetchYouTube('videos', { chart: 'mostPopular' });

// Function for your Search Bar
export const searchVideos = (query) =>
    fetchYouTube('search', { q: query, type: 'video' });