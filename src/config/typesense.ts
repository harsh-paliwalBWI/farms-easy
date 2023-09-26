
import { doc, getDoc } from "firebase/firestore";
import { db } from "./firebase-config";

export function typesense_initClient() {
    return new Promise(async (resolve, reject) => {
        try {
            const env = (await getDoc(doc(db, 'settings', 'typesense'))).data();
            const Typesense = require('typesense');
            let typesenseClient = new Typesense.Client({
                'nodes': [{
                    'host': env?.host,
                    'port': env?.port,
                    'protocol': env?.protocol
                }],
                'apiKey': env?.searchOnlyKey,
                'connectionTimeoutSeconds': 2
            });
            resolve(typesenseClient);
        } catch (error) {
            console.log('error in initialising typesense client');
            resolve(null);
        }
    })
}

export async function handleTypesenseSearch(query: string) {
    const client: any = await typesense_initClient();
    if (client) {
        const searchParameters = {
            q: query,
            query_by: 'name, tags',
        };
        try {
            const data = await client
                .collections(`bwi-emb-farmacy-products`)
                .documents()
                .search(searchParameters);

            if (data && data?.hits) {
                let arr = [];
                for (const prod of data?.hits) {
                    let variants = JSON.parse(prod?.document?.variants);
                    let images = JSON.parse(prod?.document?.images)
                    arr.push({ ...prod?.document, variants, images })
                }
                return arr;
            }
            return data;
        } catch (error) {
            console.log(error, "error ISIDE CATCH");
            return [];
        }
    }

}

