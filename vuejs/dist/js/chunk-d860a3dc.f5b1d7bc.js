(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d860a3dc","chunk-2d0babe1"],{3905:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"navigation-buttons"},[a("li",{staticClass:"buttons",on:{click:e.homeRoute}},[e._v("Home")]),e.logged?a("li",{staticClass:"buttons",on:{click:e.settingsRoute}},[e._v("My Settings")]):e._e(),e.logged&&e.admin&&!e.superadmin?a("li",{staticClass:"buttons",on:{click:e.adminRoute}},[e._v("Admin Panel")]):e._e(),e.logged&&e.admin&&e.superadmin?a("li",{staticClass:"buttons",on:{click:e.superAdminRoute}},[e._v("Admin Panel")]):e._e(),e.logged?a("li",{staticClass:"buttons",on:{click:e.contentRoute}},[e._v("View Content")]):e._e(),e.logged?a("li",{staticClass:"buttons",on:{click:e.logoutRoute}},[e._v("Logout")]):e._e(),e.logged?e._e():a("li",{staticClass:"buttons",on:{click:e.requestRoute}},[e._v("Request Access")]),e.logged?e._e():a("li",{staticClass:"buttons",on:{click:e.loginRoute}},[e._v("Login")])]),a("hr")])},n=[],o={data:function(){return{logged:!1,admin:!1,superadmin:!1}},methods:{homeRoute:function(){this.$router.push("/0:home/")},settingsRoute:function(){this.$router.push({name:"results",params:{data:"You are Redirected Through a Secure Channel. Please Wait!!",redirectUrl:"/0:settings/"}})},adminRoute:function(){this.$router.push({name:"results",params:{data:"You are Redirected Through a Secure Channel. Please Wait!!",redirectUrl:"/0:admin/"}})},superAdminRoute:function(){this.$router.push({name:"results",params:{data:"You are Redirected Through a Secure Channel. Please Wait!!",redirectUrl:"/0:superadmin/"}})},contentRoute:function(){this.$router.push({name:"results",params:{data:"You are Redirected Through a Secure Channel. Please Wait!!",redirectUrl:"/0:/"}})},logoutRoute:function(){var e=JSON.parse(localStorage.getItem("tokendata")),t=JSON.parse(localStorage.getItem("userdata"));null!=t&&null!=e&&(localStorage.removeItem("tokendata"),localStorage.removeItem("userdata"),this.$router.push({name:"results",params:{data:"You are Being Logged Out. Please Wait",redirectUrl:"/0:home/"}}))},requestRoute:function(){this.$router.push("/0:register/request")},loginRoute:function(){this.$router.push("/0:login/")}},created:function(){var e=this,t=JSON.parse(localStorage.getItem("tokendata")),a=JSON.parse(localStorage.getItem("userdata"));null!=a&&null!=t?this.axios.post(window.apiRoutes.verifyRoute,{token:t.token}).then((function(t){t.data.auth||t.data.registered||null!=t.data.tokenuser?a.admin&&!a.superadmin?(e.logged=!0,e.admin=!0):a.admin&&a.superadmin?(e.logged=!0,e.admin=!0,e.superadmin=!0):e.logged=!1:e.$router.push({name:"results",params:{data:"I think Your Token Has Expired. Please Login to Regerate Another One",redirectUrl:"/0:login/"}})})):this.logged=!1}},r=o,i=a("2877"),u=Object(i["a"])(r,s,n,!1,null,null,null);t["default"]=u.exports},"9a8d":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"content registration-page"},[a("TopLinks"),a("h4",[e._v("Register")]),a("p",{staticStyle:{color:"#bac964"}},[e._v(e._s(e.databasemessage))]),a("p",{staticStyle:{color:"#f6f578"}},[e._v(e._s(e.resultmessage))]),a("form",{on:{submit:function(t){return t.preventDefault(),e.handleSubmit(t)}}},[a("label",{attrs:{for:"name"}},[e._v(" > Recipient Name")]),a("div",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],attrs:{id:"name",type:"text",required:"",autofocus:""},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}})]),a("label",{attrs:{for:"email"}},[e._v(" > Recipient E-Mail Address")]),a("div",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],attrs:{id:"email",type:"email",required:""},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}})]),a("label",{attrs:{for:"password"}},[e._v(" > Your Admin Password")]),a("div",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{id:"password",type:"password",required:""},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}})]),a("div",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.checked,expression:"checked"}],attrs:{type:"checkbox",id:"terms",name:"terms"},domProps:{checked:Array.isArray(e.checked)?e._i(e.checked,null)>-1:e.checked},on:{change:function(t){var a=e.checked,s=t.target,n=!!s.checked;if(Array.isArray(a)){var o=null,r=e._i(a,o);s.checked?r<0&&(e.checked=a.concat([o])):r>-1&&(e.checked=a.slice(0,r).concat(a.slice(r+1)))}else e.checked=n}}}),e._m(0),a("br")]),e._m(1)])],1)},n=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("label",{attrs:{for:"terms"}},[e._v(" I Accept and Read the "),a("a",{staticClass:"guidelines",attrs:{href:"https://github.com/tks18/gindex-v4/blob/dark-mode-0-1/CODE_OF_CONDUCT.md",target:"_blank"}},[e._v("Community Guidelines")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("button",{staticClass:"registration-button",attrs:{type:"submit"}},[e._v(" Register ")])])}],o=(a("99af"),a("b0c0"),a("3905")),r={components:{TopLinks:o["default"]},props:["nextUrl"],data:function(){return{name:"",email:"",password:"",password_confirmation:"",resultmessage:"",databasemessage:"",userData:JSON.parse(localStorage.getItem("userdata")),userToken:JSON.parse(localStorage.getItem("tokendata")),checked:""}},methods:{handleSubmit:function(e){var t=this;if(e.preventDefault(),this.password&&this.password.length>0)if(this.checked){var a=window.apiRoutes.registerRoute;this.$http.post(a,{name:this.name,email:this.email,adminpass:this.password,adminuseremail:this.userData.email}).then((function(e){e&&(e.data.auth&&e.data.registered,t.resultmessage=e.data.message)})).catch((function(e){console.error(e)}))}else this.resultmessage="> You Need to Accept Community Guidelines.",this.checked=!1;else this.resultmessage="> Passwords Do Not Match",this.password=""},homeroute:function(){this.$router.push("/0:home/")},adminroute:function(){window.alert("Currently under Development")},contentroute:function(){this.$router.push("/0:/")},settingsroute:function(){window.alert("Currently under Development")}},mounted:function(){var e=this;this.$http.post(window.apiRoutes.homeRoute).then((function(t){console.log(t),"200"==t.status?e.databasemessage="🟢 Database is Live. You can Login. Ping - ".concat(t.data.ping,"ms"):e.databasemessage="🔴 Database Offline / under Maintenance. Please Try Later"}));var t=JSON.parse(localStorage.getItem("userdata")),a=JSON.parse(localStorage.getItem("tokendata"));t&&a&&t.verified&&t.admin?this.resultmessage="You are Currently Logged in as ".concat(t.name," as ").concat(t.role):this.resultmessage=t.admin}},i=r,u=a("2877"),l=Object(u["a"])(i,s,n,!1,null,null,null);t["default"]=l.exports}}]);