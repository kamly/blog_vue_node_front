/**
* Created by kamlyli on 2017/8/23.
*/

<style lang="less" rel="stylesheet/less">
  .container-article-list {
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
      .tag {
        margin-top: 10px;
      }
    }
  }
</style>


<template>
  <div class="container-article-list">
    <template v-for="(item, index) in articles">
      <Card class="item" @click.native="goToArticleDetail(item.id)">
        <p class="title" slot="title">{{item.title}}</p>
        <span class="time" slot="extra">
          <Icon type="calendar"></Icon>
          {{item.createTime | substrTime}}
        </span>
        <p class="des">
          {{item.des}}
        </p>
        <div class="tag">
           <template v-for="(item, index) in item.tag">
            <Tag color="blue">{{item}}</Tag>
           </template>
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

