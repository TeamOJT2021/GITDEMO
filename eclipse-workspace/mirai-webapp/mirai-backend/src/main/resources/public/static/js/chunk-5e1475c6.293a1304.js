(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5e1475c6"],{7979:function(e,t,r){"use strict";r.r(t);var n=r("7a23"),a=Object(n["l"])("Click to redirect home page");function u(e,t,r,u,c,o){var i=Object(n["M"])("el-button");return Object(n["D"])(),Object(n["i"])(n["b"],null,[Object(n["m"])("h1",null,Object(n["Q"])(c.boardAuth),1),Object(n["m"])(i,{type:"primary",onClick:o.redirectHome},{default:Object(n["bb"])((function(){return[a]})),_:1},8,["onClick"])],64)}r("d3b7"),r("25f0");var c=r("ed02"),o={name:"BoardAdmin",data:function(){return{boardAuth:""}},mounted:function(){var e=this;c["a"].getAdminBoard().then((function(t){e.boardAuth=t.data}),(function(t){e.content=t.response&&t.response.data&&t.response.data.message||t.message||t.toString()}))},methods:{redirectHome:function(){this.$router.push("/public")}}};o.render=u;t["default"]=o},ed02:function(e,t,r){"use strict";var n=r("1da1"),a=(r("96cf"),r("bc3a")),u=r.n(a),c=r("5f87");function o(){var e=Object(c["a"])();return e&&e.accessToken?{Authorization:"Bearer "+e.accessToken}:{}}var i=u.a.create({baseURL:"/api",timeout:1e3,headers:o()});t["a"]={getPublicContent:function(){return Object(n["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,i.get("/auth/all");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()},getUserBoard:function(){return Object(n["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,i.get("/auth/user");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()},getModeratorBoard:function(){return Object(n["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,i.get("/auth/mod");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()},getAdminBoard:function(){return Object(n["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,i.get("/auth/admin");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()}}}}]);
//# sourceMappingURL=chunk-5e1475c6.293a1304.js.map