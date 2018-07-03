/**
* Created by lijiaming on 2017/11/9.
*/

<style lang="less" rel="stylesheet/less">
  .container-life {
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
    /*单元*/
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
  <Row class="container-life" type="flex" justify="start">
    <Timeline style="width: 100%">
      <template v-for="(item, index) in [1,2]">
        <TimelineItem>
          <div class="time">2018年10月5日</div>
            <Card class="item" @click.native="goToWorkDetail(1)">
              <div style="text-align:center">
                <img :src="headerImgUrl"/>
                <h2>123123</h2>
                <h5>123123</h5>
              </div>
            </Card>
        </TimelineItem>
      </template>
    </Timeline>
  </Row>
</template>

<script>

  export default {
    name: 'life',
    data () {
      return {
        headerImgUrl : '/static/images/header.jpg'
      }
    },
  }

</script>
