import { auth, db } from "@/config/firebase-config";
import {
  QuerySnapshot,
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  orderBy,
  query,
  where,
} from "firebase/firestore";

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

export const fetchCategories = async () => {
  const querySnapshot = await getDocs(collection(db, "categories"));
  let arr: any = [];
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    arr.push({ ...doc.data(), id: doc.id });
  });

  return JSON.parse(JSON.stringify(arr));
};

export const fetchHomeData = async () => {
  const data: any = (await getDoc(doc(db, "settings", "homePage"))).data();
  // console.log("HOME DATA", { data });
  let homeData = [];

  for (const [key, value] of Object.entries(data)) {
    let response: any = {
      type: key,
    };

    let products = [];

    let ids: any = value;

    for (const prodId of ids) {
      if (prodId) {
        let prodData = await fetchSingleProduct({ id: prodId });

        if (prodData) {
          products.push(prodData);
        }
      }
    }

    response.products = products;

    homeData.push(response);
  }

  return JSON.parse(JSON.stringify(homeData));
};

export const fetchSubCategories = async () => {
  const querySnapshot = await getDocs(
    query(collection(db, "subCategories"), orderBy("createdAt", "asc"))
  );
  let arr: any = [];
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    arr.push({ ...doc.data(), id: doc.id });
  });
  return JSON.parse(JSON.stringify(arr));
  // const q = query(collection(db, "subCategories"), where("categories", "==", true));
  // const querySnapshot = await getDocs(q);
  // querySnapshot.forEach((doc) => {
  //   // doc.data() is never undefined for query doc snapshots
  //   console.log(doc.id, " => ", doc.data());
  // });
};
export const fetchSubSubCategories = async () => {
  const querySnapshot = await getDocs(
    query(collection(db, "subCategories-1"), orderBy("createdAt", "asc"))
  );
  let arr: any = [];
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    arr.push({ ...doc.data(), id: doc.id });
  });
  return JSON.parse(JSON.stringify(arr));
  // const q = query(collection(db, "subCategories"), where("categories", "==", true));
  // const querySnapshot = await getDocs(q);
  // querySnapshot.forEach((doc) => {
  //   // doc.data() is never undefined for query doc snapshots
  //   console.log(doc.id, " => ", doc.data());
  // });
};
export const fetchSubSubSubCategories = async () => {
  const querySnapshot = await getDocs(
    query(collection(db, "subCategories-2"), orderBy("createdAt", "asc"))
  );
  let arr: any = [];
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    arr.push({ ...doc.data(), id: doc.id });
  });
  return JSON.parse(JSON.stringify(arr));
  // const q = query(collection(db, "subCategories"), where("categories", "==", true));
  // const querySnapshot = await getDocs(q);
  // querySnapshot.forEach((doc) => {
  //   // doc.data() is never undefined for query doc snapshots
  //   console.log(doc.id, " => ", doc.data());
  // });
};

export const checkUserLogin = (cookie: any) => {
  const uid = auth.currentUser?.uid;
  if (uid) {
    return true;
  }

  if (cookie?.value) {
    return true;
  }

  return false;
  // if (uid && cookie?.value) {
  //   return true;
  // } else {
  //   return false;
  // }
};

export const getUserData = async (cookie: any) => {
  let uid;
  if (auth.currentUser?.uid) {
    uid = auth.currentUser?.uid;
    // console.log(uid,"auth id")
  }
  if (cookie?.value) {
    uid = cookie?.value;
    // console.log(uid,"cookie id")
  }

  // console.log(uid,"hhhh")

  if (uid) {
    const docRef = doc(db, "users", uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return JSON.parse(JSON.stringify({ ...docSnap.data(), id: docSnap.id }));
    } else {
      return JSON.parse(JSON.stringify({ status: false }));
    }
  } else {
    return JSON.parse(JSON.stringify({}));
  }
};

export const handleContactUsSubmit = async (data: any) => {
  const docRef = await addDoc(collection(db, "enquiries"), data);
  if (docRef.id) {
    return true;
  }
  return false;
};
export const handleLeadSubmit = async (data: any) => {
  const docRef = await addDoc(collection(db, "leads"), data);
  if (docRef.id) {
    return true;
  }
  return false;
};
export const handleBuyNowRequestSubmit = async (data: any) => {
  const docRef = await addDoc(collection(db, "buyNowRequest"), data);
  if (docRef.id) {
    return true;
  }
  return false;
};

export async function fetchSingleProduct({ slug, id }: any) {
  if (slug) {
    let prodRes = await getDocs(
      query(collection(db, "products"), where("slug", "==", slug))
    ).then(async (val) => {
      if (val.docs.length === 0) return "";

      let prod = val.docs[0].data();
      if (prod?.active) {
        let otherVendors = await getDocs(
          query(collection(db, "products"), where("name", "==", prod?.name))
        ).then((respo: any) => {
          if (respo.docs.length === 0) return [];

          let arr = [];

          for (const docs of respo.docs) {
            let data = docs.data();
            arr.push({ ...data, id: docs.id });
            // if (
            //   data?.vendor &&
            //   data?.vendor?.name &&
            //   data?.vendorid !== prod?.vendorid
            // ) {
            //   arr.push({ name: data?.vendor?.name, id: data?.vendorid });
            // }
          }
          return arr;
        });

        return { ...prod, id: val.docs[0].id, otherVendors: otherVendors };
      } else {
        return null;
      }
    });

    return JSON.parse(JSON.stringify(prodRes));
  }
  return await getDoc(doc(db, "products", id)).then((docData) => {
    if (docData.data()?.active) {
      return { ...docData.data(), id: docData.id };
    } else {
      return null;
    }
  });
}

async function getFethincgId({
  subCatSlug,
  slug,
  subSubCatSlug,
  subSubSubCatSlug,
}: any) {
  if (subSubSubCatSlug) {
    let subSubSubCatId = await getDocs(
      query(
        collection(db, `subCategories-2`),
        where("slug", "==", subSubSubCatSlug)
      )
    ).then((val: any) => {
      if (val.docs.length != 0) {
        return val.docs[0].id;
      } else {
        return "";
      }
    });
    if (subSubSubCatId) {
      console.log("SUB SUB CAT ID: ", subSubSubCatId);

      return subSubSubCatId;
    }
  }

  if (subSubCatSlug) {
    let subSubCatId = await getDocs(
      query(
        collection(db, `subCategories-1`),
        where("slug", "==", subSubCatSlug)
      )
    ).then((val: any) => {
      if (val.docs.length != 0) {
        return val.docs[0].id;
      } else {
        return "";
      }
    });
    if (subSubCatId) {
      console.log("SUB SUB CAT ID: ", subSubCatId);

      return subSubCatId;
    }
  }

  if (subCatSlug) {
    let subCatId = await getDocs(
      query(collection(db, `subCategories`), where("slug", "==", subCatSlug))
    ).then((val: any) => {
      if (val.docs.length != 0) {
        return val.docs[0].id;
      } else {
        return "";
      }
    });
    if (subCatId) {
      console.log("SUB CAT ID: ", subCatId);

      return subCatId;
    }
  }
  if (slug) {
    let catId = await getDocs(
      query(collection(db, `categories`), where("slug", "==", slug))
    ).then((val: any) => {
      if (val.docs.length != 0) {
        return val.docs[0].id;
      } else {
        return "";
      }
    });
    if (catId) {
      console.log(" CAT ID: ", catId);
      return catId;
    }
  }

  return null;
}

export const fetchCategoryProducts = async ({
  slug,
  subCatSlug = null,
  filters = null,
  subSubCatSlug,
  subSubSubCatSlug,
}: any) => {
  const fetchingId = await getFethincgId({
    subCatSlug,
    slug,
    subSubCatSlug,
    subSubSubCatSlug,
  });

  // let catId = await getDocs(
  //   query(collection(db, "categories"), where("slug", "==", slug))
  // ).then((val) => {
  //   if (val.docs.length != 0) {
  //     return val.docs[0].id;
  //   } else {
  //     return "";
  //   }
  // });

  // categoryId = catId;
  // let subCatId = null;

  // if (subCatSlug) {
  //   subCatId = await getDocs(
  //     query(collection(db, `subCategories`), where("slug", "==", subCatSlug))
  //   ).then((val: any) => {
  //     if (val.docs.length != 0) {
  //       return val.docs[0].id;
  //     } else {
  //       return "";
  //     }
  //   });
  //   if (subCatId) {
  //     catId = subCatId;
  //     subCategoryId = subCatId;
  //   }
  // }

  // let subSubCatId;

  // if (subSubCatSlug) {
  //   if (subCatId) {
  //     subSubCatId = subCatId = await getDocs(
  //       query(
  //         collection(db, `subCategories-1`),
  //         where("slug", "==", subSubCatSlug)
  //       )
  //     ).then((val: any) => {
  //       if (val.docs.length != 0) {
  //         return val.docs[0].id;
  //       } else {
  //         return "";
  //       }
  //     });
  //     if (subSubCatId) {
  //       catId = subSubCatId;
  //       subCategoryId = subSubCatId;
  //     }
  //   }
  // }

  const products = await fetchProducts(fetchingId);

  if (fetchingId) {
    let minMax = null;

    if (products.length !== 0) {
      minMax = getMaxAndMinPriceForFilters(products);
    }
    return JSON.parse(JSON.stringify({ products, minMax }));
  }

  return [];
};

async function fetchProducts(catId: any) {
  return await getDocs(
    query(
      collection(db, "products"),
      where("categories", "array-contains", catId)
    )
  ).then((val: QuerySnapshot) => {
    if (val.docs.length === 0) return [];

    let arr = [];
    for (const prod of val.docs) {
      let data = prod.data();
      if (data?.active) {
        arr.push({ ...data, id: prod?.id });
      }
    }

    return arr;
  });
}

export function getMaxAndMinPriceForFilters(arr: any) {
  let min = Number.MAX_VALUE;

  let max = 0;

  arr.forEach((element: any) => {
    if (
      (element?.variants[0]?.price?.discounted ||
        element?.variants[0]?.price?.mrp) > max
    ) {
      max =
        element?.variants[0]?.price?.discounted ||
        element?.variants[0]?.price?.mrp;
    }

    if (
      (element?.variants[0]?.price?.discounted ||
        element?.variants[0]?.price?.mrp) < min
    ) {
      min =
        element?.variants[0]?.price?.discounted ||
        element?.variants[0]?.price?.mrp;
    }
  });

  let res = [Math.ceil(min), Math.ceil(max)];
  return res;
}

export async function fetchSingleFarmer({ farmerdetails }: any) {
  console.log("STARTED FETCHING", farmerdetails);

  let Res = await getDocs(
    query(collection(db, "vendors"), where("slug", "==", farmerdetails))
  ).then((val) => {
    if (val.docs.length === 0) return "";
    let far = val.docs[0].data();
    return far;
  });
  return JSON.parse(JSON.stringify(Res));
}

export async function fetchFarmers() {
  return await getDocs(collection(db, "vendors")).then((val) => {
    if (val.docs.length === 0) return [];

    let arr = [];
    for (const doc of val.docs) {
      arr.push({ ...doc.data(), id: doc.id });
    }

    return JSON.parse(JSON.stringify(arr));
  });
}

export async function fetchFarmerProducts(slug: string) {
  console.log(slug);
  const res = await getDocs(
    query(collection(db, "vendors"), where("slug", "==", slug))
  ).then((val) => {
    if (val.docs.length === 0) return null;

    return { ...val.docs[0].data(), id: val.docs[0].id };
  });

  if (res) {
    const data = await getDocs(
      query(collection(db, "products"), where("vendorid", "==", res?.id))
    ).then((val) => {
      if (val.docs.length === 0) return null;
      let arr = [];

      for (const doc of val.docs) {
        let data = doc.data();
        if (data?.active) {
          arr.push({ ...data, id: doc.id });
        }
      }

      return arr;
    });

    return JSON.parse(JSON.stringify(data));
  }

  return [];
}

export async function getUserInterestedProductsData(cookie: any) {
  let uid;
  if (auth.currentUser?.uid) {
    uid = auth.currentUser?.uid;
    // console.log(uid,"auth id")
  }
  if (cookie?.value) {
    uid = cookie?.value;
    // console.log(uid,"cookie id")
  }

  if (!uid) return null;

  console.log("FETCIHNG DATA", uid);

  const data = await getDocs(
    query(
      collection(db, "leads"),
      where("user.id", "==", uid),
      orderBy("createdAt", "desc")
    )
  ).then((val) => {
    if (val.docs.length === 0) return [];

    let arr = [];

    for (const doc of val.docs) {
      let createdAt = doc.data().createdAt?.toDate();
      arr.push({ ...doc.data(), id: doc.id, createdAt });
    }

    return arr;
  });
  return data;
}

export async function getUserBuyNowRequests(cookie: any) {
  let uid;
  if (auth.currentUser?.uid) {
    uid = auth.currentUser?.uid;
  }
  if (cookie?.value) {
    uid = cookie?.value;
  }

  if (!uid) return null;

  const data = await getDocs(
    query(
      collection(db, "buyNowRequest"),
      where("user.id", "==", uid),
      orderBy("createdAt", "desc")
    )
  ).then((val) => {
    if (val.docs.length === 0) return [];

    let arr = [];

    for (const doc of val.docs) {
      let createdAt = doc.data().createdAt?.toDate();
      arr.push({ ...doc.data(), id: doc.id, createdAt });
    }

    return arr;
  });
  return data;
}

export async function getUserOrders(cookie: any) {
  let uid;
  if (auth.currentUser?.uid) {
    uid = auth.currentUser?.uid;
  }
  if (cookie?.value) {
    uid = cookie?.value;
  }

  if (!uid) return null;
  try {
    const docsData = await getDocs(
      query(
        collection(db, "orders"),
        where("userId", "==", uid),
        orderBy("createdAt", "desc")
      )
    ).then((val) => {
      if (val.docs.length === 0) return [];

      let arr = [];
      for (const doc of val.docs) {
        arr.push({ ...doc.data(), id: doc.id });
      }

      return arr;
    });

    return JSON.parse(JSON.stringify(docsData));
  } catch (error) {
    console.log("EROR", error);

    return null;
  }
}
