(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-381fa2f5"],{"0262":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content g2-content"},[a("TopLinks"),a("div",{staticClass:"video-content"},[a("vue-plyr",[a("video",{attrs:{src:t.apiurl}},[a("source",{attrs:{src:t.apiurl,type:"video/mp4",size:"720"}}),a("source",{attrs:{src:t.apiurl,type:"video/mp4",size:"1080"}})])])],1),a("div",{staticClass:"card"},[a("header",{staticClass:"card-header"},[a("p",{staticClass:"card-header-title"},[t._m(0),t._v(" "+t._s(t.$t("page.video.play"))+" / "),t._m(1),t._v(" "+t._s(t.$t("page.video.download"))+" ")])]),a("div",{staticClass:"card-content"},[a("div",{staticClass:"content"},[a("div",{staticClass:"field"},[a("label",{staticClass:"label"},[t._v(t._s(t.$t("page.video.link")))]),a("div",{staticClass:"control"},[a("div",{staticClass:"link-text copy-download-link"},[a("input",{staticClass:"input download-link",attrs:{id:"copy-link",type:"text"},domProps:{value:t.videourl}})]),a("center",[a("button",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:t.videourl,expression:"videourl",arg:"copy"}],attrs:{id:"copy-url",type:"button"}},[t._v("Copy Link "),a("i",{staticClass:"fa fa-copy"})]),a("a",{staticClass:"download-button",attrs:{href:t.videourl,target:"_blank"}},[t._v("Download "),a("i",{staticClass:"fa fa-download"})])])],1)]),a("div",{staticClass:"columns is-mobile is-multiline has-text-centered"},t._l(t.players,(function(e,i){return a("div",{key:i,staticClass:"column"},[a("p",{staticClass:"heading"},[a("a",{attrs:{href:e.scheme}},[a("figure",{staticClass:"image is-48x48",staticStyle:{margin:"0 auto"}},[a("img",{staticClass:"icon",attrs:{src:e.icon}})])])]),a("p",{},[t._v(t._s(e.name))])])})),0)])])])],1)},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{staticClass:"icon"},[a("i",{staticClass:"fa fa-play-circle",attrs:{"aria-hidden":"true"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{staticClass:"icon"},[a("i",{staticClass:"fa fa-download",attrs:{"aria-hidden":"true"}})])}],n=a("6a54"),r=n["a"],l=a("2877"),c=Object(l["a"])(r,i,s,!1,null,null,null);e["default"]=c.exports},"6a54":function(t,e,a){"use strict";(function(t){a("d3b7"),a("25f0");var i=a("3905"),s=a("45d8");e["a"]={components:{TopLinks:i["default"]},data:function(){return{apiurl:"",videourl:""}},methods:{render:function(){this.videourl=window.location.origin+encodeURI(this.url),this.apiurl=this.videourl}},activated:function(){this.render()},computed:{url:function(){return this.$route.params.path?Object(s["d"])(this.$route.params.path):""},players:function(){return[{name:"IINA",icon:this.$cdnpath("images/player/iina.png"),scheme:"iina://weblink?url="+this.videourl},{name:"PotPlayer",icon:this.$cdnpath("images/player/potplayer.png"),scheme:"potplayer://"+this.videourl},{name:"VLC",icon:this.$cdnpath("images/player/vlc.png"),scheme:"vlc://"+this.videourl},{name:"Thunder",icon:this.$cdnpath("images/player/thunder.png"),scheme:"thunder://"+this.getThunder},{name:"Aria2",icon:this.$cdnpath("images/player/aria2.png"),scheme:'javascript:alert("Not Yet Supported")'},{name:"nPlayer",icon:this.$cdnpath("images/player/nplayer.png"),scheme:"nplayer-"+this.videourl},{name:"MXPlayer(Free)",icon:this.$cdnpath("images/player/mxplayer.png"),scheme:"intent:"+this.videourl+"#Intent;package=com.mxtech.videoplayer.ad;S.title="+this.title+";end"},{name:"MXPlayer(Pro)",icon:this.$cdnpath("images/player/mxplayer.png"),scheme:"intent:"+this.videourl+"#Intent;package=com.mxtech.videoplayer.pro;S.title="+this.title+";end"}]},getThunder:function(){return t.from("AA"+this.videourl+"ZZ").toString("base64")}}}}).call(this,a("b639").Buffer)}}]);