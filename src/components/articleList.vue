/**
* Created by kamlyli on 2017/8/23.
*/

<style lang="less" rel="stylesheet/less">
  .container-articlelist {
    margin-top: 20px;
    .item {
      margin-top: 20px;
      .title {
        font-size: 26px;
        font-weight: 500;
      }
      .des {
        font-size: 20px;
        color: #666;
      }
      .time-tag {
        margin-top: 10px;
        .time {
          margin-right: 20px;
        }
      }
    }
  }
</style>


<template>
  <div class="container-articlelist">
    <template v-for="(item, index) in articles">
      <Card class="item" @click.native="goToArticleDetail(item.id)">
        <p class="title" slot="title">{{item.title}}</p>
        <p class="des">
          {{item.des}}
        </p>
        <div class="time-tag">
        <span class="time">
          <Icon type="calendar"></Icon>
          {{item.createTime | substrTime}}
        </span>
          <span class="tag">
           <template v-for="(i, i) in item.tag">
            <!--<Tag color="blue">{{i}}</Tag>-->
           </template>
        </span>
        </div>
      </Card>
    </template>
  </div>
</template>

<script>
  export default {
    name: 'articleList',
    components: {},
    filters: {
      substrTime: function (value) {
        if (!value) return ''
        return value.substr(0, 10)
      }
    },
    data() {
      return {
        articles: []
      }
    },
    methods: {
      goToArticleDetail: function (data) {
//        console.log(data)
        this.$router.push({name: "articleDetail", params: {id: data}})
      }
    },
    created() {
      this.$http.get('/api/articles')
        .then((res) => {
//          console.log(res.data.articles)
          this.articles = res.data.articles
        })
    }

  }
</script>

