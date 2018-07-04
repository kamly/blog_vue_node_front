<style lang="less" rel="stylesheet/less">

  /*
    整体布局是flex
   */
  .body {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  .header {
    /* 我们希望 header 采用固定的高度，只占用必须的空间 */
    /* 0 flex-grow, 0 flex-shrink, auto flex-basis */
    flex: 0 0 auto;
  }

  .container {
    /* 将 flex-grow 设置为1，该元素会占用所有的可使用空间
       而其他元素该属性值为0，因此不会得到多余的空间*/
    /* 1 flex-grow, 0 flex-shrink, auto flex-basis */
    flex: 1 0 auto;
  }

  .footer {
    /* 和 header 一样，footer 也采用固定高度*/
    /* 0 flex-grow, 0 flex-shrink, auto flex-basis */
    flex: 0 0 auto;
  }
</style>


<template>
  <div class="body">
    <div class="header">
      <v-header></v-header>
    </div>
    <div class="container">
      <Row type="flex" justify="center" class="container">
        <Col span="2"></Col>
        <Col span="20">
        <router-view></router-view>
        </Col>
        <Col span="2"></Col>
      </Row>
    </div>
    <div class="footer">
      <v-footer></v-footer>
    </div>
  </div>
</template>

<script>
  import header from './components/header.vue'
  import footer from './components/footer.vue'

  export default {
    name: 'app',
    components: {
      'v-header': header,
      'v-footer': footer
    }
  }
</script>

<style>
</style>
