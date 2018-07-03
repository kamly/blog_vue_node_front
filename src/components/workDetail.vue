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
    .tag {
      margin-bottom: 10px;
      padding-bottom: 10px;
      border-bottom: 1px solid #dedcdc;
    }
    // 内容
    .content {
      margin-bottom: 10px;
      font-size: 20px;
      word-wrap: break-word;
      word-break: break-all;
      overflow: hidden;
      padding-bottom: 20px;
      border-bottom: 1px solid #dedcdc;
    }
  }

  .markdown-style {
    // 代码高亮
    pre {
      border-left: #1a63af solid 5px;
      background-color: #fff;
      padding: 10px 10px;
    }
    code {
      background-color: #fff;
      color: #666;
      display: block;
      overflow: scroll;
    }
    blockquote {
      border-left: 6px solid #ddd;
      margin: 30px 0;
      padding-left: 20px;
    }
    blockquote blockquote {
      border: none;
      text-align: right;
    }
  }

  // 返回顶部
  .ivu-back-top-inner {
    background-color: #2c8bf0;
    &:hover {
      background-color: #2c8bf0;
    }
  }
</style>

<template>
  <Row class="container-work-detail">
    <!--标题-->
    <Row class="title" type="flex" justify="center">
      {{workDetail.title}}
    </Row>

    <!--标签-->
    <Row class="tag" type="flex" justify="center">
      <template v-for="(item, index) in workDetail.tag">
        <Tag type="dot" color='blue'>{{item}}</Tag>
      </template>
    </Row>

    <!-- 内容 -->
    <Row class="content">
      <Row class="markdown-style">
        <vue-markdown :source="workDetail.content"></vue-markdown>
      </Row>
    </Row>

    <!-- 返回顶部 -->
    <BackTop :bottom="100"></BackTop>
  </Row>
</template>

<script>
  import VueMarkdown from 'vue-markdown'

  export default {
    name: 'workDetail',
    components: {
      VueMarkdown // 声明组件
    },
    data() {
      return {
        id: '',
        workDetail: ''
      }
    },
    async created() {
      this.$Spin.show();
      let id = this.$route.params.id;
      this.id = id;
      // 增加阅读量 + 获取作品内容
      let res = await this.$http.post(`api/v1/work/pageView/${id}`)
      if (res.status === 200 && res.data.code === 0) {
        this.workDetail = res.data.msg
        this.$Spin.hide();
      }
    }
  }
</script>


