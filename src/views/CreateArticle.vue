<template>
  <el-form @submit.native.prevent="saveArticle" ref="form" :model="article" label-width="80px">
    <el-form-item label="文章标题">
      <el-input v-model="article.title"></el-input>
    </el-form-item>
    <el-form-item label="文章内容">
      <el-input type="textarea" v-model="article.content"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" native-type="submit">立即创建</el-button>
      <el-button>取消</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  data() {
    return {
      article: {}
    };
  },
  methods: {
    saveArticle() {
      // 通过this.$http访问axios实例，访问新增文章接口
      this.$http.post("/articles", this.article).then(res => {
        console.log(res.data);
        this.$message({
          message: "文章创建成功",
          type: "success"
        });
        this.$router.push("/posts/index"); // 跳转到文章列表
      });
    }
  }
};
</script>