<template>
<div>

  <Navbar />
  <carousel />
  <timer />
  <speakers />
  <!-- <workshops />
  <Speaches />
  <Subscribtion /> -->

</div>
</template>
<style scoped>
h2,h1,h3,h4,h5,h6 , p {
    -webkit-font-smoothing: antialiased;
}
</style>
<script>
import Navbar from '~/components/Navbar';
import carousel from '~/components/Carousel';
import timer from '~/components/Timer';
import speakers from '~/components/Speakers';
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
  components:{
      Navbar,
      carousel,
      timer,
      speakers,
      workshops,
      Speaches,
      Subscribtion,
  }
}
</script>
