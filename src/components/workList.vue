/**
* Created by lijiaming on 2017/11/9.
*/

<style lang="less" rel="stylesheet/less">
  .container-work-list {
    height: 100%;
    .item {
      margin-top: 20px;
      img {
        width: 200px;
        height: 200px;
      }
      h5 {
        color: #bfbfbf;
      }
    }
  }
</style>

<template>
  <Row type="flex" justify="space-around" class="container-work-list">
    <template v-for="(item, index) in works">
      <Col :xs="24" :sm="11" :md="11" :lg="5">
      <Card class="item" @click.native="goToWorkDetail(1)">
        <div style="text-align:center">
          <img :src="item.cover"/>
          <h2>{{item.title}}</h2>
          <h5>{{item.des}}</h5>
        </div>
      </Card>
      </Col>
    </template>
  </Row>
</template>

<script>
  export default {
    name: 'workList',
    data() {
      return {
        works: []
      }
    },
    methods: {
      goToWorkDetail: function (data) {
        // console.log(data)
        this.$router.push({name: "workDetail", params: {id: data}})
      }
    },
    async created() {
      this.$Spin.show();
      let res = await this.$http.get('/api/v1/works')
      if (res.status === 200 && res.data.code === 0) {
        this.works = res.data.msg
        // console.log(this.works)
        this.$Spin.hide();
      }
    }
  }
</script>
