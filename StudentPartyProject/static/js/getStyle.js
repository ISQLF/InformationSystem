/**
 * Created by QLF on 2018/4/5.
 */
// 获取非行间样式
//不能获取复合样式
// alert(getStyle(div1,'height'));
function getStyle(obj, name) {
    if (obj.currentStyle) {
        return obj.currentStyle[name];  //ie
    }
    else {
        return getComputedStyle(obj,null)[name];  //Chrome FF
    }
}