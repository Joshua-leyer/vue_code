<template>
    <div class="header">
        <div class="nav-topbar">
            <div class="container">
                <div class="topbar-menu">
                    <a href="#">小米商城</a>
                    <a href="#">MUI</a>
                    <a href="#">云服务</a>
                    <a href="#">协议规则</a>
                </div>
                <div class="topbar-user">
                    <a href="">登录</a>
                    <a href="">注册</a>
                    <a href="" class="my-cart"> <span class="icon-cart"></span> 购物车</a>
                </div>
            </div>
        </div>
        <div class="nav-header">
            <div class="container">
                <div class="header-logo">
                    <a href="/#/index"></a>
                </div>
                <div class="header-menu">
                    <div class="item-menu">
                        <span>小米手机</span>
                        <div class="children"></div>
                    </div>
                    <div class="item-menu">
                        <span>Redmi</span>
                        <div class="children"></div>
                    </div>
                    <div class="item-menu">
                        <span>TV</span>
                        <div class="children"></div>
                    </div>
                </div>
                <div class="header-search"></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'nav-header'
}
</script>

<style lang="scss">  
@import '../assets/scss/base.scss';

    .header {
        .nav-topbar {
            height: 39px;
            line-height: 39px;
            background-color: #333333;
            color: #B0B0B0;
            .container {
                width: 1226px;
                margin-right: auto;
                margin-left: auto;
                display: flex;
                justify-content: space-between;
                align-items: center;
                a {
                    display: inline-block;
                    color: #B0B0B0;
                    margin-right: 17px;
                }
                .my-cart {
                    width: 100px;
                    background-color: #FF6600;
                    text-align: center;
                    color: #fff;
                    .icon-cart {
                        display: inline-block;
                        width: 16px;
                        height: 12px;
                        background: url("/imgs/icon-cart-checked.png") no-repeat center;
                        background-size: contain;
                        margin-right: 4px;
                    }
                }
            }
        }
        .nav-header {
            .container {
                .header-logo {
                    display: inline-block;
                    width: 55px;
                    height: 55px;
                    a {
                        display: inline-block;
                        width: 110px;
                        height: 55px;
                        &:before {
                            content: ' ';
                            display: inline-block;
                            width: 55px;
                            height: 55px;
                            background: url('/imgs/mi-logo.png') no-repeat center;
                            background-size: contain;
                        }
                        &:after {
                            content: ' ';
                            display: inline-block;
                            width: 55px;
                            height: 55px;
                            background: url('/imgs/mi-home.png') no-repeat center;
                            background-size: contain;
                        }
                    }
                }
            
            }
        }
    }
</style>