const CLIENT_ID = '2780ce399f3240dc88fb474af0465d06';
const CLIENT_SECRET = '48e333855e15462e94ec2b79e21f8bd7';

async function getAccessToken() {
  const response = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      'Authorization': `Basic ${btoa(`${CLIENT_ID}:${CLIENT_SECRET}`)}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: 'grant_type=client_credentials',
  });

  const data = await response.json();
  return data.access_token;
}

async function getList(accessToken: string, id: string) {
  const url = `https://api.spotify.com/v1/playlists/${id}`;
  try {
    const response = await fetch(url, {
      headers: {
        'Authorization': `Bearer ${accessToken}`,
      },
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching playlist:', error);
    throw error;
  }
}

async function getArtist(accessToken: string, id: string) {
    const url = `https://api.spotify.com/v1/artists/${id}`;
    try {
      const response = await fetch(url, {
        headers: {
          'Authorization': `Bearer ${accessToken}`,
        },
      });
  
      const data = await response.json();
      console.log('artist data:', data);
      return data;
    } catch (error) {
      console.error('Error fetching artist:', error);
      throw error;
    }
  }

export { getAccessToken, getList, getArtist };
