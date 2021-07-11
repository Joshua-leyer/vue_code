<template>

    <div>
        <order-header></order-header>

        <router-view></router-view>
        
        <order-footer></order-footer>
    </div>
</template>

<script>    
import OrderHeader from '../components/OrderHeader.vue'
import OrderFooter from '../components/OrderFooter.vue'

export default {
    name: 'order',
    components: {
        OrderHeader,
        OrderFooter
    }
}
</script>

<style scoped>

</style>