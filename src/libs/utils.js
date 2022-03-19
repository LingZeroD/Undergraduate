import axios from './axios.js';
import router from '../router'

let util = {

    /*自定义请求方式*/
    // get请求
    get(url, param = {}) {
        let params = {
            params: param
        };
        return new Promise((resolve, reject) => {
            axios.get(`${url}`, params).then(res => {
                // 加上时间戳 消除ie版本浏览器的缓存
                resolve(res.data);
            }).catch((error) => {
                reject(error);
            });
        });
    },

    // get请求 带时间戳
    getT(url, param = {}) {
        let params = {
            params: param
        };
        return new Promise((resolve, reject) => {
            axios.get(`${url}?t=${new Date().getTime()}`, params).then(res => {
                // 加上时间戳 消除ie版本浏览器的缓存
                resolve(res.data);
            }).catch((error) => {
                reject(error);
            });
        });
    },

    //get请求
    getJson(url, params = {}) {
        return new Promise((resolve, reject) => {
            axios({
                method: 'get',
                url: url,
                data: params,
                headers: {'Accept': 'application/json', 'Content-Type': 'application/json'}
            }).then((response) => {
                resolve(response.data);
            });
        });
    },

    //delete请求
    deleteJson(url, params = {}) {
        return new Promise((resolve, reject) => {
            axios({
                method: 'delete',
                url: url,
                data: params,
                headers: {'Accept': 'application/json', 'Content-Type': 'application/json'}
            }).then((response) => {
                resolve(response.data);
            });
        });
    },

    // put请求
    putJson(url, params = {}) {
        return new Promise((resolve, reject) => {
            axios({
                method: 'put',
                url: url,
                data: params,
                headers: {'Accept': 'application/json', 'Content-Type': 'application/json'}
            }).then((response) => {
                resolve(response.data);
            });
        });
    },

    // patch请求
    patchJson(url, params = {}) {
        return new Promise((resolve, reject) => {
            axios({
                method: 'patch',
                url: url,
                data: params,
                headers: {'Accept': 'application/json', 'Content-Type': 'application/json'}
            }).then((response) => {
                resolve(response.data);
            });
        });
    },

    // post请求
    postJson(url, params = {}) {
        return new Promise((resolve, reject) => {
            axios({
                method: 'post',
                url: url,
                data: params,
                headers: {'Accept': 'application/json', 'Content-Type': 'application/json'}
            }).then((response) => {
                resolve(response.data);
            })
        });
    },

    // 普通表单post提交方法
    postForm(url, params = {}) {
        return new Promise((resolve, reject) => {
            axios({
                method: 'post',
                url: url,
                data: params,
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
                },
                transformRequest: [function (data) {
                    return Qs.stringify(data)
                }]
            }).then((response) => {
                resolve(response.data);
            });
        });
    },

    // multipart post 请求
    postMultipart(url, params = {}) {
        return new Promise((resolve, reject) => {
            axios({
                method: 'post',
                url: url,
                data: params,
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'multipart/form-data;boundary=' + new Date().getTime()
                }
            }).then((response) => {
                resolve(response.data);
            })
        });
    },

    /**
     * 跳转到指定页面
     * @param path 路由路径
     * @param query 路由参数
     */
    navTo(path, query) {
        if (!path) return;
        router.push({path: path, query: query}).then();
    },

    /**
     * 多入口指向同一地址场景使用：前往指定页面，并期望返回特定页面。
     * @param toPath 必填，目标路由的path值。
     * @param currentPath 必填，当前路由的path值。
     * @param query 选填，需要传递的参数。
     */
    goAndTag(toPath, currentPath, query) {
        localStorage.setItem(toPath, currentPath);
        router.push({path: toPath, query: query}).then();
        if (!toPath) {
            //router.push({path: '/home'}).then();
        }
    },

    /**
     * 配合goAndStorage场景使用：返回特定页面。
     * @param currentPath 必填，当前路由的path值。
     * @param query 选填，需要传递的参数。
     */
    backAndTag(currentPath, query) {
        let path = localStorage.getItem(currentPath);
        router.push({path: path, query: query}).then();
        if (!path) {
            //router.push({path: '/home'}).then();
        }
    },

    /**
     * 字符串部分替换处理
     * @param str 需要处理的字符串
     * @param startNum 保留字符串前面的字符数
     * @param endNum 保留字符串后面的字符数
     * @param strReplace 用来替换中间被隐藏的字符串
     * @returns {string}
     */
    stringReplace(str, startNum, endNum, strReplace) {
        if (!str || !startNum || !endNum || !strReplace) return '';
        const startPart = str.substring(0, startNum);
        const endPart = str.substring(str.length - endNum);
        return startPart + strReplace + endPart;
    },

    /**
     * 截取某个字符前面或后面的字符串
     * @param obj 被截取的字符串
     * @param separator 分隔符
     * @param type 0为截取分隔符前面的字符串，缺省时截取分隔符后面的字符串
     * @returns {string}
     */
    getSpecificString(obj, separator, type) {
        let str = '';
        let index = obj.lastIndexOf(".");
        if (type === 0) {
            str = obj.substring(0, index);
        }

        str = obj.substring(index + 1, obj.length);
        return str;
    },

    /**
     * 滚动到顶部
     */
    scrollToTop() {
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
    },

    /**
     *本地存储和获取标签导航列表
     * @param newRoute 新路由
     */
    tagNavList(newRoute) {
        if(!newRoute) return ;

        let newList = [];
        const listCache = JSON.parse(sessionStorage.getItem('tagNavListCache'));
        if (listCache) newList = [...listCache];
        const item = {
            name: newRoute.name,
            query: newRoute.query,
            params: newRoute.params,
            meta: newRoute.meta,
            path: newRoute.path,
            active:false
        };
        if (newList.findIndex(e => e.name === item.name) >= 0) return newList;

        newList.unshift(item);
        sessionStorage.setItem('tagNavListCache', JSON.stringify(newList));
        return newList
    },
    closeAllTagNav(){
        let newList=[];
        sessionStorage.setItem('tagNavListCache', JSON.stringify(newList));
        util.navTo('/home');
        return newList;
    },
    closeOtherTagNav(route){
        if(!route) return ;

        let newList = [route];
        sessionStorage.setItem('tagNavListCache', JSON.stringify(newList));
        util.navTo(route.path);
        return newList;
    },
    closeTagNav(newRoute) {
        let newList = [];
        const listCache = JSON.parse(sessionStorage.getItem('tagNavListCache'));
        if (listCache) newList = [...listCache];

        const index = newList.findIndex(e => e.name === newRoute.name);
        if (index < 0) return newList;

        newList.splice(index, 1);
        sessionStorage.setItem('tagNavListCache', JSON.stringify(newList));
        return newList
    },

    /**
     * 存储和获取左侧菜单路由数组
     * @param menuList 新的左侧菜单路由数组
     * @returns {Array}
     */
    menuList(menuList){
        if(menuList){
            sessionStorage.setItem('menuList',JSON.stringify(menuList));
        }

        const menuListOld=JSON.parse(sessionStorage.getItem('menuList'));
        return menuListOld ? menuListOld : []
    }
};


export default util;
