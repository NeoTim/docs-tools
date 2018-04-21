!function(){"use strict";function t(t){!function(t){return Boolean(t.getElementsByClassName("linenos").length)}(t)?function(t){return Boolean(t.getElementsByClassName("caption-text").length)}(t)&&function(t){var e=t.getElementsByClassName("button-row")[0],n=t.getElementsByClassName("code-block-caption")[0];console.log("MOVING BELOW CAPTION"),n.parentNode.insertBefore(e,n.nextSibling)}(t):function(t){var e=t.getElementsByClassName("button-row")[0],n=t.getElementsByClassName("highlighttable")[0].childNodes[0],o=document.createElement("tr"),i=document.createElement("td"),a=document.createElement("td");i.className="linenos-button-row-spacer",n.insertBefore(o,n.firstChild),o.appendChild(i),o.appendChild(a),a.appendChild(e)}(t)}var e=Object.freeze({setup:function(){for(var e=0,n=document.getElementsByClassName("button-code-block");e<n.length;e+=1){var o=n[e];Boolean(o.getElementsByClassName("button-row")[0])&&t(o)}}});var n=Object.freeze({setup:function(){if(document.getElementsByClassName("codepen").length){var t=document.createElement("script");t.src="https://production-assets.codepen.io/assets/embed/ei.js",t.async=!0,document.body.appendChild(t)}}});function o(t){return!t.siblings("ul:not(.simple)").length}function i(t){for(var e=[],n=0;n<t.length;n+=1)e.push(t[n]);return e}function a(t){var e=window.docsExcludedNav;if(!e||!e.length)return!1;for(var n=0;n<e.length;n+=1)if(-1!==t[0].href.indexOf(e[n]))return!0;return!1}var r=function(){this.listeners=[]};r.prototype.listen=function(t){this.listeners.push(t)},r.prototype.dispatch=function(t){for(var e=0;e<this.listeners.length;e+=1)this.listeners[e](t)};var s="code-button__tooltip--active",c="code-button__tooltip--inactive";function l(t){return Boolean(t.getElementsByClassName("copyable-code-block")[0])}var u=Object.freeze({setup:function(){for(var t=i(document.getElementsByClassName("button-code-block")).filter(l),e=function(){var t=o[n],e=t.getElementsByClassName("highlight")[0];if(!e)return{};var i=t.getElementsByClassName("button-row")[0].getElementsByClassName("code-button--copy")[0];if(!i)return{};var a=document.createElement("div");a.innerText="copied",a.classList.add("code-button__tooltip"),a.classList.add(c);var r=-1;i.appendChild(a),i.addEventListener("click",function(){var t,n,o,i=document.createElement("textarea");i.style.position="fixed",document.body.appendChild(i),i.value=e.innerText.trim(),i.select();try{if(!document.execCommand("copy"))throw new Error("Failed to copy");a.classList.replace(c,s),t=function(){a.classList.replace(s,c)},o=1500,(n=r)>=0&&window.clearTimeout(n),r=window.setTimeout(t,o)}catch(t){console.error(t)}document.body.removeChild(i)})},n=0,o=t;n<o.length;n+=1){var a=e();if(a)return a.v}}});var d=Object.freeze({setup:function(t){if(void 0===window.history||void 0===document.querySelectorAll||void 0===document.body.classList||void 0===(new XMLHttpRequest).responseURL)return!1;var e=document.querySelector(".sphinxsidebarwrapper"),n=document.querySelector(".body"),i={};function r(){void 0!==i.timeoutID&&window.clearTimeout(i.timeoutID),void 0!==i.xhr&&i.xhr.abort(),i={}}function s(o,a){void 0===o&&console.error("Going to undefined path"),r(),n.classList.add("loading"),i.timeoutID=window.setTimeout(function(){n.classList.remove("loading"),i.timeoutID=-1},1e4);var s=new Date;i.xhr=function(t,e){var n=new XMLHttpRequest;n.onload=function(){n.status>=200&&n.status<400?(e.success(n.responseText,n.responseURL),e.complete()):(e.error(),e.complete())},n.onerror=function(){e.error(),e.complete()},n.open("GET",t,!0);try{n.send()}catch(t){e.error(),e.complete()}}(o,{complete:function(){r()},error:function(t){console.error("Failed to load "+o),window.location=o},success:function(o,i){var r=new Date-s;n.classList.remove("loading"),a&&window.history.pushState({href:i},"",i);var c=document.createElement("html");c.innerHTML=o;var l=c.querySelector("title").textContent,u=c.querySelector(".body"),d=c.querySelector(".sphinxsidebarwrapper");r>62.5&&u.classList.add("loading"),n.parentElement.replaceChild(u,n),n=u,e.parentElement.replaceChild(d,e),e=d,document.title=l,t.update(),window.history.onnavigate&&window.history.onnavigate(),window.setTimeout(function(){n.classList.remove("loading"),a&&window.scroll(0,0)},1)}})}window.history.replaceState({href:window.location.href},document.querySelector("title").textContent,window.location.href);var c=document.querySelectorAll(".sphinxsidebarwrapper > ul a.reference.internal");function l(t){0!==t.button||t.shiftKey||t.altKey||t.metaKey||t.ctrlKey||(t.preventDefault(),s(t.currentTarget.href,!0))}for(var u=0;u<c.length;u+=1){var d=c[u];(o($(d))||a($(d)))&&d.addEventListener("click",l)}return window.onpopstate=function(t){null!==t.state&&s(t.state.href,!1)},!0}});function f(){}function p(t){for(var e,n,o=arguments,i=1,a=arguments.length;i<a;i++)for(e in n=o[i])t[e]=n[e];return t}function h(t,e){e.appendChild(t)}function m(t,e,n){e.insertBefore(t,n)}function g(t){t.parentNode.removeChild(t)}function v(t){return document.createElement(t)}function b(t){return document.createTextNode(t)}function y(t,e,n){t.addEventListener(e,n,!1)}function w(t,e,n){t.removeEventListener(e,n,!1)}function _(){return Object.create(null)}function C(t){this.destroy=f,this.fire("destroy"),this.set=this.get=f,!1!==t&&this._fragment.u(),this._fragment.d(),this._fragment=this._state=null}function E(t,e){return t!==e||t&&"object"==typeof t||"function"==typeof t}function N(t,e,n,o,i){for(var a in e)if(n[a]){var r=o[a],s=i[a],c=e[a];if(c)for(var l=0;l<c.length;l+=1){var u=c[l];u.__calling||(u.__calling=!0,u.call(t,r,s),u.__calling=!1)}}}function x(t,e){t._observers={pre:_(),post:_()},t._handlers=_(),t._bind=e._bind,t.options=e,t.root=e.root||t,t.store=t.root.store||e.store}function k(t){for(;t&&t.length;)t.shift()()}var S={destroy:C,get:function(t){return t?this._state[t]:this._state},fire:function(t,e){var n=t in this._handlers&&this._handlers[t].slice();if(n)for(var o=0;o<n.length;o+=1)n[o].call(this,e)},observe:function(t,e,n){var o=n&&n.defer?this._observers.post:this._observers.pre;return(o[t]||(o[t]=[])).push(e),n&&!1===n.init||(e.__calling=!0,e.call(this,this._state[t]),e.__calling=!1),{cancel:function(){var n=o[t].indexOf(e);~n&&o[t].splice(n,1)}}},on:function(t,e){if("teardown"===t)return this.on("destroy",e);var n=this._handlers[t]||(this._handlers[t]=[]);return n.push(e),{cancel:function(){var t=n.indexOf(e);~t&&n.splice(t,1)}}},set:function(t){this._set(p({},t)),this.root._lock||(this.root._lock=!0,k(this.root._beforecreate),k(this.root._oncreate),k(this.root._aftercreate),this.root._lock=!1)},teardown:C,_recompute:f,_set:function(t){var e=this._state,n={},o=!1;for(var i in t)E(t[i],e[i])&&(n[i]=o=!0);o&&(this._state=p({},e,t),this._recompute(n,this._state),this._bind&&this._bind(n,this._state),this._fragment&&(N(this,this._observers.pre,n,this._state,e),this._fragment.p(n,this._state),N(this,this._observers.post,n,this._state,e)))},_mount:function(t,e){this._fragment.m(t,e)},_unmount:function(){this._fragment&&this._fragment.u()}};function B(t){x(this,t),this._state=p({name:"",caption:"",answer:null},t.data),this._recompute({answer:1},this._state),this._fragment=function(t,e){var n,o,i,a,r,s,c,l;function u(t){e.change(!0)}function d(t){e.change(!1)}return{c:function(){n=v("div"),o=b("\n"),i=v("div"),a=v("span"),s=b("\n    "),c=v("span"),this.h()},h:function(){a.className=r="switch fa fa-thumbs-up good "+t.upvoteSelected,y(a,"click",u),c.className=l="switch fa fa-thumbs-down bad "+t.downvoteSelected,y(c,"click",d)},m:function(e,r){m(n,e,r),n.innerHTML=t.caption,m(o,e,r),m(i,e,r),h(a,i),h(s,i),h(c,i)},p:function(t,e){t.caption&&(n.innerHTML=e.caption),t.upvoteSelected&&r!==(r="switch fa fa-thumbs-up good "+e.upvoteSelected)&&(a.className=r),t.downvoteSelected&&l!==(l="switch fa fa-thumbs-down bad "+e.downvoteSelected)&&(c.className=l)},u:function(){n.innerHTML="",g(n),g(o),g(i)},d:function(){w(a,"click",u),w(c,"click",d)}}}(this._state,this),t.target&&(this._fragment.c(),this._fragment.m(t.target,t.anchor||null))}p(B.prototype,{change:function(t){this.set({answer:t}),this.fire("change",t)}},S),B.prototype._recompute=function(t,e){t.answer&&(E(e.upvoteSelected,e.upvoteSelected=!0===e.answer?"selected":"")&&(t.upvoteSelected=!0),E(e.downvoteSelected,e.downvoteSelected=function(t){return!1===t?"selected":""}(e.answer))&&(t.downvoteSelected=!0))};function I(t){x(this,t),this._state=p({name:"",caption:"",answer:""},t.data),this._fragment=function(t,e){var n,o=!1;function i(){o=!0,e.set({answer:n.value}),o=!1}function a(t){var n=e.get();e.fire("change",n.answer)}return{c:function(){n=v("textarea"),this.h()},h:function(){y(n,"input",i),n.placeholder=t.caption,y(n,"input",a)},m:function(e,o){m(n,e,o),n.value=t.answer},p:function(t,e){o||(n.value=e.answer),t.caption&&(n.placeholder=e.caption)},u:function(){g(n)},d:function(){w(n,"input",i),w(n,"input",a)}}}(this._state,this),t.target&&(this._fragment.c(),this._fragment.m(t.target,t.anchor||null))}function q(t){var e=document.createElement("script");e.type="application/javascript",e.src=t,document.body.appendChild(e)}p(I.prototype,{change:function(){this.fire("change",this.get("answer"))}},S);var j={open:function(){"Initial"===this.get("state")&&(this.set({answers:{}}),this.set({state:"NotVoted"}))},toggle:function(){this.set({answers:{}}),"Initial"===this.get("state")?this.set({state:"NotVoted"}):this.set({state:"Initial"})},submit:function(){var t=this.get("state");if("boolean"!=typeof t)throw new Error("Assertion failed: Feedback submitted without vote");for(var e=new Map,n=this.get("answers"),o=0,i=Object.keys(n);o<i.length;o+=1){var a=i[o],r=n[a];null!=r&&e.set(a,r)}this.set({state:"Pending"}),this.fire("submit",{vote:t,fields:e})},rate:function(t){this.set({state:t})},addQuestion:function(t,e,n){return this.set({questions:this.get("questions").concat({type:t,name:e,caption:n})}),this},update:function(t,e){this.get("answers")[t]=e},showCollectorDialog:function(){var t=this;if(window.ATL_JQ_PAGE_PROPS={triggerFunction:function(t){window.setTimeout(function(){return t()},1)},fieldValues:{summary:'Comment on: "'+this.get("project")+"/"+this.get("pagename")+'"'}},window.jQuery)q(this.get("jiraurl"));else{var e=document.createElement("script");e.type="application/javascript",e.integrity="sha256-BbhdlvQf/xTY9gja0Dq3HiwQF8LaCRTXxZKRutelT44=",e.setAttribute("crossorigin","anonymous"),e.src="https://code.jquery.com/jquery-2.2.4.min.js",e.onload=function(){q(t.get("jiraurl"))},document.body.appendChild(e)}}};function T(t,e){var n;return{c:function(){n=v("span"),this.h()},h:function(){n.className="fa fa-comments deluge-comment-icon"},m:function(t,e){m(n,t,e)},u:function(){g(n)},d:f}}function L(t,e){var n;return{c:function(){n=v("span"),this.h()},h:function(){n.className="fa fa-angle-down deluge-close-icon"},m:function(t,e){m(n,t,e)},u:function(){g(n)},d:f}}function A(t,e){var n;return{c:function(){(n=v("p")).textContent="Thank you for your feedback!"},m:function(t,e){m(n,t,e)},u:function(){g(n)},d:f}}function O(t,e){var n;return{c:function(){(n=v("li")).textContent="We're sorry! Please help us improve this page."},m:function(t,e){m(n,t,e)},u:function(){g(n)},d:f}}function D(t,e,n,o,i){var a,r=Q(t,e,n,o),s=r&&r(t,e,n,o,i);return{c:function(){a=v("li"),s&&s.c()},m:function(t,e){m(a,t,e),s&&s.m(a,null)},p:function(t,e,n,o,c){r===(r=Q(e,n,o,c))&&s?s.p(t,e,n,o,c):(s&&(s.u(),s.d()),(s=r&&r(e,n,o,c,i))&&s.c(),s&&s.m(a,null))},u:function(){g(a),s&&s.u()},d:function(){s&&s.d()}}}function H(t,e,n,o,i){var a=new B({root:i.root,data:{name:n.name,caption:n.caption}});a.on("change",function(t){var e=r.questions[r.question_index];i.update(e.name,t)});var r={questions:e,question_index:o};return{c:function(){a._fragment.c()},m:function(t,e){a._mount(t,e)},p:function(t,e,n,o,i){var s={};t.questions&&(s.name=o.name),t.questions&&(s.caption=o.caption),a._set(s),r.questions=n,r.question_index=i},u:function(){a._unmount()},d:function(){a.destroy(!1)}}}function R(t,e,n,o,i){var a=new I({root:i.root,data:{name:n.name,caption:n.caption}});a.on("change",function(t){var e=r.questions[r.question_index];i.update(e.name,t)});var r={questions:e,question_index:o};return{c:function(){a._fragment.c()},m:function(t,e){a._mount(t,e)},p:function(t,e,n,o,i){var s={};t.questions&&(s.name=o.name),t.questions&&(s.caption=o.caption),a._set(s),r.questions=n,r.question_index=i},u:function(){a._unmount()},d:function(){a.destroy(!1)}}}function U(t,e){var n,o,i,a;function r(t){e.showCollectorDialog()}return{c:function(){n=v("p"),o=b("If this page contains an error, you may "),(i=v("a")).textContent="report the problem on Jira.",this.h()},h:function(){i.className="deluge-fix-button jira-link jirafeedback",i.target="_blank",i.title=a="Report a problem with "+t.pagename+" on Jira",y(i,"click",r)},m:function(t,e){m(n,t,e),h(o,n),h(i,n)},p:function(t,e){t.pagename&&a!==(a="Report a problem with "+e.pagename+" on Jira")&&(i.title=a)},u:function(){g(n)},d:function(){w(i,"click",r)}}}function V(t,e){var n;return{c:function(){(n=v("p")).textContent="Submitting feedback..."},m:function(t,e){m(n,t,e)},p:f,u:function(){g(n)},d:f}}function z(t,e){var n,o,i;function a(t){e.rate(!0)}function r(t){e.rate(!1)}return{c:function(){(n=v("a")).textContent="Yes",o=b("\n        "),(i=v("a")).textContent="No",this.h()},h:function(){n.className="deluge-vote-button",y(n,"click",a),i.className="deluge-vote-button",y(i,"click",r)},m:function(t,e){m(n,t,e),m(o,t,e),m(i,t,e)},p:f,u:function(){g(n),g(o),g(i)},d:function(){w(n,"click",a),w(i,"click",r)}}}function P(t,e){for(var n,o,i,a,r,s,c,l,u=!1===t.state&&O(),d=t.questions,f=[],p=0;p<d.length;p+=1)f[p]=D(t,d,d[p],p,e);function _(t){e.toggle()}function C(t){e.submit()}return{c:function(){n=v("div"),o=v("ul"),u&&u.c(),i=document.createComment("");for(var t=0;t<f.length;t+=1)f[t].c();a=b("\n\n            "),r=v("div"),(s=v("button")).textContent="Cancel",c=b("\n                "),(l=v("button")).textContent="Submit",this.h()},h:function(){var t,e;t="ref",e=!0,o.setAttribute(t,e),y(s,"click",_),l.className="primary",y(l,"click",C),r.className="deluge-button-group",n.className="deluge-questions"},m:function(t,e){m(n,t,e),h(o,n),u&&u.m(o,null),h(i,o);for(var d=0;d<f.length;d+=1)f[d].m(o,null);h(a,n),h(r,n),h(s,r),h(c,r),h(l,r)},p:function(t,n){!1===n.state?u||((u=O()).c(),u.m(o,i)):u&&(u.u(),u.d(),u=null);var a=n.questions;if(t.questions){for(var r=0;r<a.length;r+=1)f[r]?f[r].p(t,n,a,a[r],r):(f[r]=D(n,a,a[r],r,e),f[r].c(),f[r].m(o,null));for(;r<f.length;r+=1)f[r].u(),f[r].d();f.length=a.length}},u:function(){g(n),u&&u.u();for(var t=0;t<f.length;t+=1)f[t].u()},d:function(){u&&u.d(),function(t){for(var e=0;e<t.length;e+=1)t[e]&&t[e].d()}(f),w(s,"click",_),w(l,"click",C)}}}function Q(t,e,n,o){return"binary"===n.type?H:"freeform"===n.type?R:null}function F(t){return"Voted-Down"===t.state?U:"Pending "==t.state?V:"NotVoted"===t.state?z:"boolean"==typeof t.state?P:null}function M(t){x(this,t),this._state=p({project:"",pagename:"",state:"Initial",jiraurl:"https://jira.mongodb.org/s/en_UScn8g8x/782/6/1.2.5/_/download/batch/com.atlassian.jira.collector.plugin.jira-issue-collector-plugin:issuecollector-embededjs/com.atlassian.jira.collector.plugin.jira-issue-collector-plugin:issuecollector-embededjs.js?collectorId=298ba4e7",questions:[],answers:{}},t.data),this._recompute({state:1},this._state),t.root||(this._oncreate=[],this._beforecreate=[],this._aftercreate=[]),this._fragment=function(t,e){var n,o,i,a,r,s,c,l,u="Initial"===t.state&&T(),d="Initial"!==t.state&&L();function f(t){e.toggle()}var p=("Voted-Up"===t.state||"Voted-Down"===t.state)&&A(),_=F(t),C=_&&_(t,e);return{c:function(){n=v("div"),o=v("div"),u&&u.c(),i=b("\n\n        "),(a=v("span")).textContent="Was this page helpful?",r=b("\n\n    "),d&&d.c(),s=b("\n\n    "),c=v("div"),p&&p.c(),l=b("\n\n    "),C&&C.c(),this.h()},h:function(){a.className="deluge-helpful",o.className=t.delugeHeaderClass,y(o,"click",f),c.className=t.delugeBodyClass,n.className=t.delugeClass},m:function(t,e){m(n,t,e),h(o,n),u&&u.m(o,null),h(i,o),h(a,o),h(r,o),d&&d.m(o,null),h(s,n),h(c,n),p&&p.m(c,null),h(l,c),C&&C.m(c,null)},p:function(t,a){"Initial"===a.state?u||((u=T()).c(),u.m(o,i)):u&&(u.u(),u.d(),u=null),"Initial"!==a.state?d||((d=L()).c(),d.m(o,null)):d&&(d.u(),d.d(),d=null),t.delugeHeaderClass&&(o.className=a.delugeHeaderClass),"Voted-Up"===a.state||"Voted-Down"===a.state?p||((p=A()).c(),p.m(c,l)):p&&(p.u(),p.d(),p=null),_===(_=F(a))&&C?C.p(t,a):(C&&(C.u(),C.d()),(C=_&&_(a,e))&&C.c(),C&&C.m(c,null)),t.delugeBodyClass&&(c.className=a.delugeBodyClass),t.delugeClass&&(n.className=a.delugeClass)},u:function(){g(n),u&&u.u(),d&&d.u(),p&&p.u(),C&&C.u()},d:function(){u&&u.d(),d&&d.d(),w(o,"click",f),p&&p.d(),C&&C.d()}}}(this._state,this),t.target&&(this._fragment.c(),this._fragment.m(t.target,t.anchor||null),this._lock=!0,k(this._beforecreate),k(this._oncreate),k(this._aftercreate),this._lock=!1)}p(M.prototype,j,S),M.prototype._recompute=function(t,e){t.state&&(E(e.delugeClass,e.delugeClass=function(t){return"Initial"===t?"deluge":"deluge deluge-expanded"}(e.state))&&(t.delugeClass=!0),E(e.delugeHeaderClass,e.delugeHeaderClass=function(t){return"Initial"===t?"deluge-header":"deluge-header deluge-header-expanded"}(e.state))&&(t.delugeHeaderClass=!0),E(e.delugeBodyClass,e.delugeBodyClass=function(t){return"Initial"===t?"deluge-body":"deluge-body deluge-body-expanded"}(e.state))&&(t.delugeBodyClass=!0))};var W=function(t,e,n){var o=this;this.project=t,this.path=e,this.app=new M({target:n,data:{state:"Initial",project:t,pagename:e}}),this.app.on("submit",function(t){o.sendRating(t.vote,t.fields).then(function(){t.vote?o.app.set({state:"Voted-Up"}):o.app.set({state:"Voted-Down"})}).catch(function(t){console.error("Error submitting feedback")})})};W.prototype.askQuestion=function(t,e){return this.app.addQuestion("binary",t,e),this},W.prototype.askFreeformQuestion=function(t,e){return this.app.addQuestion("freeform",t,e),this},W.prototype.sendRating=function(t,e){var n=this;return new Promise(function(o,i){e.set("v",t),e.set("p",n.project+"/"+n.path);var a=function(t,e){var n=[];return e.forEach(function(t,e){n.push(encodeURIComponent(e)+"="+encodeURIComponent(JSON.stringify(t)))}),t+"?"+n.join("&")}("http://deluge.us-east-1.elasticbeanstalk.com/",e),r=new Image;r.onload=function(){return o()},r.onerror=function(){return i()},r.src=a})},W.prototype.open=function(){this.app.open()};var J=null,G={"meta/404":!0,search:!0};var K=Object.freeze({init:function(){J=document.body.getAttribute("data-project")},setup:function(){void 0!==window.localStorage&&function(){var t=document.getElementsByClassName("body");if(t.length){var e=t[0].getAttribute("data-pagename");if(!Object.prototype.hasOwnProperty.call(G,e)){var n=document.getElementById("rating-panel");n&&(n.innerText="",n&&new W(J,e,n).askFreeformQuestion("reason","What were you looking for?").askQuestion("findability","Did you find it?").askQuestion("accuracy","Was the information you found <strong>accurate</strong>?").askQuestion("clarity","Was the information <strong>clear</strong>?").askQuestion("fragmentation","Was the information you needed <strong>all on one page</strong>?"))}}}()}}),Y=new r;function X(){return JSON.parse(window.localStorage.getItem("tabPref"))||{}}function Z(t,e){var n=X();e?(n.pages||(n.pages={}),n.pages[window.location.pathname]=t.tabId):n[t.type]=t.tabId,window.localStorage.setItem("tabPref",JSON.stringify(n))}var tt={},et=function(t,e,n,o){this.type=t,this.tabStrips=n,this.tabContents=o,this.anonymous=e,this.tabIds={}};et.prototype.getFirstTabId=function(){var t=this.tabStrips[0].querySelector(".tab-strip__element[aria-selected=true]");return t?t.getAttribute("data-tabid"):null},et.prototype.setup=function(){var t=this;if(0!==this.tabStrips.length){!function(){if(document.querySelector(".tabs-top")){var t=$(".tab-strip--singleton"),e=t.first();t.slice(1).detach(),e.detach().insertAfter("h1").first()}}();for(var e=0,n=t.tabStrips;e<n.length;e+=1)for(var o=function(){var e=r[a];t.tabIds[e.getAttribute("data-tabid")]=!0,e.onclick=function(n){var o=e.getBoundingClientRect(),i=window.scrollY-o.y,a=n.target.getAttribute("data-tabid"),r={};if(r.tabId=a,r.type=t.type,a){t.update(a,!0);var s=e.getBoundingClientRect();window.scrollTo(s.x,s.y+i),n.preventDefault()}}},i=n[e],a=0,r=i.querySelectorAll("[data-tabid]");a<r.length;a+=1)o();this.update(null,!1)}},et.prototype.update=function(t,e){if(0!==this.tabStrips.length){if(!t){var n=X();this.anonymous&&n.pages&&n.pages[window.location.pathname]?t=n.pages[window.location.pathname]:n[this.type]&&(t=n[this.type])}(t&&this.tabIds[t]||(t=this.getFirstTabId()))&&Y.dispatch({isUserAction:e,tabId:t,type:this.type})}},et.prototype.showHideSelectedTab=function(t){for(var e=0,n=this.tabStrips;e<n.length;e+=1){var o=n[e],i=$(o.querySelector('[data-tabid="'+t+'"]'));if(i.length){var a=i.parent("ul"),r=$(o.querySelector(".dropdown-toggle")),s=$(o.querySelector(".dropdown"));a.hasClass("dropdown-menu")?(r.text(""+i.first().text()).append('<span class="caret"></span>'),s.attr("aria-selected",!0).siblings().attr("aria-selected",!1)):(i.attr("aria-selected",!0).siblings().attr("aria-selected",!1),r.text("Other ").append('<span class="caret"></span>'))}}for(var c="tabpanel-"+t,l=0,u=this.tabContents;l<u.length;l+=1)for(var d=0,f=u[l].children;d<f.length;d+=1){var p=f[d];p.classList.contains(c)?p.style.display="block":p.style.display="none"}},et.register=function(t){var e=i(t.getElementsByClassName("tab-strip--singleton")),n=t.querySelector(".tabs__content"),o=t.getAttribute("data-tab-preference"),a=!1;if(!o){var r=t.querySelector("[data-tabid]");if(!r)return;o="anonymous-"+r.getAttribute("data-tabid"),a=!0}if(tt[o]){var s=tt[o];return s.tabStrips=s.tabStrips.concat(e),void s.tabContents.push(n)}var c=new et(o,a,e,[n],!1);tt[o]=c},Y.listen(function(t){var e=tt[t.type];e&&(t.isUserAction&&Z(t,e.anonymous),e.showHideSelectedTab(t.tabId))});var nt=Object.freeze({tabsEventDispatcher:Y,setTabPref:Z,setup:function(){tt={};for(var t=document.getElementsByClassName("tabs"),e=0;e<t.length;e+=1)et.register(t[e]);for(var n=0,o=Object.keys(tt);n<o.length;n+=1){var i=o[n];tt[i].setup()}}}),ot=[];function it(t){var e=t.getBoundingClientRect(),n=Math.max(document.documentElement.clientHeight,window.innerHeight);return!(e.bottom<0||e.top-n>=0)}function at(){for(var t=!1,e=0,n=ot;e<n.length;e+=1){var o=n[e],i=o[0],a=o[1];a.classList.remove("active"),!t&&it(i)&&(t=!0,a.classList.add("active"))}}function rt(t){var e=t.target.getAttribute("data-tab-preference");e&&Z({tabId:e,type:"languages"},!1)}document.addEventListener("scroll",function(t,e){var n=null,o=null,i=null,a=0;function r(){a=Date.now(),i=null,o=t.apply.apply(t,n),i||(n=null)}return function(){for(var s=[],c=arguments.length;c--;)s[c]=arguments[c];var l=Date.now(),u=e-(l-a);return n=s,u<=0||u>e?(i&&(window.clearTimeout(i),i=null),a=l,o=t.apply(void 0,n),i||(n=null)):i||(i=window.setTimeout(r,u)),o}}(at,150));var st=document.getElementsByClassName("show-current-language");Y.listen(function(t){if("languages"===t.type)for(var e=0;e<st.length;e+=1)st[e].innerText=t.tabId});var ct=Object.freeze({setup:function(){!function(){var t=document.querySelector(".left-toc");if(t){ot.length=0;for(var e=0,n=t.querySelectorAll("a");e<n.length;e+=1){var o=n[e],i=o.getAttribute("href").slice(1);if(i){var a=document.getElementById(i);a&&ot.push([a,o.parentElement])}}window.isVisible=it,at()}}(),function(){var t=document.getElementsByClassName("guide-category-list");if(t.length)for(var e=t[0].getElementsByClassName("guide__pill"),n=0;n<e.length;n+=1)e[n].onclick=rt}()}}),lt="lightbox__content--activated",ut="lightbox__content--scalable",dt=document.createElement("div");dt.className="lightbox__modal",dt.title="click to close";var ft=document.createElement("img");function pt(t){"keydown"===t.type&&"Escape"!==t.key||(ft.classList.remove(lt),dt.parentNode&&dt.parentNode.removeChild(dt))}function ht(t){var e=document.createElement("div"),n=document.createElement("div");e.className="lightbox__imageWrapper",n.className="lightbox__caption",n.innerText="click to enlarge",t.parentNode.replaceChild(e,t),e.appendChild(t),e.appendChild(n),e.addEventListener("click",function(){document.body.appendChild(dt),ft.src=t.src,ft.alt=t.alt+" — Enlarged",/\.svg$/.test(ft.src)?ft.classList.add(ut):ft.classList.remove(ut),dt.addEventListener("click",pt),setTimeout(function(){ft.classList.add(lt)},0)})}function mt(t,e){var n=e.naturalWidth*e.naturalHeight;e.clientWidth*e.clientHeight<.9*n&&(ht(e),t.classList.add("lightbox"))}ft.className="lightbox__content",dt.appendChild(ft);var gt=Object.freeze({setup:function(){for(var t=0,e=document.getElementsByClassName("lightbox");t<e.length;t+=1){var n=e[t];0!==n.children.length&&"IMG"===n.children[0].tagName&&ht(n.children[0])}for(var o=0,i=document.getElementsByClassName("figure");o<i.length;o+=1){var a=i[o];if(0!==a.children.length&&"IMG"===a.children[0].tagName&&!a.classList.contains("lightbox")){var r=a.children[0];r.complete?mt(a,r):r.addEventListener("load",mt.bind(null,a,r))}}document.addEventListener("keydown",pt)}}),vt="apiref-resource--collapsed";function bt(t,e){if(e.id){var n="#"+e.id;window.history.pushState({href:n},"",n)}e.classList[t](vt)}function yt(){var t=document.getElementById(document.location.hash.slice(1));t&&t.classList.contains("apiref-resource")&&bt("remove",t)}window.addEventListener("hashchange",yt,!1);var wt=Object.freeze({setup:function(){for(var t=document.getElementsByClassName("apiref-resource__header"),e=0;e<t.length;e+=1){var n=t[e];n.onclick=bt.bind(null,"toggle",n.parentElement)}yt()}});function _t(t,e){Y.dispatch({isUserAction:!0,tabId:e.target.getAttribute("data-tabid"),type:t})}var Ct={};Y.listen(function(t){for(var e=0,n=Ct[t.type]||[];e<n.length;e+=1)for(var o=n[e].getElementsByClassName("guide__pill"),i=0;i<o.length;i+=1){o[i].getAttribute("data-tabid")===t.tabId?o[i].classList.add("guide__pill--active"):o[i].classList.remove("guide__pill--active")}});var Et=Object.freeze({setup:function(){Ct={};for(var t=0,e=document.querySelectorAll(".pillstrip-declaration");t<e.length;t+=1){var n=e[t],o=n.getAttribute("data-tab-preference");o&&(void 0===Ct[o]&&(Ct[o]=[]),Ct[o].push(n))}for(var a=0,r=Object.keys(Ct);a<r.length;a+=1){for(var s=r[a],c=Ct[s],l={},u=[],d=0,f=document.querySelectorAll('.tabs[data-tab-preference="'+s+'"] > .tab-strip');d<f.length;d+=1){var p=f[d];p.style.display="none";for(var h=-1,m=i(p.querySelectorAll(".tab-strip__element[data-tabid]")),g=0,v=m=m.concat(i(p.querySelectorAll(".tab-strip__dropdown > li")));g<v.length;g+=1){var b=v[g];h+=1;var y=b.getAttribute("data-tabid");void 0===l[y]&&(l[y]=!0,u.splice(h,0,[y,b.innerText]))}}for(var w=_t.bind(void 0,s),_=0,C=c;_<C.length;_+=1)for(var E=C[_],N=0,x=u;N<x.length;N+=1){var k=x[N],S=k[0],B=k[1],I=document.createElement("li");I.className="guide__pill",I.setAttribute("data-tabid",S),I.innerText=B,I.onclick=w,E.appendChild(I)}}}});function Nt(t){return t.hasClass("current")}var xt=Object.freeze({setup:function(){var t=$(".sidebar a.current");(o(t)||a(t)||Nt(t))&&t.parent("li").addClass("selected-item"),t.parents("ul").each(function(t,e){$(e).css("display","block")}),$(".sphinxsidebarwrapper > ul li:not(.current) > ul:not(.current)").hide(),$(".sphinxsidebarwrapper").show(),$(".sphinxsidebarwrapper .toctree-l1").on("click","a",function(e){var n=$(e.currentTarget);o(n)||!n.parent().hasClass("selected-item")&&a(n)||(e.preventDefault(),n.parent().hasClass("current")?(n.parent().removeClass("current selected-item"),n.siblings("ul").slideUp()):(t.parent().removeClass("selected-item"),t.parents().add(t.siblings("ul")).each(function(t,n){var o=$(n);o.has(e.currentTarget).length||(o.is("ul")?o.removeClass("current").slideUp():o.removeClass("current"))}),n.parent().addClass("current"),n.siblings("ul").slideDown(function(){(o(n)||a(n)||Nt(t))&&n.parent("li").addClass("selected-item")}),t=n))}),$(".sphinxsidebarwrapper > ul ul a.reference").prepend(function(t){var e=$('<span class="expand-icon"></span>');return o($(this))||e.addClass("docs-expand-arrow"),e})}});function kt(){var t,e,n,o,i,a,r,s;window._fs_debug=!1,window._fs_host="fullstory.com",window._fs_org="54YFM",window._fs_namespace="FS",t=window,e=document,n=window._fs_namespace,o="script",i="user",n in t&&t.console&&t.console.log?t.console.log('FullStory namespace conflict. Please set window["_fs_namespace"].'):((r=t[n]=function(t,e){r.q?r.q.push([t,e]):r._api(t,e)}).q=[],(a=e.createElement(o)).async=1,a.src="https://"+_fs_host+"/s/fs.js",(s=e.getElementsByTagName(o)[0]).parentNode.insertBefore(a,s),r.identify=function(t,e){r(i,{uid:t}),e&&r(i,e)},r.setUserVars=function(t){r(i,t)},r.identifyAccount=function(t,e){a="account",(e=e||{}).acctId=t,r(a,e)},r.clearUserCookie=function(t,n,o){if(!t||document.cookie.match("fs_uid=[`;`]*`[`;`]*`[`;`]*`"))for(n=e.domain;e.cookie="fs_uid=;domain="+n+";path=/;expires="+new Date(0).toUTCString(),!((o=n.indexOf("."))<0);)n=n.slice(o+1)}),function(t,e,n,o,i){if(!t[i]){for(var a=t[i]=[],r=0;r<n.length;r++){var s=n[r];a[s]=a[s]||function(t){return function(){var e=Array.prototype.slice.call(arguments);a.push([t,e])}}(s)}a.SNIPPET_VERSION="1.0.1";var c=e.createElement("script");c.type="text/javascript",c.async=!0,c.src="https://d2yyd1h5u9mauk.cloudfront.net/integrations/web/v1/library/Dk30CC86ba0nATlK/"+i+".js";var l=e.getElementsByTagName("script")[0];l.parentNode.insertBefore(c,l)}}(window,document,["survey","reset","config","init","set","get","event","identify","track","page","screen","group","alias"],0,"delighted")}var St=Object.freeze({initialize:kt,setup:function(){window.delighted.survey()}});var Bt=Object.freeze({setup:function(){$(".version-selector").on("click",function(t){t.preventDefault();var e=$(t.currentTarget).data("path");window.location.href=function(t){var e=document.getElementsByClassName("body")[0].getAttribute("data-pagename");return"index"===e?e="":e&&(e+="/"),"/"+t+"/"+e}(e)})}}),It=function(){this.components=[]};It.prototype.register=function(t){this.components.push(t),t.init&&t.init()},It.prototype.update=function(){for(var t=0,e=this.components;t<e.length;t+=1){e[t].setup(this)}};var qt=new It;$(function(){kt(),qt.register(e),qt.register(n),qt.register(u),qt.register(d),qt.register(K),qt.register(gt),qt.register(xt),qt.register(Et),qt.register(nt),qt.register(Bt),qt.register(St),qt.register(ct),qt.register(wt),$(".toc > ul > li > ul > li").length||$(".right-column .toc").hide(),$(".expand-toc-icon").on("click",function(t){t.preventDefault(),$(".sidebar").toggleClass("reveal")});var t=$(window),o=$(".sidebar"),i=t.width()<=1093;function a(){location.hash&&document.getElementById(location.hash.substr(1))&&$(window).scrollTop(window.scrollY-75)}t.resize(function(e){i&&t.width()>1093?(i=!1,o.removeClass("reveal")):!i&&t.width()<=1093&&(i=!0)}),window.addEventListener("hashchange",a),location.hash&&window.setTimeout(a,10),$(".content").on("click","a",function(t){$(t.currentTarget).attr("href")===location.hash&&window.setTimeout(a,10)});var r=document.getElementById("showNav");r&&(r.onclick=function(){document.getElementById("sphinxsidebar").style.display="block",document.getElementById("left-column").style.display="flex",document.getElementById("showNav").style.display="none"});var s=document.getElementById("closeNav");if(s&&(s.onclick=function(){document.getElementById("showNav").style.display="flex",document.getElementById("left-column").style.display="none"}),qt.update(),document.querySelector){var c=document.querySelector("a.current");c&&c.scrollIntoView(!1)}})}();
//# sourceMappingURL=controller.js.map
