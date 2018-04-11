/**
* Created by kamlyli on 2017/8/23.
*/


<style lang="less" rel="stylesheet/less">
  .container-work-detail {
    margin-top: 20px;
    // 标题
    .title {
      margin-bottom: 10px;
      font-size: 30px;
      font-weight: bold;
    }
    .content {
      margin-bottom: 10px;
      font-size: 20px;
      word-wrap: break-word;
      word-break: break-all;
      overflow: hidden;
    }
  }
  .markdown-style {
    // 代码高亮
    pre{
      border-left: #1a63af solid 5px;
      background-color: #fff;
      padding: 10px 10px;
    }
    code {
      background-color: #fff;
      color: #666;
    }
    blockquote{
      border-left: 6px solid #ddd;
      margin: 30px 0;
      padding-left: 20px;
    }
    blockquote blockquote{
      border: none;
      text-align: right;
    }
  }
  // 回滚
  .top {
      padding: 10px;
      background: #25c3f3;
      color: #fff;
      text-align: center;
      border-radius: 10px;
  }
</style>

<template>
  <div class="container-work-detail">
    <Row class="title" type="flex" justify="center">
      {{workDetail.title}}
    </Row>

    <!-- 内容 -->
    <Row class="content">
      <Row class="markdown-style">
        <vue-markdown :source="workDetail.content"></vue-markdown>
      </Row>
    </Row>

    <!-- 返回顶部 -->
    <BackTop :bottom="100">
        <div class="top">返回顶端</div>
    </BackTop>
  </div>
</template>

<script>
  import VueMarkdown from 'vue-markdown'
  export default {
    name: 'workDetail',
    components: {
        VueMarkdown // 声明组件
    },
    data(){
      return {
        id: '',
        workDetail: ''
      }
    },
    created(){
    //  console.log(this.$route.params.id)
      var id = this.$route.params.id;
      this.id = id;
      this.$http.get('/api/article/' + id)
        .then((res) => {
          this.workDetail = res.data.article
    //    console.log(this.articleDetail)
        })
    }
  }
</script>


