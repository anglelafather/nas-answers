<template>
  <div>
    <el-card>
      <h2>如何看待XXXXXXXXXX</h2>
      <div>
          <p class="detail">如何看待XXXXXXXXXX如何看待XXXXXXXXXX如何看待XXXXXXXXXX如何看待XXXXXXXXXX如何看待XXXXXXXXXX如何看待XXXXXXXXXX如何看待XXXXXXXXXX如何看待XXXXXXXXXX如何看待XXXXXXXXXX如何看待XXXXXXXXXX如何看待XXXXXXXXXX如何看待XXXXXXXXXX</p>
      </div>
      <el-row>
        <el-col :span="12">
          <p class='detail'>创建时间：2018年5月13号</p>
        </el-col>
        <el-col :span="6" :offset="6">
          <el-button type="primary">回答问题</el-button>
          <i class="el-icon-share">分享</i>
        </el-col>
      </el-row>
    </el-card>
      <el-row class="answers">
        <el-col :span="24">
          <el-card v-for="o in 4" :key="o" class="card">
            <p class="text item">
              {{'列表内容列表内容列表内容列表内容列表内容列表内容列表内容列表内容列表内容列表内容列表内容列表内容列表内容列表内容列表内容列表内容列表内容列表内容列表内容列表内容列表内容列表内容列表内容列表内容列表内容列表内容列表内容列表内容列表内容列表内容列表内容列表内容列表内容列表内容列表内容列表内容列表内容列表内容列表内容列表内容 ' + o }}
            </p>
          </el-card>
        </el-col>
      </el-row>
  </div>
</template>

<script>
export default {
  name: 'Detail',
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .detail {
    color: #606266;
  }
.text {
    font-size: 14px;
  }

.item {
  margin-bottom: 18px;
  padding-bottom: 15px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both
}
.answers {
  margin-top: 30px;
}
i {
  margin-left: 18px;
  margin-bottom: 4px;
  vertical-align: bottom;
}
.card {
  margin-bottom: 15px;
}
</style>
