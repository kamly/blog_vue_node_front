/**
 * Created by kamlyli on 2017/8/20.
 */


const test = async (ctx) => {
  console.log(ctx.request)
  ctx.body = {
    success: true
  }
}
module.exports = {
  test,
}
