<template>
<div>

  <carousel />
  <timer />
  <speakers :object=pass > </speakers>
  <workshops />
  <Speaches />
  <Subscribtion /> 
</div>
</template>
<style scoped>
h2,h1,h3,h4,h5,h6 , p {
    -webkit-font-smoothing: antialiased;
}
</style>
<script>
import carousel from '~/components/Carousel';
import timer from '~/components/Timer';
import speakers from '~/components/Instructors';
import workshops from '~/components/Workshops';
import Speaches from '~/components/Speaches';
import Subscribtion from '~/components/Subscribtion';
import firebase from 'firebase';

export default {
  // beforeCreate(){
  //   let user = firebase.auth().currentUser;

  //   if(!user){
  //     this.$router.push({
  //         path: '/login'
  //     })
    
  //   }
  // },
  data(){
        return{
            pass:{
                 number: 3 ,
                 all: false
            }
        }
    },
  components:{
      carousel,
      timer,
      speakers,
      workshops,
      Speaches,
      Subscribtion,
  }
}
</script>
