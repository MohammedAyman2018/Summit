<template>
    <div id="speakers" class="py-10">
        <div class="container mx-auto">
            <h2 class="text-dark font-black text-5xl mb-10">Keynote Speakers</h2>

            <div class="flex justify-center mt-5">
                <div class="w-1/3 mr-5">
                    <img src="~/assets/img/speaker-1.jpg" class="rounded-lg" alt="Jessica Doe">
                    <h3 class="font-bold text-4xl">Jessica Doe</h3>
                    <p class="font-light">Former Lead UX Hulu</p>
                </div>
                <div class="w-1/3 mx-5">
                    <img src="~/assets/img/speaker-2.jpg" class="rounded-lg" alt="Jessica Doe">
                    <h3 class="font-bold text-4xl">Samatha Doe</h3>
                    <p class="font-light">Financial Consultant</p>
                </div>
                <div class="w-1/3 mx-5">
                    <img src="~/assets/img/speaker-3.jpg" class="rounded-lg" alt="Jessica Doe">
                    <h3 class="font-bold text-4xl">Jessica Doe</h3>
                    <p class="font-light">Entrepreneur</p>
                </div>
                
            </div>

                <button class="mt-10 w-1-3 bg-indigo-800 hover:bg-blue-700 text-white font-bold py-5 px-8 rounded text-2xl font-black">all speakers</button>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        counter(){
            return this.$store.state.counter
        }
    }
}
</script>