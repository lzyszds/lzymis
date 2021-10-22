<template>
  <div class="w-56 h-screen fixed top-14 shadow-xl">
    <div class="bg-white h-full w-full relative">
      <!-- 头像 -->
      <div class="pb-9">
        <p class="w-full pt-4">
          <img :src="navData.headP" class="w-28 h-28 m-auto" alt="" />
        </p>
        <p class="w-full h-6 text-center text-lg hover:text-gray-400 cursor-pointer">
          lzy
        </p>
        <p class="w-full h-6 text-center text-sm text-gray-700">不知道说什么好！</p>
      </div>
      <!-- 导航 -->
      <div>
        <div class="text-xs w-full p-2 shadow-bottom">导航</div>
        <ul class="text-base font-normal ">
          <router-link tag="li" v-for="(item, index) in navData.Navigation" :key="index" :to="item.url" class="flex text-gray-700 hover:bg-gray-200 py-3 transition-all cursor-pointer">
            <img :src="item.src" class="mr-4 ml-7" width="20" />
            <span>{{ item.name }}</span>
          </router-link>
        </ul>
      </div>
      <!-- 组成 -->
      <div>
        <div class="text-xs w-full p-2 shadow-bottom">组成</div>
        <ul class="text-base font-normal">
          <router-link tag="li" v-for="(item, index) in navData.form" :key="index" :to="item.url" class="flex text-gray-700 hover:bg-gray-200 py-3 transition-all cursor-pointer">
            <img :src="item.src" class="mr-4 ml-7" width="20" />
            <span>{{ item.name }}</span>
          </router-link>
        </ul>
      </div>
      <!-- 底部导航 -->
      <div class="fixed bottom-0 flex flex-nowrap w-56 h-12 text-xs my-2 shadow-top ">
        <el-tooltip class="item p-0 flex-1 text-center cursor-pointer" effect="dark" content="后台管理" placement="top">
          <el-button class=" border-0">
            <img width="15" class="m-auto" src="../assets/icon/setup.png" alt="" />
            <p>管理</p>
          </el-button>
        </el-tooltip>
        <el-tooltip class="item p-0 flex-1 text-center cursor-pointer" effect="dark" content="管理文章" placement="top">
          <el-button class=" border-0">
            <img width="15" class="m-auto" src="../assets/icon/signal.png" alt="" />
            <p>文章</p>
          </el-button>
        </el-tooltip>
        <el-tooltip class="item p-0 flex-1 text-center cursor-pointer" effect="dark" content="管理评论" placement="top">
          <el-button class=" border-0">
            <img width="15" class="m-auto" src="../assets/icon/CommentsY.png" alt="" />
            <p>评论</p>
          </el-button>
        </el-tooltip>
      </div>
    </div>
  </div>
</template>
<script>
import { get } from "../http/http.js";
import { defineComponent, reactive, onMounted } from "vue";
export default defineComponent({
  setup() {
    const navData = reactive({
      headP: null, //头像
      Navigation: [], //导航
      form: [], //组成
    });
    onMounted(() => {
      get("./data/navData.json").then((res) => {
        navData.headP = res.data.headportrait;
        navData.Navigation = res.data.Navigation;
        navData.form = res.data.form;
      });
    });
    return { navData };
  },
});
</script>
