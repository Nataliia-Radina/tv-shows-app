(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"262d":function(e,t,s){},"4d21":function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return e.showDetails?s("main",[s("h1",[e._v(e._s(e.showDetails.name))]),s("section",{staticClass:"grid--container--details"},[s("ResponsiveImage",{attrs:{"src-set":e.showDetails.image||{},title:e.showDetails.name,responsive:""}}),s("div",{staticClass:"show--summary",domProps:{innerHTML:e._s(e.showDetails.summary)}}),s("div",{staticClass:"show--about"},[e.showDetails.rating&&e.showDetails.rating.average?s("div",[s("font-awesome-icon",{style:{color:"yellow"},attrs:{icon:"star"}}),e._v(" "+e._s(e.showDetails.rating.average)+" ")],1):e._e(),e.showDetails.network?s("div",[s("b",[e._v("Network:")]),e._v(" "+e._s(e.showDetails.network.name))]):e._e(),s("div",[s("b",[e._v("Status:")]),e._v(" "+e._s(e.showDetails.status))]),s("div",[s("b",[e._v("Language:")]),e._v(" "+e._s(e.showDetails.language))]),s("div",[s("b",[e._v("Runtime:")]),e._v(" "+e._s(e.showDetails.runtime)+"min")]),e.genres?s("div",[s("b",[e._v("Genre:")]),e._v(" "+e._s(e.genres))]):e._e(),s("div",[s("b",[e._v("Type:")]),e._v(" "+e._s(e.showDetails.type))])])],1),e.showDetails._embedded&&e.showDetails._embedded.cast&&e.showDetails._embedded.cast.length?s("section",[s("h2",[e._v("Cast")]),s("div",{staticClass:"grid--container--cards--list"},e._l(e.showDetails._embedded.cast,(function(t){return s("Card",{key:t.id,attrs:{title:e.getCardTitle(t.person.name,t.character.name),"src-set":t.person.image}})})),1)]):e._e()]):e._e()},i=[],o=s("5530"),n=(s("a15b"),s("99af"),s("2f62")),r=s("ae8d"),c=s("8884"),l={name:"ShowDetails",components:{Card:r["a"],ResponsiveImage:c["a"]},props:{id:{type:String,required:!0}},computed:Object(o["a"])({genres:function(){return this.showDetails.genres?this.showDetails.genres.join(", "):""}},Object(n["d"])(["showDetails"])),mounted:function(){this.getShowDetails(this.id)},beforeDestroy:function(){this.setShowDetails({})},methods:Object(o["a"])(Object(o["a"])({getCardTitle:function(e,t){return"".concat(e," as ").concat(t)}},Object(n["b"])(["getShowDetails"])),Object(n["c"])(["setShowDetails"]))},d=l,h=(s("ac68"),s("2877")),w=Object(h["a"])(d,a,i,!1,null,"4c5fb80e",null);t["default"]=w.exports},a15b:function(e,t,s){"use strict";var a=s("23e7"),i=s("44ad"),o=s("fc6a"),n=s("a640"),r=[].join,c=i!=Object,l=n("join",",");a({target:"Array",proto:!0,forced:c||!l},{join:function(e){return r.call(o(this),void 0===e?",":e)}})},ac68:function(e,t,s){"use strict";s("262d")}}]);
//# sourceMappingURL=about.6c81d7d8.js.map