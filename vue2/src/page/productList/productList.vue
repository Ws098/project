<template>
  <div id="app">
    <div>
      <ul class="ul_1">
         <li v-for="(item, index) in arr" :key="index" class="li_1">
          <router-link :to="{path:'/detail',query:{id:index}}" class="a_1">
            <img :src="item.thumb" alt=""  class="img_1" />
            <p class="p_1">{{item.title}}</p>
          </router-link>
         <div class="storeNum">
            <button @click="add">+</button>
            <button @click="del">-</button>
            <p class="p_1">{{ $store.state.count }}</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "productList",
  data() {
    return {
      arr: [],
    };
  },
  methods:{
    getData(){
      this.$http.get('https://xuanche.17350.com/api/wechat/photo')
      .then((res)=>{
          this.arr = res.data.list
      })
    },
    add() {
      this.$store.dispatch('getAddCount', 1);
    },
    del() {
      this.$store.dispatch('getDelCount', 1)
    },
    
  },
  mounted(){
    this.getData()
  }
};
</script>

<style>
.ul_1 {
  padding: 0px;
  width: 100%;
  list-style: none;
  margin: 0px;
  flex-flow: row wrap;
  display: flex;
}
.li_1 {
  width: 50%;
  height: auto;
  margin: 0px 0px; 
  border-bottom: 1px solid rgb(117, 113, 113);
  box-sizing: border-box;
  
}
.li_1:nth-child(2n-1){

  border-right: 1px solid rgb(117, 113, 113);
}
.li_1 .a_1{
  text-decoration: none;
  width: 100%;
  height: 100%;
  display: inline-block;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
}
.li_1 .img_1 {
  width: 100%;
  height: auto;
}
.li_1 .p_1{
  height: 25px;
  text-align: center;
  margin: 0px;
  }
.li_1 .p_1{
  font-size: 12px;
  color: rgb(87, 83, 83);
}
.storeNum{
  position:relative;
  bottom: 50px;
}
</style>
