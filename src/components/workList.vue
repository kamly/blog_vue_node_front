/**
* Created by lijiaming on 2017/11/9.
*/

<style lang="less" rel="stylesheet/less">
</style>

<template>
    <div class="container-work-list">
      <template v-for="(item, index) in [1,2,3,4,5,6,7,8,9,10]">
        <Col span="6">
          <Card style="width:320px">
              <div style="text-align:center">
                  <img v-bind:src="headerImgUrl" width="200px"/>
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
