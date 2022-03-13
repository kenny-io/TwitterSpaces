import { getFirestore, getDocs, collection } from "firebase/firestore";

export async function getSpacesValueByHostId(hostId) {
  const spacesSnap = await getDocs(
    collection(getFirestore(), `users/${hostId}/spaces`)
  );
  const spaces = spacesSnap.docs.map((spaceDoc) => spaceDoc.data());
  return spaces;
}
