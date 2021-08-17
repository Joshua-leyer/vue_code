<template>
  <div>

    <swiper>
      <swiper-slide>
        <img class="w-100" src="@/assets/imgs/home_nav_swiper1.jpeg" alt="">
      </swiper-slide>
      <swiper-slide>      
        <img class="w-100" src="../assets/imgs/home_nav_swiper2.jpeg" alt="">
      </swiper-slide>
      <swiper-slide>
        <img class="w-100" src="../assets/imgs/home_nav_swiper3.jpeg" alt="">
      </swiper-slide>

      <div class="swiper-pagination" slot="pagination"></div>

    </swiper>
    <!-- end of swiper -->

    <div class="nav-icons bg-white mt-3 text-center pt-3 text-grey-1">
      <div class="d-flex flex-wrap">
        <div class="nav-item mb-3"
          v-for="n in 10" :key="n"
        >
          <i class="sprite sprite-news"></i>
          <div class="py-2">爆料站</div>
        </div>
      </div>
      <div class="bg-light py-2 fs-sm">
        <i class="sprite sprite-arrow mr-1"></i>
        <span>收起</span>
      </div>
    </div>
    <!-- end of nav icons -->


    <m-list-card icon="menu" tittle="新闻资讯" :categories="newsCats">
          <template #items="{category}">
            <div class="py-2" v-for="(news, i) in category.newsList" :key="i">
                <span>[{{news.categoryName}}]</span>
                <span> | </span>
                <span>{{news.tittle}}</span>
                <span>{{news.date}}</span>
            </div>
          </template>
          
    </m-list-card>


    <m-card icon="menu" tittle="英雄列表"></m-card>
    <m-card icon="menu" tittle="精彩视频"></m-card>
    <m-card icon="menu" tittle="图文攻略"></m-card>

    <p>aaa</p>
  </div>

</template>

<script>


  export default {
    name: 'home',
    data() {
      return {
        swiperOption: {
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          }
        },
        newsCats: [
          {
            name: "热门",
            newsList: new Array(5).fill({}).map(v => ({
              categoryName: '公告',
              tittle: '更新服务器',
              date: '05/01'
            }))
          },
          {
            name: "新闻",
            newsList: new Array(5).fill({}).map(v => ({
              categoryName: '公告',
              tittle: '更新服务器',
              date: '05/01'
            }))
          },
          {
            name: "新闻",
            newsList: new Array(5).fill({}).map(v => ({
              categoryName: '公告',
              tittle: '更新服务器',
              date: '05/01'
            }))
          },

        ]
      }
    }
  }
</script>

<style scoped lang="scss">
@import '../variables.scss';

  //
  .pagination-home {
    .swiper-pagination-bullet {
      background: #fff;
      &.swiper-pagination-bullet-active {
        background: map-get($colors, 'info'); 
      }
    }
  }

// 竖着的线 border样式.  
  .nav-icons {
    border-top: 1px solid $border-color;
    border-bottom: 1px solid $border-color;
    .nav-item {
      width: 25%;
      border-right: 1px solid $border-color;
      &:nth-child(4n) {
        border-right: none;
      }
    }
  }


</style>