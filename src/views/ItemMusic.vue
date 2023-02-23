// 歌单详情页
<template>
  <!-- 子组件的组装，并将获取的数据传给子组件 -->
  <ItemMusicTop :playlist="state.playlist" />
  <ItemMusicList
    :itemList="state.itemList"
    :subscribedCount="state.playlist.subscribedCount"
  />
</template>
<script>
import { useRoute } from "vue-router";
import { onMounted, reactive } from "vue";
import { getMusicItemList, getItemList } from "@/request/api/item.js";
import ItemMusicTop from "@/components/item/ItemMusicTop.vue";
import ItemMusicList from "@/components/item/ItemMusicList.vue";

export default {
  setup() {
    const state = reactive({
      //这两个数据都需要传给子组件 
      playlist: {}, //歌单的详情页的数据
      itemList: [], //歌单的歌曲
    });
    onMounted(async () => {
      let id = useRoute().query.id;
      // console.log(id);
      //   获取歌单详情页，需要将歌单id传过去
      let res = await getMusicItemList(id);
      // console.log(res);
      state.playlist = res.data.playlist;

      //歌单： 获取歌单歌曲里的歌曲播放列表
      let result = await getItemList({ id, limit: 10, offset: 0 });
      console.log(result);
      state.itemList = result.data.songs

      //   防止页面刷新，数据丢失，将state整个响应式对象的数据保存到sessionStorage中
      sessionStorage.setItem("itemDetail", JSON.stringify(state));
    });
    return { state };
  },
  components: {
    ItemMusicTop,
    ItemMusicList,
  },
};
</script>