/*! For license information please see 94529a9ee430c2f19ee6147ecd74aacd563ee945-e62cd96dc3e6bfd30894.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"+sni":function(e,t,n){e.exports={notice:"notice-module--notice--3JTsr",noticeActive:"notice-module--notice--active--1aUiW",noticeHide:"notice-module--notice--hide--1j8MY",content:"notice-module--content--2DuVe",text:"notice-module--text--1kgu5",button:"notice-module--button--2ACae"}},"7oih":function(e,t,n){"use strict";var a=n("q1tI"),i=n.n(a),s=n("Wbzz"),r=n("nGOU"),o=n("rY4l"),l=n("JwsL"),c=n("ugg1");t.a=function(e){var t=e.children,n=Object(s.useStaticQuery)("3649515864");return i.a.createElement("div",{className:"wrapper"},i.a.createElement("a",{href:"#content",className:"sr-only"},"Skip to content"),i.a.createElement(o.a,{siteTitle:n.site.siteMetadata.title}),i.a.createElement("main",{className:"main",id:"content"},t),i.a.createElement(l.a,null),i.a.createElement(c.a,null),i.a.createElement(r.a,{title:"Nieuw op blog: Verbeter de weergave van je productinformatie in Shopify",link:"/blog/verbeter-de-weergave-van-je-productinformatie-in-shopify/"}))}},"9CUm":function(e,t,n){"use strict";var a=n("q1tI"),i=n.n(a),s=n("TJpk"),r=n.n(s),o=n("Wbzz");function l(e){var t=e.title,n=e.description,a=e.lang,s=e.meta,l=Object(o.useStaticQuery)("63159454").site,c=n||l.siteMetadata.description;return i.a.createElement(r.a,{htmlAttributes:{lang:a},title:t,titleTemplate:"%s | "+l.siteMetadata.title,meta:[{name:"description",content:c},{property:"og:title",content:t},{property:"og:description",content:c},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:t},{name:"twitter:description",content:c}].concat(s)})}l.defaultProps={lang:"nl",meta:[],description:"Designer & developer in regio Den Haag"},t.a=l},ELNm:function(e,t,n){var a;a=function(){return function(e){var t={};function n(a){if(t[a])return t[a].exports;var i=t[a]={exports:{},id:a,loaded:!1};return e[a].call(i.exports,i,i.exports,n),i.loaded=!0,i.exports}return n.m=e,n.c=t,n.p="",n(0)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),i=n(1),s=n(3),r=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),i.initializer.load(this,n,t),this.begin()}return a(e,[{key:"toggle",value:function(){this.pause.status?this.start():this.stop()}},{key:"stop",value:function(){this.typingComplete||this.pause.status||(this.toggleBlinking(!0),this.pause.status=!0,this.options.onStop(this.arrayPos,this))}},{key:"start",value:function(){this.typingComplete||this.pause.status&&(this.pause.status=!1,this.pause.typewrite?this.typewrite(this.pause.curString,this.pause.curStrPos):this.backspace(this.pause.curString,this.pause.curStrPos),this.options.onStart(this.arrayPos,this))}},{key:"destroy",value:function(){this.reset(!1),this.options.onDestroy(this)}},{key:"reset",value:function(){var e=arguments.length<=0||void 0===arguments[0]||arguments[0];clearInterval(this.timeout),this.replaceText(""),this.cursor&&this.cursor.parentNode&&(this.cursor.parentNode.removeChild(this.cursor),this.cursor=null),this.strPos=0,this.arrayPos=0,this.curLoop=0,e&&(this.insertCursor(),this.options.onReset(this),this.begin())}},{key:"begin",value:function(){var e=this;this.options.onBegin(this),this.typingComplete=!1,this.shuffleStringsIfNeeded(this),this.insertCursor(),this.bindInputFocusEvents&&this.bindFocusEvents(),this.timeout=setTimeout((function(){e.currentElContent&&0!==e.currentElContent.length?e.backspace(e.currentElContent,e.currentElContent.length):e.typewrite(e.strings[e.sequence[e.arrayPos]],e.strPos)}),this.startDelay)}},{key:"typewrite",value:function(e,t){var n=this;this.fadeOut&&this.el.classList.contains(this.fadeOutClass)&&(this.el.classList.remove(this.fadeOutClass),this.cursor&&this.cursor.classList.remove(this.fadeOutClass));var a=this.humanizer(this.typeSpeed),i=1;!0!==this.pause.status?this.timeout=setTimeout((function(){t=s.htmlParser.typeHtmlChars(e,t,n);var a=0,r=e.substr(t);if("^"===r.charAt(0)&&/^\^\d+/.test(r)){var o=1;o+=(r=/\d+/.exec(r)[0]).length,a=parseInt(r),n.temporaryPause=!0,n.options.onTypingPaused(n.arrayPos,n),e=e.substring(0,t)+e.substring(t+o),n.toggleBlinking(!0)}if("`"===r.charAt(0)){for(;"`"!==e.substr(t+i).charAt(0)&&(i++,!(t+i>e.length)););var l=e.substring(0,t),c=e.substring(l.length+1,t+i),u=e.substring(t+i+1);e=l+c+u,i--}n.timeout=setTimeout((function(){n.toggleBlinking(!1),t>=e.length?n.doneTyping(e,t):n.keepTyping(e,t,i),n.temporaryPause&&(n.temporaryPause=!1,n.options.onTypingResumed(n.arrayPos,n))}),a)}),a):this.setPauseStatus(e,t,!0)}},{key:"keepTyping",value:function(e,t,n){0===t&&(this.toggleBlinking(!1),this.options.preStringTyped(this.arrayPos,this)),t+=n;var a=e.substr(0,t);this.replaceText(a),this.typewrite(e,t)}},{key:"doneTyping",value:function(e,t){var n=this;this.options.onStringTyped(this.arrayPos,this),this.toggleBlinking(!0),this.arrayPos===this.strings.length-1&&(this.complete(),!1===this.loop||this.curLoop===this.loopCount)||(this.timeout=setTimeout((function(){n.backspace(e,t)}),this.backDelay))}},{key:"backspace",value:function(e,t){var n=this;if(!0!==this.pause.status){if(this.fadeOut)return this.initFadeOut();this.toggleBlinking(!1);var a=this.humanizer(this.backSpeed);this.timeout=setTimeout((function(){t=s.htmlParser.backSpaceHtmlChars(e,t,n);var a=e.substr(0,t);if(n.replaceText(a),n.smartBackspace){var i=n.strings[n.arrayPos+1];i&&a===i.substr(0,t)?n.stopNum=t:n.stopNum=0}t>n.stopNum?(t--,n.backspace(e,t)):t<=n.stopNum&&(n.arrayPos++,n.arrayPos===n.strings.length?(n.arrayPos=0,n.options.onLastStringBackspaced(),n.shuffleStringsIfNeeded(),n.begin()):n.typewrite(n.strings[n.sequence[n.arrayPos]],t))}),a)}else this.setPauseStatus(e,t,!0)}},{key:"complete",value:function(){this.options.onComplete(this),this.loop?this.curLoop++:this.typingComplete=!0}},{key:"setPauseStatus",value:function(e,t,n){this.pause.typewrite=n,this.pause.curString=e,this.pause.curStrPos=t}},{key:"toggleBlinking",value:function(e){this.cursor&&(this.pause.status||this.cursorBlinking!==e&&(this.cursorBlinking=e,e?this.cursor.classList.add("typed-cursor--blink"):this.cursor.classList.remove("typed-cursor--blink")))}},{key:"humanizer",value:function(e){return Math.round(Math.random()*e/2)+e}},{key:"shuffleStringsIfNeeded",value:function(){this.shuffle&&(this.sequence=this.sequence.sort((function(){return Math.random()-.5})))}},{key:"initFadeOut",value:function(){var e=this;return this.el.className+=" "+this.fadeOutClass,this.cursor&&(this.cursor.className+=" "+this.fadeOutClass),setTimeout((function(){e.arrayPos++,e.replaceText(""),e.strings.length>e.arrayPos?e.typewrite(e.strings[e.sequence[e.arrayPos]],0):(e.typewrite(e.strings[0],0),e.arrayPos=0)}),this.fadeOutDelay)}},{key:"replaceText",value:function(e){this.attr?this.el.setAttribute(this.attr,e):this.isInput?this.el.value=e:"html"===this.contentType?this.el.innerHTML=e:this.el.textContent=e}},{key:"bindFocusEvents",value:function(){var e=this;this.isInput&&(this.el.addEventListener("focus",(function(t){e.stop()})),this.el.addEventListener("blur",(function(t){e.el.value&&0!==e.el.value.length||e.start()})))}},{key:"insertCursor",value:function(){this.showCursor&&(this.cursor||(this.cursor=document.createElement("span"),this.cursor.className="typed-cursor",this.cursor.innerHTML=this.cursorChar,this.el.parentNode&&this.el.parentNode.insertBefore(this.cursor,this.el.nextSibling)))}}]),e}();t.default=r,e.exports=t.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},s=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),r=n(2),o=(a=r)&&a.__esModule?a:{default:a},l=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return s(e,[{key:"load",value:function(e,t,n){if(e.el="string"==typeof n?document.querySelector(n):n,e.options=i({},o.default,t),e.isInput="input"===e.el.tagName.toLowerCase(),e.attr=e.options.attr,e.bindInputFocusEvents=e.options.bindInputFocusEvents,e.showCursor=!e.isInput&&e.options.showCursor,e.cursorChar=e.options.cursorChar,e.cursorBlinking=!0,e.elContent=e.attr?e.el.getAttribute(e.attr):e.el.textContent,e.contentType=e.options.contentType,e.typeSpeed=e.options.typeSpeed,e.startDelay=e.options.startDelay,e.backSpeed=e.options.backSpeed,e.smartBackspace=e.options.smartBackspace,e.backDelay=e.options.backDelay,e.fadeOut=e.options.fadeOut,e.fadeOutClass=e.options.fadeOutClass,e.fadeOutDelay=e.options.fadeOutDelay,e.isPaused=!1,e.strings=e.options.strings.map((function(e){return e.trim()})),"string"==typeof e.options.stringsElement?e.stringsElement=document.querySelector(e.options.stringsElement):e.stringsElement=e.options.stringsElement,e.stringsElement){e.strings=[],e.stringsElement.style.display="none";var a=Array.prototype.slice.apply(e.stringsElement.children),s=a.length;if(s)for(var r=0;r<s;r+=1){var l=a[r];e.strings.push(l.innerHTML.trim())}}for(var r in e.strPos=0,e.arrayPos=0,e.stopNum=0,e.loop=e.options.loop,e.loopCount=e.options.loopCount,e.curLoop=0,e.shuffle=e.options.shuffle,e.sequence=[],e.pause={status:!1,typewrite:!0,curString:"",curStrPos:0},e.typingComplete=!1,e.strings)e.sequence[r]=r;e.currentElContent=this.getCurrentElContent(e),e.autoInsertCss=e.options.autoInsertCss,this.appendAnimationCss(e)}},{key:"getCurrentElContent",value:function(e){return e.attr?e.el.getAttribute(e.attr):e.isInput?e.el.value:"html"===e.contentType?e.el.innerHTML:e.el.textContent}},{key:"appendAnimationCss",value:function(e){if(e.autoInsertCss&&(e.showCursor||e.fadeOut)&&!document.querySelector("[data-typed-js-css]")){var t=document.createElement("style");t.type="text/css",t.setAttribute("data-typed-js-css",!0);var n="";e.showCursor&&(n+="\n        .typed-cursor{\n          opacity: 1;\n        }\n        .typed-cursor.typed-cursor--blink{\n          animation: typedjsBlink 0.7s infinite;\n          -webkit-animation: typedjsBlink 0.7s infinite;\n                  animation: typedjsBlink 0.7s infinite;\n        }\n        @keyframes typedjsBlink{\n          50% { opacity: 0.0; }\n        }\n        @-webkit-keyframes typedjsBlink{\n          0% { opacity: 1; }\n          50% { opacity: 0.0; }\n          100% { opacity: 1; }\n        }\n      "),e.fadeOut&&(n+="\n        .typed-fade-out{\n          opacity: 0;\n          transition: opacity .25s;\n        }\n        .typed-cursor.typed-cursor--blink.typed-fade-out{\n          -webkit-animation: 0;\n          animation: 0;\n        }\n      "),0!==t.length&&(t.innerHTML=n,document.body.appendChild(t))}}}]),e}();t.default=l;var c=new l;t.initializer=c},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={strings:["These are the default values...","You know what you should do?","Use your own!","Have a great day!"],stringsElement:null,typeSpeed:0,startDelay:0,backSpeed:0,smartBackspace:!0,shuffle:!1,backDelay:700,fadeOut:!1,fadeOutClass:"typed-fade-out",fadeOutDelay:500,loop:!1,loopCount:1/0,showCursor:!0,cursorChar:"|",autoInsertCss:!0,attr:null,bindInputFocusEvents:!1,contentType:"html",onBegin:function(e){},onComplete:function(e){},preStringTyped:function(e,t){},onStringTyped:function(e,t){},onLastStringBackspaced:function(e){},onTypingPaused:function(e,t){},onTypingResumed:function(e,t){},onReset:function(e){},onStop:function(e,t){},onStart:function(e,t){},onDestroy:function(e){}};t.default=n,e.exports=t.default},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),a=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return n(e,[{key:"typeHtmlChars",value:function(e,t,n){if("html"!==n.contentType)return t;var a=e.substr(t).charAt(0);if("<"===a||"&"===a){var i="";for(i="<"===a?">":";";e.substr(t+1).charAt(0)!==i&&!(1+ ++t>e.length););t++}return t}},{key:"backSpaceHtmlChars",value:function(e,t,n){if("html"!==n.contentType)return t;var a=e.substr(t).charAt(0);if(">"===a||";"===a){var i="";for(i=">"===a?"<":"&";e.substr(t-1).charAt(0)!==i&&!(--t<0););t--}return t}}]),e}();t.default=a;var i=new a;t.htmlParser=i}])},e.exports=a()},JX7q:function(e,t,n){"use strict";function a(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}n.d(t,"a",(function(){return a}))},JwsL:function(e,t,n){"use strict";var a=n("dI71"),i=n("q1tI"),s=n.n(i),r=n("Wbzz"),o=n("9eSz"),l=n.n(o),c=n("SxA4"),u=n.n(c);var p=function(e){return s.a.createElement("div",{className:"container page-spacer"},s.a.createElement("div",{className:" "+u.a.row+" row"},s.a.createElement("div",{className:"col-12 col-lg-5"},s.a.createElement("div",{className:u.a.content},e.subtitle&&s.a.createElement("p",{className:"subtitle subtitle--primary"},e.subtitle),e.title&&s.a.createElement("h2",{className:"h3"},e.title),e.paragraph&&s.a.createElement("p",{className:""+u.a.paragraph},e.paragraph),e.link_to&&e.link_text||e.button_href&&e.button_text&&s.a.createElement("div",{className:u.a.buttons+" buttons"},e.link_to&&e.link_text&&s.a.createElement(r.Link,{to:e.link_to,className:"button button--primary button--lg"},e.link_text),e.button_href&&e.button_text&&s.a.createElement("a",{href:e.button_href,rel:"noopener noreferrer",className:"button button--primary button--lg"},e.button_text)))),s.a.createElement("div",{className:"col-12 col-lg-7"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-6"},e.image_1&&s.a.createElement(l.a,{fluid:e.image_1,alt:"",style:{maxWidth:1e3}})),s.a.createElement("div",{className:"col-6"},e.image_2&&s.a.createElement(l.a,{fluid:e.image_2,alt:"",style:{maxWidth:1e3}}))))))},h=(n("q9QM"),function(e){function t(t){return e.call(this,t)||this}Object(a.a)(t,e);var n=t.prototype;return n.handleCopy=function(){document.getElementById("bitcoinAdress").select(),document.execCommand("copy")},n.render=function(){var e=this;this.props.data;return s.a.createElement(r.StaticQuery,{query:"831300666",render:function(t){return s.a.createElement("footer",{className:u.a.footer},s.a.createElement(p,{subtitle:"Wat ik doe",title:"Ik ontwikkel Shopify Themes bij CODE",paragraph:"Ben je zoekende naar een Shopify (Plus) Expert? Neem dan een kijkje bij CODE - a Shopify Plus agency!",button_href:"https://code.nl",button_text:"Meer info",image_1:t.image1.childImageSharp.fluid,image_2:t.image2.childImageSharp.fluid}),s.a.createElement("div",{className:u.a.info+" container page-spacer"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-12 col-md-6 col-lg-3 "+u.a.panel},s.a.createElement("p",{className:"h6"},"roy.vanneden.nl"),s.a.createElement("p",null,"Made with ",s.a.createElement("span",{role:"img"},"❤")," in The Hague.")),s.a.createElement("div",{className:"col-12 col-md-6 col-lg-3 "+u.a.panel},s.a.createElement("p",{className:"h6"},"Doneer Bitcoin"),s.a.createElement("div",{className:u.a.bitcoin,onClick:e.handleCopy},s.a.createElement("input",{type:"text",value:"1CEZkvXA6dtfknK2YjTZpqtdQDYsBh5Ymi",className:""+u.a.bitcoin,id:"bitcoinAdress",readOnly:!0}),s.a.createElement("button",{type:"button"},s.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 0 24 24",width:"24"},s.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),s.a.createElement("path",{d:"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"})),s.a.createElement("span",{className:"sr-only"},"Copy Bitcoin address")))),s.a.createElement("div",{className:"col-12 col-md-6 col-lg-3 "+u.a.panel},s.a.createElement("p",{className:"h6"},"Mijn links"),s.a.createElement("p",null,s.a.createElement("a",{href:"https://github.com/royvn",target:"_blank",rel:"noopener noreferrer"},"Github"),","," ",s.a.createElement("a",{href:"https://www.instagram.com/royvn/",target:"_blank",rel:"noopener noreferrer"},"Instagram"),","," ",s.a.createElement("a",{href:"https://www.linkedin.com/in/roy-van-neden-10549761/",target:"_blank",rel:"noopener noreferrer"},"Linkedin"),","," ",s.a.createElement("a",{href:"https://twitter.com/royvn_",target:"_blank",rel:"noopener noreferrer"},"Twitter"),".")),s.a.createElement("div",{className:"col-12 col-md-6 col-lg-3 "+u.a.panel},s.a.createElement("p",{className:"h6"},"© 1992 - ",(new Date).getFullYear()),s.a.createElement("p",null,"Built with"," ",s.a.createElement("a",{href:"https://www.gatsbyjs.org",target:"_blank",rel:"noopener noreferrer"},"Gatsby")," and "," ",s.a.createElement("a",{href:"https://reactjs.org/",target:"_blank",rel:"noopener noreferrer"},"React"),". Hosted on"," ",s.a.createElement("a",{href:"https://github.com/royvn/royvn.github.io",target:"_blank",rel:"noopener noreferrer"},"Github"),".")))))}})},t}(s.a.Component));t.a=h},SxA4:function(e,t,n){e.exports={footer:"footer-module--footer--cvZzG",content:"footer-module--content--3jEnq",row:"footer-module--row--1FrEn",paragraph:"footer-module--paragraph--1uuyD",bitcoin:"footer-module--bitcoin--21bFe",buttons:"footer-module--buttons--1FY2W",info:"footer-module--info--R0OOc",panel:"footer-module--panel--2fLcF"}},nGOU:function(e,t,n){"use strict";var a=n("JX7q"),i=n("dI71"),s=n("q1tI"),r=n.n(s),o=n("Wbzz"),l=n("+sni"),c=n.n(l),u=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={hide:!1},n.handleNoticeAnimation=n.handleNoticeAnimation.bind(Object(a.a)(n)),n}Object(i.a)(t,e);var n=t.prototype;return n.handleNoticeAnimation=function(){var e=window.scrollY,t=document.body.clientHeight;e>=t-window.innerHeight-t/10?this.setState({hide:!0}):this.setState({hide:!1})},n.componentDidMount=function(){window.addEventListener("scroll",this.handleNoticeAnimation)},n.render=function(){return r.a.createElement(o.Link,{to:this.props.link,className:c.a.notice+" "+(this.state.hide?""+c.a.noticeHide:""),activeClassName:"notice--active"},r.a.createElement("div",{className:" "+c.a.content+" page-spacer"},this.props.title&&r.a.createElement("span",{className:c.a.text},this.props.title),this.props.button_text&&r.a.createElement("span",{className:c.a.button+" button button--light button--sm"},this.props.button_text)))},t}(r.a.Component);t.a=u},q9QM:function(e,t,n){"use strict";var a=n("dI71"),i=n("q1tI"),s=n.n(i),r=n("Wbzz"),o=function(e){function t(t){return e.call(this,t)||this}return Object(a.a)(t,e),t.prototype.render=function(){return s.a.createElement("div",{className:"widget"},s.a.createElement("p",{className:"widget-title"},this.props.title),s.a.createElement("ul",{className:"widget-list"},this.props.list.map((function(e){var t=e.node;return s.a.createElement("li",{key:t.id,className:"widget-list-item"},s.a.createElement(r.Link,{to:t.fields.slug,className:"widget-list-link",activeClassName:"widget-list-link--active"},t.frontmatter.title))}))))},t}(s.a.Component);t.a=o},rY4l:function(e,t,n){"use strict";var a=n("JX7q"),i=n("dI71"),s=n("q1tI"),r=n.n(s),o=n("Wbzz"),l=n("9eSz"),c=n.n(l),u=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={isHome:!0,isHighlighted:!1,isNavigationToggled:!1},n.handleHamburgerClick=n.handleHamburgerClick.bind(Object(a.a)(n)),n.handleHeaderScroll=n.handleHeaderScroll.bind(Object(a.a)(n)),n.handleCloseAnimation=n.handleCloseAnimation.bind(Object(a.a)(n)),n}Object(i.a)(t,e);var n=t.prototype;return n.handleHeaderScroll=function(){window.scrollY>0?this.setState({isHighlighted:!0}):this.setState({isHighlighted:!1})},n.componentDidMount=function(){window.addEventListener("scroll",this.handleHeaderScroll)},n.handleHamburgerClick=function(){this.setState({isNavigationToggled:!this.state.isNavigationToggled})},n.handleCloseAnimation=function(){this.setState({isNavigationToggled:!1})},n.render=function(){var e=this;return r.a.createElement(o.StaticQuery,{query:"1981552588",render:function(t){return r.a.createElement("header",{className:"header "+(e.state.isNavigationToggled?"navigation--open":"")+" "+(e.state.isHighlighted?"header--sticky":"")},r.a.createElement("div",{className:"container page-spacer header__content"},e.props.siteTitle&&r.a.createElement("div",{className:"me"},r.a.createElement("span",{className:"sr-only"},e.props.siteTitle),r.a.createElement(o.Link,{to:"/"},r.a.createElement(c.a,{fluid:t.logo.childImageSharp.fluid}))),r.a.createElement("nav",{className:"navigation "+(e.state.isNavigationToggled?"navigation--open":"")},r.a.createElement("ul",{className:"nav nav--primary"},r.a.createElement("li",{className:"nav-item","data-hover-type":"info"},r.a.createElement(o.Link,{to:"/info/",className:"nav-link",activeClassName:"nav-link--active"},"Info")),r.a.createElement("li",{className:"nav-item","data-hover-type":"blog"},r.a.createElement(o.Link,{to:"/blog/",className:"nav-link",activeClassName:"nav-link--active"},"Blog")),r.a.createElement("li",{className:"nav-item","data-hover-type":"contact"},r.a.createElement(o.Link,{to:"/contact/",className:"nav-link",activeClassName:"nav-link--active"},"Contact"))))))}})},t}(r.a.Component);t.a=u},rjnC:function(e,t,n){e.exports={tabBar:"tabBar-module--tab-bar--22a9f",nav:"tabBar-module--nav--3NH17",navItem:"tabBar-module--nav-item--1K7Im",navLink:"tabBar-module--nav-link--13psk",navLinkActive:"tabBar-module--nav-link--active--2qp7I",navTitle:"tabBar-module--nav-title--2Pspx"}},ugg1:function(e,t,n){"use strict";var a=n("dI71"),i=n("q1tI"),s=n.n(i),r=n("Wbzz"),o=n("rjnC"),l=n.n(o),c=function(e){function t(){return e.apply(this,arguments)||this}return Object(a.a)(t,e),t.prototype.render=function(){return s.a.createElement("nav",{className:""+l.a.tabBar},s.a.createElement("ul",{className:""+l.a.nav},s.a.createElement("li",{className:""+l.a.navItem},s.a.createElement(r.Link,{to:"/",className:""+l.a.navLink,activeClassName:""+l.a.navLinkActive},s.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 0 24 24",width:"24"},s.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),s.a.createElement("path",{d:"M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"})),s.a.createElement("span",{className:""+l.a.navTitle},"Home"))),s.a.createElement("li",{className:""+l.a.navItem},s.a.createElement(r.Link,{to:"/info/",className:""+l.a.navLink,activeClassName:""+l.a.navLinkActive},s.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",enableBackground:"new 0 0 24 24",height:"24",viewBox:"0 0 24 24",width:"24"},s.a.createElement("g",null,s.a.createElement("rect",{fill:"none",height:"24",width:"24"})),s.a.createElement("g",null,s.a.createElement("g",null),s.a.createElement("g",null,s.a.createElement("circle",{cx:"12",cy:"4",r:"2"}),s.a.createElement("path",{d:"M15.89,8.11C15.5,7.72,14.83,7,13.53,7c-0.21,0-1.42,0-2.54,0C8.24,6.99,6,4.75,6,2H4c0,3.16,2.11,5.84,5,6.71V22h2v-6h2 v6h2V10.05L18.95,14l1.41-1.41L15.89,8.11z"})))),s.a.createElement("span",{className:""+l.a.navTitle},"Info"))),s.a.createElement("li",{className:""+l.a.navItem},s.a.createElement(r.Link,{to:"/blog/",className:""+l.a.navLink,activeClassName:""+l.a.navLinkActive},s.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 0 24 24",width:"24"},s.a.createElement("path",{d:"M0 0h24v24H0V0z",fill:"none"}),s.a.createElement("path",{d:"M19 1l-5 5v11l5-4.5V1zM1 6v14.65c0 .25.25.5.5.5.1 0 .15-.05.25-.05C3.1 20.45 5.05 20 6.5 20c1.95 0 4.05.4 5.5 1.5V6c-1.45-1.1-3.55-1.5-5.5-1.5S2.45 4.9 1 6zm22 13.5V6c-.6-.45-1.25-.75-2-1v13.5c-1.1-.35-2.3-.5-3.5-.5-1.7 0-4.15.65-5.5 1.5v2c1.35-.85 3.8-1.5 5.5-1.5 1.65 0 3.35.3 4.75 1.05.1.05.15.05.25.05.25 0 .5-.25.5-.5v-1.1z"})),s.a.createElement("span",{className:""+l.a.navTitle},"Blog"))),s.a.createElement("li",{className:""+l.a.navItem},s.a.createElement(r.Link,{to:"/contact/",className:""+l.a.navLink,activeClassName:""+l.a.navLinkActive},s.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 0 24 24",width:"24"},s.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),s.a.createElement("path",{d:"M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"})),s.a.createElement("span",{className:""+l.a.navTitle},"Contact")))))},t}(s.a.Component);t.a=c}}]);
//# sourceMappingURL=94529a9ee430c2f19ee6147ecd74aacd563ee945-e62cd96dc3e6bfd30894.js.map