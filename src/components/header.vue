/**
* Created by kamlyli on 2017/8/23.
*/


<style lang="less" rel="stylesheet/less">
  .container-header {
    background-color: #fff;
    color: #999;

    .header-des {
      padding-top: 20px;
      .img {
        text-align: center;
        img {
          width: 100px;
          height: 100px;
          border-radius: 50%;
          border: 1px solid #eee;
        }
      }
      .text {
        font-size: 15px;
        color: #999;
      }
      .left {
        text-align: right;
        a {
          padding: 0 5px;
          color: #999;
        }
        a:hover {
          color: #274c5e
        }
      }
      .right {
        text-align: left;
        .title {
          font-weight: 500;
        }
        .des {
          font-weight: 200;
        }
      }
    }

    .header-select {
      a {
        padding: 0 5px;
        color: #999;
      }
      a:hover {
        color: #274c5e
      }
    }
  }
</style>

<template>
  <header class="container-header">
    <Row type="flex" justify="center" align="middle" class="header-des">
      <Col span="10" class="text left">
      <a href="#">简历</a>
      <a href="#">Github</a>
      </Col>
      <Col span="4" class="img">
        <img v-bind:src="headerImgUrl"/>
      </Col>
      <Col span="10" class="text right">
      <Col span="24" class="title">
      自我描述
      </Col>
      <Col span="24" class="des">
      <p>岁月如歌，人生苦短</p>
      <p>不折腾不是一个好的👨‍💻（程序猿）‍</p>
      </Col>
      </Col>
    </Row>
    <Row type="flex" justify="center" align="middle" class="header-select">
      <Menu mode="horizontal" active-name="index" @on-select="goTo">
        <MenuItem name="todo">
          <span>Tool</span>
        </MenuItem>
        <MenuItem name="index">
          <span>Index</span>
        </MenuItem>
        <MenuItem name="life">
          <span>Life</span>
        </MenuItem>
      </Menu>
    </Row>
  </header>
</template>

<script>
  export default {
    name: 'header',
    components: {},
    data () {
      return {
        headerImgUrl : '/static/images/header.jpg'
      }
    },
    methods: {
      goTo: function (name) {
//        console.log(name)
        this.$router.push({name: name})
      },
    },
  }
</script>

