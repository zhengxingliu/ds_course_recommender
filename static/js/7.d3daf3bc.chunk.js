(this.webpackJsonpds_course_recommender=this.webpackJsonpds_course_recommender||[]).push([[7],{940:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return O}));n(785);var a=n(807),i=(n(369),n(783)),s=(n(371),n(226)),c=(n(366),n(774)),o=(n(810),n(937)),l=n(935),r=n(81),h=n(82),u=n(91),b=n(90),d=(n(378),n(230)),p=n(11),j=n(0),y=n(121),v=(j.Component,d.a.TabPane),f=[{title:"Tab 1",content:Object(p.jsx)(y.a,{}),key:"1"},{title:"Tab 2",content:"Content of Tab 2",key:"2"},{title:"Tab 3",content:"Content of Tab 3",key:"3",closable:!1}],O=function(e){Object(u.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(r.a)(this,n);for(var a=arguments.length,i=new Array(a),s=0;s<a;s++)i[s]=arguments[s];return(e=t.call.apply(t,[this].concat(i))).newTabIndex=0,e.state={activeKey:f[0].key,panes:f,input:"",edit:!1},e.onChange=function(t){e.setState({activeKey:t}),t==e.state.activeKey&&console.log(!0),console.log(e.state)},e.onEdit=function(t,n){e[n](t)},e.add=function(){e.showModal()},e.remove=function(t){var n,a=e.state,i=a.panes,s=a.activeKey;i.forEach((function(e,a){e.key===t&&(n=a-1)}));var c=i.filter((function(e){return e.key!==t}));c.length&&s===t&&(s=n>=0?c[n].key:c[0].key),e.setState({panes:c,activeKey:s})},e.showModal=function(){e.setState({visible:!0})},e.handleOk=function(t){e.setState({visible:!1});var n=e.state.panes,a="newTab".concat(e.newTabIndex++),i=Object(l.a)(n);i.push({title:e.state.input,content:Object(p.jsx)(y.a,{}),key:a}),e.setState({panes:i,activeKey:a,input:""})},e.handleCancel=function(t){e.setState({visible:!1})},e.onInputChange=function(t){e.setState({input:t.target.value},(function(){return console.log(e.state)}))},e.onEditSwitchChange=function(t){e.setState({edit:t})},e}return Object(h.a)(n,[{key:"render",value:function(){var e=this.state,t=e.panes,n=e.activeKey;return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)(s.a,{children:[Object(p.jsx)("span",{children:"Edit"})," ",Object(p.jsx)(o.a,{onChange:this.onEditSwitchChange,style:{marginRight:"18px"}}),Object(p.jsx)(c.a,{type:"primary",style:{display:this.state.edit?"inline":"none"},children:" Add"})]}),Object(p.jsxs)(s.a,{children:[Object(p.jsx)(d.a,{type:this.state.edit?"editable-card":"",onChange:this.onChange,onDoubleClick:this.onDoubleClick,activeKey:n,onEdit:this.onEdit,children:t.map((function(e){return Object(p.jsx)(v,{tab:e.title,closable:e.closable,children:e.content},e.key)}))}),Object(p.jsx)(a.a,{title:"Enter New Category Name",visible:this.state.visible,onOk:this.handleOk,onCancel:this.handleCancel,children:Object(p.jsx)(i.a,{value:this.state.input,onChange:this.onInputChange})})]})]})}}]),n}(j.Component)}}]);
//# sourceMappingURL=7.d3daf3bc.chunk.js.map