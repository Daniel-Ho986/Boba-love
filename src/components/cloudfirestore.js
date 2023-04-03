//import { async } from  '@firebase/util';
import { initializeApp } from "firebase/app";
//import { getFirestore, doc, Firestore, setDoc, collection, query } from "firebase/firestore";
import {
    getFirestore,
    doc,
    setDoc,
    collection,
    addDoc,
    getDoc,
    onSnapshot,
    query,
    where,
    getDocs,
    orderBy,
    limit,
}   from 'firebase/firestore'; //from 'firebase/firestore/lite' 


// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592
const firebaseConfig = {
  apiKey: 'AIzaSyAUXkceWD1BGSnJsKWZVZRNVfKrnT2608w',
  authDomain: 'boba-love-5e8a4.firebaseapp.com',
  projectId: 'boba-love-5e8a4',
  storageBucket: 'boba-love-5e8a4.appspot.com',
  messagingSenderId: '953248647818',
  appId: '1:953248647818:web:f283cc822f2092b4607b73'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

//onst specialOfTheDay = collection(db, 'dailySpecial/2021-09-14')
async function writeDailySpecial() {
    // const docData = {
    //     descripton: 'A delicious vanilla latte',
    //     price: 3.99,
    //     milk: 'whole',
    //     vegan: 'false',

    // };
    // setDoc(specialOfTheDay, docData, { merge: true })
    // .then(() => {
    //     console.log('This value has been written to the database');
    // })
    // .catch((error) => {
    //     console.log(`I got an error! ${error}`);
    // });
    // ALL CODE BELOW WAS COPIED AND PASTED FROM THIS WEBSITE: https://firebase.google.com/docs/firestore/query-data/get-data
    const citiesRef = collection(db, "cities");
    
    await setDoc(doc(citiesRef, "SF"), {
        name: "San Francisco", state: "CA", country: "USA",
        capital: false, population: 860000,
        regions: ["west_coast", "norcal"] });
    await setDoc(doc(citiesRef, "LA"), {
        name: "Los Angeles", state: "CA", country: "USA",
        capital: false, population: 3900000,
        regions: ["west_coast", "socal"] });
    await setDoc(doc(citiesRef, "DC"), {
        name: "Washington, D.C.", state: null, country: "USA",
        capital: true, population: 680000,
        regions: ["east_coast"] });
    await setDoc(doc(citiesRef, "TOK"), {
        name: "Tokyo", state: null, country: "Japan",
        capital: true, population: 9000000,
        regions: ["kanto", "honshu"] });
    await setDoc(doc(citiesRef, "BJ"), {
        name: "Beijing", state: null, country: "China",
        capital: true, population: 21500000,
        regions: ["jingjinji", "hebei"] });
    
    const docRef = doc(db, "cities", "SF");
    const docRef2 = doc(db, "FlavorsTest", "09IJTxMCMlctu5nw15fV");
    const docSnap = await getDoc(docRef);
    const docSnap2 = await getDoc(docRef2);
    
    
    if (docSnap2.exists()) {
      console.log("Document data:", docSnap2.data());
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }

    const querySnapshot = await getDocs(collection(db, "FlavorsTest"));
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
    });
    
    
}
export default writeDailySpecial;

// const ordersCollection = collection(db, 'orders');

// async function addANewDocument() {
//     const newDoc = await addDoc(ordersCollection, {
//         customer: 'Arthur',
//         drink: 'Latte',
//         total_cost: (100 + Math.floor(Math.random() * 400)) /100,
    
//     });
//     console.log(`Your doc was created at ${newDoc.path}`);
// }

// async function readASingleDocument() {
//     const mySnapshot = await getDoc(specialOfTheDay);
//     if(mySnapshot.exists()) {
//         const docData = mySnapshot.data();
//         console.log(`My data is ${JSON.stringify(docData)}`);
//     }
// }

// let dailySpecialUnsubscribe;

// function listenToADocument() {
//     dailySpecialUnsubscribe = onSnapshot(specialOfTheDay, docSnapshot => {
//         if (docSnapshot.exist()) {
//             const docData = docSnapshot.data();
//             console.log(`In realtime, docData is ${JSON.stringify(docData)}`);
//         }
//     });
// }

// function cancelMyListenerAtTheAppropriateTime(){
//     dailySpecialUnsubscribe();
// }

// let unsubscribeCustomerOrders;
// async function queryForDocuments() {
//     const customerOrdersQuery = query(
//         collection(firestore, `orders`),
//         where(`drink`, `==`, `latte`),
//         orderBy(`price`),
//         limit(10)
//     );

//     unsubscribeCustomerOrders = onSnapshot(
//         customerOrdersQuery,
//         (querySnapshot) => {
//             console.log(JSON.stringify(querySnapshot.docs.map((e) => e.data())));
//         }
//     );

//     //const querySnapshot = await getDocs(customerOrdersQuery);
//     onSnapshot(customerOrdersQuery, (querySnapshot) => {
//         console.log(JSON.stringify(querySnapshot.docs.map((e) => e.data())));
//     });
//     //querySnapshot.forEach((snap) => {
//     //    console.log(`Document ${snap.id} contains ${JSON.stringify(snap.data())}`);
//     //});
// }

console.log('Hello there, Firestore!');
writeDailySpecial();
// writeDailySpecial();
// addANewDocument();
// readASingleDocument();
// listenToADocument();
// queryForDocuments();
//THIS WAS ALL TAKEN FROM A YOUTUBE TUTORIAL.
//https://www.youtube.com/watch?v=BjtxPj6jRM8&t=597s
