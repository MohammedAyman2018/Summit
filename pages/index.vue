<template>
<div>

  <Navbar />
  <carousel />
  <timer />
  <speakers />
  <workshops />
  
</div>
</template>

<script>
import Navbar from '~/components/Navbar';
import carousel from '~/components/Carousel';
import timer from '~/components/Timer';
import speakers from '~/components/Speakers';
import workshops from '~/components/Workshops';

import firebase from 'firebase';

export default {
  beforeCreate(){
    let user = firebase.auth().currentUser;

    if(!user){
      this.$router.push({
          path: '/login'
      })
    
    }
  },
  components:{
      Navbar,
      carousel,
      timer,
      speakers,
      workshops
  }
}
</script>
