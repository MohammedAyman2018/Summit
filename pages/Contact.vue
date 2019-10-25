<template>
  <div>
    <banner text="Contact" />
    <div class="container mx-auto">
      <div class="flex flex-wrap">
        <div class="w-1/2"></div>
        <div class="w-1/2 my-8">
          <heading text="Get in Touch" />
          <form class="flex flex-wrap px-2" action="#">
            <div class="flex w-full -mx-2">
              <input
                type="text"
                class="w-1/2 px-2  bg-gray-200 py-5 px-8"
                placeholder="Your name"
              />
              <input
                type="text"
                class="w-1/2 px-2 border-l-8 bg-gray-200 py-5 px-8"
                placeholder="Your Email"
              />
            </div>
            <div class="-mx-2 flex w-full ">
                <input
                type="text"
                class="w-full mt-2 text-black bg-gray-200 py-5 px-8 "
                placeholder="Subject"
                />
            </div>
            
            <div class="-mx-2 flex w-full ">
                <textarea name="details" id="details" cols="30" class="w-full mt-2 bg-gray-200 py-5 px-8" placeholder="Message" rows="3"></textarea>
            </div>

          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
input,textarea{
    outline: none;
    border-left-color: white;
    transition: all 0.4s ease;
}
input:focus,textarea:focus{
    outline: none;
    border-bottom: 2px solid #F21E7D
}
</style>

<script>
import banner from "~/components/utils/banner";
import heading from "~/components/utils/heading";

export default {
  components: {
    banner,
    heading
  }
};
</script>