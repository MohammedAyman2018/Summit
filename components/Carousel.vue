<template>
  <client-only placeholder="loading...">
    <carousel 
    :perPage="1"
    :autoPlay="true"
    :autoplayTimeout="50">
      <slide>
        <div class="banner flex flex-wrap">
          <div class="typo text-white mb-2 w-full">
            <span class="block font-bold">
              February 9
              <sup>TH</sup> - 15
              <sup>TH</sup> 2019
            </span>
            <h1 class="mb-2 uppercase font-black leading-none">
              Summit
              <br />Conference
              <br />2019
            </h1>
            <h2 class="font-bold relative">World Trade Center, Gibraltar</h2>
          </div>
        </div>
      </slide>
      <slide>
        <div class="banner relative">
          <div class="typo text-white mb-2">
            <span class="block font-bold">
              February 9
              <sup>TH</sup> - 15
              <sup>TH</sup> 2019
            </span>
            <h1 class="mb-2 uppercase font-black leading-none">
              Summit
              <br />Conference
              <br />2019
            </h1>
            <h2 class="font-bold relative">World Trade Center, Gibraltar</h2>
          </div>
        </div>
      </slide>
      <slide>
        <div class="banner relative">
          <div class="typo text-white mb-2">
            <span class="block font-bold">
              February 9
              <sup>TH</sup> - 15
              <sup>TH</sup> 2019
            </span>
            <h1 class="mb-2 uppercase font-black leading-none">
              Summit
              <br />Conference
              <br />2019
            </h1>
            <h2 class="font-bold relative">World Trade Center, Gibraltar</h2>
          </div>
        </div>
      </slide>
    </carousel>
  </client-only>
</template>

<style>
.banner {
  height: 100vh;
  width: 100% !important;
}

.VueCarousel-slide{
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
}
.VueCarousel-slide:nth-child(1) {
  background-image: url("~assets/img/slider/bg-1.jpg");
}
.VueCarousel-slide:nth-child(2) {
  background-image: url("~assets/img/slider/bg-2.jpg");
}
.VueCarousel-slide:nth-child(3) {
  background-image: url("~assets/img/slider/bg-3.jpg");
}

.VueCarousel-pagination{
    
    position: absolute;
    bottom: 31%;
    display: flex;
    justify-content: flex-end;
}

.VueCarousel-pagination div.VueCarousel-dot-container{
    display: flex; 
    flex-direction: column; 
    margin: 0 30px 0 0;
}

.VueCarousel-pagination div.VueCarousel-dot-container button:focus{
    outline: 0;
    box-shadow: 0
}

</style>

<script>

export default {

};
</script>
