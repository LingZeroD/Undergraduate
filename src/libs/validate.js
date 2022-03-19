/*校验规则*/
let validate = {
  //校验手机号
  mobilePhone(data,message) {
    let msg=message ? message :'请输入11位数字手机号码';
    let regExp = /^1\d{10}$/;

    if (!data) {
      alert(msg);
      return false
    }

    if (!regExp.test(data)) {
      alert(msg);
      return false
    }

    return true
  },

  //校验英文字母和数字
  validateAlphanumeric(data,message) {
    let msg=message ? message : '请输入纯英文、数字或组合';
    let regExp = /^[0-9a-zA-Z]+$/;

    if (data && !regExp.test(data)) {
      alert(msg);
      return false;
    }

    return true;
  },

  //校验数字
  number(data,message) {
    let msg=message ? message : '格式有误，请输入数字';
    let regExp = /^[0-9]+$/;

    if (data && !regExp.test(data)) {
      alert(msg);
      return false;
    }

    return true;
  },

  //校验中英文数字
  chineseAndEnglish(data,message) {
    //^[\u2E80-\u9FFF]+$  中文简繁体
    //简体中文\u4e00-\u9fa5
    let msg=message ? message : '请输入中英文或数字';
    let reg = /^[\u4e00-\u9fa5a-zA-Z0-9]+$/;

    if (data && !reg.test(data)) {
      alert(msg);
      return false;
    }

    return true;
  },

  //必填校验
  required(data,message) {
    let msg=message ? message : '不能为空';
    if (!data) {
      alert(msg);
      return false;
    }

    return true;
  },

  // 校验小数点位数（小数点后面最多2位数字）
  validateDecimalsTwo (data,message) {
    let msg=message ? message : '小数最多2位';
    let reg = /^\d+(\.\d{1,2})?$/;
    if (data && !reg.test(data)) {
      alert(msg);
      return false
    }

    return true
  },

  //校验电子邮箱
  validateEmail(data,message){
    let msg=message ? message : '电子邮箱格式错误';
    let reg = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
    if (data && !reg.test(data)) {
      alert(msg);
      return false
    }

    return true
  },

  //校验身份证号
  validateIdCard(data,message){
    let msg=message ? message : '请输入正确的身份证号';
    let reg = /^[0-9]{17}[0-9a-z]$/;
    if (data && !reg.test(data)) {
      alert(msg);
      return false
    }

    return true
  }
};

export default validate;
