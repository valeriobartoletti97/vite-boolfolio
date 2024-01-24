<template>
    <h1>Contact Us</h1>
    <div class="container">
        <div class="row">
            <ContactForm />
        </div>
    </div>
</template>

<script>
import ContactForm from '../components/ContactForm.vue';
    export default {
        name: 'AppContact',
        components:{
            ContactForm
        }
    }
</script>

<style lang="scss" scoped>

</style>