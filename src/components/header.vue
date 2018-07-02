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
      /*手机版本的超链接*/
      .xs-text {
        text-align: center;
        margin-top: 10px;
        a {
          padding: 0 5px;
          color: #999;
        }
        a:hover {
          color: #274c5e
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
    .ivu-menu-item {
      padding: 0 10px;
    }
  }
</style>

<template>
  <header class="container-header">
    <Row type="flex" justify="center" align="middle" class="header-des">
      <Col :xs="0" :sm="10" :md="10" :lg="10" class="text left">
        <a href="https://charmingkamly.cn">主页</a>
        <a href="https://blog.charmingkamly.cn">博客</a>
        <a href="https://github.com/kamly">Github</a>
      </Col>
      <Col :xs="24" :sm="4" :md="4" :lg="4"  class="img">
        <img v-bind:src="headerImgUrl"/>
      </Col>
      <Col :xs="24" :sm="0" :md="0" :lg="0" class="xs-text">
        <a href="https://charmingkamly.cn">主页</a>
        <a href="https://blog.charmingkamly.cn">博客</a>
        <a href="https://github.com/kamly">Github</a>
      </Col>
      <Col :xs="0" :sm="10" :md="10" :lg="10" class="text right">
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
      <Menu mode="horizontal" width="auto" active-name="index" @on-select="goTo">
        <MenuItem name="todo">
          <span>Todo</span>
        </MenuItem>
        <MenuItem name="workList">
          <span>Works</span>
        </MenuItem>
        <MenuItem name="index">
          <span>Thinks</span>
        </MenuItem>
        <MenuItem name="about">
          <span>About</span>
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

