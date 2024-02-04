import React, { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";

import { charCountState, textState } from "../state";

const Hero: React.FC = () => {
  const CLIENT_ID = "7a365dfad3bb44c0bbeb1740aa8a4259";
  const CLIENT_SECRET = "6f0c545ae5604203b2f8c5d888b66c47";
  const [text, setText] = useRecoilState(textState);
  const [searchInput, setSearchInput] = useState("");
  const [accessToken, setAccessToken] = useState("");
  const count = useRecoilValue(charCountState);
  const onChange = (event: any) => {
    setText(event.target.value);
  };

  useEffect(() => {
    // API Access Token
    const authParameters = {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body:
        "grant_type=client_credentials&client_id=" +
        CLIENT_ID +
        "&client_secret=" +
        CLIENT_SECRET,
    };
    fetch("https://accounts.spotify.com/api/token", authParameters)
      .then((result) => result.json())
      .then((data) => setAccessToken(data.access_token));
  }, []);

  // search

  const search = async () => {
    console.log("searching for" + searchInput);

    // Get request using search to get the Artist ID
    let searchParameters = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + accessToken,
      },
    };
    let artistID = await fetch(
      "https://api.spotify.com/v1/search?q=" + searchInput + "&type=artist",
      searchParameters
    )
      .then((response) => response.json())
      .then((data) => {
        return data.artists.items[0].id;
      });
    console.log(artistID);
    // Get request with Artist ID grab all the albums from that artist
    let albums = await fetch(
      "https://api.spotify.com/v1/artists/" + artistID + "/albums" + "?limit=50",
      searchParameters
    )
      .then((response) => response.json())
      .then((data) => console.log(data));
    // Display those albums to the user
  };

  return (
    <div className="w-full h-[900px] mr-7 my-7 p-5 bg-gradient-to-r from-yellow-500 to-emerald-500 rounded-3xl shadow-2xl">
      Hero
      <h1>{text}</h1>
      <h1>{count}</h1>
      <input
        type="value"
        placeholder="테스트용!"
        onKeyPress={(event) => {
          if (event.key === "Enter") {
            setSearchInput(event.target.value);
            search();
          }
        }}
      />
    </div>
  );
};

export default Hero;
