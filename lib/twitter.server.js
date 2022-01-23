import Twitter from "twitter";

export function createClient({ accessTokenKey, accessTokenSecret }) {
  return new Twitter({
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    access_token_key: accessTokenKey,
    access_token_secret: accessTokenSecret,
  });
}

export async function getUser(client, id) {
  try {
    const response = await client.get(`/users/show`, { user_id: id });
    return response;
  } catch (error) {
    console.error(error);
  }
}

export function getAvatar(avatarUrl) {
  return avatarUrl
    .replace("http://pbs.twimg.com/profile_images/", "")
    .replace("_normal.jpg", "");
}
