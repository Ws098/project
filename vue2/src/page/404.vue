<template>
    <div>
        <el-col :sm="12" :lg="6">
    <el-result icon="error" title="错误提示" subTitle="请根据提示进行操作">
      <template slot="extra">
        <el-button type="primary" size="medium" @click="home">返回</el-button>
      </template>
    </el-result>
  </el-col>
    </div>
</template>

<script>
export default {
    name:'notFount',
    methods:{
      home(){
        this.$router.replace('/')
        .then((res)=>{     
          console.log('%c [  console.lo; ]-21', 'font-size:13px; background:pink; color:#bf2c9f;',  res)
        }).catch((err)=>{
          console.log('%c [  ]-23', 'font-size:13px; background:pink; color:#bf2c9f;', err)
        })
      }
    }
}
</script>

<style scoped>

</style>