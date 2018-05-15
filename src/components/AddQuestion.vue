<template>
  <div>
    <h2 class='title'>新建问题</h2>
    <el-row>
      <el-col :span="18">
        <el-input placeholder="请输入问题标题"></el-input>
      </el-col>
    </el-row>
    <div class="statement">
      <el-input
        type="textarea"
        :rows="6"
        placeholder="请输入问题描述"></el-input>
    </div>
    <el-row>
      <el-col :offset="11">
        <el-button type="primary" class="button">创建问题</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { VueEditor } from "vue2-editor";

export default {
  name: "AddAnswer",
  data() {
    return {
      content: "<h1>content</h1>"
    };
  },
  components: {
    VueEditor
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.title {
  margin-bottom: 50px;
}
.button {
  margin-top: 30px;
}
.statement {
  margin-top: 15px;
}
</style>
