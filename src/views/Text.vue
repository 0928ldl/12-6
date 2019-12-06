<template>
  <div class="wra">
    <div class="main">
      <van-swipe :autoplay="3000" indicator-color="white">
        <van-swipe-item>1</van-swipe-item>
        <van-swipe-item>2</van-swipe-item>
        <van-swipe-item>3</van-swipe-item>
        <van-swipe-item>4</van-swipe-item>
      </van-swipe>
      <dl v-for="(v,i) in obj" :key="i">
        <dt>{{v.img}}</dt>
        <dd>{{v.title}}</dd>
      </dl>
    </div>
    <div class="foot">
      <router-link v-for='(v,i) in list' :key="i" :to="v.path" tag="span">{{v.text}}</router-link>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      list:[
        {
          text:"首页",
          path:"/home/text"
        },
         {
          text:"我的",
          path:"/home/my"
        }
      ],
      obj:[
        {
          title:'奖励',
          img:"图片加载"
        },
          {
          title:'奖励',
          img:"图片加载"
        },
          {
          title:'奖励',
          img:"图片加载"
        },
          {
          title:'奖励',
          img:"图片加载"
        },
          {
          title:'奖励',
          img:"图片加载"
        },
          {
          title:'奖励',
          img:"图片加载"
        },
          {
          title:'奖励',
          img:"图片加载"
        },
          {
          title:'奖励',
          img:"图片加载中"
        }
      ]
    }
  }
};
</script>

<style lang="scss">
.wra {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.main {
  width: 100%;
  overflow: auto;
  flex: 1;
  .van-swipe{
    width: 100%;height: 200px;
    .van-swipe__track{
      width: 100%;height: 100%;
      .van-swipe-item{
        width: 100%;height: 100%;background: sandybrown;
      }
    }
  }
  dl{
    width: 20%;height: 100px;float: left;margin:0 8px;
    dt{
      width: 100%;height: 70%;text-align: center;line-height: 70px;background: seagreen;
    }
  }
}
.foot {
  width: 100%;
  height: 45px;
  line-height: 45px;
  background: sandybrown;
  display: flex;
  span{
    flex: 1;text-align: center;
  }
}
</style>