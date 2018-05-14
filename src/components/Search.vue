<template>
  <div>
    <!-- <div>
        <el-input v-model="input" placeholder="请输入内容"></el-input>
        <el-button>搜索</el-button>
    </div> -->
    <el-row>
      <el-col :span="18">
        <el-input v-model.trim="search" placeholder="请输入问题"></el-input>
      </el-col>
      <el-col :span="5" class="button">
        <el-button type="primary">搜索</el-button>
        <el-button @click='reset'>重置</el-button>
      </el-col>
    </el-row>
    <transition name="el-fade-in-linear">
      <el-row class='searchResult' v-show="search !== ''">
        <el-col :span="22">
          <el-card>
            <div slot="header" class="clearfix">
              <span>搜索结果</span>
            </div>
            <div v-for="o in 4" :key="o" class="text item">
              {{'列表内容列表内容列表内容列表内容列表内容列表内容列表内容列表内容列表内容列表内容列表内容列表内容列表内容列表内容列表内容列表内容 ' + o }}
            </div>
          </el-card>
        </el-col>
      </el-row>
    </transition>
  </div>
</template>

<script>
export default {
  name: "Search",
  data() {
    return {
      search: "",
      list: []
    };
  },
  methods: {
    reset() {
      this.search = ''
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.button {
  margin-left: 12px;
}
.text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }
  .searchResult {
    margin-top: 60px;
  }
</style>
