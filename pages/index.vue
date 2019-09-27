<template>
<div>

  <carousel />
  <timer />
  <speakers />
  <workshops />
  
</div>
</template>

<script>
import carousel from '~/components/Carousel';
import timer from '~/components/Timer';
import speakers from '~/components/Speakers';
import workshops from '~/components/Workshops';

export default {
  components:{
      carousel,
      timer,
      speakers,
      workshops
  }
}
</script>
