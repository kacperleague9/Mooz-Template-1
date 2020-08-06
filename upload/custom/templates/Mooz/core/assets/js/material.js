!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("jquery")):"function"==typeof define&&define.amd?define(["exports","jquery"],t):t((e=e||self).material={},e.jQuery)}(this,function(e,t){"use strict";var n=function(e){var t="show",n="show-predecessor",i="hide.bs.collapse",o="show.bs.collapse",r=".expansion-panel",a=".expansion-panel .collapse";e(document).on(""+i,a,function(){var i=e(this).closest(r);i.removeClass(t);var o=i.prev(r);o.length&&o.removeClass(n)}).on(""+o,a,function(){var i=e(this).closest(r);i.addClass(t);var o=i.prev(r);o.length&&o.addClass(n)})}(t=t&&t.hasOwnProperty("default")?t.default:t),i=function(e){var t="md.floatinglabel",n="floatinglabel",i=e.fn[n],o="is-focused",r="has-value",a="change.md.floatinglabel",s="focusin.md.floatinglabel",c="focusout.md.floatinglabel",l={DATA_PARENT:".floating-label",DATA_TOGGLE:".floating-label .custom-select, .floating-label .form-control"},d=function(){function n(t){this._element=t,this._parent=e(t).closest(l.DATA_PARENT)[0]}var i=n.prototype;return i.change=function(){e(this._element).val()||e(this._element).is("select")&&""!==e("option:first-child",e(this._element)).html().replace(" ","")?e(this._parent).addClass(r):e(this._parent).removeClass(r)},i.focusin=function(){e(this._parent).addClass(o)},i.focusout=function(){e(this._parent).removeClass(o)},n._jQueryInterface=function(i){return this.each(function(){var o=i||"change",r=e(this).data(t);if(r||(r=new n(this),e(this).data(t,r)),"string"==typeof o){if(void 0===r[o])throw new Error('No method named "'+o+'"');r[o]()}})},n}();return e(document).on(a+" "+s+" "+c,l.DATA_TOGGLE,function(t){d._jQueryInterface.call(e(this),t.type)}),e.fn[n]=d._jQueryInterface,e.fn[n].Constructor=d,e.fn[n].noConflict=function(){return e.fn[n]=i,d._jQueryInterface},d}(t);function o(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},i=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),i.forEach(function(t){r(e,t,n[t])})}return e}var s=function(e){var t="transitionend";function n(t){var n=this,o=!1;return e(this).one(i.TRANSITION_END,function(){o=!0}),setTimeout(function(){o||i.triggerTransitionEnd(n)},t),this}var i={TRANSITION_END:"mdTransitionEnd",getSelectorFromElement:function(t){var n=t.getAttribute("data-target");n&&"#"!==n||(n=t.getAttribute("href")||"");try{return e(document).find(n).length>0?n:null}catch(e){return null}},getTransitionDurationFromElement:function(t){if(!t)return 0;var n=e(t).css("transition-duration");return n?(n=n.split(",")[0],1e3*parseFloat(n)):0},getUID:function(e){do{e+=~~(1e6*Math.random())}while(document.getElementById(e));return e},isElement:function(e){return(e[0]||e).nodeType},reflow:function(e){return e.offsetHeight},supportsTransitionEnd:function(){return Boolean(t)},triggerTransitionEnd:function(n){e(n).trigger(t)},typeCheckConfig:function(e,t,n){for(var o in n)if(Object.prototype.hasOwnProperty.call(n,o)){var r=n[o],a=t[o],s=a&&i.isElement(a)?"element":(c=a,{}.toString.call(c).match(/\s([a-z]+)/i)[1].toLowerCase());if(!new RegExp(r).test(s))throw new Error(e.toUpperCase()+': Option "'+o+'" provided type "'+s+'" but expected type "'+r+'".')}var c}};return e.fn.emulateTransitionEnd=n,e.event.special[i.TRANSITION_END]={bindType:t,delegateType:t,handle:function(t){if(e(t.target).is(this))return t.handleObj.handler.apply(this,arguments)}},i}(t),c=function(e){var t=".md.navdrawer",n="navdrawer",i=e.fn[n],r="navdrawer-backdrop",c="navdrawer-open",l="show",d={breakpoint:"",keyboard:!0,show:!0,type:"default"},u={keyboard:"boolean",show:"boolean",type:"string"},h={CLICK_DATA_API:"click.md.navdrawer.data-api",CLICK_DISMISS:"click.dismiss"+t,FOCUSIN:"focusin"+t,HIDDEN:"hidden"+t,HIDE:"hide"+t,KEYDOWN_DISMISS:"keydown.dismiss"+t,MOUSEDOWN_DISMISS:"mousedown.dismiss"+t,MOUSEUP_DISMISS:"mouseup.dismiss"+t,SHOW:"show"+t,SHOWN:"shown"+t},f={CONTENT:".navdrawer-content",DATA_DISMISS:'[data-dismiss="navdrawer"]',DATA_TOGGLE:'[data-toggle="navdrawer"]'},p=function(){function t(t,n){this._backdrop=null,this._config=this._getConfig(n),this._content=e(t).find(f.CONTENT)[0],this._element=t,this._ignoreBackdropClick=!1,this._isShown=!1,this._typeBreakpoint=""===this._config.breakpoint?"":"-"+this._config.breakpoint}var i,p,m,g=t.prototype;return g.hide=function(t){var n=this;if(t&&t.preventDefault(),!this._isTransitioning&&this._isShown){var i=e.Event(h.HIDE);if(e(this._element).trigger(i),this._isShown&&!i.isDefaultPrevented()){this._isShown=!1,this._isTransitioning=!0,this._setEscapeEvent(),e(document).off(h.FOCUSIN),e(document.body).removeClass(c+"-"+this._config.type+this._typeBreakpoint),e(this._element).removeClass(l),e(this._element).off(h.CLICK_DISMISS),e(this._content).off(h.MOUSEDOWN_DISMISS);var o=s.getTransitionDurationFromElement(this._content);e(this._content).one(s.TRANSITION_END,function(e){return n._hideNavdrawer(e)}).emulateTransitionEnd(o),this._showBackdrop()}}},g.show=function(t){var i=this;if(!this._isTransitioning&&!this._isShown){this._isTransitioning=!0;var o=e.Event(h.SHOW,{relatedTarget:t});e(this._element).trigger(o),this._isShown||o.isDefaultPrevented()||(this._isShown=!0,this._setEscapeEvent(),e(this._element).addClass(n+"-"+this._config.type+this._typeBreakpoint),e(this._element).on(h.CLICK_DISMISS,f.DATA_DISMISS,function(e){return i.hide(e)}),e(this._content).on(h.MOUSEDOWN_DISMISS,function(){e(i._element).one(h.MOUSEUP_DISMISS,function(t){e(t.target).is(i._element)&&(i._ignoreBackdropClick=!0)})}),this._showBackdrop(),this._showElement(t))}},g.toggle=function(e){return this._isShown?this.hide():this.show(e)},g._enforceFocus=function(){var t=this;e(document).off(h.FOCUSIN).on(h.FOCUSIN,function(n){document!==n.target&&t._element!==n.target&&0===e(t._element).has(n.target).length&&t._element.focus()})},g._getConfig=function(e){return e=a({},d,e),s.typeCheckConfig(n,e,u),e},g._hideNavdrawer=function(){this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._isTransitioning=!1,e(this._element).trigger(h.HIDDEN)},g._removeBackdrop=function(){this._backdrop&&(e(this._backdrop).remove(),this._backdrop=null)},g._setEscapeEvent=function(){var t=this;this._isShown&&this._config.keyboard?e(this._element).on(h.KEYDOWN_DISMISS,function(e){27===e.which&&(e.preventDefault(),t.hide())}):this._isShown||e(this._element).off(h.KEYDOWN_DISMISS)},g._showBackdrop=function(){var t=this;this._isShown?(this._backdrop=document.createElement("div"),e(this._backdrop).addClass(r).addClass(r+"-"+this._config.type+this._typeBreakpoint).appendTo(document.body),e(this._element).on(h.CLICK_DISMISS,function(e){t._ignoreBackdropClick?t._ignoreBackdropClick=!1:e.target===e.currentTarget&&t.hide()}),s.reflow(this._backdrop),e(this._backdrop).addClass(l)):!this._isShown&&this._backdrop&&(e(this._backdrop).removeClass(l),this._removeBackdrop())},g._showElement=function(t){var n=this;this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE||document.body.appendChild(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),s.reflow(this._element),e(document.body).addClass(c+"-"+this._config.type+this._typeBreakpoint),e(this._element).addClass(l),this._enforceFocus();var i=e.Event(h.SHOWN,{relatedTarget:t}),o=s.getTransitionDurationFromElement(this._content);e(this._content).one(s.TRANSITION_END,function(){n._element.focus(),n._isTransitioning=!1,e(n._element).trigger(i)}).emulateTransitionEnd(o)},t._jQueryInterface=function(n,i){return this.each(function(){var o=a({},d,e(this).data(),"object"==typeof n&&n?n:{}),r=e(this).data("md.navdrawer");if(r||(r=new t(this,o),e(this).data("md.navdrawer",r)),"string"==typeof n){if(void 0===r[n])throw new TypeError('No method named "'+n+'"');r[n](i)}else o.show&&r.show(i)})},i=t,m=[{key:"Default",get:function(){return d}}],(p=null)&&o(i.prototype,p),m&&o(i,m),t}();return e(document).on(h.CLICK_DATA_API,f.DATA_TOGGLE,function(t){var n,i=this,o=s.getSelectorFromElement(this);o&&(n=e(o)[0]);var r=e(n).data("md.navdrawer")?"toggle":a({},e(n).data(),e(this).data());"A"!==this.tagName&&"AREA"!==this.tagName||t.preventDefault();var c=e(n).one(h.SHOW,function(t){t.isDefaultPrevented()||c.one(h.HIDDEN,function(){e(i).is(":visible")&&i.focus()})});p._jQueryInterface.call(e(n),r,this)}),e.fn[n]=p._jQueryInterface,e.fn[n].Constructor=p,e.fn[n].noConflict=function(){return e.fn[n]=i,p._jQueryInterface},p}(t);function l(e,t){return e(t={exports:{}},t.exports),t.exports}var d=l(function(e,n){e.exports=function(e){var t=e(window),n=e(document),i=e(document.documentElement),o=null!=document.documentElement.style.transition;function r(t,i,l,u){if(!t)return r;var h=!1,f={id:t.id||"P"+Math.abs(~~(Math.random()*new Date)),handlingOpen:!1},p=l?e.extend(!0,{},l.defaults,u):u||{},m=e.extend({},r.klasses(),p.klass),g=e(t),y=function(){return this.start()},v=y.prototype={constructor:y,$node:g,start:function(){return f&&f.start?v:(f.methods={},f.start=!0,f.open=!1,f.type=t.type,t.autofocus=t==d(),t.readOnly=!p.editable,t.id=t.id||f.id,"text"!=t.type&&(t.type="text"),v.component=new l(v,p),v.$root=e('<div class="'+m.picker+'" id="'+t.id+'_root" />'),c(v.$root[0],"hidden",!0),v.$holder=e(b()).appendTo(v.$root),_(),p.formatSubmit&&(!0===p.hiddenName?(y=t.name,t.name=""):y=(y=["string"==typeof p.hiddenPrefix?p.hiddenPrefix:"","string"==typeof p.hiddenSuffix?p.hiddenSuffix:"_submit"])[0]+t.name+y[1],v._hidden=e('<input type=hidden name="'+y+'"'+(g.data("value")||t.value?' value="'+v.get("select",p.formatSubmit)+'"':"")+">")[0],g.on("change."+f.id,function(){v._hidden.value=t.value?v.get("select",p.formatSubmit):""})),g.data(i,v).addClass(m.input).val(g.data("value")?v.get("select",p.format):t.value).on("focus."+f.id+" click."+f.id,(r=function(e){e.preventDefault(),v.open()},a=100,function(){var e=this,t=arguments,n=s&&!u;clearTimeout(u),u=setTimeout(function(){u=null,s||r.apply(e,t)},a),n&&r.apply(e,t)})).on("mousedown",function(){f.handlingOpen=!0;var t=function(){setTimeout(function(){e(document).off("mouseup",t),f.handlingOpen=!1},0)};e(document).on("mouseup",t)}),p.editable||g.on("keydown."+f.id,S),c(t,{haspopup:!0,expanded:!1,readonly:!1,owns:t.id+"_root"}),p.containerHidden?e(p.containerHidden).append(v._hidden):g.after(v._hidden),p.container?e(p.container).append(v.$root):g.after(v.$root),v.on({start:v.component.onStart,render:v.component.onRender,stop:v.component.onStop,open:v.component.onOpen,close:v.component.onClose,set:v.component.onSet}).on({start:p.onStart,render:p.onRender,stop:p.onStop,open:p.onOpen,close:p.onClose,set:p.onSet}),(n=v.$holder[0]).currentStyle?o=n.currentStyle.position:window.getComputedStyle&&(o=getComputedStyle(n).position),h="fixed"==o,t.autofocus&&v.open(),v.trigger("start").trigger("render"));var n,o,r,a,s,u,y},render:function(t){return t?(v.$holder=e(b()),_(),v.$root.html(v.$holder)):v.$root.find("."+m.box).html(v.component.nodes(f.open)),v.trigger("render")},stop:function(){return f.start?(v.close(),v._hidden&&v._hidden.parentNode.removeChild(v._hidden),v.$root.remove(),g.removeClass(m.input).removeData(i),setTimeout(function(){g.off("."+f.id)},0),t.type=f.type,t.readOnly=!1,v.trigger("stop"),f.methods={},f.start=!1,v):v},open:function(i){return f.open?v:(g.addClass(m.active),c(t,"expanded",!0),setTimeout(function(){v.$root.addClass(m.opened),c(v.$root[0],"hidden",!1)},0),!1!==i&&(f.open=!0,h&&e("body").css("overflow","hidden").css("padding-right","+="+a()),h&&o?v.$holder.find("."+m.frame).one("transitionend",function(){v.$holder.eq(0).focus()}):setTimeout(function(){v.$holder.eq(0).focus()},0),n.on("click."+f.id+" focusin."+f.id,function(e){if(!f.handlingOpen){var n=s(e,t);e.isSimulated||n==t||n==document||3==e.which||v.close(n===v.$holder[0])}}).on("keydown."+f.id,function(n){var i=n.keyCode,o=v.component.key[i],a=s(n,t);27==i?v.close(!0):a!=v.$holder[0]||!o&&13!=i?e.contains(v.$root[0],a)&&13==i&&(n.preventDefault(),a.click()):(n.preventDefault(),o?r._.trigger(v.component.key.go,v,[r._.trigger(o)]):v.$root.find("."+m.highlighted).hasClass(m.disabled)||(v.set("select",v.component.item.highlight),p.closeOnSelect&&v.close(!0)))})),v.trigger("open"))},close:function(i){return i&&(p.editable?t.focus():(v.$holder.off("focus.toOpen").focus(),setTimeout(function(){v.$holder.on("focus.toOpen",k)},0))),g.removeClass(m.active),c(t,"expanded",!1),setTimeout(function(){v.$root.removeClass(m.opened+" "+m.focused),c(v.$root[0],"hidden",!0)},0),f.open?(f.open=!1,h&&e("body").css("overflow","").css("padding-right","-="+a()),n.off("."+f.id),v.trigger("close")):v},clear:function(e){return v.set("clear",null,e)},set:function(t,n,i){var o,r,a=e.isPlainObject(t),s=a?t:{};if(i=a&&e.isPlainObject(n)?n:i||{},t){for(o in a||(s[t]=n),s)r=s[o],o in v.component.item&&(void 0===r&&(r=null),v.component.set(o,r,i)),"select"!=o&&"clear"!=o||!p.updateInput||g.val("clear"==o?"":v.get(o,p.format)).trigger("change");v.render()}return i.muted?v:v.trigger("set",s)},get:function(e,n){if(null!=f[e=e||"value"])return f[e];if("valueSubmit"==e){if(v._hidden)return v._hidden.value;e="value"}if("value"==e)return t.value;if(e in v.component.item){if("string"==typeof n){var i=v.component.get(e);return i?r._.trigger(v.component.formats.toString,v.component,[n,i]):""}return v.component.get(e)}},on:function(t,n,i){var o,r,a=e.isPlainObject(t),s=a?t:{};if(t)for(o in a||(s[t]=n),s)r=s[o],i&&(o="_"+o),f.methods[o]=f.methods[o]||[],f.methods[o].push(r);return v},off:function(){var e,t,n=arguments;for(e=0,namesCount=n.length;e<namesCount;e+=1)(t=n[e])in f.methods&&delete f.methods[t];return v},trigger:function(e,t){var n=function(e){var n=f.methods[e];n&&n.map(function(e){r._.trigger(e,v,[t])})};return n("_"+e),n(e),v}};function b(){return r._.node("div",r._.node("div",r._.node("div",r._.node("div",v.component.nodes(f.open),m.box),m.wrap),m.frame),m.holder,'tabindex="-1"')}function _(){v.$holder.on({keydown:S,"focus.toOpen":k,blur:function(){g.removeClass(m.target)},focusin:function(e){v.$root.removeClass(m.focused),e.stopPropagation()},"mousedown click":function(n){var i=s(n,t);i!=v.$holder[0]&&(n.stopPropagation(),"mousedown"!=n.type||e(i).is("input, select, textarea, button, option")||(n.preventDefault(),v.$holder.eq(0).focus()))}}).on("click","[data-pick], [data-nav], [data-clear], [data-close]",function(){var t=e(this),n=t.data(),i=t.hasClass(m.navDisabled)||t.hasClass(m.disabled),o=d();o=o&&(o.type||o.href?o:null),(i||o&&!e.contains(v.$root[0],o))&&v.$holder.eq(0).focus(),!i&&n.nav?v.set("highlight",v.component.item.highlight,{nav:n.nav}):!i&&"pick"in n?(v.set("select",n.pick),p.closeOnSelect&&v.close(!0)):n.clear?(v.clear(),p.closeOnClear&&v.close(!0)):n.close&&v.close(!0)})}function k(e){e.stopPropagation(),g.addClass(m.target),v.$root.addClass(m.focused),v.open()}function S(e){var t=e.keyCode,n=/^(8|46)$/.test(t);if(27==t)return v.close(!0),!1;(32==t||n||!f.open&&v.component.key[t])&&(e.preventDefault(),e.stopPropagation(),n?v.clear().close():v.open())}return new y}function a(){if(i.height()<=t.height())return 0;var n=e('<div style="visibility:hidden;width:100px" />').appendTo("body"),o=n[0].offsetWidth;n.css("overflow","scroll");var r=e('<div style="width:100%" />').appendTo(n),a=r[0].offsetWidth;return n.remove(),o-a}function s(e,t){var n=[];return e.path&&(n=e.path),e.originalEvent&&e.originalEvent.path&&(n=e.originalEvent.path),n&&n.length>0?t&&n.indexOf(t)>=0?t:n[0]:e.target}function c(t,n,i){if(e.isPlainObject(n))for(var o in n)l(t,o,n[o]);else l(t,n,i)}function l(e,t,n){e.setAttribute(("role"==t?"":"aria-")+t,n)}function d(){try{return document.activeElement}catch(e){}}return r.klasses=function(e){return{picker:e=e||"picker",opened:e+"--opened",focused:e+"--focused",input:e+"__input",active:e+"__input--active",target:e+"__input--target",holder:e+"__holder",frame:e+"__frame",wrap:e+"__wrap",box:e+"__box"}},r._={group:function(e){for(var t,n="",i=r._.trigger(e.min,e);i<=r._.trigger(e.max,e,[i]);i+=e.i)t=r._.trigger(e.item,e,[i]),n+=r._.node(e.node,t[0],t[1],t[2]);return n},node:function(t,n,i,o){return n?"<"+t+(i=i?' class="'+i+'"':"")+(o=o?" "+o:"")+">"+(n=e.isArray(n)?n.join(""):n)+"</"+t+">":""},lead:function(e){return(e<10?"0":"")+e},trigger:function(e,t,n){return"function"==typeof e?e.apply(t,n||[]):e},digits:function(e){return/\d/.test(e[1])?2:1},isDate:function(e){return{}.toString.call(e).indexOf("Date")>-1&&this.isInteger(e.getDate())},isInteger:function(e){return{}.toString.call(e).indexOf("Number")>-1&&e%1==0},ariaAttr:function(t,n){for(var i in e.isPlainObject(t)||(t={attribute:n}),n="",t){var o=("role"==i?"":"aria-")+i,r=t[i];n+=null==r?"":o+'="'+t[i]+'"'}return n}},r.extend=function(t,n){e.fn[t]=function(i,o){var a=this.data(t);return"picker"==i?a:a&&"string"==typeof i?r._.trigger(a[i],a,[o]):this.each(function(){e(this).data(t)||new r(this,t,n,i)})},e.fn[t].defaults=n.defaults},r}(t)}),u=(l(function(e,n){e.exports=function(e,t){var n,i=e._;function o(e,t){var n,i=this,o=e.$node[0],r=o.value,a=e.$node.data("value"),s=a||r,c=a?t.formatSubmit:t.format,l=function(){return o.currentStyle?"rtl"==o.currentStyle.direction:"rtl"==getComputedStyle(e.$root[0]).direction};i.settings=t,i.$node=e.$node,i.queue={min:"measure create",max:"measure create",now:"now create",select:"parse create validate",highlight:"parse navigate create validate",view:"parse create validate viewset",disable:"deactivate",enable:"activate"},i.item={},i.item.clear=null,i.item.disable=(t.disable||[]).slice(0),i.item.enable=-(!0===(n=i.item.disable)[0]?n.shift():-1),i.set("min",t.min).set("max",t.max).set("now"),s?i.set("select",s,{format:c,defaultValue:!0}):i.set("select",null).set("highlight",i.item.now),i.key={40:7,38:-7,39:function(){return l()?-1:1},37:function(){return l()?1:-1},go:function(e){var t=i.item.highlight,n=new Date(t.year,t.month,t.date+e);i.set("highlight",n,{interval:e}),this.render()}},e.on("render",function(){e.$root.find("."+t.klass.selectMonth).on("change",function(){var n=this.value;n&&(e.set("highlight",[e.get("view").year,n,e.get("highlight").date]),e.$root.find("."+t.klass.selectMonth).trigger("focus"))}),e.$root.find("."+t.klass.selectYear).on("change",function(){var n=this.value;n&&(e.set("highlight",[n,e.get("view").month,e.get("highlight").date]),e.$root.find("."+t.klass.selectYear).trigger("focus"))})},1).on("open",function(){var n="";i.disabled(i.get("now"))&&(n=":not(."+t.klass.buttonToday+")"),e.$root.find("button"+n+", select").attr("disabled",!1)},1).on("close",function(){e.$root.find("button, select").attr("disabled",!0)},1)}o.prototype.set=function(e,t,n){var i=this,o=i.item;return null===t?("clear"==e&&(e="select"),o[e]=t,i):(o["enable"==e?"disable":"flip"==e?"enable":e]=i.queue[e].split(" ").map(function(o){return t=i[o](e,t,n)}).pop(),"select"==e?i.set("highlight",o.select,n):"highlight"==e?i.set("view",o.highlight,n):e.match(/^(flip|min|max|disable|enable)$/)&&(o.select&&i.disabled(o.select)&&i.set("select",o.select,n),o.highlight&&i.disabled(o.highlight)&&i.set("highlight",o.highlight,n)),i)},o.prototype.get=function(e){return this.item[e]},o.prototype.create=function(e,n,o){var r;return(n=void 0===n?e:n)==-1/0||n==1/0?r=n:t.isPlainObject(n)&&i.isInteger(n.pick)?n=n.obj:t.isArray(n)?(n=new Date(n[0],n[1],n[2]),n=i.isDate(n)?n:this.create().obj):n=i.isInteger(n)||i.isDate(n)?this.normalize(new Date(n),o):this.now(e,n,o),{year:r||n.getFullYear(),month:r||n.getMonth(),date:r||n.getDate(),day:r||n.getDay(),obj:r||n,pick:r||n.getTime()}},o.prototype.createRange=function(e,n){var o=this,r=function(e){return!0===e||t.isArray(e)||i.isDate(e)?o.create(e):e};return i.isInteger(e)||(e=r(e)),i.isInteger(n)||(n=r(n)),i.isInteger(e)&&t.isPlainObject(n)?e=[n.year,n.month,n.date+e]:i.isInteger(n)&&t.isPlainObject(e)&&(n=[e.year,e.month,e.date+n]),{from:r(e),to:r(n)}},o.prototype.withinRange=function(e,t){return e=this.createRange(e.from,e.to),t.pick>=e.from.pick&&t.pick<=e.to.pick},o.prototype.overlapRanges=function(e,t){return e=this.createRange(e.from,e.to),t=this.createRange(t.from,t.to),this.withinRange(e,t.from)||this.withinRange(e,t.to)||this.withinRange(t,e.from)||this.withinRange(t,e.to)},o.prototype.now=function(e,t,n){return t=new Date,n&&n.rel&&t.setDate(t.getDate()+n.rel),this.normalize(t,n)},o.prototype.navigate=function(e,n,i){var o,r,a,s,c=t.isArray(n),l=t.isPlainObject(n),d=this.item.view;if(c||l){for(l?(r=n.year,a=n.month,s=n.date):(r=+n[0],a=+n[1],s=+n[2]),i&&i.nav&&d&&d.month!==a&&(r=d.year,a=d.month),o=new Date(r,a+(i&&i.nav?i.nav:0),1),r=o.getFullYear(),a=o.getMonth();new Date(r,a,s).getMonth()!==a;)s-=1;n=[r,a,s]}return n},o.prototype.normalize=function(e){return e.setHours(0,0,0,0),e},o.prototype.measure=function(e,t){return i.isInteger(t)?t=this.now(e,t,{rel:t}):t?"string"==typeof t&&(t=this.parse(e,t)):t="min"==e?-1/0:1/0,t},o.prototype.viewset=function(e,t){return this.create([t.year,t.month,1])},o.prototype.validate=function(e,n,o){var r,a,s,c,l=this,d=n,u=o&&o.interval?o.interval:1,h=-1===l.item.enable,f=l.item.min,p=l.item.max,m=h&&l.item.disable.filter(function(e){if(t.isArray(e)){var o=l.create(e).pick;o<n.pick?r=!0:o>n.pick&&(a=!0)}return i.isInteger(e)}).length;if((!o||!o.nav&&!o.defaultValue)&&(!h&&l.disabled(n)||h&&l.disabled(n)&&(m||r||a)||!h&&(n.pick<=f.pick||n.pick>=p.pick)))for(h&&!m&&(!a&&u>0||!r&&u<0)&&(u*=-1);l.disabled(n)&&(Math.abs(u)>1&&(n.month<d.month||n.month>d.month)&&(n=d,u=u>0?1:-1),n.pick<=f.pick?(s=!0,u=1,n=l.create([f.year,f.month,f.date+(n.pick===f.pick?0:-1)])):n.pick>=p.pick&&(c=!0,u=-1,n=l.create([p.year,p.month,p.date+(n.pick===p.pick?0:1)])),!s||!c);)n=l.create([n.year,n.month,n.date+u]);return n},o.prototype.disabled=function(e){var n=this,o=n.item.disable.filter(function(o){return i.isInteger(o)?e.day===(n.settings.firstDay?o:o-1)%7:t.isArray(o)||i.isDate(o)?e.pick===n.create(o).pick:t.isPlainObject(o)?n.withinRange(o,e):void 0});return o=o.length&&!o.filter(function(e){return t.isArray(e)&&"inverted"==e[3]||t.isPlainObject(e)&&e.inverted}).length,-1===n.item.enable?!o:o||e.pick<n.item.min.pick||e.pick>n.item.max.pick},o.prototype.parse=function(e,t,n){var o=this,r={};return t&&"string"==typeof t?(n&&n.format||((n=n||{}).format=o.settings.format),o.formats.toArray(n.format).map(function(e){var n=o.formats[e],a=n?i.trigger(n,o,[t,r]):e.replace(/^!/,"").length;n&&(r[e]=t.substr(0,a)),t=t.substr(a)}),[r.yyyy||r.yy,+(r.mm||r.m)-1,r.dd||r.d]):t},o.prototype.formats=function(){function e(e,t,n){var i=e.match(/[^\x00-\x7F]+|\w+/)[0];return n.mm||n.m||(n.m=t.indexOf(i)+1),i.length}function t(e){return e.match(/\w+/)[0].length}return{d:function(e,t){return e?i.digits(e):t.date},dd:function(e,t){return e?2:i.lead(t.date)},ddd:function(e,n){return e?t(e):this.settings.weekdaysShort[n.day]},dddd:function(e,n){return e?t(e):this.settings.weekdaysFull[n.day]},m:function(e,t){return e?i.digits(e):t.month+1},mm:function(e,t){return e?2:i.lead(t.month+1)},mmm:function(t,n){var i=this.settings.monthsShort;return t?e(t,i,n):i[n.month]},mmmm:function(t,n){var i=this.settings.monthsFull;return t?e(t,i,n):i[n.month]},yy:function(e,t){return e?2:(""+t.year).slice(2)},yyyy:function(e,t){return e?4:t.year},toArray:function(e){return e.split(/(d{1,4}|m{1,4}|y{4}|yy|!.)/g)},toString:function(e,t){var n=this;return n.formats.toArray(e).map(function(e){return i.trigger(n.formats[e],n,[0,t])||e.replace(/^!/,"")}).join("")}}}(),o.prototype.isDateExact=function(e,n){return i.isInteger(e)&&i.isInteger(n)||"boolean"==typeof e&&"boolean"==typeof n?e===n:(i.isDate(e)||t.isArray(e))&&(i.isDate(n)||t.isArray(n))?this.create(e).pick===this.create(n).pick:!(!t.isPlainObject(e)||!t.isPlainObject(n))&&this.isDateExact(e.from,n.from)&&this.isDateExact(e.to,n.to)},o.prototype.isDateOverlap=function(e,n){var o=this.settings.firstDay?1:0;return i.isInteger(e)&&(i.isDate(n)||t.isArray(n))?(e=e%7+o)===this.create(n).day+1:i.isInteger(n)&&(i.isDate(e)||t.isArray(e))?(n=n%7+o)===this.create(e).day+1:!(!t.isPlainObject(e)||!t.isPlainObject(n))&&this.overlapRanges(e,n)},o.prototype.flipEnable=function(e){var t=this.item;t.enable=e||(-1==t.enable?1:-1)},o.prototype.deactivate=function(e,n){var o=this,r=o.item.disable.slice(0);return"flip"==n?o.flipEnable():!1===n?(o.flipEnable(1),r=[]):!0===n?(o.flipEnable(-1),r=[]):n.map(function(e){for(var n,a=0;a<r.length;a+=1)if(o.isDateExact(e,r[a])){n=!0;break}n||(i.isInteger(e)||i.isDate(e)||t.isArray(e)||t.isPlainObject(e)&&e.from&&e.to)&&r.push(e)}),r},o.prototype.activate=function(e,n){var o=this,r=o.item.disable,a=r.length;return"flip"==n?o.flipEnable():!0===n?(o.flipEnable(1),r=[]):!1===n?(o.flipEnable(-1),r=[]):n.map(function(e){var n,s,c,l;for(c=0;c<a;c+=1){if(s=r[c],o.isDateExact(s,e)){n=r[c]=null,l=!0;break}if(o.isDateOverlap(s,e)){t.isPlainObject(e)?(e.inverted=!0,n=e):t.isArray(e)?(n=e)[3]||n.push("inverted"):i.isDate(e)&&(n=[e.getFullYear(),e.getMonth(),e.getDate(),"inverted"]);break}}if(n)for(c=0;c<a;c+=1)if(o.isDateExact(r[c],e)){r[c]=null;break}if(l)for(c=0;c<a;c+=1)if(o.isDateOverlap(r[c],e)){r[c]=null;break}n&&r.push(n)}),r.filter(function(e){return null!=e})},o.prototype.nodes=function(e){var t,n,o=this,r=o.settings,a=o.item,s=a.now,c=a.select,l=a.highlight,d=a.view,u=a.disable,h=a.min,f=a.max,p=(t=(r.showWeekdaysFull?r.weekdaysFull:r.weekdaysShort).slice(0),n=r.weekdaysFull.slice(0),r.firstDay&&(t.push(t.shift()),n.push(n.shift())),i.node("thead",i.node("tr",i.group({min:0,max:6,i:1,node:"th",item:function(e){return[t[e],r.klass.weekdays,'scope=col title="'+n[e]+'"']}})))),m=function(e){return i.node("div"," ",r.klass["nav"+(e?"Next":"Prev")]+(e&&d.year>=f.year&&d.month>=f.month||!e&&d.year<=h.year&&d.month<=h.month?" "+r.klass.navDisabled:""),"data-nav="+(e||-1)+" "+i.ariaAttr({role:"button",controls:o.$node[0].id+"_table"})+' title="'+(e?r.labelMonthNext:r.labelMonthPrev)+'"')},g=function(){var t=r.showMonthsShort?r.monthsShort:r.monthsFull;return r.selectMonths?i.node("select",i.group({min:0,max:11,i:1,node:"option",item:function(e){return[t[e],0,"value="+e+(d.month==e?" selected":"")+(d.year==h.year&&e<h.month||d.year==f.year&&e>f.month?" disabled":"")]}}),r.klass.selectMonth,(e?"":"disabled")+" "+i.ariaAttr({controls:o.$node[0].id+"_table"})+' title="'+r.labelMonthSelect+'"'):i.node("div",t[d.month],r.klass.month)},y=function(){var t=d.year,n=!0===r.selectYears?5:~~(r.selectYears/2);if(n){var a=h.year,s=f.year,c=t-n,l=t+n;if(a>c&&(l+=a-c,c=a),s<l){var u=c-a,p=l-s;c-=u>p?p:u,l=s}return i.node("select",i.group({min:c,max:l,i:1,node:"option",item:function(e){return[e,0,"value="+e+(t==e?" selected":"")]}}),r.klass.selectYear,(e?"":"disabled")+" "+i.ariaAttr({controls:o.$node[0].id+"_table"})+' title="'+r.labelYearSelect+'"')}return i.node("div",t,r.klass.year)};return i.node("div",(r.selectYears?y()+g():g()+y())+m()+m(1),r.klass.header)+i.node("table",p+i.node("tbody",i.group({min:0,max:5,i:1,node:"tr",item:function(e){var t=r.firstDay&&0===o.create([d.year,d.month,1]).day?-7:0;return[i.group({min:7*e-d.day+t+1,max:function(){return this.min+7-1},i:1,node:"td",item:function(e){e=o.create([d.year,d.month,e+(r.firstDay?1:0)]);var t,n=c&&c.pick==e.pick,a=l&&l.pick==e.pick,p=u&&o.disabled(e)||e.pick<h.pick||e.pick>f.pick,m=i.trigger(o.formats.toString,o,[r.format,e]);return[i.node("div",e.date,(t=[r.klass.day],t.push(d.month==e.month?r.klass.infocus:r.klass.outfocus),s.pick==e.pick&&t.push(r.klass.now),n&&t.push(r.klass.selected),a&&t.push(r.klass.highlighted),p&&t.push(r.klass.disabled),t.join(" ")),"data-pick="+e.pick+" "+i.ariaAttr({role:"gridcell",label:m,selected:!(!n||o.$node.val()!==m)||null,activedescendant:!!a||null,disabled:!!p||null})),"",i.ariaAttr({role:"presentation"})]}})]}})),r.klass.table,'id="'+o.$node[0].id+'_table" '+i.ariaAttr({role:"grid",controls:o.$node[0].id,readonly:!0}))+i.node("div",i.node("button",r.today,r.klass.buttonToday,"type=button data-pick="+s.pick+(e&&!o.disabled(s)?"":" disabled")+" "+i.ariaAttr({controls:o.$node[0].id}))+i.node("button",r.clear,r.klass.buttonClear,"type=button data-clear=1"+(e?"":" disabled")+" "+i.ariaAttr({controls:o.$node[0].id}))+i.node("button",r.close,r.klass.buttonClose,"type=button data-close=true "+(e?"":" disabled")+" "+i.ariaAttr({controls:o.$node[0].id})),r.klass.footer)},o.defaults={labelMonthNext:"Next month",labelMonthPrev:"Previous month",labelMonthSelect:"Select a month",labelYearSelect:"Select a year",monthsFull:["January","February","March","April","May","June","July","August","September","October","November","December"],monthsShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],weekdaysFull:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],weekdaysShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],today:"Today",clear:"Clear",close:"Close",closeOnSelect:!0,closeOnClear:!0,updateInput:!0,format:"d mmmm, yyyy",klass:{table:(n=e.klasses().picker+"__")+"table",header:n+"header",navPrev:n+"nav--prev",navNext:n+"nav--next",navDisabled:n+"nav--disabled",month:n+"month",year:n+"year",selectMonth:n+"select--month",selectYear:n+"select--year",weekdays:n+"weekday",day:n+"day",disabled:n+"day--disabled",selected:n+"day--selected",highlighted:n+"day--highlighted",now:n+"day--today",infocus:n+"day--infocus",outfocus:n+"day--outfocus",footer:n+"footer",buttonClear:n+"button--clear",buttonToday:n+"button--today",buttonClose:n+"button--close"}},e.extend("pickadate",o)}(d,t)}),function(e){var t="pickdate",n=e.fn[t],i={cancel:"Cancel",closeOnCancel:!0,closeOnSelect:!1,container:"",containerHidden:"",disable:[],firstDay:0,format:"d/m/yyyy",formatSubmit:"",hiddenName:!1,hiddenPrefix:"",hiddenSuffix:"",klass:{buttonClear:"btn btn-outline-primary picker-button-clear",buttonClose:"btn btn-outline-primary picker-button-close",buttonToday:"btn btn-outline-primary picker-button-today",day:"picker-day",disabled:"picker-day-disabled",highlighted:"picker-day-highlighted",infocus:"picker-day-infocus",now:"picker-day-today",outfocus:"picker-day-outfocus",selected:"picker-day-selected",weekdays:"picker-weekday",box:"picker-box",footer:"picker-footer",frame:"picker-frame",header:"picker-header",holder:"picker-holder",table:"picker-table",wrap:"picker-wrap",active:"picker-input-active",input:"picker-input",month:"picker-month",navDisabled:"picker-nav-disabled",navNext:"material-icons picker-nav-next",navPrev:"material-icons picker-nav-prev",selectMonth:"picker-select-month",selectYear:"picker-select-year",year:"picker-year",focused:"picker-focused",opened:"picker-opened",picker:"picker"},labelMonthNext:"Next month",labelMonthPrev:"Previous month",labelMonthSelect:"Select a month",labelYearSelect:"Select a year",max:!1,min:!1,monthsFull:["January","February","March","April","May","June","July","August","September","October","November","December"],monthsShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],ok:"OK",onClose:function(){},onOpen:function(){},onRender:function(){},onSet:function(){},onStart:function(){},onStop:function(){},selectMonths:!1,selectYears:!1,today:"",weekdaysFull:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],weekdaysShort:["S","M","T","W","T","F","S"]},o={cancel:"string",closeOnCancel:"boolean",closeOnSelect:"boolean",container:"string",containerHidden:"string",disable:"array",firstDay:"number",format:"string",formatSubmit:"string",hiddenName:"boolean",hiddenPrefix:"string",hiddenSuffix:"string",klass:"object",labelMonthNext:"string",labelMonthPrev:"string",labelMonthSelect:"string",labelYearSelect:"string",max:"boolean || date",min:"boolean || date",monthsFull:"array",monthsShort:"array",ok:"string",onClose:"function",onOpen:"function",onRender:"function",onSet:"function",onStart:"function",onStop:"function",selectMonths:"boolean",selectYears:"boolean || number",today:"string",weekdaysFull:"array",weekdaysShort:"array"},r=function(){function n(e,t){this._config=this._getConfig(t),this._element=e}var r=n.prototype;return r.display=function(t,n,i){e(".picker-date-display",n).remove(),e(".picker-wrap",n).prepend('<div class="picker-date-display"><div class="picker-date-display-top"><span class="picker-year-display">'+t.get(i,"yyyy")+'</span></div><div class="picker-date-display-bottom"><span class="picker-weekday-display">'+t.get(i,"dddd")+'</span><span class="picker-day-display">'+t.get(i,"d")+'</span><span class="picker-month-display">'+t.get(i,"mmm")+"</span></div></div>")},r.show=function(){var t=this;e(this._element).pickadate({clear:this._config.cancel,close:this._config.ok,closeOnClear:this._config.closeOnCancel,closeOnSelect:this._config.closeOnSelect,container:this._config.container,containerHidden:this._config.containerHidden,disable:this._config.disable,firstDay:this._config.firstDay,format:this._config.format,formatSubmit:this._config.formatSubmit,klass:this._config.klass,hiddenName:this._config.hiddenName,hiddenPrefix:this._config.hiddenPrefix,hiddenSuffix:this._config.hiddenSuffix,labelMonthNext:this._config.labelMonthNext,labelMonthPrev:this._config.labelMonthPrev,labelMonthSelect:this._config.labelMonthSelect,labelYearSelect:this._config.labelYearSelect,max:this._config.max,min:this._config.min,monthsFull:this._config.monthsFull,monthsShort:this._config.monthsShort,onClose:this._config.onClose,onOpen:this._config.onOpen,onRender:this._config.onRender,onSet:this._config.onSet,onStart:this._config.onStart,onStop:this._config.onStop,selectMonths:this._config.selectMonths,selectYears:this._config.selectYears,today:this._config.today,weekdaysFull:this._config.weekdaysFull,weekdaysShort:this._config.weekdaysShort});var n=e(this._element).pickadate("picker"),i=n.$root;n.on({close:function(){e(document.activeElement).blur()},open:function(){e(".picker__date-display",i).length||t.display(n,i,"highlight")},set:function(){null!==n.get("select")&&t.display(n,i,"select")}})},r._getConfig=function(e){return e=a({},i,e),s.typeCheckConfig(t,e,o),e},n._jQueryInterface=function(t){return this.each(function(){var o=a({},i,e(this).data(),"object"==typeof t&&t?t:{}),r=e(this).data("md.pickdate");r||(r=new n(this,o),e(this).data("md.pickdate",r)),r.show()})},n}();e.fn[t]=r._jQueryInterface,e.fn[t].Constructor=r,e.fn[t].noConflict=function(){return e.fn[t]=n,r._jQueryInterface}}(t)),h=function(e){var t=".md.selectioncontrolfocus",n="focus",i={IS_MOUSEDOWN:!1},o="blur"+t,r="focus"+t,a="mousedown"+t,s="mouseup"+t,c=".custom-control",l=".custom-control-input";e(document).on(""+o,l,function(){e(this).removeClass(n)}).on(""+r,l,function(){!1===i.IS_MOUSEDOWN&&e(this).addClass(n)}).on(""+a,c,function(){i.IS_MOUSEDOWN=!0}).on(""+s,c,function(){setTimeout(function(){i.IS_MOUSEDOWN=!1},1)})}(t),f=function(e){var t="tabswitch",n=e.fn[t],i="animate",o="dropdown-item",r="nav-tabs-indicator",a="nav-tabs-material",c="show",l='.nav-tabs [data-toggle="tab"]',d=".dropdown",u=".nav-tabs",h=function(){function t(e){this._nav=e,this._navindicator=null}var n=t.prototype;return n.switch=function(t,n){var r=this,a=e(this._nav).offset().left,l=e(this._nav).scrollLeft(),u=e(this._nav).outerWidth();this._navindicator||this._createIndicator(a,l,u,n),e(t).hasClass(o)&&(t=e(t).closest(d));var h=e(t).offset().left,f=e(t).outerWidth();e(this._navindicator).addClass(c),s.reflow(this._navindicator),e(this._nav).addClass(i),e(this._navindicator).css({left:h+l-a,right:u-(h+l-a+f)});var p=s.getTransitionDurationFromElement(this._navindicator);e(this._navindicator).one(s.TRANSITION_END,function(){e(r._nav).removeClass(i),e(r._navindicator).removeClass(c)}).emulateTransitionEnd(p)},n._createIndicator=function(t,n,i,s){if(this._navindicator=document.createElement("div"),e(this._navindicator).addClass(r).appendTo(this._nav),void 0!==s){e(s).hasClass(o)&&(s=e(s).closest(d));var c=e(s).offset().left,l=e(s).outerWidth();e(this._navindicator).css({left:c+n-t,right:i-(c+n-t+l)})}e(this._nav).addClass(a)},t._jQueryInterface=function(n){return this.each(function(){var i=e(this).closest(u)[0];if(i){var o=e(i).data("md.tabswitch");o||(o=new t(i),e(i).data("md.tabswitch",o)),o.switch(this,n)}})},t}();return e(document).on("show.bs.tab",l,function(t){h._jQueryInterface.call(e(this),t.relatedTarget)}),e.fn[t]=h._jQueryInterface,e.fn[t].Constructor=h,e.fn[t].noConflict=function(){return e.fn[t]=n,h._jQueryInterface},h}(t);e.ExpansionPanel=n,e.FloatingLabel=i,e.NavDrawer=c,e.PickDate=u,e.SelectionControlFocus=h,e.TabSwitch=f,e.Util=s,Object.defineProperty(e,"__esModule",{value:!0})});