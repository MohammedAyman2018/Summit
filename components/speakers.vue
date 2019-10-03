<template>
    <div id="speakers" class="py-10">
        <div class="container mx-auto">
            <heading text="Keynote Speakers" class="ml-5" />
            
            <div class="flex flex-wrap mt-5">
                
                <div class="w-full mx-5 mb-10 sm:w-1/2 sm:mx-0 sm:px-4 lg:w-1/3">
                    <img src="~/assets/img/speaker-1.jpg" class="rounded-lg" alt="Jessica Doe">
                    <h3 class="font-bold text-4xl">Jessica Doe</h3>
                    <p class="font-light">Former Lead UX Hulu</p>
                </div>
                <div class="w-full mx-5 mb-10 sm:w-1/2 sm:mx-0 sm:px-4 lg:w-1/3">
                    <img src="~/assets/img/speaker-2.jpg" class="rounded-lg" alt="Jessica Doe">
                    <h3 class="font-bold text-4xl">Samatha Doe</h3>
                    <p class="font-light">Financial Consultant</p>
                </div>
                <div class="w-full mx-5 mb-10 sm:w-1/2 sm:mx-0 sm:px-4 lg:w-1/3">
                    <img src="~/assets/img/speaker-3.jpg" class="rounded-lg" alt="Jessica Doe">
                    <h3 class="font-bold text-4xl">Jessica Doe</h3>
                    <p class="font-light">Entrepreneur</p>
                </div>
                
            </div>

                <button class="bg-indigo-800 mx-5 mt-10 uppercase py-5 px-10 font-bold tracking-widest text-white rounded-lg">all speakers</button>
        </div>
    </div>
</template>

<script>
import heading from '~/components/utils/heading';

export default {
    components:{
        heading
    },
    computed: {
        counter(){
            return this.$store.state.counter
        }
    }
}
</script>