/**
* Created by kamlyli on 2017/8/23.
*/


<style lang="less" rel="stylesheet/less">
  .container-article-detail {
    margin-top: 20px;
    // 标题
    .title {
      margin-bottom: 10px;
      font-size: 30px;
      font-weight: bold;
    }
    // 信息
    .info {
      margin-bottom: 10px;
      padding-bottom: 10px;
      border-bottom: 1px solid #dedcdc;
      .item {
        margin: 10px;
      }
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
      margin-left: 2rem;
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
    // 文字
    p {
      img {
        width: 100%;
      }
      text-indent: 2em;
    }
    // 列表
    ol {
      text-indent: 4em;
      list-style-type: none;
      counter-reset: sectioncounter;
    }
    ol li:before {
      content: counter(sectioncounter) "、";
      counter-increment: sectioncounter;

    }
    // 行距高
    line-height: 50px;
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
  <div class="container-article-detail">
    <Row class="title" type="flex" justify="center">
      {{articleDetail.title}}
    </Row>

    <!-- 信息 -->
    <Row class="info" type="flex" justify="center">
      <div class="item">
        <Tooltip content="发表时间" placement="left">
          <Icon type="ios-clock-outline"></Icon>
          {{articleDetail.createTime | substrTime}}
        </Tooltip>
      </div>

      <div class="item">
        <Tooltip content="浏览人数" placement="right">
          <Icon type="ios-eye"></Icon>
          {{articleDetail.pageview}}
        </Tooltip>
      </div>
    </Row>

    <!-- 内容 -->
    <Row class="content">
      <Row class="markdown-style">
        <vue-markdown :source="articleDetail.content"></vue-markdown>
      </Row>
    </Row>

    <!-- 返回顶部 -->
    <BackTop :bottom="100"></BackTop>
  </div>
</template>

<script>
  import VueMarkdown from 'vue-markdown'

  export default {
    name: 'articleDetail',
    components: {
      VueMarkdown // 声明组件
    },
    filters: {
      substrTime: function (value) {
        if (!value) return '';
        return value.substr(0, 10);
      },

    },
    data() {
      return {
        id: '',
        articleDetail: ''
      }
    },
    async created() {
      this.$Spin.show();
      let id = this.$route.params.id;
      this.id = id;
      // 增加阅读量+获取文章内容
      let res = await this.$http.post(`api/v1/article/pageView/${id}`)
      if (res.status === 200 && res.data.code === 0) {
        this.articleDetail = res.data.msg
        this.$Spin.hide();
      }
    }
  }
</script>


