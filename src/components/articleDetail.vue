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
    .cover {
      margin-bottom: 10px;
      img {
        width: 1000px;
        height: 200px;
      }
    }
    .content {
      margin-bottom: 10px;
      font-size: 20px;
      word-wrap: break-word;
      word-break: break-all;
      overflow: hidden;
    }
    .tag {
      margin-bottom: 10px;
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
          {{articleDetail.pv}}
        </Tooltip>
      </div>
    </Row>

    <!-- 内容 -->
    <Row class="content">
      <Row class="markdown-style">
        <vue-markdown :source="articleDetail.content"></vue-markdown>
      </Row>
    </Row>

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
      substrName: function (value) {
        //console.log(value.name);
        if (!value) return '';
        return value.name;
      },
      substrTime: function (value) {
        if (!value) return '';
        return value.substr(0, 10);
      },

    },
    data(){
      return {
        id: '',
        articleDetail: ''
      }
    },
    created(){
//      console.log(this.$route.params.id)
      var id = this.$route.params.id;
      this.id = id;
      this.$http.get('/api/article/' + id)
        .then((res) => {
          this.articleDetail = res.data.article
//          console.log(this.articleDetail)
        })
    }
  }
</script>


