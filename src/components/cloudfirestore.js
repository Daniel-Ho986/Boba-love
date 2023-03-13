import { async } from  `@firebase/util`;
import { initializeApp } from "firebase/app";
import { getFirestore, doc, Firestore, setDoc, collection, query } from "firebase/firestore";
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

const specialOfTheDay = doc(db, 'dailySpecial/2021-09-14')
function writeDailySpecial() {
    const docData = {
        descripton: 'A delicious vanilla latte',
        price: 3.99,
        milk: 'whole',
        vegan: 'false',

    };
    setDoc(specialOfTheDay, docData, { merge: true })
    .then(() => {
        console.log('This value has been written to the database');
    })
    .catch((error) => {
        console.log(`I got an error! ${error}`);
    });
}

const ordersCollection = collection(db, 'orders');

async function addANewDocument() {
    const newDoc = await addDoc(ordersCollection, {
        customer: 'Arthur',
        drink: 'Latte',
        total_cost: (100 + Math.floor(Math.random() * 400)) /100,
    
    });
    console.log(`Your doc was created at ${newDoc.path}`);
}

async function readASingleDocument() {
    const mySnapshot = await getDoc(specialOfTheDay);
    if(mySnapshot.exists()) {
        const docData = mySnapshot.data();
        console.log(`My data is ${JSON.stringify(docData)}`);
    }
}

let dailySpecialUnsubscribe;

function listenToADocument() {
    dailySpecialUnsubscribe = onSnapshot(specialOfTheDay, docSnapshot => {
        if (docSnapshot.exist()) {
            const docData = docSnapshot.data();
            console.log(`In realtime, docData is ${JSON.stringify(docData)}`);
        }
    });
}

function cancelMyListenerAtTheAppropriateTime(){
    dailySpecialUnsubscribe();
}

let unsubscribeCustomerOrders;
async function queryForDocuments() {
    const customerOrdersQuery = query(
        collection(firestore, `orders`),
        where(`drink`, `==`, `latte`),
        orderBy(`price`),
        limit(10)
    );

    unsubscribeCustomerOrders = onSnapshot(
        customerOrdersQuery,
        (querySnapshot) => {
            console.log(JSON.stringify(querySnapshot.docs.map((e) => e.data())));
        }
    );

    //const querySnapshot = await getDocs(customerOrdersQuery);
    onSnapshot(customerOrdersQuery, (querySnapshot) => {
        console.log(JSON.stringify(querySnapshot.docs.map((e) => e.data())));
    });
    //querySnapshot.forEach((snap) => {
    //    console.log(`Document ${snap.id} contains ${JSON.stringify(snap.data())}`);
    //});
}

console.log('Hello there, Firestore!');
writeDailySpecial();
addANewDocument();
readASingleDocument();
listenToADocument();
queryForDocuments();
