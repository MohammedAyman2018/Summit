<template>
  <client-only placeholder="loading...">
    <carousel :perPage="1">
      <slide>
        <div class="banner relative">
          <div class="typo text-white mb-2">
            <span class="block font-bold animated fadeInTop">
              February 9
              <sup>TH</sup> - 15
              <sup>TH</sup> 2019
            </span>
            <h1 class="mb-2 uppercase font-black leading-none animated fadeInTop">
              Summit
              <br />Conference
              <br />2019
            </h1>
            <h2 class="font-bold relative animated fadeInTop">World Trade Center, Gibraltar</h2>
          </div>
        </div>
      </slide>
      <slide>
        <div class="banner relative">
          <div class="typo text-white mb-2">
            <span class="block font-bold animated fadeInTop">
              February 9
              <sup>TH</sup> - 15
              <sup>TH</sup> 2019
            </span>
            <h1 class="mb-2 uppercase font-black leading-none animated fadeInTop">
              Summit
              <br />Conference
              <br />2019
            </h1>
            <h2 class="font-bold relative animated fadeInTop">World Trade Center, Gibraltar</h2>
          </div>
        </div>
      </slide>
      <slide>
        <div class="banner relative">
          <div class="typo text-white mb-2">
            <span class="block font-bold animated fadeInTop">
              February 9
              <sup>TH</sup> - 15
              <sup>TH</sup> 2019
            </span>
            <h1 class="mb-2 uppercase font-black leading-none animated fadeInTop">
              Summit
              <br />Conference
              <br />2019
            </h1>
            <h2 class="font-bold relative animated fadeInTop">World Trade Center, Gibraltar</h2>
          </div>
        </div>
      </slide>
    </carousel>
  </client-only>
</template>

<style>
.owl-stage,
.owl-item.active,
.banner {
  height: 100vh;
  width: 100% !important;
}

.banner:nth-child(1) {
  background-image: url("~assets/img/slider/bg-1.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
}

.typo {
  position: absolute;
  top: 40%;
  left: 10%;
}

.typo h1 {
  font-size: 100px;
}

.typo h2,
.typo span {
  font-size: 32px;
}
</style>

<script>

export default {
    
};
</script>
