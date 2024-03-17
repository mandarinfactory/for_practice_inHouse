import { GetServerSideProps } from 'next';
import { clientId, scope, redirectUri } from './constants';

const Home = ({ spotifyAuthUrl }: { spotifyAuthUrl: string }) => {
    return (
        <div>
            <h1>Spotify Login</h1>
            <a href={spotifyAuthUrl}>Login with Spotify</a>
        </div>
    );
};

export const getServerSideProps: GetServerSideProps = async () => {
    const encodeRedirectUri = encodeURIComponent(redirectUri);
    const spotifyAuthUrl = `https://accounts.spotify.com/authorize?response_type=code&client_id=${clientId}&redirect_uri=${encodeRedirectUri}&scope=${scope}`;
    return { props: { spotifyAuthUrl } };
};

export default Home;
