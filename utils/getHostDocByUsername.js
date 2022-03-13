import {
  getFirestore,
  getDocs,
  collection,
  query,
  where,
} from "firebase/firestore";

export async function getHostDocByUsername(username) {
  const hostQuerySnap = await getDocs(
    query(
      collection(getFirestore(), "users"),
      where("username", "==", username)
    )
  );
  if (hostQuerySnap.docs.length === 0) {
    return null;
  }
  const hostDoc = hostQuerySnap.docs[0];
  return hostDoc;
}
