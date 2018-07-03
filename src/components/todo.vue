/**
* Created by lijiaming on 2017/11/9.
*/

<style lang="less" rel="stylesheet/less">
  .container-todo {
    margin-top: 20px;
    /*圆点*/
    .ivu-timeline-item-head {
      width: 25px;
      height: 25px;
    }
    /*时间*/
    .time {
      margin-left: 10px;
      font-size: 21px;
    }
    /*内容外部*/
    .content-outer {
      margin: 10px;
    }
    /*内容内部*/
    .content-inner {
      /*标题*/
      .title {
        margin-left: 5px;
        font-size: 18px;
      }
      /*描述*/
      .des {
        margin: 5px 0px;
        font-size: 14px;
        color: #A4A4A4
      }
    }
  }
</style>

<template>
  <Row class="container-todo" type="flex" justify="start">
    <Timeline style="width: 100%">
      <template v-for="(item, index) in [1,2]">
        <TimelineItem>
          <div class="time">2019年</div>
          <Row class="content-outer">
            <template v-for="(item, index) in [1,2,3]">
              <Row class="content-inner">
                <Row type="flex" justify="start" align="middle">
                  <i-circle  :size=20 :percent="100" stroke-color="#5cb85c">
                    <Icon type="ios-checkmark-empty" :size=20 style="color:#5cb85c"></Icon>
                  </i-circle>
                  <span class="title">
                    博客博客主博客博客主
                  </span>
                </Row>
                <Row class="des">
                  博客主页等等博客主页等等博客主页等等博客主页等等博客主页等等博客主页等等博客主页等等博客主页等等博客主页等等博客主页等等博客主页等等博客主页等等博客主页等等博客主页等等博客主页等等博客主页等等博客主页等等博客主页等等博客主页等等博客主页等等博客主页等等博客主页等等博客主页等等博客主页等等博客主页等等
                </Row>
              </Row>
            </template>
          </Row>
        </TimelineItem>
      </template>
    </Timeline>
  </Row>
</template>

<script>

  export default {
    name: 'todo',
  }

</script>
