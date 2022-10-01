<template>
  <div class="type-nav">
    <div class="container">
      <div @mouseleave="leave" @mouseenter="show">
        <h2 class="all">全部商品分类</h2>
        <transition name="sort">
          <div class="sort" @click="goSearch" v-show="changeShow">
            <div
              class="all-sort-list2"
              v-for="(a, index) in categroyList"
              :key="a.categoryId"
            >
              <div class="item" v-show="true">
                <h3
                  @mouseenter="changeColor(index)"
                  :class="{ cur: currentIndex == index }"
                >
                  <a
                    :data-categoryName="a.categoryName"
                    :data-category1Id="a.categoryId"
                    >{{ a.categoryName }}</a
                  >
                </h3>
                <div class="item-list clearfix" v-show="currentIndex == index">
                  <div
                    class="subitem"
                    v-for="(b, index) in a.categoryChild"
                    :key="b.categoryId"
                  >
                    <dl class="fore">
                      <dt>
                        <a
                          :data-categoryName="b.categoryName"
                          :data-category2Id="b.categoryId"
                          >{{ b.categoryName }}</a
                        >
                      </dt>
                      <dd>
                        <em
                          v-for="(c, index) in b.categoryChild"
                          :key="c.categoryId"
                        >
                          <a
                            :data-categoryName="c.categoryName"
                            :data-category3Id="c.categoryId"
                            >{{ c.categoryName }}</a
                          >
                        </em>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </transition>
      </div>
      <nav class="nav">
        <a href="###">服装城</a>
        <a href="###">美妆馆</a>
        <a href="###">尚品汇超市</a>
        <a href="###">全球购</a>
        <a href="###">闪购</a>
        <a href="###">团购</a>
        <a href="###">有趣</a>
        <a href="###">秒杀</a>
      </nav>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
import throttle from "lodash/throttle";

export default {
  data() {
    return {
      currentIndex: -1,
      changeShow: true,
    };
  },
  name: "TypeNav",
  // 组件的切换在挂载和销毁
  mounted() {
    
    if (this.$route.path != "/home") {
      this.changeShow = false;
    } else {
      this.changeShow = true;
    }
  },
  computed: {
    ...mapState({
      categroyList: (state) => state.Home.categroyList.slice(0, 16),
    }),
  },
  methods: {
    changeColor: throttle(function (index) {
      this.currentIndex = index;
    }, 150),

    leave() {
      this.currentIndex = -1;
      if (this.$route.path != "/home") {
        this.changeShow = false;
      }
    },
    goSearch(event) {
      let node = event.target;
      let { categoryname, category1id, category2id, category3id } =
        node.dataset;
      if (categoryname) {
        let location = { name: "search" };
        let query = { categoryname: categoryname };
        if (category1id) {
          query.category1Id = category1id;
        } else if (category2id) {
          query.category2Id = category2id;
        }
        if (category3id) {
          query.category3Id = category3id;
        }
        if (this.$route.params) {
          location.params = this.$route.params;
          location.query = query;
         
        }
         this.$router.push(location);
      }
    },
    show() {
      this.changeShow = true;
    },
  },
};
</script>
<style lang="less" scoped>
.type-nav {
  border-bottom: 2px solid #e1251b;

  .container {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    position: relative;

    .all {
      width: 210px;
      height: 45px;
      background-color: #e1251b;
      line-height: 45px;
      text-align: center;
      color: #fff;
      font-size: 14px;
      font-weight: bold;
    }

    .nav {
      a {
        height: 45px;
        margin: 0 22px;
        line-height: 45px;
        font-size: 16px;
        color: #333;
      }
    }

    .sort {
      position: absolute;
      left: 0;
      top: 45px;
      width: 210px;
      height: 461px;
      position: absolute;
      background: #fafafa;
      z-index: 999;

      .all-sort-list2 {
        .item {
          h3 {
            line-height: 29px;
            font-size: 14px;
            font-weight: 400;
            overflow: hidden;
            padding: 0 20px;
            margin: 0;

            a {
              color: #333;
            }
          }
          .cur {
            background: skyblue;
          }
          .item-list {
            position: absolute;
            width: 734px;
            min-height: 460px;
            background: #f7f7f7;
            left: 210px;
            border: 1px solid #ddd;
            top: 0;
            z-index: 9999 !important;

            .subitem {
              float: left;
              width: 650px;
              padding: 0 4px 0 8px;

              dl {
                border-top: 1px solid #eee;
                padding: 6px 0;
                overflow: hidden;
                zoom: 1;

                &.fore {
                  border-top: 0;
                }

                dt {
                  float: left;
                  width: 54px;
                  line-height: 22px;
                  text-align: right;
                  padding: 3px 6px 0 0;
                  font-weight: 700;
                }

                dd {
                  float: left;
                  width: 415px;
                  padding: 3px 0 0;
                  overflow: hidden;

                  em {
                    float: left;
                    height: 14px;
                    line-height: 14px;
                    padding: 0 8px;
                    margin-top: 5px;
                    border-left: 1px solid #ccc;
                  }
                }
              }
            }
          }
        }
      }
    }
    //过度动画开始状态
    .sort-enter {
      height: 0px;
      opacity: 0;
    }
    //过度动画的结束状态
    .sort-enter-to {
      height: 461px;
      opacity: 1;
    }
    .sort-enter-active {
      transition: all 0.5s linear;
    }
  }
}
</style>