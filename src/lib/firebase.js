import app from "./firebaseconfig";
//import {getDatabase, ref, runTransaction } from 'firebase/database'
import { getFirestore, collection, getDocs, addDoc, Timestamp, query, querySnapShot, doc, updateDoc, serverTimestamp} from 'firebase/firestore'
import { getAuth,  GoogleAuthProvider, signInWithPopup, onAuthStateChanged} from 'firebase/auth'

const db = getFirestore(app);
// -----------Firebase Login

const provider = new GoogleAuthProvider();
//const getUserData = () => auth.currentUser;

const signGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        alert('hola :-)');
        // const token = credential.accessToken;
        // The signed-in user info.
        // const user = result.user;
        // ...

        return credential;
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        alert('No fue posible ingresar con Google');
        // const errorMessage = error.message;
        // The email of the user's account used.
        // const email = error.customData.email;
        // The AuthCredential type that was used.
        // const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
        return errorCode;
      });
  };


const placeOrder = async (newOrder, customer) => {
    const user = auth.currentUser;
    if (user !== null) {
        const docRef = await addDoc(collection(db, 'orders'), {
            waiterName: user.displayName,
            customerName: customer,
            uid: user.uid,
            order: newOrder,
            date: Timestamp.fromDate(new Date()),
            completed: Timestamp.fromDate(new Date()),
            delivered: Timestamp.fromDate(new Date()),
            state: "active"
        }
        );
        console.log('Document written with ID: ', docRef.id)
        // location.reload();
        return
    }
}



const getOrders = async (state) => {

  const orders = query(collection(db, 'orders'));
  const querySnapShot = await getDocs(orders);
  const allOrders = [];
  querySnapShot.forEach((doc) => {
    if (doc.data().state === state) {
      allOrders.push({ ...doc.data(), id: doc.id });
    }
  });
  return allOrders;
 /* onSnapshot(doc(db, '/orders/CK5xivFv1tegRH52U1GB'), (doc) => {
    console.log(doc.data())
  }) */

  
}


const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid;
    return uid
  } else {
    return false
  }
});

const updateOrder = async (id, state) => {
   
    const ref = doc(db, 'orders', id);

        await updateDoc(ref, {
            state: state,
            [state] : serverTimestamp()
        });
        console.log('Document re-written')
    
}


export {
    db,
    signGoogle,
    placeOrder,
    getOrders,
    updateOrder,
    auth
}