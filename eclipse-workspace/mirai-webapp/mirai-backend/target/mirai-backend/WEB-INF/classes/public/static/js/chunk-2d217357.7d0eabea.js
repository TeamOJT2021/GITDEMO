(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d217357"],{c66d:function(e,t,r){"use strict";r.r(t);var c=r("7a23"),n={class:"container"},u={class:"jumbotron"},s=Object(c["l"])(" Profile "),l=Object(c["m"])("strong",null,"Token:",-1),b=Object(c["m"])("strong",null,"Id:",-1),o=Object(c["m"])("strong",null,"Email:",-1),j=Object(c["m"])("strong",null,"Authorities:",-1);function O(e,t,r,O,i,a){return Object(c["D"])(),Object(c["i"])("div",n,[Object(c["m"])("header",u,[Object(c["m"])("h3",null,[Object(c["m"])("strong",null,Object(c["Q"])(a.currentUser.username),1),s])]),Object(c["m"])("p",null,[l,Object(c["l"])(" "+Object(c["Q"])(a.currentUser.accessToken.substring(0,20))+" ... "+Object(c["Q"])(a.currentUser.accessToken.substr(a.currentUser.accessToken.length-20)),1)]),Object(c["m"])("p",null,[b,Object(c["l"])(" "+Object(c["Q"])(a.currentUser.id),1)]),Object(c["m"])("p",null,[o,Object(c["l"])(" "+Object(c["Q"])(a.currentUser.email),1)]),j,Object(c["m"])("ul",null,[(Object(c["D"])(!0),Object(c["i"])(c["b"],null,Object(c["K"])(a.currentUser.roles,(function(e){return Object(c["D"])(),Object(c["i"])("li",{key:e},Object(c["Q"])(e),1)})),128))])])}var i={name:"Profile",computed:{currentUser:function(){return this.$store.state.auth.user}},mounted:function(){this.currentUser||this.$router.push("/login")}};i.render=O;t["default"]=i}}]);
//# sourceMappingURL=chunk-2d217357.7d0eabea.js.map