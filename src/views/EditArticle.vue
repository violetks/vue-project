<template>
  <el-form @submit.native.prevent="saveArticle" ref="form" :model="article" label-width="80px">
    <el-form-item label="文章标题">
      <el-input v-model="article.title"></el-input>
    </el-form-item>
    <el-form-item label="文章内容">
      <el-input type="textarea" v-model="article.content"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" native-type="submit">保存</el-button>
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
      // 通过this.$http访问axios实例，访问修改文章接口
      this.$http
        .put(`/articles/${this.$route.params.id}`, this.article)
        .then(() => {
          this.$message({
            message: "文章保存成功",
            type: "success"
          });
          this.$router.push("/posts/index");
        });
    },
    fetch() {
      // 访问文章详情接口
      this.$http.get(`/articles/${this.$route.params.id}`).then(res => {
        this.article = res.data;
      });
    }
  },
  created() {
    this.fetch();
  }
};
</script>