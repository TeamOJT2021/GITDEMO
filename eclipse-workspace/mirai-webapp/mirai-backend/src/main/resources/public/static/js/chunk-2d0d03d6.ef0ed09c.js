(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d03d6"],{"66aa":function(e,t,r){"use strict";r.r(t);var n=r("7a23"),c={class:"container"},s={class:"jumbotron"},u=Object(n["l"])(" Profile "),l=Object(n["m"])("strong",null,"Token:",-1),b=Object(n["m"])("strong",null,"Id:",-1),o=Object(n["m"])("strong",null,"Email:",-1),j=Object(n["m"])("strong",null,"Authorities:",-1);function O(e,t,r,O,i,a){return Object(n["D"])(),Object(n["i"])("div",c,[Object(n["m"])("header",s,[Object(n["m"])("h3",null,[Object(n["m"])("strong",null,Object(n["Q"])(a.currentUser.username),1),u])]),Object(n["m"])("p",null,[l,Object(n["l"])(" "+Object(n["Q"])(a.currentUser.accessToken.substring(0,20))+" ... "+Object(n["Q"])(a.currentUser.accessToken.substr(a.currentUser.accessToken.length-20)),1)]),Object(n["m"])("p",null,[b,Object(n["l"])(" "+Object(n["Q"])(a.currentUser.id),1)]),Object(n["m"])("p",null,[o,Object(n["l"])(" "+Object(n["Q"])(a.currentUser.email),1)]),j,Object(n["m"])("ul",null,[(Object(n["D"])(!0),Object(n["i"])(n["b"],null,Object(n["K"])(a.currentUser.roles,(function(e){return Object(n["D"])(),Object(n["i"])("li",{key:e},Object(n["Q"])(e),1)})),128))])])}var i={name:"Profile",computed:{currentUser:function(){return console.log(this.$store.state.auth.user),this.$store.state.auth.user}},mounted:function(){this.currentUser||this.$router.push("/login")}};i.render=O;t["default"]=i}}]);
//# sourceMappingURL=chunk-2d0d03d6.ef0ed09c.js.map