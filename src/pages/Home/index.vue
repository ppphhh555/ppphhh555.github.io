<template>
  <div>
    <TypeNav />
    <Listcontainer />
    <Today />
    <Rank />
    <Like />
    <Floor v-for="(f, index) in FloorList" :key="f.id" :list="f" />

    <Brand />
  </div>
</template>
<script>
import Listcontainer from "@/pages/Home/Listcontainer";
import Today from "@/pages/Home/Today";
import Rank from "@/pages/Home/Rank";
import Like from "@/pages/Home/Like";
import Floor from "@/pages/Home/Floor";
import Brand from "@/pages/Home/Brand";
import { mapState } from "vuex";
export default {
  components: {
    Listcontainer,
    Today,
    Rank,
    Like,
    Floor,
    Brand,
  },
  mounted() {
    this.$store.dispatch("FloorList");
    this.$store.dispatch("userInfo");
  },
  computed: {
    ...mapState({
      FloorList: (state) => state.Home.FloorList,
    }),
  },
};
</script>
<style lang="less" scoped>
</style>