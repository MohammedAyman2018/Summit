import firebase from "firebase";
import Vue from 'vue'

let user = firebase.auth().currentUser;


if (user === null){

    let vm = new Vue({
        methods:{
            navigate(){
                this.$router.push({
                    path: '/login'
                })
            }
        }

    })
}


    

console.log('احا',user);