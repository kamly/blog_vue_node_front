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
        padding-left: 15px;
        font-size: 14px;
        color: #A4A4A4
      }
    }
  }
</style>

<template>
  <Row class="container-todo" type="flex" justify="start">
    <Timeline style="width: 100%">
      <template v-for="(item, index) in targets">
        <TimelineItem>
          <div class="time">{{item.time}}</div>
          <Row class="content-outer">
            <template v-for="(m, x) in item.data">
              <Row class="content-inner">
                <Row type="flex" justify="start" align="middle">
                  <i-circle :size=20 :percent="100" stroke-color="#5285b8" v-if="m.finished == 1">
                    <Icon type="ios-checkmark-empty" :size=20 style="color:#5285b8"></Icon>
                  </i-circle>
                  <i-circle :size=20 :percent="0" stroke-color="#5cb85c" v-if="m.finished == 0">
                  </i-circle>
                  <span class="title">
                    {{m.title}}
                  </span>
                </Row>
                <Row class="des">
                  {{m.des}}
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
    data() {
      return {
        targets: []
      }
    },
    async created() {
      this.$Spin.show();
      let res = await this.$http.get('/api/v1/targets')
      if (res.status === 200 && res.data.code === 0) {
        this.targets = res.data.msg
        console.log(this.targets)
        this.$Spin.hide();
      }
    }
  }

</script>
