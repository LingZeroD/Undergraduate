import utils from './utils'
import apiBase from './apiBase'

const path={
  getDynamicSecretKey: p => utils.get(apiBase + '/user/getDynamicSecretKey', p),//获取动态密钥
};

export default path;
