<template>
  <div class="relative">
    <nav class="animated fadeIn flex items-center flex-wrap absolute z-50 w-full object-top">
      <div class="logo w-3/4 sm:w-full sm:text-center lg:w-1/5">
        <img src="~/assets/img/logo.png" class="sm:inline" alt="logo" />
      </div>

      <button @click="toggle" class="border-gray-400 bg-black w-1/4 py-2 px-1 rounded sm:hidden">
        <span class="text-white">Menu</span>
        <i class="fas fa-bars text-white"></i>
      </button>

      <div
        id="collabse"
        class="block w-full mt-5 hidden sm:mt-0 sm:flex flex-wrap sm:w-full sm:mx-auto lg:flex lg:w-4/5"
      >
        <div class="bg-black sm:bg-transparent flex items-center text-center sm:w-full lg:w-7/12">
          <ul class="w-full">
            <li class="text-center my-2 sm:inline-block">
              <nuxt-link
                to="/"
                active-class="active"
                class="p-5 text-white font-black inline-block p-4 uppercase"
                exact
              >home</nuxt-link>
            </li>
            <li class="text-center my-2 sm:inline-block">
              <nuxt-link
                to="/SPEAKERS"
                class="p-5 text-white font-black inline-block p-4 uppercase"
                exact
                active-class="active"
              >SPEAKERS</nuxt-link>
            </li>
            <li class="text-center my-2 sm:inline-block">
              <nuxt-link
                to="/TICKETS"
                class="p-5 text-white font-black inline-block p-4 uppercase"
                exact
                active-class="active"
              >TICKETS</nuxt-link>
            </li>
            <li class="text-center my-2 sm:inline-block">
              <nuxt-link
                to="/BLOG"
                class="p-5 text-white font-black inline-block p-4 uppercase"
                exact
                active-class="active"
              >BLOG</nuxt-link>
            </li>
            <li class="text-center my-2 sm:inline-block">
              <nuxt-link
                to="/CONTACT"
                class="p-5 text-white font-black inline-block p-4 uppercase"
                exact
                active-class="active"
              >CONTACT</nuxt-link>
            </li>
          </ul>
        </div>

        <div class="bg-black p-5 top-social text-center sm:bg-transparent sm:w-full lg:w-5/12">
          <a href="#" class="text-white bg-indigo-700 px-2 py-3">
            <i class="fas fa-search px-2 py-3"></i>
          </a>
        </div>
      </div>
    </nav>
  </div>
</template>

<style>
nav {
  background: linear-gradient(to right, #ff1a6b, #2a34d0);
}

.active {
  background-color: #000;
}
</style>

<script>
export default {
  methods: {
    toggle() {
      $("#collabse").slideToggle(300);
    }
  }
};
</script>