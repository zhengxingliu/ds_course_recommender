(this.webpackJsonpds_course_recommender=this.webpackJsonpds_course_recommender||[]).push([[5],{782:function(e,t,n){"use strict";n(53),n(806),n(364)},804:function(e,t,n){"use strict";var o=n(4),r=n.n(o),c=n(3),a=n.n(c),i=n(0),l=n(7),s=n(64),u=n(249),f=n(777);var d=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.element,o=void 0===n?document.body:n,r={},c=Object.keys(e);return c.forEach((function(e){r[e]=o.style[e]})),c.forEach((function(t){o.style[t]=e[t]})),r};var m={},p=function(e){if(document.body.scrollHeight>(window.innerHeight||document.documentElement.clientHeight)&&window.innerWidth>document.body.offsetWidth||e){var t="ant-scrolling-effect",n=new RegExp("".concat(t),"g"),o=document.body.className;if(e){if(!n.test(o))return;return d(m),m={},void(document.body.className=o.replace(n,"").trim())}var r=Object(f.a)();if(r&&(m=d({position:"relative",width:"calc(100% - ".concat(r,"px)")}),!n.test(o))){var c="".concat(o," ").concat(t);document.body.className=c.trim()}}},v=n(101);function b(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function C(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=O(e);if(t){var r=O(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return h(this,n)}}function h(e,t){return!t||"object"!==k(t)&&"function"!==typeof t?g(e):t}function g(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function O(e){return(O=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function k(e){return(k="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var E=0,w=Object(v.a)();var x={},N=function(e){if(!w)return null;if(e){if("string"===typeof e)return document.querySelectorAll(e)[0];if("function"===typeof e)return e();if("object"===k(e)&&e instanceof window.HTMLElement)return e}return document.body},j=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(c,e);var t,n,o,r=C(c);function c(e){var t;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),(t=r.call(this,e)).componentRef=i.createRef(),t.attachToParent=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(e||t.container&&!t.container.parentNode){var n=N(t.props.getContainer);return!!n&&(n.appendChild(t.container),!0)}return!0},t.getContainer=function(){return w?(t.container||(t.container=document.createElement("div"),t.attachToParent(!0)),t.setWrapperClassName(),t.container):null},t.setWrapperClassName=function(){var e=t.props.wrapperClassName;t.container&&e&&e!==t.container.className&&(t.container.className=e)},t.removeCurrentContainer=function(){var e,n;null===(e=t.container)||void 0===e||null===(n=e.parentNode)||void 0===n||n.removeChild(t.container)},t.switchScrollingEffect=function(){1!==E||Object.keys(x).length?E||(d(x),x={},p(!0)):(p(),x=d({overflow:"hidden",overflowX:"hidden",overflowY:"hidden"}))};var n=e.visible,o=e.getContainer;return w&&N(o)===document.body&&(E=n?E+1:E),t.state={_self:g(t)},t}return t=c,o=[{key:"getDerivedStateFromProps",value:function(e,t){var n=t.prevProps,o=t._self,r=e.visible,c=e.getContainer;if(n){var a=n.visible,i=n.getContainer;r!==a&&w&&N(c)===document.body&&(E=r&&!a?E+1:E-1),("function"===typeof c&&"function"===typeof i?c.toString()!==i.toString():c!==i)&&o.removeCurrentContainer()}return{prevProps:e}}}],(n=[{key:"componentDidMount",value:function(){var e=this;this.attachToParent()||(this.rafId=Object(s.a)((function(){e.forceUpdate()})))}},{key:"componentDidUpdate",value:function(){this.setWrapperClassName(),this.attachToParent()}},{key:"componentWillUnmount",value:function(){var e=this.props,t=e.visible,n=e.getContainer;w&&N(n)===document.body&&(E=t&&E?E-1:E),this.removeCurrentContainer(),s.a.cancel(this.rafId)}},{key:"render",value:function(){var e=this.props,t=e.children,n=e.forceRender,o=e.visible,r=null,c={getOpenCount:function(){return E},getContainer:this.getContainer,switchScrollingEffect:this.switchScrollingEffect};return(n||o||this.componentRef.current)&&(r=i.createElement(u.a,{getContainer:this.getContainer,ref:this.componentRef},t(c))),r}}])&&b(t.prototype,n),o&&b(t,o),c}(i.Component),T=n(2),P=n(5),S=n.n(P),R=n(19),I=n(124),_=n(88);function A(e){var t=e.prefixCls,n=e.style,o=e.visible,r=e.maskProps,c=e.motionName;return i.createElement(_.b,{key:"mask",visible:o,motionName:c,leavedClassName:"".concat(t,"-mask-hidden")},(function(e){var o=e.className,c=e.style;return i.createElement("div",Object.assign({style:Object(T.a)(Object(T.a)({},c),n),className:S()("".concat(t,"-mask"),o)},r))}))}function D(e,t,n){var o=t;return!o&&n&&(o="".concat(e,"-").concat(n)),o}var M=-1;function F(e,t){var n=e["page".concat(t?"Y":"X","Offset")],o="scroll".concat(t?"Top":"Left");if("number"!==typeof n){var r=e.document;"number"!==typeof(n=r.documentElement[o])&&(n=r.body[o])}return n}var z={width:0,height:0,overflow:"hidden",outline:"none"},B=i.forwardRef((function(e,t){var n=e.closable,o=e.prefixCls,r=e.width,c=e.height,a=e.footer,s=e.title,u=e.closeIcon,f=e.style,d=e.className,m=e.visible,p=e.forceRender,v=e.bodyStyle,b=e.bodyProps,y=e.children,C=e.destroyOnClose,h=e.modalRender,g=e.motionName,O=e.ariaId,k=e.onClose,E=e.onVisibleChanged,w=e.onClick,x=e.mousePosition,N=Object(i.useRef)(),j=Object(i.useRef)(),P=Object(i.useRef)();i.useImperativeHandle(t,(function(){return{focus:function(){var e;null===(e=N.current)||void 0===e||e.focus()},getDOM:function(){return P.current},changeActive:function(e){var t=document.activeElement;e&&t===j.current?N.current.focus():e||t!==N.current||j.current.focus()}}}));var R,I,A,D=i.useState(),M=Object(l.a)(D,2),B=M[0],H=M[1],L={};function W(){var e=function(e){var t=e.getBoundingClientRect(),n={left:t.left,top:t.top},o=e.ownerDocument,r=o.defaultView||o.parentWindow;return n.left+=F(r),n.top+=F(r,!0),n}(P.current);H(x?"".concat(x.x-e.left,"px ").concat(x.y-e.top,"px"):"")}void 0!==r&&(L.width=r),void 0!==c&&(L.height=c),B&&(L.transformOrigin=B),a&&(R=i.createElement("div",{className:"".concat(o,"-footer")},a)),s&&(I=i.createElement("div",{className:"".concat(o,"-header")},i.createElement("div",{className:"".concat(o,"-title"),id:O},s))),n&&(A=i.createElement("button",{type:"button",onClick:k,"aria-label":"Close",className:"".concat(o,"-close")},u||i.createElement("span",{className:"".concat(o,"-close-x")})));var K=i.createElement("div",{className:"".concat(o,"-content")},A,I,i.createElement("div",Object.assign({className:"".concat(o,"-body"),style:v},b),y),R);return i.createElement(_.b,{visible:m,onVisibleChanged:E,onAppearPrepare:W,onEnterPrepare:W,forceRender:p,motionName:g,removeOnLeave:C,ref:P},(function(e,t){var n=e.className,r=e.style;return i.createElement("div",{key:"dialog-element",role:"document",ref:t,style:Object(T.a)(Object(T.a)(Object(T.a)({},r),f),L),className:S()(o,d,n),onClick:w},i.createElement("div",{tabIndex:0,ref:N,style:z,"aria-hidden":"true"}),h?h(K):K,i.createElement("div",{tabIndex:0,ref:j,style:z,"aria-hidden":"true"}))}))}));B.displayName="Content";var H=B;function L(e){var t=e.prefixCls,n=void 0===t?"rc-dialog":t,o=e.zIndex,r=e.visible,c=void 0!==r&&r,a=e.keyboard,s=void 0===a||a,u=e.focusTriggerAfterClose,f=void 0===u||u,d=e.switchScrollingEffect,m=void 0===d?function(){}:d,p=e.title,v=e.wrapStyle,b=e.wrapClassName,y=e.wrapProps,C=e.onClose,h=e.afterClose,g=e.transitionName,O=e.animation,k=e.closable,E=void 0===k||k,w=e.mask,x=void 0===w||w,N=e.maskTransitionName,j=e.maskAnimation,P=e.maskClosable,_=void 0===P||P,F=e.maskStyle,z=e.maskProps,B=Object(i.useRef)(),L=Object(i.useRef)(),W=Object(i.useRef)(),K=i.useState(c),V=Object(l.a)(K,2),U=V[0],X=V[1],Y=Object(i.useRef)();function J(e){null===C||void 0===C||C(e)}Y.current||(Y.current="rcDialogTitle".concat(M+=1));var q=Object(i.useRef)(!1),G=Object(i.useRef)(),Q=null;return _&&(Q=function(e){q.current||Object(I.a)(W.current.getDOM(),e.target)||J(e)}),Object(i.useEffect)((function(){c&&(X(!0),m())}),[c]),Object(i.useEffect)((function(){return function(){m(),clearTimeout(G.current)}}),[]),i.createElement("div",{className:"".concat(n,"-root")},i.createElement(A,{prefixCls:n,visible:x&&c,motionName:D(n,N,j),style:Object(T.a)({zIndex:o},F),maskProps:z}),i.createElement("div",Object.assign({tabIndex:-1,onKeyDown:function(e){if(s&&e.keyCode===R.a.ESC)return e.stopPropagation(),void J(e);c&&e.keyCode===R.a.TAB&&W.current.changeActive(!e.shiftKey)},className:S()("".concat(n,"-wrap"),b),ref:L,onClick:Q,role:"dialog","aria-labelledby":p?Y.current:null,style:Object(T.a)(Object(T.a)({zIndex:o},v),{},{display:U?null:"none"})},y),i.createElement(H,Object.assign({},e,{onClick:function(){clearTimeout(G.current),q.current=!0,G.current=setTimeout((function(){q.current=!1}))},ref:W,closable:E,ariaId:Y.current,prefixCls:n,visible:c,onClose:J,onVisibleChanged:function(e){if(e){var t;if(!Object(I.a)(L.current,document.activeElement))B.current=document.activeElement,null===(t=W.current)||void 0===t||t.focus()}else{if(X(!1),m(),x&&B.current&&f){try{B.current.focus({preventScroll:!0})}catch(n){}B.current=null}null===h||void 0===h||h()}},motionName:D(n,g,O)}))))}var W=function(e){var t=e.visible,n=e.getContainer,o=e.forceRender,r=e.destroyOnClose,c=void 0!==r&&r,a=e.afterClose,s=i.useState(t),u=Object(l.a)(s,2),f=u[0],d=u[1];return i.useEffect((function(){t&&d(!0)}),[t]),!1===n?i.createElement(L,Object.assign({},e,{getOpenCount:function(){return 2}})):o||!c||f?i.createElement(j,{visible:t,forceRender:o,getContainer:n},(function(t){return i.createElement(L,Object.assign({},e,{destroyOnClose:c,afterClose:function(){null===a||void 0===a||a(),d(!1)}},t))})):null};W.displayName="Dialog";var K=W,V=n(102),U=n(152),X=n.n(U),Y=n(49),J=n.n(Y),q=n(106),G=n.n(q);var Q=n(771),Z=n(781),$=function(e){var t=i.useRef(!1),n=i.useRef(),o=i.useState(!1),r=J()(o,2),c=r[0],l=r[1];i.useEffect((function(){var t;if(e.autoFocus){var o=n.current;t=setTimeout((function(){return o.focus()}))}return function(){t&&clearTimeout(t)}}),[]);var s=e.type,u=e.children,f=e.prefixCls,d=e.buttonProps;return i.createElement(Q.a,a()({},Object(Z.a)(s),{onClick:function(){var n=e.actionFn,o=e.closeModal;if(!t.current)if(t.current=!0,n){var r;if(n.length)r=n(o),t.current=!1;else if(!(r=n()))return void o();!function(n){var o=e.closeModal;n&&n.then&&(l(!0),n.then((function(){o.apply(void 0,arguments)}),(function(e){console.error(e),l(!1),t.current=!1})))}(r)}else o()},loading:c,prefixCls:f},d,{ref:n}),u)},ee=n(45),te=n(33),ne=function(e){var t=e.icon,n=e.onCancel,o=e.onOk,c=e.close,a=e.zIndex,l=e.afterClose,s=e.visible,u=e.keyboard,f=e.centered,d=e.getContainer,m=e.maskStyle,p=e.okText,v=e.okButtonProps,b=e.cancelText,y=e.cancelButtonProps,C=e.direction,h=e.prefixCls,g=e.rootPrefixCls,O=e.bodyStyle,k=e.modalRender;Object(ee.a)(!("string"===typeof t&&t.length>2),"Modal","`icon` is using ReactNode instead of string naming in v4. Please check `".concat(t,"` at https://ant.design/components/icon"));var E=e.okType||"primary",w="".concat(h,"-confirm"),x=!("okCancel"in e)||e.okCancel,N=e.width||416,j=e.style||{},T=void 0===e.mask||e.mask,P=void 0!==e.maskClosable&&e.maskClosable,R=null!==e.autoFocusButton&&(e.autoFocusButton||"ok"),I=e.transitionName||"zoom",_=e.maskTransitionName||"fade",A=S()(w,"".concat(w,"-").concat(e.type),r()({},"".concat(w,"-rtl"),"rtl"===C),e.className),D=x&&i.createElement($,{actionFn:n,closeModal:c,autoFocus:"cancel"===R,buttonProps:y,prefixCls:"".concat(g,"-btn")},b);return i.createElement(Ie,{prefixCls:h,className:A,wrapClassName:S()(r()({},"".concat(w,"-centered"),!!e.centered)),onCancel:function(){return c({triggerCancel:!0})},visible:s,title:"",transitionName:I,footer:"",maskTransitionName:_,mask:T,maskClosable:P,maskStyle:m,style:j,width:N,zIndex:a,afterClose:l,keyboard:u,centered:f,getContainer:d,modalRender:k},i.createElement("div",{className:"".concat(w,"-body-wrapper")},i.createElement(te.b,{prefixCls:g},i.createElement("div",{className:"".concat(w,"-body"),style:O},t,void 0===e.title?null:i.createElement("span",{className:"".concat(w,"-title")},e.title),i.createElement("div",{className:"".concat(w,"-content")},e.content))),i.createElement("div",{className:"".concat(w,"-btns")},D,i.createElement($,{type:E,actionFn:o,closeModal:c,autoFocus:"ok"===R,buttonProps:v,prefixCls:"".concat(g,"-btn")},p))))},oe=n(146),re=n(117),ce=n(72),ae=function(e,t){var n=e.afterClose,o=e.config,r=i.useState(!0),c=J()(r,2),l=c[0],s=c[1],u=i.useState(o),f=J()(u,2),d=f[0],m=f[1],p=i.useContext(ce.b),v=p.direction,b=p.getPrefixCls,y=b("modal"),C=b();function h(){s(!1)}return i.useImperativeHandle(t,(function(){return{destroy:h,update:function(e){m((function(t){return a()(a()({},t),e)}))}}})),i.createElement(re.a,{componentName:"Modal",defaultLocale:oe.a.Modal},(function(e){return i.createElement(ne,a()({prefixCls:y,rootPrefixCls:C},d,{close:h,visible:l,afterClose:n,okText:d.okText||(d.okCancel?e.okText:e.justOkText),direction:v,cancelText:d.cancelText||e.cancelText}))}))},ie=i.forwardRef(ae),le=n(24),se=n(254),ue=n.n(se),fe=n(253),de=n.n(fe),me=n(255),pe=n.n(me),ve=n(256),be=n.n(ve),ye=n(175),Ce=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]])}return n},he="ant";function ge(){return he}function Oe(e){var t=document.createElement("div");document.body.appendChild(t);var n=a()(a()({},e),{close:c,visible:!0});function o(){var n=le.unmountComponentAtNode(t);n&&t.parentNode&&t.parentNode.removeChild(t);for(var o=arguments.length,r=new Array(o),a=0;a<o;a++)r[a]=arguments[a];var i=r.some((function(e){return e&&e.triggerCancel}));e.onCancel&&i&&e.onCancel.apply(e,r);for(var l=0;l<Se.length;l++){var s=Se[l];if(s===c){Se.splice(l,1);break}}}function r(e){var n=e.okText,o=e.cancelText,r=e.prefixCls,c=Ce(e,["okText","cancelText","prefixCls"]);setTimeout((function(){var e=Object(ye.b)();le.render(i.createElement(ne,a()({},c,{prefixCls:r||"".concat(ge(),"-modal"),rootPrefixCls:ge(),okText:n||(c.okCancel?e.okText:e.justOkText),cancelText:o||e.cancelText})),t)}))}function c(){for(var e=arguments.length,t=new Array(e),c=0;c<e;c++)t[c]=arguments[c];r(n=a()(a()({},n),{visible:!1,afterClose:o.bind.apply(o,[this].concat(t))}))}return r(n),Se.push(c),{destroy:c,update:function(e){r(n="function"===typeof e?e(n):a()(a()({},n),e))}}}function ke(e){return a()({type:"warning",icon:i.createElement(be.a,null),okCancel:!1},e)}function Ee(e){return a()({type:"info",icon:i.createElement(ue.a,null),okCancel:!1},e)}function we(e){return a()({type:"success",icon:i.createElement(de.a,null),okCancel:!1},e)}function xe(e){return a()({type:"error",icon:i.createElement(pe.a,null),okCancel:!1},e)}function Ne(e){return a()({type:"confirm",icon:i.createElement(be.a,null),okCancel:!0},e)}var je=0;var Te,Pe=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]])}return n},Se=[];"undefined"!==typeof window&&window.document&&window.document.documentElement&&Object(V.a)(document.documentElement,"click",(function(e){Te={x:e.pageX,y:e.pageY},setTimeout((function(){Te=null}),100)}));var Re=function(e){var t,n=i.useContext(ce.b),o=n.getPopupContainer,c=n.getPrefixCls,l=n.direction,s=function(t){var n=e.onCancel;n&&n(t)},u=function(t){var n=e.onOk;n&&n(t)},f=function(t){var n=e.okText,o=e.okType,r=e.cancelText,c=e.confirmLoading;return i.createElement(i.Fragment,null,i.createElement(Q.a,a()({onClick:s},e.cancelButtonProps),r||t.cancelText),i.createElement(Q.a,a()({},Object(Z.a)(o),{loading:c,onClick:u},e.okButtonProps),n||t.okText))},d=e.prefixCls,m=e.footer,p=e.visible,v=e.wrapClassName,b=e.centered,y=e.getContainer,C=e.closeIcon,h=Pe(e,["prefixCls","footer","visible","wrapClassName","centered","getContainer","closeIcon"]),g=c("modal",d),O=i.createElement(re.a,{componentName:"Modal",defaultLocale:Object(ye.b)()},f),k=i.createElement("span",{className:"".concat(g,"-close-x")},C||i.createElement(X.a,{className:"".concat(g,"-close-icon")})),E=S()(v,(t={},r()(t,"".concat(g,"-centered"),!!b),r()(t,"".concat(g,"-wrap-rtl"),"rtl"===l),t));return i.createElement(K,a()({},h,{getContainer:void 0===y?o:y,prefixCls:g,wrapClassName:E,footer:void 0===m?O:m,visible:p,mousePosition:Te,onClose:s,closeIcon:k}))};Re.useModal=function(){var e=function(){var e=i.useState([]),t=J()(e,2),n=t[0],o=t[1];return[n,function(e){return o((function(t){return[].concat(G()(t),[e])})),function(){o((function(t){return t.filter((function(t){return t!==e}))}))}}]}(),t=J()(e,2),n=t[0],o=t[1];function r(e){return function(t){je+=1;var n,r=i.createRef(),c=i.createElement(ie,{key:"modal-".concat(je),config:e(t),ref:r,afterClose:function(){n()}});return n=o(c),{destroy:function(){r.current&&r.current.destroy()},update:function(e){r.current&&r.current.update(e)}}}}return[{info:r(Ee),success:r(we),error:r(xe),warning:r(ke),confirm:r(Ne)},i.createElement(i.Fragment,null,n)]},Re.defaultProps={width:520,transitionName:"zoom",maskTransitionName:"fade",confirmLoading:!1,visible:!1,okType:"primary"};var Ie=Re;function _e(e){return Oe(ke(e))}var Ae=Ie;Ae.info=function(e){return Oe(Ee(e))},Ae.success=function(e){return Oe(we(e))},Ae.error=function(e){return Oe(xe(e))},Ae.warning=_e,Ae.warn=_e,Ae.confirm=function(e){return Oe(Ne(e))},Ae.destroyAll=function(){for(;Se.length;){var e=Se.pop();e&&e()}},Ae.config=function(e){var t=e.rootPrefixCls;t&&(he=t)};t.a=Ae},806:function(e,t,n){},807:function(e,t,n){"use strict";n(53),n(808)},808:function(e,t,n){},934:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var o=n(783);var r=n(784);function c(e){return function(e){if(Array.isArray(e))return Object(o.a)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||Object(r.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},936:function(e,t,n){"use strict";var o=n(3),r=n.n(o),c=n(4),a=n.n(c),i=n(0),l=n(9),s=n(7),u=n(28),f=n(5),d=n.n(f),m=n(184),p=n(19),v=i.forwardRef((function(e,t){var n,o=e.prefixCls,r=void 0===o?"rc-switch":o,c=e.className,a=e.checked,f=e.defaultChecked,v=e.disabled,b=e.loadingIcon,y=e.checkedChildren,C=e.unCheckedChildren,h=e.onClick,g=e.onChange,O=e.onKeyDown,k=Object(u.a)(e,["prefixCls","className","checked","defaultChecked","disabled","loadingIcon","checkedChildren","unCheckedChildren","onClick","onChange","onKeyDown"]),E=Object(m.a)(!1,{value:a,defaultValue:f}),w=Object(s.a)(E,2),x=w[0],N=w[1];function j(e,t){var n=x;return v||(N(n=e),null===g||void 0===g||g(n,t)),n}var T=d()(r,c,(n={},Object(l.a)(n,"".concat(r,"-checked"),x),Object(l.a)(n,"".concat(r,"-disabled"),v),n));return i.createElement("button",Object.assign({},k,{type:"button",role:"switch","aria-checked":x,disabled:v,className:T,ref:t,onKeyDown:function(e){e.which===p.a.LEFT?j(!1,e):e.which===p.a.RIGHT&&j(!0,e),null===O||void 0===O||O(e)},onClick:function(e){var t=j(!x,e);null===h||void 0===h||h(t,e)}}),b,i.createElement("span",{className:"".concat(r,"-inner")},x?y:C))}));v.displayName="Switch";var b=v,y=n(232),C=n.n(y),h=n(805),g=n(72),O=n(74),k=n(45),E=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]])}return n},w=i.forwardRef((function(e,t){var n,o=e.prefixCls,c=e.size,l=e.loading,s=e.className,u=void 0===s?"":s,f=e.disabled,m=E(e,["prefixCls","size","loading","className","disabled"]);Object(k.a)("checked"in m||!("value"in m),"Switch","`value` is not a valid prop, do you mean `checked`?");var p=i.useContext(g.b),v=p.getPrefixCls,y=p.direction,w=i.useContext(O.b),x=v("switch",o),N=i.createElement("div",{className:"".concat(x,"-handle")},l&&i.createElement(C.a,{className:"".concat(x,"-loading-icon")})),j=d()((n={},a()(n,"".concat(x,"-small"),"small"===(c||w)),a()(n,"".concat(x,"-loading"),l),a()(n,"".concat(x,"-rtl"),"rtl"===y),n),u);return i.createElement(h.a,{insertExtraNode:!0},i.createElement(b,r()({},m,{prefixCls:x,className:j,disabled:f||l,ref:t,loadingIcon:N})))}));w.__ANT_SWITCH=!0,w.displayName="Switch";t.a=w}}]);
//# sourceMappingURL=5.5496342f.chunk.js.map