// https://developer.spotify.com/
// documentation/web-playback-sdk/quick-start/#

export const authEndpoint = 
'https://accounts.spotify.com/authorize';
const redirectUri = 'http://localhost:3000/';
const clientId = '330c3476e9ac4666874ebd66b91919d9';
const scopes = [
    'user-read-currently-playing',
    'user-read-recently-played',
    'user-read-playback-state',
    'user-top-read',
    'user-modify-playback-state',
]//scopes

export const getTokenFromUrl = () => {
    return window.location.hash
        .substring(1)
        .split('&')
        .reduce((initial, item) => {
            /* #acessToken = sth·······key&name=sth······· */
            let parts = item.split('=');
            initial[parts[0]] = decodeURIComponent(parts[1])
            return initial;
        }, {})//reduce
}//function_getTokenFromUrl

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
    '&20'
    )}&response_type=token&show_dialog=true`;