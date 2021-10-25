<template>
  <div class="absolute w-full h-screen top-20 z-1 flex ">
    <div class="bg-white flex-1 h-screen shadow-xl"></div>
    <!-- 中心内容 -->
    <div class=" bg-#F1F3F4 h-screen flex-5 w-8/12">
        <router-view />
    </div>
    <!-- 右边内容 -->
    <div class=" bg-white flex-1 h-screen p-6">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane>
          <template #label class="flex-1">
            <div class="w-16 mt-2">
                <img src="../assets/icon/fabulous.png" width="23" class="m-auto" alt="">
            </div>
          </template>
          <h4 class="text-2xl">热门文章</h4>
          
        </el-tab-pane>
        <el-tab-pane>
          <template #label class="flex-1">
            <div class="w-16  mt-3">
                <img src="../assets/icon/comments.png" width="20" class="m-auto" alt="">
            </div>
          </template>
          <h4 class="text-2xl">最新评论</h4>
        </el-tab-pane>
        <el-tab-pane>
          <template #label class="flex-1">
            <div class="w-16  mt-2">
                <img src="../assets/icon/album.png" width="23" class="m-auto" alt="">
            </div>
          </template>
          <h4 class="text-2xl">随机文章</h4>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
export default {

}
</script>
<style>
.el-tabs__active-bar{
    background-color: #000
}
</style>
