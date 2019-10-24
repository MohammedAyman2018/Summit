<template>
    <div class="pt-16">
        <banner text="Speakers" />
        <div class="container mx-auto">
            <heading text="Special Guests" />
            <card />
            <card />
            
        </div>

    </div>
</template>


<script>
import banner from '~/components/utils/banner';
import heading from '~/components/utils/heading';
import card from '~/components/GuestCard';

export default {
    components:{
        banner,
        heading,
        card
    }
}
</script>