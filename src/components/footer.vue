/**
* Created by lijiaming on 2017/11/19.
*/

<style lang="less" rel="stylesheet/less">
  .container-footer {
    padding-top: 10px;
    height: 100%;
    .container {
      text-align: center;
    }
  }
</style>

<template>
  <footer class="container-footer">
    <Row type="flex" justify="center">
      <Col span="4"></Col>
      <Col span="16" class="container">
        <Col span="24" class="image">
          <Avatar :style="{background:'#dddee1'}">铭</Avatar>
        </Col>
        <Col span="24" class="text">
          Copyright @ 2017 kamly Blog
        </Col>
      </Col>
      <Col span="4"></Col>
    </Row>
  </footer>
</template>

<script>
  export default {
    name: 'footer'
  }
</script>
