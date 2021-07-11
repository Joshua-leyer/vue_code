<template>
    <div>

        <div class="block myblock">
            <span class="demonstration">延时= <i> {{ value }}</i> 毫秒</span>
            <el-slider v-model="value" class="my-slider"></el-slider>
        </div>
        <div class="block myblock">
            <span class="demonstration">格式化 Tooltip = <i>{{value4_fina}}</i> </span>
            <el-slider v-model="value4" class="my-slider" :format-tooltip="formatTooltip"></el-slider>
        </div>
    </div>

</template>

<script>
export default {
    name: 'delay',
    data() {
        return {
            value: 0,
            value4: 0.3
        }
    },
    computed: {
        value4_fina() {
            return this.value4 / 100
        }
    },
    methods: {
        formatTooltip(val) {
            console.log(this.value4)
            return val / 100
        }
    }
}
</script>

<style scoped>
    .myblock {
        margin-top: 20px;
        /* top: 18px; */
        border: 2px solid #409eff;
        border-radius: 5px;
        padding: 10px 20px;
        padding-top: 20px;
        position: relative;
        overflow: visible; 
    }
    .my-slider { 
        margin: 15px 0;
    }
    .demonstration {
        position: absolute;
        top: -19px;
        left: 24px;
        padding: 0 6px;
        font-size: 1.2rem;
        background: white;
        /* z-index: 999; 这里无效 由于绝对定位被 title部分遮挡 */
    }
    .myblock i {
        font-size: 1rem;
        display: inline-block;
        padding: 6px;
        line-height: 95%;
        background: #409EFF;
        border-radius: 0.2rem;
    }
</style>