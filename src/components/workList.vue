/**
* Created by lijiaming on 2017/11/9.
*/

<style lang="less" rel="stylesheet/less">
  .container-work-list {
    height: 100%;
    .item {
      margin-top: 20px;
      img {
        width:200px
      }
    }
  }
</style>

<template>
    <Row type="flex" justify="space-around" class="container-work-list">
      <template v-for="(item, index) in [1,2,3,4,5,6,7,8,9,10]">
        <Col :xs="24" :sm="11" :md="11" :lg="5">
          <Card class="item" @click.native="goToWorkDetail(1)">
              <div style="text-align:center">
                  <img v-bind:src="headerImgUrl"/>
                  <h3>A high quality UI Toolkit based on Vue.js</h3>
              </div>
          </Card>
        </Col>
      </template>
    </Row>
</template>

<script>
    export default {
      name: 'workList',
      data () {
        return {
          headerImgUrl : '/static/images/header.jpg'
        }
      },
      methods: {
        goToWorkDetail: function (data) {
  //        console.log(data)
          this.$router.push({name: "workDetail", params: {id: data}})
        }
      },
    }
</script>
