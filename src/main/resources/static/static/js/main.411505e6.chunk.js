(this.webpackJsonpuntitled=this.webpackJsonpuntitled||[]).push([[0],{58:function(e,t,n){},59:function(e,t,n){},82:function(e,t,n){},83:function(e,t,n){},91:function(e,t,n){"use strict";n.r(t);var s=n(1),c=n.n(s),a=n(11),r=n.n(a),i=(n(58),n(59),n(15)),o=n(52),l=n(14),j=n.n(l),u=n(17),b=n(22),d=n(23),h=n(24),m=n(29),g=n(28),O=n(53),x=n(44),p=n(45),f=n.n(p),v=n(3),N=function(e){Object(m.a)(n,e);var t=Object(g.a)(n);function n(e){var s;return Object(b.a)(this,n),(s=t.call(this,e)).state={calendars:[]},s.getCalendarsFromAPI=s.getCalendarsFromAPI.bind(Object(h.a)(s)),s}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=Object(u.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getCalendarsFromAPI("/rest/uet-courses-calendar");case 2:return e.next=4,this.getCalendarsFromAPI("/rest/google-gmail");case 4:return e.next=6,this.getCalendarsFromAPI("/rest/google-calendar");case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getCalendarsFromAPI",value:function(){var e=Object(u.a)(j.a.mark((function e(t){var n=this;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get(t).then((function(e){for(var t=e.data,s=Object(o.a)(n.state.calendars),c=0;c<t.length;c++)s.push(t[c]);n.setState({calendars:s}),console.log(n.state.calendars)})).catch((function(e){return console.log(e)}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(v.jsxs)("div",{children:[Object(v.jsx)("h2",{children:this.state.name}),Object(v.jsx)(O.a,{plugins:[x.a],initialView:"dayGridMonth",weekends:!0,events:this.state.calendars})]})}}]),n}(c.a.Component),w=N,C=(n(82),n(83),n(51)),y=n(46),k=c.a.createContext(),I=function(e){var t=e.children,n=Object(y.useGoogleLogin)({clientId:"950594419536-4pvhe5a9p1e4lq09h40s5p6j3ilr7h4u.apps.googleusercontent.com"});return Object(v.jsx)(k.Provider,{value:n,children:t})},L=function(){return c.a.useContext(k)},F=function(){var e=L().signIn;return Object(v.jsx)("button",{className:"btn btn-primary d-block w-100 btn-signin",id:"sign-in-google",type:"button",onClick:e,children:"Sign In with Google"})},S=function(){var e=L().signOut;return Object(v.jsx)("button",{className:"btn btn-primary d-block w-100 btn-signin",id:"sign-in-google",type:"button",onClick:e,children:"Log out"})},T=function(e){Object(m.a)(s,e);var t=Object(g.a)(s);function s(e){var c;return Object(b.a)(this,s),(c=t.call(this,e)).onShowAlert=function(){c.setState({visible:!0},(function(){window.setTimeout((function(){c.setState({visible:!1})}),3e3)}))},c.submitLoginUetCourses=Object(u.a)(j.a.mark((function e(){var t,s,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=n(85),s=document.querySelector("#uet-auth-form"),a=t(s),fetch("/rest/uet-auth",{method:"post",body:a,headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then((function(e){console.log(e.json())})),c.onShowAlert();case 5:case"end":return e.stop()}}),e)}))),c.state={visible:!1,isLogInUETCoursesSuccess:!1},c}return Object(d.a)(s,[{key:"render",value:function(){return Object(v.jsxs)("div",{className:"FirstTab",children:[Object(v.jsx)("section",{className:"text-center features-icons",children:Object(v.jsx)("div",{className:"container",children:Object(v.jsxs)("div",{className:"row",children:[Object(v.jsxs)("div",{className:"col-lg-4",children:[Object(v.jsx)("div",{className:"mx-auto features-icons-item mb-5 mb-lg-0 mb-lg-3"}),Object(v.jsx)("section",{className:"login-clean form-login",children:Object(v.jsxs)("form",{id:"uet-auth-form",children:[Object(v.jsx)("h2",{className:"visually-hidden",children:"Login Form"}),Object(v.jsx)("div",{className:"illustration",children:Object(v.jsx)("img",{src:"uet-logo.png",alt:"UET Logo"})}),Object(v.jsx)("div",{className:"mb-3",children:Object(v.jsx)("input",{className:"form-control",type:"text",id:"uet-username-1",name:"username",placeholder:"Username"})}),Object(v.jsx)("div",{className:"mb-3",children:Object(v.jsx)("input",{className:"form-control",type:"password",id:"uet-password-1",name:"password",placeholder:"Password"})}),Object(v.jsx)("button",{className:"btn btn-primary d-block w-100 btn-signin",type:"button",onClick:this.submitLoginUetCourses,children:"Sign In"}),Object(v.jsx)("div",{className:"mb-3"})]})})]}),Object(v.jsxs)("div",{className:"col-lg-4",children:[Object(v.jsx)("div",{className:"mx-auto features-icons-item mb-5 mb-lg-0 mb-lg-3"}),Object(v.jsx)("section",{className:"login-clean form-login",children:Object(v.jsxs)("form",{id:"google-auth-form",children:[Object(v.jsx)("h2",{className:"visually-hidden",children:"Login Form"}),Object(v.jsxs)("div",{className:"illustration",children:[Object(v.jsx)("img",{src:"google.png",width:"76",alt:"Chrome Logo",className:"google-img"}),Object(v.jsxs)("div",{className:"gmail-ggcalendar-img",children:[Object(v.jsx)("img",{className:"gmail-img",src:"gmail-logo.png",width:"76",alt:"Gmail Logo"}),Object(v.jsx)("img",{className:"ggcalendar-img",src:"google-calendar-logo.png",width:"76",alt:"Google calendar Logo"})]})]}),Object(v.jsxs)("div",{className:"mb-3",children:[Object(v.jsx)("div",{id:"g-signin2",className:"justify-content-center align-items-center text-center","data-width":"240","data-height":"36","data-longtitle":"true"}),Object(v.jsx)(F,{}),Object(v.jsx)(S,{})]})]})})]})]})})}),Object(v.jsx)("div",{children:Object(v.jsx)(C.a,{color:"success",variant:"success",show:this.state.visible,children:"\u0110\u0103ng nh\u1eadp v\xe0o UET courses th\xe0nh c\xf4ng. Th\xf4ng tin \u0111\u0103ng nh\u1eadp \u0111\xe3 \u0111\u01b0\u1ee3c l\u01b0u v\xe0o h\u1ec7 th\u1ed1ng"})}),Object(v.jsx)("script",{src:"/src/bootstrap/js/bootstrap.min.js"}),Object(v.jsx)("script",{src:"/src/js/authen_func/auth-google.js"}),Object(v.jsx)("script",{src:"/src/js/authen_func/z-auth.js"}),Object(v.jsx)("script",{src:"/src/js/authen_func/authConfig.js"}),Object(v.jsx)("script",{src:"/src/js/authen_func/graphConfig.js"}),Object(v.jsx)("script",{src:"/src/js/authen_func/authPopup.js"}),Object(v.jsx)("script",{src:"/src/js/authen_func/graph.js"})]})}}]),s}(c.a.Component);function P(){var e=Object(s.useState)("tab1"),t=Object(i.a)(e,2),n=t[0],c=t[1];return Object(v.jsxs)("div",{className:"Tabs",style:{margin:0},children:[Object(v.jsxs)("ul",{className:"nav",children:[Object(v.jsx)("li",{className:"tab1"===n?"active":"",onClick:function(){c("tab1")},children:"Login"}),Object(v.jsx)("li",{className:"tab2"===n?"active":"",onClick:function(){c("tab2")},children:"Calendar"})]}),Object(v.jsx)("div",{className:"outlet",children:"tab1"===n?Object(v.jsx)(T,{}):Object(v.jsx)(w,{})})]})}var A=n(5),U=n(8),_=n(13),G=["component"],E=function(e){var t=e.component,n=Object(U.a)(e,G),s=L().isSignedIn;return Object(v.jsx)("div",{children:Object(v.jsx)(_.c,Object(A.a)(Object(A.a)({},n),{},{render:function(e){return s?Object(v.jsx)(t,Object(A.a)({},e)):Object(v.jsx)(_.b,{exact:!0,from:"/private",to:"/"})}}))})},q=["component"],B=function(e){var t=e.component,n=Object(U.a)(e,q),s=L().isSignedIn;return Object(v.jsx)("div",{children:Object(v.jsx)(_.c,Object(A.a)(Object(A.a)({},n),{},{render:function(e){return s?Object(v.jsx)(_.b,{exact:!0,to:"/"}):Object(v.jsx)(t,Object(A.a)({},e))}}))})};function D(){return Object(v.jsxs)("div",{className:"App",style:{display:"block"},children:[Object(v.jsxs)("div",{className:"welcome",children:["Ch\xe0o m\u1eebng \u0111\u1ebfn v\u1edbi h\u1ec7 th\u1ed1ng \u0111\u1ed3ng b\u1ed9 l\u1ecbch bi\u1ec3u",Object(v.jsx)("br",{}),"Nh\xf3m 2 - K63T - T\xedch h\u1ee3p h\u1ec7 th\u1ed1ng"]}),Object(v.jsx)(_.a,{children:Object(v.jsxs)("div",{children:[Object(v.jsx)(B,{path:"/",component:P}),Object(v.jsx)(E,{path:"/",component:P})]})})]})}var J=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,93)).then((function(t){var n=t.getCLS,s=t.getFID,c=t.getFCP,a=t.getLCP,r=t.getTTFB;n(e),s(e),c(e),a(e),r(e)}))};r.a.render(Object(v.jsx)(I,{children:Object(v.jsx)(D,{})}),document.getElementById("root")),J()}},[[91,1,2]]]);
//# sourceMappingURL=main.411505e6.chunk.js.map