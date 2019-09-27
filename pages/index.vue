<template>
<div>

  <carousel />
  <timer />
</div>
</template>

<script>
import carousel from '~/components/owl-carousel';
import timer from '~/components/timer';

export default {
  components:{
      carousel,
      timer
  }
}
</script>
