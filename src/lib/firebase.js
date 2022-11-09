import app from "./firebaseconfig";
//import {getDatabase, ref, runTransaction } from 'firebase/database'
import { getFirestore, collection, getDocs, addDoc, Timestamp } from 'firebase/firestore/lite'
import { getAuth,  GoogleAuthProvider, signInWithPopup} from 'firebase/auth'

const db = getFirestore(app);
// -----------Firebase Login
const auth = getAuth();
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
            state: "active"
        }
        );
        console.log('Document written with ID: ', docRef.id)
        // location.reload();
        return
    }
}

const getActiveOrders = async (db) => {
    const activeOrdersCol = collection(db, 'activeOrders');
    const orderSnapshot = await getDocs(activeOrdersCol);
    const orderList = orderSnapshot.docs.map(doc => doc.data());
    console.log(orderList)
    return orderList;
}

export {
    signGoogle,
    placeOrder,
    getActiveOrders,
}