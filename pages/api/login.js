import "../../lib/firebase.server";
import { getFirestore, FieldValue } from "firebase-admin/firestore";
import { getAuth } from "firebase-admin/auth";
import { createClient, getUser, getAvatar } from "../../lib/twitter.server";

const firestore = getFirestore();
const auth = getAuth();

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).send("Method Not Allowed");

  const body = JSON.parse(req.body);

  const idToken = req.headers["authorization"];
  const decodedToken = await auth.verifyIdToken(idToken);

  const userRef = firestore.collection("users").doc(decodedToken.uid);
  const userSnap = await userRef.get();

  if (userSnap.exists) return res.status(200);

  const twitterClient = createClient({
    accessTokenKey: body.accessToken,
    accessTokenSecret: body.secret,
  });

  const twitterUserId = decodedToken.firebase.identities["twitter.com"][0];
  const twitterUser = await getUser(twitterClient, twitterUserId);
  const userProfile = {
    name: twitterUser.name,
    username: twitterUser.screen_name,
    bio: twitterUser.description,
    url: twitterUser.url,
    location: twitterUser.location,
    avatar: getAvatar(twitterUser.profile_image_url),
    twitterUserId: twitterUserId,
  };
  await firestore.runTransaction(async (transaction) => {
    transaction.set(userRef, {
      ...userProfile,
      createdAt: FieldValue.serverTimestamp(),
      updatedAt: FieldValue.serverTimestamp(),
    });
    transaction.set(userRef.collection("tokens").doc("twitter"), {
      accessTokenKey: body.accessToken,
      accessTokenSecret: body.secret,
    });
  });

  res.status(200).json({ name: "John Doe" });
}
