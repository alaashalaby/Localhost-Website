import { db } from "@/config/firebase";
import { doc, getDoc } from "firebase/firestore";

export async function getPlaces() {
  try {
    const docRef = doc(db, "places", "placesData");
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const data = docSnap.data();
      if (data && Array.isArray(data.places)) {
        return data.places as Place[];
      } else {
        console.error("failed");
        return [];
      }
    } else {
      console.error("no document");
      return [];
    }
  } catch (error) {
    console.error("Error fetching places:", error);
  }
}

export async function getSinglePlace(placeId: string) {
  try {
    const docRef = doc(db, "places", "placesData");
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const data = docSnap.data();
      if (data && Array.isArray(data.places)) {
        const place = data.places.find((place: Place) => place.id === placeId);
        if (place) {
          return place;
        } else {
          console.log(`Place with id ${placeId} not found.`);
          return null;
        }
      } else {
        console.error("Field 'places' is not an array or is missing.");
        return null;
      }
    } else {
      console.log("No such document!");
      return null;
    }
  } catch (error) {
    console.error("Error fetching place: ", error);
    throw new Error("Failed to fetch place");
  }
}
