/**
 * Created by tw on 2018/6/4.
 */
/*��ֹCtrl+�����������ҳ������*/
document.onmousewheel = function (evt) {
    var e = evt || window.event;
    if(e.preventDefault && e.ctrlKey) e.preventDefault();
    if(e.ctrlKey) e.returnValue = false;
};
if (window.addEventListener) window.addEventListener('DOMMouseScroll', document.onmousewheel, false);
/*��ֹCtrl+�����������ҳ������*/