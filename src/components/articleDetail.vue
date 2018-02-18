/**
* Created by kamlyli on 2017/8/23.
*/


<style lang="less" rel="stylesheet/less">
  .v-content {
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
      img {
        width: 300px;
        height: 300px;
      }
      .title {
        font-size: 20px;
        font-weight: bold;
        border-bottom: 1px solid #dedcdc;
      }
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
</style>

<template>
  <div class="v-content">
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
      <Row v-html="articleDetail.content">
        {{articleDetail.content}}
      </Row>
    </Row>

  </div>
</template>

<script>
  export default {
    name: 'articleDetail',
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


