window._bd_share_main.F.module("component/pop_popup",function(e,o){var t,d,r,u,c=e("base/tangram").T,i=e("base/class").Class,n=(e("conf/const"),e("component/pop_base")),a=i.create(function(){var s=this;s._poptype=1,s._hide=function(){r&&r.hide(),d&&d.hide()},s._show=function(e,o){var t,i,n,a;s._container,i=(t=o).bdMini||2,n=t.bdMiniList||s._partnerSort.slice(0,8*i),a=[],c.each(n,function(e,o){a[e]='<li><a href="#" onclick="return false;" class="popup_'+o+'" data-cmd="'+o+'">'+s._partners[o].name+"</a></li>"}),u.html(a.join("")),d.width(110*i+6),r.height(d.outerHeight()),r.width(d.outerWidth());var p=s._getPosition(e.element,o);c.each([d,r],function(e,o){o.css({top:p.top,left:p.left}).show()}),c(e.element).one("mouseout",function(){var e=!1;d.one("mouseover",function(){e=!0}),setTimeout(function(){!e&&s.hide()},300)})},s._getPosition=function(e,o){var t=c(e).offset(),i=t.top+c(e).height()+5,n=t.left,a=d.outerHeight(),p=c(window).scrollTop();(i+a>c("body").height()&&i+a>c(window).height()||i+a>p+c(window).height())&&(i=(i=t.top-a-5)<p?p:i);var s=o.bdPopupOffsetLeft,r=o.bdPopupOffsetTop;return(s||r)&&(i+=0|r,n+=0|s),{top:i,left:n}},s._init=function(){var e="bdSharePopup_"+ +new Date,o=['<iframe frameborder="0" id="'+e+'bg" class="bdshare_popup_bg" style="display:none;"></iframe>'].join(""),t=['<div class="bdshare_popup_box" id="'+e+'box" style="display:none;">','<div class="bdshare_popup_top">',"分享到","</div>",'<ul class="bdshare_popup_list"></ul>','<div class="bdshare_popup_bottom">','<a href="#" onclick="return false;" class="popup_more"  data-cmd="more" target="_blank;">更多...</a>',"</div>","</div>"].join("");c("body").insertHTML("beforeEnd",o+t),s._container=d=c("#"+e+"box"),u=d.find(".bdshare_popup_list"),r=c("#"+e+"bg"),d.mouseleave(s.hide)}},n.PopBase);o.Popup=(t||(t=new a).init(),t)});