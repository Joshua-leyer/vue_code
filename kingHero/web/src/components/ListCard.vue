<template>
    <m-card :icon="icon" :tittle="tittle">

        <div class="nav jc-between">
                <!-- 这里作用相当于三目运算 , 他这是简写了. 骚操作 -->
                <div class="nav-item" :class="{active: active  === i}" 
                v-for="(category, i) in categories" :key="i"
                @click="active = i">  <!-- 这里学习 -->
                    <div class="nav-link">热门</div>
                </div>

        </div>

        <div class="pt-3">
        <swiper>
            <!-- 他这里有点麻烦了 -->
            <swiper-slide v-for="(category, i) in categories" :key="i">
                <slot name="items" :category="category"></slot>
            </swiper-slide>
        </swiper>
        </div>

    </m-card>
</template>

<script>
export default {
    props: {
        // 给最基础的 card 组件用
        icon: {type: String, required: true},
        tittle: {type: String, required: true},
        //传递的时候是newsCats , 在vue工具里面看到是newsCats 但是这里接受是
        // categories 注意这里.
        categories: {type: Array, required: true}
    },
    data() {
        return {
            active: 0
        }
    }
}
</script>

<style scoped>

</style>