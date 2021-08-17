<template>
    <div class="List-content"   >
        <div v-for="item in items" :key="item.id" @mouseup="up($event, item)" @mousedown="down($event, item)" class="item-body" @mouseenter="enter($event, item)" >

                <span class="switch-title">#{{ item.id }}  this is my bulabula {{ item.name }}</span>
                    <el-switch
                        v-model="item.switch"
                        active-color="#13ce66"
                        inactive-color="#ff4949">
                    </el-switch>
        </div>
    </div>
    
</template>



<script>
export default {
    name: 'List',
    data() {
        return {
            ChangeStatus: false, //这个值是true时候 会改变对应的Swtich值
            items: [
                {id: 1, name: "派大星", switch: true},
                {id: 2, name: "派大星", switch: true},
                {id: 3, name: "派大星", switch: true},
                {id: 4, name: "派大星", switch: true}
            ],
            value: false
        }
    },
    methods: {
        down(e, item) {
            // console.log('down')
            this.ChangeStatus = !this.ChangeStatus
            //点击就出发change
            item.switch = !item.switch
        },
        enter(e, item){
            let ele = e.target
            // console.log('enter')
            if (this.ChangeStatus == true) {
                item.switch = !item.switch
            }
        },
        up(e, item) {
            this.ChangeStatus = false
        }
    },
    mounted() {
        
    }

};
</script>

<style >
    .switch-title {
        -webkit-user-select:none;

        -moz-user-select:none;

        -ms-user-select:none;

        user-select:none;
    }

    .item-body {
        width: 60%;
        height: 46px;
        margin: 2px;
        border: 1px solid black;
        border-radius: 5px;
        padding: 3px;
    }

    .item-body {
        margin: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .item-body:hover {
        background: rgb(175, 240, 245);

    }
    .switch-title {
        flex: 5;
    }
    .el-switch {
        flex: 1;
    }



</style>