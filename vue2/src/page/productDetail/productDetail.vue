<template>
  <div>
    <div>
      <el-page-header @back="goBack" content="详情页面"> </el-page-header>
    </div>
    <div>
      <el-carousel :interval="40000000" type="card" height="200px">
        <el-carousel-item v-for="item in dataArr" :key="item.id">
          <img :src="item.thumb" alt="" />
        </el-carousel-item>
      </el-carousel>
    </div>
    <div>
      <router-link to="/yetou">
        <button>点击</button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "productDetail",
  data() {
    return {
      dataArr: [],
    };
  },
  methods: {
    getDetail() {
      this.$http
        .get("https://xuanche.17350.com/api/wechat/photo")
        .then((res) => {
          this.dataArr = res.data.list;
        });
    },
    goBack() {
      this.$router.go(-1);
    },
    
  },
  watch:{
    $route:{
      //嵌套路由才能监听
      handler(val,oldval){
        // console.log(val);//新路由信息
        // console.log(oldval);//老路由信息
        console.log('11111111', val)
        console.log('%c [ console.log(to); ]-44', 'font-size:13px; background:pink; color:#bf2c9f;', oldval)
        
      },
      // 深度观察监听
      deep: true
    }
  },
  mounted() {
    this.getDetail();
    console.log('%c [  ]-50', 'font-size:13px; background:pink; color:#bf2c9f;',this.$route.meta.title )
  },
};
</script>


<style scoped>
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
img {
  width: 100%;
  height: 100%;
}
::v-deep .el-carousel--horizontal {
  margin-top: 20px;
}
::v-deep .el-carousel__button {
  opacity: 0.5;
  width: 14px;
  height: 14px;
  border-radius: 7px;
  background-color: rgb(51, 27, 189);
}
::v-deep .el-carousel__indicator--horizontal {
  padding: 2px 2px;
}
::v-deep .el-carousel__indicator.is-active button {
  background-color: rgb(214, 218, 28);
}
::v-deep .el-carousel__indicators--outside button {
  opacity: 1;
}
::v-deep .el-carousel__indicators--outside {
  margin-top: 10px;
}
::v-deep .el-carousel__arrow {
    display: block!important;
}

</style>