module.exports = async (ctx, next) => {
  if (ctx.url === '/hc') ctx.body = `I'm alive!`
  await next()
}