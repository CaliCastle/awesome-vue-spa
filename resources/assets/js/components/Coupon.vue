<template>
    <div class="container">
        <input type="text" class="input" placeholder="Enter your coupon" @blur="couponTyped">
    </div>
</template>

<script>
    export default {
        methods: {
            couponTyped() {
                Event.fire('applied?')
            }
        },
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
