<template>
      
      <client-only placeholder="loading...">
        <carousel 
            :autoplay="true" 
            :nav="false"
            :autoplayHoverPause="true"
            :resonsive="{ 0:{items: 1, nav: true} ,600:{items:1,nav:true} }"
        >

        <div class="banner">
            <img src="" alt="slider-one" width="100%">
            <div class="md:w-1/4 w-full absolute z-40">
                <span>February 9<sup>TH</sup> - 15<sup>TH</sup> 2019 </span>
                <h1>Summit<br>Conference<br>2019</h1>
                <h2 class="f-bold">World Trade Center, Gibraltar</h2>
            </div>
        </div>

        </carousel>
    </client-only>
</template>

<style>
.owl-stage , .owl-item.active, .banner{
    height: 100vh;
    width: 100% !important
}

.banner:first{
    background-image: url('../assets/img/slider/bg-1.jpg');
}
</style>
<script>
export default {
  components: { carousel: () => import('vue-owl-carousel') },
  mounted() {}
};
</script>
