<template>
  <div>
    <el-container>
      <el-header>Header---{{menulist}}</el-header>
      <el-main>
        <!-- 切换children显示的区域 -->
        <router-view></router-view>
        <!-- 切换children显示的区域 -->
      </el-main>
      <el-footer>
        <el-button :plain="true" @click="open2">成功</el-button>
        <router-link to="/store">商家</router-link>
        <router-link to="/index">首页</router-link>
        <button @click="getmenulist">网络请求</button>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menulist: ''
    }
  },
  created() {},
  methods: {
    open2() {
      this.$message({
        message: '恭喜你，这是一条成功消息',
        type: 'success'
      })
    },
    // outlogin () {
    //   window.sessionStorage.clear()
    //   this.$router.push('/login')
    // },
    async getmenulist() {
      const { data: res } = await this.$http.get('menus')
      console.log(res)
      // if (res.meta.status !== 200) {
      // 要用弹窗先去element.js挂载mesage
      // Vue.prototype.$message = Message
      //   return this.$message.error('获取失败！')
      // }
      this.menulist = res
      this.$message.success('获取成功！')
      // 把token储存到本地
    }
  }
}
</script>

<style lang="less" scoped>
</style>
