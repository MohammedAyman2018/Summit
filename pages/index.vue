<template>
<div>

  <carousel />
  <timer />
  <speakers />
  
</div>
</template>

<script>
import carousel from '~/components/owl-carousel';
import timer from '~/components/timer';
import speakers from '~/components/speakers';

export default {
  components:{
      carousel,
      timer,
      speakers
  }
}
</script>
