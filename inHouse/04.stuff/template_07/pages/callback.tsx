import { GetServerSideProps } from 'next';
import axios from 'axios';
import { clientId, clientSecret, redirectUri, myPlaylistId } from './constants';

interface Track {
    track: {
        name: string;
        id: string;
    };
}

const Callback = ({ accessToken, playlistTracks }: { accessToken: string, playlistTracks: Track[] }) => {
    return (
        <div>
            <h1>Spotify Playlist Tracks</h1>
            <p>Access Token: {accessToken}</p>
            <ul>
                {playlistTracks.map((track, index) => (
                    <li key={index}>
                        {track.track.name}
                        <br />
                        <iframe
                            src={`https://open.spotify.com/embed/track/${track.track.id}`}
                            width="300"
                            height="80"
                            allow="encrypted-media"
                        ></iframe>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
    const code = query.code as string;

    if (!code) {
        return {
            redirect: {
                destination: '/',
                permanent: false,
            },
        };
    }

    try {
        const response = await axios.post(
            'https://accounts.spotify.com/api/token',
            new URLSearchParams({
                grant_type: 'authorization_code',
                code,
                redirect_uri: redirectUri,
                client_id: clientId,
                client_secret: clientSecret,
            }).toString(),
            {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
            }
        );

        const accessToken = response.data.access_token;

        const playlistResponse = await axios.get(
            `https://api.spotify.com/v1/playlists/${myPlaylistId}/tracks`,
            {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            }
        );

        const playlistTracks: Track[] = playlistResponse.data.items;

        return { props: { accessToken, playlistTracks } };
    } catch (error) {
        console.error('Error:', error);
        return { props: { accessToken: '', playlistTracks: [] } };
    }
};

export default Callback;