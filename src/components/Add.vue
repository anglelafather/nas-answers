<template>
  <div>
    <h2 class='title'>如何看待XXXXXXXXX</h2>
    <vue-editor v-model="content"></vue-editor>
    <el-row>
      <el-col :offset="12">
        <el-button type="primary" class="button">提交答案</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { VueEditor } from 'vue2-editor'

export default {
  name: 'Add',
  data () {
    return {
      content: '<h1>content</h1>'
    }
  },
  components: {
      VueEditor
   }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .title {
    margin-bottom: 50px;
  }
  .button {
    margin-top: 30px;
  }
</style>
