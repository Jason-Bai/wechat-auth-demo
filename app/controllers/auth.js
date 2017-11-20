const configs = require('../configs')
const U = require('../utils')

/**
 * 获取access token
 */
async function fetchToken(code) {
  const { oauth } = configs
  const { appid, secret } = oauth
  const url = `https://api.weixin.qq.com/sns/oauth2/access_token?appid=${appid}&secret=${secret}&code=${code}&grant_type=authorization_code`
  return U.axios.get(url)
}

/**
 * 获取用户信息
 */
async function fetchUser(accessToken, openId) {
  const url = `https://api.weixin.qq.com/sns/userinfo?access_token=${accessToken}&openid=${openId}`
  return U.axios.get(url)
}

/**
 * 获取用户主流程
 */
async function user(code) {
  let user
  try {
    const accessToken = await fetchToken(code)
    const { access_token, openid } = accessToken
    user = await fetchUser(access_token, openid)
  } catch (err) {
    return [err]
  }
  return [null, user]
}

module.exports = {
  user
};
