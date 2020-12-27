import * as firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyCqzI4X3pBw4EfCZgRg577vVrbUTEywRmY",
    authDomain: "react-expensify-app-516.firebaseapp.com",
    databaseURL: "https://react-expensify-app-516-default-rtdb.firebaseio.com",
    projectId: "react-expensify-app-516",
    storageBucket: "react-expensify-app-516.appspot.com",
    messagingSenderId: "400267818498",
    appId: "1:400267818498:web:0dbb5b03b2805dc342591b",
    measurementId: "G-X4TE89X34M"
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
export { firebase,googleAuthProvider,database as default };













/*
rootref.set({
      name:"Gowtham",
      role : 'student',
      age : 21,
      details : {
          from : 'kovvur',
          phone : 9490455112,
          gender : 'male'
      }
});

firebase.database().ref('details').update({gender:'male'})
    .then(()=>
        console.log('Data removed')
    )
    .catch((e)=>{
        console.log('Error Occured')
    });

    */