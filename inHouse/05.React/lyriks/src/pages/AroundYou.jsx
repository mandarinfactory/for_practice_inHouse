import { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';

import { Error, Loader, SongCard } from '../components'; 

const AroundYou = () => {
    const [country, setCountry] = useState('');
    const [loading, setLoading] = useState(true);
    const { activeSong, isPlaying } = useSelector(state => state.player);

    useEffect(() => {
        axios.get(`https://geo.ipify.org/api/v2/country?apiKey=at_69TmvypfY4VExf6sD6UivKyPMSWUB&ipAddress=8.8.8.8`)
        //at_69TmvypfY4VExf6sD6UivKyPMSWUB
    }, [country]);
    return (
        <div>

        </div>
    )
}

export default AroundYou;
