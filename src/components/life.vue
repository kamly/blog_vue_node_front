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
      <template v-for="(item, index) in lives">
        <TimelineItem>
          <div class="time">{{item.time}}</div>
          <Card class="item" @click.native="goToWorkDetail(1)">
            <div style="text-align:center">
              <img :src="item.cover"/>
              <h2>{{item.title}}</h2>
              <h5>{{item.content}}</h5>
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
    data() {
      return {
        lives: []
      }
    },
    async created() {
      this.$Spin.show();
      let res = await this.$http.get('/api/v1/lives')
      if (res.status === 200 && res.data.code === 0) {
        this.lives = res.data.msg
        this.$Spin.hide();
      }
    }
  }

</script>
