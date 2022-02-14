// /pages/api/spotify.js
import querystring from 'querystring';
import process from 'process';

const {
  NEXT_PUBLIC_SPOTIFY_CLIENT_ID: client_id,
  NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET: client_secret,
  NEXT_PUBLIC_SPOTIFY_REFRESH_TOKEN: refresh_token,
} = process.env;

const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64');
const TOP_TRACKS_ENDPOINT = `	https://api.spotify.com/v1/me/top/tracks`
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;

const getAccessToken = async () => {
  const response = await fetch(TOKEN_ENDPOINT, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${basic}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: querystring.stringify({
      grant_type: 'refresh_token',
      refresh_token,
    }),
  });

  return response.json();
};

export const getTopTracks = async () => {
  const { access_token } = await getAccessToken();

  return fetch(TOP_TRACKS_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
};


const Tracks = async (_,res) => {
  const response = await getTopTracks()

  if (response.status === 204 || response.status > 400) {
    return res.status(200).json({ Data: false });
  }

  const {items} = await response.json()
  const tracks = items.slice(0, 20).map((track) => ({
    artist: track.artists.map((_artist) => _artist.name).join(', '),
    songUrl: track.external_urls.spotify,
    title: track.name,
    img: track.album.images[0].url

  }));

  return res.status(200).json({
    tracks
  })
}

export default Tracks



