(this.webpackJsonprona=this.webpackJsonprona||[]).push([[0],{17:function(t,e,a){t.exports=a(40)},39:function(t,e,a){},40:function(t,e,a){"use strict";a.r(e);var n=a(0),r=a.n(n),o=a(6),c=a.n(o),s=a(2),l=a(3),i=a(4),u=a(5),p=function(t){return r.a.createElement("div",{style:{display:"inline-block"}},t.num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1,"))},d=a(7),h=a.n(d),m=function(t){Object(u.a)(a,t);var e=Object(i.a)(a);function a(){var t;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))).state={countryCode:null,total:null,deaths:null,recovered:null},t.init=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};h.a.get("https://api.opencagedata.com/geocode/v1/json?key=".concat("0d0896ea3903462ebfff1fcac91122a9","&q=").concat(encodeURIComponent(t.props.lat+","+t.props.lon),"&pretty=1&no_annotations=1")).then((function(t){return t.data})).then((function(a){if(a.results[0].components["ISO_3166-1_alpha-2"]){var n=a.results[0].components["ISO_3166-1_alpha-2"];t.setState({countryCode:n}),t.getCountryDataFromCode(t.state.countryCode)}else t.props.updateErrorStatus(e)})).catch((function(a){t.props.updateErrorStatus(e),console.log(a)}))},t}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.init()}},{key:"componentDidUpdate",value:function(t){this.props.lat===t.lat&&this.props.lon===t.lon||this.init(t)}},{key:"getCountryDataFromCode",value:function(t){var e=this;h.a.get("https://covid19.mathdro.id/api/countries/".concat(t)).then((function(t){return t.data})).then((function(t){e.setState({total:t.confirmed.value,recovered:t.recovered.value,deaths:t.deaths.value})})).catch((function(t){return console.log(t)}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"callOut"},r.a.createElement("div",{className:"callOut_wrapper"},r.a.createElement("div",{className:"callOut_country"},this.state.countryCode),r.a.createElement("div",{className:"callOut_total"},r.a.createElement("span",null,"Total:")," ",this.state.total?r.a.createElement(p,{num:this.state.total}):""),r.a.createElement("div",{className:"callOut_deaths"},r.a.createElement("span",null,"Deaths:")," ",this.state.total?r.a.createElement(p,{num:this.state.deaths}):""),r.a.createElement("div",{className:"callOut_recovered"},r.a.createElement("span",null,"Recov:")," ",this.state.total?r.a.createElement(p,{num:this.state.recovered}):""),r.a.createElement("div",{className:"callOut_triangle"})))}}]),a}(r.a.Component),v=function(t){Object(u.a)(a,t);var e=Object(i.a)(a);function a(){var t;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))).state={render:!0},t.closeError=function(){t.setState({render:!1}),t.props.onErrorDismiss()},t}return Object(l.a)(a,[{key:"render",value:function(){return!!this.state.render&&c.a.createPortal(r.a.createElement("div",{className:"error"},r.a.createElement("div",{className:"error_inner"},r.a.createElement("button",{onClick:this.closeError,className:"error_btn"},"\xd7"),"Error, looks like you clicked on water.")),document.getElementById("modal"))}}]),a}(r.a.Component),f=function(t){Object(u.a)(a,t);var e=Object(i.a)(a);function a(){var t;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))).state={x:0,y:0,lon:0,lat:0,mercN:0,latRad:0,renderCallOut:!1,error:!1},t.init=function(e){var a=t.getLon(t.props.coordinates[0]),n=t.getMercN(t.props.coordinates[1]),r=t.getLatRad(n),o=t.getLat(r);t.setState({x:t.props.coordinates[0],y:t.props.coordinates[1],lon:a,mercN:n,latRad:r,lat:o,renderCallOut:!0})},t.getLon=function(t){return 360*t/1024-180},t.getMercN=function(e){return(e-256)*t.props.PI/-512},t.getLatRad=function(e){return 2*(Math.atan(Math.pow(2.718281828459045,e))-t.props.PI/4)},t.getLat=function(e){return 180*e/t.props.PI},t.updateErrorStatus=function(e){Object.keys(e).length?t.setState({error:!0,x:e.x,y:e.y,lat:e.lat,lon:e.lon}):t.setState({error:!0,x:286.227,y:117.366,lat:43.741667,lon:-79.373333})},t.onErrorDismiss=function(){t.setState({error:!1})},t}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.init()}},{key:"componentDidUpdate",value:function(t){this.props.coordinates[0]===t.coordinates[0]&&this.props.coordinates[1]===t.coordinates[1]||this.init()}},{key:"render",value:function(){return this.state.error?r.a.createElement(v,{onErrorDismiss:this.onErrorDismiss}):r.a.createElement("div",{className:"point",style:{left:this.state.x+"px",top:this.state.y+"px"}},r.a.createElement("div",{className:"point_wrapper ".concat(this.state.x<=80?"shift":""," ").concat(this.state.y<=90?"bottom":"")},this.state.renderCallOut?r.a.createElement(m,{x:this.state.x,y:this.state.y,lat:this.state.lat,lon:this.state.lon,updateErrorStatus:this.updateErrorStatus}):""))}}]),a}(r.a.Component),y=function(t){Object(u.a)(a,t);var e=Object(i.a)(a);function a(){var t;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))).state={width:1024,height:512,zoom:1,x:null,y:null,PI:Math.PI},t.handleClick=function(e){var a=e.clientX,n=e.clientY,r=e.currentTarget.getBoundingClientRect(),o=[r.x,r.y],c=o[0],s=o[1];t.setState({x:a-c,y:n-s})},t}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"map",style:{maxWidth:this.state.width}},r.a.createElement("img",{onClick:this.handleClick,src:"https://api.mapbox.com/styles/v1/mapbox/dark-v9/static/0,0,".concat(this.state.zoom,"/").concat(this.state.width,"x").concat(this.state.height,"?access_token=").concat("pk.eyJ1IjoiZXJpY3NtaXRoOTIiLCJhIjoiY2s4NXVkbXFtMDEzMDNycDl1MDIzcGQ4NCJ9.BGa8uQd_0__y7vIFjn3w9Q".split(";")[0]),alt:"World Map.",className:"map_img"}),this.state.x&&this.state.y?r.a.createElement(f,{coordinates:[this.state.x,this.state.y],PI:this.state.PI}):"")}}]),a}(r.a.Component),E=function(){return r.a.createElement("header",null,r.a.createElement("h1",null,"Covid-19 Tracker"))},g=function(){return r.a.createElement("footer",null,r.a.createElement("span",{className:"copyright"},"Made with ",r.a.createElement("i",{className:"fa fa-heart"})," by Eric Smith"))},O=(a(39),function(t){Object(u.a)(a,t);var e=Object(i.a)(a);function a(){return Object(s.a)(this,a),e.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(E,null),r.a.createElement("div",{className:"container"},r.a.createElement(y,null)),r.a.createElement(g,null))}}]),a}(r.a.Component));c.a.render(r.a.createElement(O,null),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.32f0600a.chunk.js.map