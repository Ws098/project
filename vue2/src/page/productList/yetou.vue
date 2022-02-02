<template>
<div>
  <el-page-header @back="goBack" content="详情页面">
  </el-page-header>
  <div>
      <router-link to="/detail">
          <button>返回上一页</button>
      </router-link>
  </div>
   <div>
      <router-link to="/">
            <button>返回主页面</button>
      </router-link>
  </div>
</div>

  
</template>


<script>
export default {
  name: "yetou",
  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>