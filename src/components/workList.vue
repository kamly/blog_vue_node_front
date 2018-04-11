/**
* Created by lijiaming on 2017/11/9.
*/

<style lang="less" rel="stylesheet/less">
  .container-work-list {
    height: 100%;
    .item {
      width: 320px;
      margin-top: 20px;
      img {
        width:200px
      }
    }
  }
</style>

<template>
    <div class="container-work-list">
      <template v-for="(item, index) in [1,2,3,4,5,6,7,8,9,10]">
        <Col span="6">
          <Card class="item">
              <div style="text-align:center">
                  <img v-bind:src="headerImgUrl"/>
                  <h3>A high quality UI Toolkit based on Vue.js</h3>
              </div>
          </Card>
        </Col>
      </template>
    </div>
</template>

<script>
    export default {
      name: 'workList',
      data () {
        return {
          headerImgUrl : '/static/images/header.jpg'
        }
      },
    }
</script>
