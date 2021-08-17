<template>
    <div>

        <div class="card p-3 bg-white p-3 mt-3">

            <div class="card-header d-flex ai-center pb-3">
                <i class="iconfont" :class="`icon-${icon}`"></i>
                <div class="fs-xxl flex-1 px-2">{{ tittle }}</div>
                <i class="iconfont icon-More"></i>
            </div>

            <div class="card-body pt-3">
                <slot>
                    
                </slot>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        props: {
            tittle: { type: String, required: true },
            icon: { type: String, required: true }
        }
    }
</script>

<style scoped lang="scss">
@import '../_variables.scss';

.card {
    border-bottom: 1px solid $border-color;
    .card-header {
        border-bottom: 1px solid $border-color;
    }

}


</style>