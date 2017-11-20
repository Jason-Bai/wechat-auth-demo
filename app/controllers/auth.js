const configs = require('../configs')
const U = require('../utils')

/**
 * 获取access token
 */
async function fetchToken(code) {
  const { oauth } = configs
  const { appid, secret } = oauth
  const url = `https://api.weixin.qq.com/sns/oauth2/access_token?appid=${appid}&secret=${secret}&code=${code}&grant_type=authorization_code`
  let token
  try {
    const { data = null } = await U.axios.get(url)
    token = data
  } catch (err) {
    token = null
  }
  return token
}

/**
 * 获取用户信息
 */
async function fetchUser(accessToken, openId) {
  const url = `https://api.weixin.qq.com/sns/userinfo?access_token=${accessToken}&openid=${openId}`
  let user
  try {
    const { data = null } = await U.axios.get(url)
    user= data
  } catch (err) {
    user = null
  }
  return user
}

/**
 * 获取用户主流程
 */
async function user(code) {
  let error
  let accessToken
  try {
    accessToken = await fetchToken(code)
  } catch (err) {
    error = err
  }

  if (error) {
    return [error]
  }

  console.log('AccessToken: ', accessToken)

  const { access_token, openid } = accessToken

  let user

  try {
    user = await fetchUser(access_token, openid)
  } catch (err) {
    error = err
  }

  console.log('User: ', user)

  if (error) {
    return [error]
  }

  return [null, user]
}

module.exports = {
  user
};
