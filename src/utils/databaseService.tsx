import { db } from "@/config/firebase-config";
import { doc, getDoc } from "firebase/firestore";

export const fetchFarmGallery = async () => {
  const docRef = doc(db, "settings", "gallery");
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return { status: true, res: { ...docSnap.data(), id: docSnap.id } };
  } else {
    // docSnap.data() will be undefined in this case
    return { status: false };
  }
};
