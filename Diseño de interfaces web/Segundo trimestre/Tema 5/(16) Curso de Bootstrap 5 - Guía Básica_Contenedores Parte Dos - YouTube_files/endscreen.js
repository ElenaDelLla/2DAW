(function(g){var window=this;'use strict';var hcb=function(a,b){a.Oa("onAutonavCoundownStarted",b)},C5=function(a,b,c){g.ro(a.element,"ytp-suggestion-set",!!b.videoId);
var d=b.playlistId;c=b.Uf(c?c:"mqdefault.jpg");var e=null,f=null;b instanceof g.YI&&(b.lengthText?(e=b.lengthText||null,f=b.Fu||null):b.lengthSeconds&&(e=g.qO(b.lengthSeconds),f=g.qO(b.lengthSeconds,!0)));var h=!!d;d=h&&"RD"===g.WI(d).type;var l=b instanceof g.YI?b.isLivePlayback:null,m=b instanceof g.YI?b.isUpcoming:null,n=b.author,p=b.shortViewCount,q=b.publishedTimeText,r=[],v=[];n&&r.push(n);p&&(r.push(p),v.push(p));q&&v.push(q);c={title:b.title,author:n,author_and_views:r.join(" \u2022 "),aria_label:b.ariaLabel||
g.CL("Ver $TITLE",{TITLE:b.title}),duration:e,timestamp:f,url:b.Un(),is_live:l,is_upcoming:m,is_list:h,is_mix:d,background:c?"background-image: url("+c+")":"",views_and_publish_time:v.join(" \u2022 "),autoplayAlternativeHeader:b.Lq};b instanceof g.XI&&(c.playlist_length=b.playlistLength);a.update(c)},D5=function(a){var b=a.V(),c=b.j;
g.V.call(this,{G:"a",K:"ytp-autonav-suggestion-card",X:{href:"{{url}}",target:c?b.T:"","aria-label":"{{aria_label}}","data-is-live":"{{is_live}}","data-is-list":"{{is_list}}","data-is-mix":"{{is_mix}}","data-is-upcoming":"{{is_upcoming}}"},W:[{G:"div",Ha:["ytp-autonav-endscreen-upnext-thumbnail","ytp-autonav-thumbnail-small"],X:{style:"{{background}}"},W:[{G:"div",X:{"aria-label":"{{timestamp}}"},Ha:["ytp-autonav-timestamp"],qa:"{{duration}}"},{G:"div",Ha:["ytp-autonav-live-stamp"],qa:"En directo"},
{G:"div",Ha:["ytp-autonav-upcoming-stamp"],qa:"Pr\u00f3ximamente"},{G:"div",K:"ytp-autonav-list-overlay",W:[{G:"div",K:"ytp-autonav-mix-text",qa:"Mix"},{G:"div",K:"ytp-autonav-mix-icon"}]}]},{G:"div",Ha:["ytp-autonav-endscreen-upnext-title","ytp-autonav-title-card"],qa:"{{title}}"},{G:"div",Ha:["ytp-autonav-endscreen-upnext-author","ytp-autonav-author-card"],qa:"{{author}}"},{G:"div",Ha:["ytp-autonav-endscreen-upnext-author","ytp-autonav-view-and-date-card"],qa:"{{views_and_publish_time}}"}]});this.F=
a;this.suggestion=null;this.j=c;this.Qa("click",this.onClick);this.Qa("keypress",this.onKeyPress)},E5=function(a,b){b=void 0===b?!1:b;
g.V.call(this,{G:"div",K:"ytp-autonav-endscreen-countdown-overlay"});var c=this;this.I=b;this.D=void 0;this.B=0;this.container=new g.V({G:"div",K:"ytp-autonav-endscreen-countdown-container"});g.D(this,this.container);this.container.Ea(this.element);b=a.V();var d=b.j;this.F=a;this.suggestion=null;this.onVideoDataChange("newdata",this.F.getVideoData());this.N(a,"videodatachange",this.onVideoDataChange);var e=["ytp-autonav-endscreen-upnext-thumbnail"];b.S("web_rounded_thumbnails")&&e.push("rounded-thumbnail");
this.j=new g.V({G:"div",K:"ytp-autonav-endscreen-upnext-container",X:{"aria-label":"{{aria_label}}","data-is-live":"{{is_live}}","data-is-list":"{{is_list}}","data-is-mix":"{{is_mix}}","data-is-upcoming":"{{is_upcoming}}"},W:[{G:"div",K:"ytp-autonav-endscreen-upnext-header"},{G:"div",K:"ytp-autonav-endscreen-upnext-alternative-header",qa:"{{autoplayAlternativeHeader}}"},{G:"a",K:"ytp-autonav-endscreen-link-container",X:{href:"{{url}}",target:d?b.T:""},W:[{G:"div",Ha:e,X:{style:"{{background}}"},W:[{G:"div",
X:{"aria-label":"{{timestamp}}"},Ha:["ytp-autonav-timestamp"],qa:"{{duration}}"},{G:"div",Ha:["ytp-autonav-live-stamp"],qa:"En directo"},{G:"div",Ha:["ytp-autonav-upcoming-stamp"],qa:"Pr\u00f3ximamente"}]},{G:"div",K:"ytp-autonav-endscreen-video-info",W:[{G:"div",K:"ytp-autonav-endscreen-premium-badge"},{G:"div",K:"ytp-autonav-endscreen-upnext-title",qa:"{{title}}"},{G:"div",K:"ytp-autonav-endscreen-upnext-author",qa:"{{author}}"},{G:"div",K:"ytp-autonav-view-and-date",qa:"{{views_and_publish_time}}"},
{G:"div",K:"ytp-autonav-author-and-view",qa:"{{author_and_views}}"}]}]}]});g.D(this,this.j);this.j.Ea(this.container.element);d||this.N(this.j.Da("ytp-autonav-endscreen-link-container"),"click",this.fP);this.F.rb(this.container.element,this,115127);this.F.rb(this.j.Da("ytp-autonav-endscreen-link-container"),this,115128);this.overlay=new g.V({G:"div",K:"ytp-autonav-overlay"});g.D(this,this.overlay);this.overlay.Ea(this.container.element);this.u=new g.V({G:"div",K:"ytp-autonav-endscreen-button-container"});
g.D(this,this.u);this.u.Ea(this.container.element);this.cancelButton=new g.V({G:"button",Ha:["ytp-autonav-endscreen-upnext-button","ytp-autonav-endscreen-upnext-cancel-button",b.S("web_modern_buttons")?"ytp-autonav-endscreen-upnext-button-rounded":""],X:{"aria-label":"Cancelar reproducci\u00f3n autom\u00e1tica"},qa:"Cancelar"});g.D(this,this.cancelButton);this.cancelButton.Ea(this.u.element);this.cancelButton.Qa("click",this.aY,this);this.F.rb(this.cancelButton.element,this,115129);this.playButton=
new g.V({G:"a",Ha:["ytp-autonav-endscreen-upnext-button","ytp-autonav-endscreen-upnext-play-button",b.S("web_modern_buttons")?"ytp-autonav-endscreen-upnext-button-rounded":""],X:{href:"{{url}}",role:"button","aria-label":"Reproducir siguiente v\u00eddeo"},qa:"Ver ahora"});g.D(this,this.playButton);this.playButton.Ea(this.u.element);this.playButton.Qa("click",this.fP,this);this.F.rb(this.playButton.element,this,115130);this.C=new g.fo(function(){icb(c)},500);
g.D(this,this.C);this.eP();this.N(a,"autonavvisibility",this.eP);this.F.S("web_autonav_color_transition")&&(this.N(a,"autonavchange",this.ZX),this.N(a,"onAutonavCoundownStarted",this.P3))},F5=function(a){var b=a.F.Xj(!0,a.F.isFullscreen());
g.ro(a.container.element,"ytp-autonav-endscreen-small-mode",a.Sg(b));g.ro(a.container.element,"ytp-autonav-endscreen-is-premium",!!a.suggestion&&!!a.suggestion.QG);g.ro(a.F.getRootNode(),"ytp-autonav-endscreen-cancelled-state",!a.F.Bf());g.ro(a.F.getRootNode(),"countdown-running",a.ek());g.ro(a.container.element,"ytp-player-content",a.F.Bf());g.Cl(a.overlay.element,{width:b.width+"px"});if(!a.ek()){a.F.Bf()?jcb(a,Math.round(kcb(a)/1E3)):jcb(a);b=!!a.suggestion&&!!a.suggestion.Lq;var c=a.F.Bf()||!b;
g.ro(a.container.element,"ytp-autonav-endscreen-upnext-alternative-header-only",!c&&b);g.ro(a.container.element,"ytp-autonav-endscreen-upnext-no-alternative-header",c&&!b);g.oN(a.u,a.F.Bf());g.ro(a.element,"ytp-enable-w2w-color-transitions",lcb(a))}},icb=function(a){var b=kcb(a),c=Math,d=c.min;
var e=a.B?Date.now()-a.B:0;c=d.call(c,e,b);jcb(a,Math.ceil((b-c)/1E3));500>=b-c&&a.ek()?a.select(!0):a.ek()&&a.C.start()},kcb=function(a){if(a.F.isFullscreen()){var b;
a=null==(b=a.F.getVideoData())?void 0:b.nz;return-1===a||void 0===a?8E3:a}return 0<=a.F.jr()?a.F.jr():g.FG(a.F.V().experiments,"autoplay_time")||1E4},lcb=function(a){var b;
return!(null==(b=a.F.getVideoData())||!b.watchToWatchTransitionRenderer)},jcb=function(a,b){b=void 0===b?-1:b;
a=a.j.Da("ytp-autonav-endscreen-upnext-header");g.Ke(a);if(0<=b){b=String(b);var c="A continuaci\u00f3n en $SECONDS".match(RegExp("\\$SECONDS","gi"))[0],d="A continuaci\u00f3n en $SECONDS".indexOf(c);if(0<=d){a.appendChild(g.Ie("A continuaci\u00f3n en $SECONDS".slice(0,d)));var e=g.He("span");g.lo(e,"ytp-autonav-endscreen-upnext-header-countdown-number");g.Pe(e,b);a.appendChild(e);a.appendChild(g.Ie("A continuaci\u00f3n en $SECONDS".slice(d+c.length)));return}}g.Pe(a,"Siguiente")},G5=function(a,b){g.V.call(this,
{G:"div",
Ha:["html5-endscreen","ytp-player-content",b||"base-endscreen"]});this.created=!1;this.player=a},H5=function(a){g.V.call(this,{G:"div",
Ha:["ytp-upnext","ytp-player-content"],X:{"aria-label":"{{aria_label}}"},W:[{G:"div",K:"ytp-cued-thumbnail-overlay-image",X:{style:"{{background}}"}},{G:"span",K:"ytp-upnext-top",W:[{G:"span",K:"ytp-upnext-header",qa:"Siguiente"},{G:"span",K:"ytp-upnext-title",qa:"{{title}}"},{G:"span",K:"ytp-upnext-author",qa:"{{author}}"}]},{G:"a",K:"ytp-upnext-autoplay-icon",X:{role:"button",href:"{{url}}","aria-label":"Reproducir siguiente v\u00eddeo"},W:[{G:"svg",X:{height:"100%",version:"1.1",viewBox:"0 0 72 72",
width:"100%"},W:[{G:"circle",K:"ytp-svg-autoplay-circle",X:{cx:"36",cy:"36",fill:"#fff","fill-opacity":"0.3",r:"31.5"}},{G:"circle",K:"ytp-svg-autoplay-ring",X:{cx:"-36",cy:"36","fill-opacity":"0",r:"33.5",stroke:"#FFFFFF","stroke-dasharray":"211","stroke-dashoffset":"-211","stroke-width":"4",transform:"rotate(-90)"}},{G:"path",K:"ytp-svg-fill",X:{d:"M 24,48 41,36 24,24 V 48 z M 44,24 v 24 h 4 V 24 h -4 z"}}]}]},{G:"span",K:"ytp-upnext-bottom",W:[{G:"span",K:"ytp-upnext-cancel"},{G:"span",K:"ytp-upnext-paused",
qa:"La reproducci\u00f3n autom\u00e1tica est\u00e1 en pausa"}]}]});this.api=a;this.cancelButton=null;this.D=this.Da("ytp-svg-autoplay-ring");this.B=this.notification=this.j=this.suggestion=null;this.C=new g.fo(this.dE,5E3,this);this.u=0;var b=this.Da("ytp-upnext-cancel");this.cancelButton=new g.V({G:"button",Ha:["ytp-upnext-cancel-button","ytp-button"],X:{tabindex:"0","aria-label":"Cancelar reproducci\u00f3n autom\u00e1tica"},qa:"Cancelar"});g.D(this,this.cancelButton);this.cancelButton.Qa("click",
this.bY,this);this.cancelButton.Ea(b);this.cancelButton&&this.api.rb(this.cancelButton.element,this,115129);g.D(this,this.C);this.api.rb(this.element,this,18788);b=this.Da("ytp-upnext-autoplay-icon");this.N(b,"click",this.cY);this.api.rb(b,this,115130);this.gP();this.N(a,"autonavvisibility",this.gP);this.N(a,"mdxnowautoplaying",this.A4);this.N(a,"mdxautoplaycanceled",this.B4);g.ro(this.element,"ytp-upnext-mobile",this.api.V().isMobile)},mcb=function(a,b){if(b)return b;
if(a.api.isFullscreen()){var c;a=null==(c=a.api.getVideoData())?void 0:c.nz;return-1===a||void 0===a?8E3:a}return 0<=a.api.jr()?a.api.jr():g.FG(a.api.V().experiments,"autoplay_time")||1E4},ncb=function(a,b){b=mcb(a,b);
var c=Math,d=c.min;var e=(0,g.O)()-a.u;c=d.call(c,e,b);b=0===b?1:Math.min(c/b,1);a.D.setAttribute("stroke-dashoffset",""+-211*(b+1));1<=b&&a.ek()&&3!==a.api.getPresentingPlayerType()?a.select(!0):a.ek()&&a.j.start()},I5=function(a){G5.call(this,a,"autonav-endscreen");
this.overlay=this.videoData=null;this.table=new g.V({G:"div",K:"ytp-suggestion-panel",W:[{G:"div",Ha:["ytp-autonav-endscreen-upnext-header","ytp-autonav-endscreen-more-videos"],qa:"M\u00e1s v\u00eddeos"}]});this.J=new g.V({G:"div",K:"ytp-suggestions-container"});this.videos=[];this.B=null;this.D=this.I=!1;this.u=new E5(this.player);g.D(this,this.u);this.u.Ea(this.element);a.getVideoData().uc?this.j=this.u:(this.j=new H5(a),g.yQ(this.player,this.j.element,4),g.D(this,this.j));this.overlay=new g.V({G:"div",
K:"ytp-autonav-overlay-cancelled-state"});g.D(this,this.overlay);this.overlay.Ea(this.element);this.C=new g.GF(this);g.D(this,this.C);g.D(this,this.table);this.table.Ea(this.element);this.table.show();g.D(this,this.J);this.J.Ea(this.table.element);this.hide()},J5=function(a){var b=a.Bf();
b!==a.D&&(a.D=b,a.player.ma("autonavvisibility"),a.D?(a.u!==a.j&&a.u.hide(),a.table.hide()):(a.u!==a.j&&a.u.show(),a.table.show()))},K5=function(a,b){g.V.call(this,{G:"button",
Ha:["ytp-watch-on-youtube-button","ytp-button"],qa:"{{content}}"});this.F=a;this.buttonType=this.buttonType=b;b=this.F.getVideoData();if(a.S("embeds_enable_server_driven_watch_again_on_youtube")){var c,d;if(c=(a=null==(c=b.watchNextResponse)?void 0:null==(d=c.playerOverlays)?void 0:d.playerOverlayRenderer)&&g.N(a.watchOnYoutubeButton,g.YJa))this.j=c}if(this.j)this.update({content:this.j.title}),this.F.xg(this.element,this),this.F.kh(this.element,this.j.trackingParams||null);else{switch(this.buttonType){case 1:c=
"Ver otra vez en YouTube";d=156915;break;case 2:c="Seguir reproduciendo en YouTube";d=156942;break;default:c="Seguir reproduciendo en YouTube",d=156942}this.update({content:c});this.F.rb(this.element,this,d)}2===this.buttonType&&g.no(this.element,"ytp-continue-watching-button");this.Qa("click",this.onClick);g.oN(this,!0)},L5=function(a,b){G5.call(this,a,"embeds-lite-endscreen");
this.F=a;this.j=b;this.F.rb(this.element,this,156943);this.watchButton=new K5(a,2);g.D(this,this.watchButton);this.watchButton.Ea(this.element);this.hide()},ocb=function(a){G5.call(this,a,"subscribecard-endscreen");
this.j=new g.V({G:"div",K:"ytp-subscribe-card",W:[{G:"img",K:"ytp-author-image",X:{src:"{{profilePicture}}"}},{G:"div",K:"ytp-subscribe-card-right",W:[{G:"div",K:"ytp-author-name",qa:"{{author}}"},{G:"div",K:"html5-subscribe-button-container"}]}]});g.D(this,this.j);this.j.Ea(this.element);var b=a.getVideoData();this.subscribeButton=new g.kS("Suscribirme",null,"Anular suscripci\u00f3n",null,!0,!1,b.Fl,b.subscribed,"trailer-endscreen",null,null,a);g.D(this,this.subscribeButton);this.subscribeButton.Ea(this.j.Da("html5-subscribe-button-container"));
this.N(a,"videodatachange",this.La);this.La();this.hide()},M5=function(a){var b=a.V(),c=g.JF||g.zH?{style:"will-change: opacity"}:void 0,d=b.j,e=["ytp-videowall-still"];
b.isMobile&&e.push("ytp-videowall-show-text");g.V.call(this,{G:"a",Ha:e,X:{href:"{{url}}",target:d?b.T:"","aria-label":"{{aria_label}}","data-is-live":"{{is_live}}","data-is-list":"{{is_list}}","data-is-mix":"{{is_mix}}"},W:[{G:"div",K:"ytp-videowall-still-image",X:{style:"{{background}}"}},{G:"span",K:"ytp-videowall-still-info",X:{"aria-hidden":"true"},W:[{G:"span",K:"ytp-videowall-still-info-bg",W:[{G:"span",K:"ytp-videowall-still-info-content",X:c,W:[{G:"span",K:"ytp-videowall-still-info-title",
qa:"{{title}}"},{G:"span",K:"ytp-videowall-still-info-author",qa:"{{author_and_views}}"},{G:"span",K:"ytp-videowall-still-info-live",qa:"En directo"},{G:"span",K:"ytp-videowall-still-info-duration",qa:"{{duration}}"}]}]}]},{G:"span",Ha:["ytp-videowall-still-listlabel-regular","ytp-videowall-still-listlabel"],X:{"aria-hidden":"true"},W:[{G:"span",K:"ytp-videowall-still-listlabel-icon"},"Lista de reproducci\u00f3n",{G:"span",K:"ytp-videowall-still-listlabel-length",W:[" (",{G:"span",qa:"{{playlist_length}}"},
")"]}]},{G:"span",Ha:["ytp-videowall-still-listlabel-mix","ytp-videowall-still-listlabel"],X:{"aria-hidden":"true"},W:[{G:"span",K:"ytp-videowall-still-listlabel-mix-icon"},"Mix",{G:"span",K:"ytp-videowall-still-listlabel-length",qa:" (50+)"}]}]});this.suggestion=null;this.u=d;this.api=a;this.j=new g.GF(this);g.D(this,this.j);this.Qa("click",this.onClick);this.Qa("keypress",this.onKeyPress);this.j.N(a,"videodatachange",this.onVideoDataChange);a.xg(this.element,this);this.onVideoDataChange()},N5=function(a){G5.call(this,
a,"videowall-endscreen");
var b=this;this.F=a;this.B=0;this.stills=[];this.C=this.videoData=null;this.D=this.J=!1;this.T=null;this.u=new g.GF(this);g.D(this,this.u);this.Z=a.S("web_rounded_thumbnails");this.I=new g.fo(function(){g.no(b.element,"ytp-show-tiles")},0);
g.D(this,this.I);var c=new g.V({G:"button",Ha:["ytp-button","ytp-endscreen-previous"],X:{"aria-label":"Anterior"},W:[g.tN()]});g.D(this,c);c.Ea(this.element);c.Qa("click",this.gY,this);this.table=new g.lN({G:"div",K:"ytp-endscreen-content"});g.D(this,this.table);this.table.Ea(this.element);c=new g.V({G:"button",Ha:["ytp-button","ytp-endscreen-next"],X:{"aria-label":"Siguiente"},W:[g.uN()]});g.D(this,c);c.Ea(this.element);c.Qa("click",this.fY,this);a.getVideoData().uc?this.j=new E5(a,!0):this.j=new H5(a);
g.D(this,this.j);g.yQ(this.player,this.j.element,4);a.rb(this.element,this,158789);this.hide()},O5=function(a){return g.zQ(a.player)&&a.Xz()&&!a.C},pcb=function(a){var b,c,d,e;
return(null==(b=a.videoData)?0:null==(c=b.suggestions)?0:c.length)?null==(d=a.videoData)?void 0:d.suggestions:[null==(e=a.videoData)?void 0:g.$I(e)]},P5=function(a){var b=a.Bf();
b!==a.J&&(a.J=b,a.player.ma("autonavvisibility"))},Q5=function(a){G5.call(this,a,"watch-again-on-youtube-endscreen");
this.watchButton=new K5(a,1);g.D(this,this.watchButton);this.watchButton.Ea(this.element);g.u4a(a)&&(this.j=new g.B2(a,g.gQ(a)),g.D(this,this.j),this.u=new g.V({G:"div",Ha:["ytp-watch-again-on-youtube-endscreen-more-videos-container"],X:{tabIndex:"-1"},W:[this.j]}),g.D(this,this.u),this.j.Ea(this.u.element),this.u.Ea(this.element));a.rb(this.element,this,156914);this.hide()},tcb=function(a){g.gR.call(this,a);
var b=this;this.endScreen=null;this.u=this.j=this.B=this.C=!1;this.listeners=new g.GF(this);g.D(this,this.listeners);var c=a.V(),d=a.getVideoData();d=d&&0!==d.endSeconds;if(g.$w(g.TH(c))&&d&&!g.vQ(a))this.u=!0,this.endScreen=new L5(a,g.gQ(a));else{var e;(null==(e=g.gQ(a))?0:e.dk())?this.endScreen=new Q5(a):qcb(a)?(this.C=!0,rcb(this),this.j?this.endScreen=new I5(a):this.endScreen=new N5(a)):c.Kg?this.endScreen=new ocb(a):this.endScreen=new G5(a)}g.D(this,this.endScreen);g.yQ(a,this.endScreen.element,
4);scb(this);this.listeners.N(a,"videodatachange",this.onVideoDataChange,this);this.listeners.N(a,g.HB("endscreen"),function(f){b.onCueRangeEnter(f)});
this.listeners.N(a,g.IB("endscreen"),function(f){b.onCueRangeExit(f)})},rcb=function(a){var b=a.player.getVideoData();
if(!b||a.j===b.Sd&&a.B===b.uc)return!1;a.j=b.Sd;a.B=b.uc;return!0},qcb=function(a){a=a.V();
return a.td&&!a.Kg},scb=function(a){a.player.Mf("endscreen");
var b=a.player.getVideoData();b=new g.FB(Math.max(1E3*(b.lengthSeconds-10),0),0x8000000000000,{id:"preload",namespace:"endscreen"});var c=new g.FB(0x8000000000000,0x8000000000000,{id:"load",priority:8,namespace:"endscreen"});a.player.De([b,c])};
g.qV.prototype.Jy=g.ba(37,function(a){this.AM!==a&&(this.AM=a,this.Hk())});
g.aT.prototype.qq=g.ba(36,function(a){this.u!==a&&(this.u=a,this.La())});
g.qV.prototype.qq=g.ba(35,function(a){this.shareButton&&this.shareButton.qq(a)});
g.QS.prototype.oq=g.ba(34,function(a){this.j!==a&&(this.j=a,this.La())});
g.qV.prototype.oq=g.ba(33,function(a){this.overflowButton&&this.overflowButton.oq(a)});
g.WR.prototype.CC=g.ba(32,function(a){this.BM!==a&&(this.BM=a,this.Ko())});
g.rQ.prototype.jr=g.ba(6,function(){return this.app.jr()});
g.sZ.prototype.jr=g.ba(5,function(){return this.getVideoData().EO});g.w(D5,g.V);D5.prototype.select=function(){this.F.Xm(this.suggestion.videoId,this.suggestion.sessionData,this.suggestion.playlistId,void 0,void 0,this.suggestion.uA||void 0)&&this.F.sb(this.element)};
D5.prototype.onClick=function(a){g.HR(a,this.F,this.j,this.suggestion.sessionData||void 0)&&this.select()};
D5.prototype.onKeyPress=function(a){switch(a.keyCode){case 13:case 32:g.yz(a)||(this.select(),g.xz(a))}};g.w(E5,g.V);g.k=E5.prototype;g.k.kD=function(a){this.suggestion!==a&&(this.suggestion=a,C5(this.j,a),this.playButton.updateValue("url",this.suggestion.Un()),F5(this))};
g.k.ek=function(){return 0<this.B};
g.k.Qy=function(){this.ek()||(this.B=Date.now(),icb(this),hcb(this.F,kcb(this)),g.ro(this.F.getRootNode(),"countdown-running",this.ek()))};
g.k.Uu=function(){this.uq();icb(this);var a=this.j.Da("ytp-autonav-endscreen-upnext-header");a&&g.Pe(a,"Siguiente")};
g.k.uq=function(){this.ek()&&(this.C.stop(),this.B=0)};
g.k.select=function(a){this.F.nextVideo(!1,void 0===a?!1:a);this.uq()};
g.k.fP=function(a){g.HR(a,this.F)&&(a.currentTarget===this.playButton.element?this.F.sb(this.playButton.element):a.currentTarget===this.j.Da("ytp-autonav-endscreen-link-container")&&(a=this.j.Da("ytp-autonav-endscreen-link-container"),this.F.Ta(a,!0),this.F.sb(a)),this.select())};
g.k.aY=function(){this.F.sb(this.cancelButton.element);g.tQ(this.F,!0);this.D&&this.F.Oa("innertubeCommand",this.D)};
g.k.onVideoDataChange=function(a,b){var c;this.D=null==(c=b.bP)?void 0:c.command};
g.k.P3=function(a){if(lcb(this)){var b=this.F.getVideoData().watchToWatchTransitionRenderer,c=null==b?void 0:b.fromColorPaletteDark;b=null==b?void 0:b.toColorPaletteDark;if(c&&b){var d=this.element;d.style.setProperty("--w2w-start-background-color",g.BO(c.surgeColor));d.style.setProperty("--w2w-start-primary-text-color",g.BO(c.primaryTitleColor));d.style.setProperty("--w2w-start-secondary-text-color",g.BO(c.secondaryTitleColor));d.style.setProperty("--w2w-end-background-color",g.BO(b.surgeColor));
d.style.setProperty("--w2w-end-primary-text-color",g.BO(b.primaryTitleColor));d.style.setProperty("--w2w-end-secondary-text-color",g.BO(b.secondaryTitleColor));d.style.setProperty("--w2w-animation-duration",a+"ms")}g.ro(this.element,"ytp-w2w-animate",!0)}};
g.k.ZX=function(a){this.F.S("web_autonav_color_transition")&&2!==a&&g.ro(this.element,"ytp-w2w-animate",!1)};
g.k.eP=function(){var a=this.F.Bf();this.I&&this.ub!==a&&g.oN(this,a);F5(this);this.F.Ta(this.container.element,a);this.F.Ta(this.cancelButton.element,a);this.F.Ta(this.j.Da("ytp-autonav-endscreen-link-container"),a);this.F.Ta(this.playButton.element,a)};
g.k.Sg=function(a){return 400>a.width||459>a.height};g.w(G5,g.V);g.k=G5.prototype;g.k.create=function(){this.created=!0};
g.k.destroy=function(){this.created=!1};
g.k.Xz=function(){return!1};
g.k.Bf=function(){return!1};
g.k.mT=function(){return!1};g.w(H5,g.V);g.k=H5.prototype;g.k.dE=function(){this.notification&&(this.C.stop(),this.Dc(this.B),this.B=null,this.notification.close(),this.notification=null)};
g.k.kD=function(a){this.suggestion=a;C5(this,a,"hqdefault.jpg")};
g.k.gP=function(){g.oN(this,this.api.Bf());this.api.Ta(this.element,this.api.Bf());this.api.Ta(this.Da("ytp-upnext-autoplay-icon"),this.api.Bf());this.cancelButton&&this.api.Ta(this.cancelButton.element,this.api.Bf())};
g.k.J4=function(){window.focus();this.dE()};
g.k.Qy=function(a){var b=this;this.ek()||(g.Nz("a11y-announce","Siguiente "+this.suggestion.title),this.u=(0,g.O)(),this.j=new g.fo(function(){ncb(b,a)},25),ncb(this,a),hcb(this.api,mcb(this,a)));
g.po(this.element,"ytp-upnext-autoplay-paused")};
g.k.hide=function(){g.V.prototype.hide.call(this)};
g.k.ek=function(){return!!this.j};
g.k.Uu=function(){this.uq();this.u=(0,g.O)();ncb(this);g.no(this.element,"ytp-upnext-autoplay-paused")};
g.k.uq=function(){this.ek()&&(this.j.dispose(),this.j=null)};
g.k.select=function(a){a=void 0===a?!1:a;if(this.api.V().S("autonav_notifications")&&a&&window.Notification&&"function"===typeof document.hasFocus){var b=Notification.permission;"default"===b?Notification.requestPermission():"granted"!==b||document.hasFocus()||(this.dE(),this.notification=new Notification("Siguiente",{body:this.suggestion.title,icon:this.suggestion.Uf()}),this.B=this.N(this.notification,"click",this.J4),this.C.start())}this.uq();this.api.nextVideo(!1,a)};
g.k.cY=function(a){!g.Oe(this.cancelButton.element,g.tz(a))&&g.HR(a,this.api)&&(this.api.Bf()&&this.api.sb(this.Da("ytp-upnext-autoplay-icon")),this.select())};
g.k.bY=function(){this.api.Bf()&&this.cancelButton&&this.api.sb(this.cancelButton.element);g.tQ(this.api,!0)};
g.k.A4=function(a){this.api.getPresentingPlayerType();this.show();this.Qy(a)};
g.k.B4=function(){this.api.getPresentingPlayerType();this.uq();this.hide()};
g.k.ra=function(){this.uq();this.dE();g.V.prototype.ra.call(this)};g.w(I5,G5);g.k=I5.prototype;g.k.create=function(){G5.prototype.create.call(this);this.C.N(this.player,"appresize",this.Bz);this.C.N(this.player,"onVideoAreaChange",this.Bz);this.C.N(this.player,"videodatachange",this.onVideoDataChange);this.C.N(this.player,"autonavchange",this.hP);this.C.N(this.player,"autonavcancel",this.dY);this.onVideoDataChange()};
g.k.show=function(){G5.prototype.show.call(this);(this.I||this.B&&this.B!==this.videoData.clientPlaybackNonce)&&g.tQ(this.player,!1);g.zQ(this.player)&&this.Xz()&&!this.B?(J5(this),2===this.videoData.autonavState?this.player.V().S("fast_autonav_in_background")&&3===this.player.getVisibilityState()?this.j.select(!0):this.j.Qy():3===this.videoData.autonavState&&this.j.Uu()):(g.tQ(this.player,!0),J5(this));this.Bz()};
g.k.hide=function(){G5.prototype.hide.call(this);this.j.Uu();J5(this)};
g.k.Bz=function(){var a=this.player.Xj(!0,this.player.isFullscreen());J5(this);F5(this.u);g.ro(this.element,"ytp-autonav-cancelled-small-mode",this.Sg(a));g.ro(this.element,"ytp-autonav-cancelled-tiny-mode",this.pF(a));g.ro(this.element,"ytp-autonav-cancelled-mini-mode",400>=a.width||360>=a.height);this.overlay&&g.Cl(this.overlay.element,{width:a.width+"px"});if(!this.D){a=g.t(this.videos.entries());for(var b=a.next();!b.done;b=a.next()){var c=g.t(b.value);b=c.next().value;c=c.next().value;g.ro(c.element,
"ytp-suggestion-card-with-margin",1===b%2)}}};
g.k.onVideoDataChange=function(){var a=this.player.getVideoData();if(this.videoData!==a&&a){this.videoData=a;if((a=this.videoData.suggestions)&&a.length){var b=g.$I(this.videoData);b&&(this.j.kD(b),this.j!==this.u&&this.u.kD(b));for(b=0;b<ucb.length;++b){var c=ucb[b];if(a&&a[c]){this.videos[b]=new D5(this.player);var d=this.videos[b];c=a[c];d.suggestion!==c&&(d.suggestion=c,C5(d,c));g.D(this,this.videos[b]);this.videos[b].Ea(this.J.element)}}}this.Bz()}};
g.k.hP=function(a){1===a?(this.I=!1,this.B=this.videoData.clientPlaybackNonce,this.j.uq(),this.ub&&this.Bz()):(this.I=!0,this.Bf()&&(2===a?this.j.Qy():3===a&&this.j.Uu()))};
g.k.dY=function(a){a?this.hP(1):(this.B=null,this.I=!1)};
g.k.Xz=function(){return 1!==this.videoData.autonavState};
g.k.Sg=function(a){return(910>a.width||459>a.height)&&!this.pF(a)&&!(400>=a.width||360>=a.height)};
g.k.pF=function(a){return 800>a.width&&!(400>=a.width||360>=a.height)};
g.k.Bf=function(){return this.ub&&g.zQ(this.player)&&this.Xz()&&!this.B};
var ucb=[1,3,2,4];g.w(K5,g.V);g.k=K5.prototype;g.k.onClick=function(a){this.j?this.F.Oa("innertubeCommand",this.j.onTap):g.IR(this.getVideoUrl(),this.F,a);this.F.sb(this.element)};
g.k.getVideoUrl=function(){var a=!0;switch(this.buttonType){case 1:a=!0;break;case 2:a=!1}a=this.F.getVideoUrl(a,!1,!1,!0);var b=this.F.V();if(g.BH(b)||g.LH(b)){var c={};b.Ka&&g.BH(b)&&g.UP(c,b.loaderUrl);g.BH(b)&&g.dQ(this.F,"addEmbedsConversionTrackingParams",[c]);a:{switch(this.buttonType){case 2:b="emb_ytp_continue_watching";break a}b="emb_ytp_watch_again"}g.TP(c,b);a=g.ai(a,c)}return a};
g.k.Ta=function(){this.F.Ta(this.element,this.ub&&this.ya)};
g.k.show=function(){g.V.prototype.show.call(this);this.Ta()};
g.k.hide=function(){g.V.prototype.hide.call(this);this.Ta()};
g.k.hc=function(a){g.V.prototype.hc.call(this,a);this.Ta()};g.w(L5,G5);L5.prototype.show=function(){3!==this.player.getPlayerState()&&(G5.prototype.show.call(this),this.j.Jy(!0),this.j.qq(!0),this.F.V().Gl||this.j.oq(!0),this.F.Ta(this.element,!0),this.watchButton.hc(!0))};
L5.prototype.hide=function(){G5.prototype.hide.call(this);this.j.Jy(!1);this.j.qq(!1);this.j.oq(!1);this.F.Ta(this.element,!1);this.watchButton.hc(!1)};g.w(ocb,G5);ocb.prototype.La=function(){var a=this.player.getVideoData();this.j.update({profilePicture:a.profilePicture,author:a.author});this.subscribeButton.channelId=a.Fl;var b=this.subscribeButton;a.subscribed?b.j():b.u()};g.w(M5,g.V);M5.prototype.select=function(){this.api.Xm(this.suggestion.videoId,this.suggestion.sessionData,this.suggestion.playlistId,void 0,void 0,this.suggestion.uA||void 0)&&this.api.sb(this.element)};
M5.prototype.onClick=function(a){g.HR(a,this.api,this.u,this.suggestion.sessionData||void 0)&&this.select()};
M5.prototype.onKeyPress=function(a){switch(a.keyCode){case 13:case 32:g.yz(a)||(this.select(),g.xz(a))}};
M5.prototype.onVideoDataChange=function(){var a=this.api.getVideoData(),b=this.api.V();this.u=a.D?!1:b.j};g.w(N5,G5);g.k=N5.prototype;g.k.create=function(){G5.prototype.create.call(this);var a=this.player.getVideoData();a&&(this.videoData=a);this.To();this.u.N(this.player,"appresize",this.To);this.u.N(this.player,"onVideoAreaChange",this.To);this.u.N(this.player,"videodatachange",this.onVideoDataChange);this.u.N(this.player,"autonavchange",this.JH);this.u.N(this.player,"autonavcancel",this.eY);a=this.videoData.autonavState;a!==this.T&&this.JH(a);this.u.N(this.element,"transitionend",this.W5)};
g.k.destroy=function(){g.HA(this.u);g.$a(this.stills);this.stills=[];G5.prototype.destroy.call(this);g.po(this.element,"ytp-show-tiles");this.I.stop();this.T=this.videoData.autonavState};
g.k.Xz=function(){return 1!==this.videoData.autonavState};
g.k.show=function(){var a=this.ub;G5.prototype.show.call(this);pcb(this);g.po(this.element,"ytp-show-tiles");this.player.V().isMobile?g.ho(this.I):this.I.start();(this.D||this.C&&this.C!==this.videoData.clientPlaybackNonce)&&g.tQ(this.player,!1);O5(this)?(P5(this),2===this.videoData.autonavState?this.player.V().S("fast_autonav_in_background")&&3===this.player.getVisibilityState()?this.j.select(!0):this.j.Qy():3===this.videoData.autonavState&&this.j.Uu()):(g.tQ(this.player,!0),P5(this));a!==this.ub&&
this.player.Ta(this.element,!0)};
g.k.hide=function(){var a=this.ub;G5.prototype.hide.call(this);this.j.Uu();P5(this);a!==this.ub&&this.player.Ta(this.element,!1)};
g.k.W5=function(a){g.tz(a)===this.element&&this.To()};
g.k.To=function(){var a=pcb(this);if(a.length){g.no(this.element,"ytp-endscreen-paginate");var b=this.F.Xj(!0,this.F.isFullscreen()),c=g.gQ(this.F);c&&(c=c.Wf()?48:32,b.width-=2*c);var d=b.width/b.height,e=96/54,f=c=2,h=Math.max(b.width/96,2),l=Math.max(b.height/54,2),m=a.length,n=Math.pow(2,2);var p=m*n+(Math.pow(2,2)-n);p+=Math.pow(2,2)-n;for(p-=n;0<p&&(c<h||f<l);){var q=c/2,r=f/2,v=c<=h-2&&p>=r*n,x=f<=l-2&&p>=q*n;if((q+1)/r*e/d>d/(q/(r+1)*e)&&x)p-=q*n,f+=2;else if(v)p-=r*n,c+=2;else if(x)p-=q*
n,f+=2;else break}e=!1;p>=3*n&&6>=m*n-p&&(4<=f||4<=c)&&(e=!0);n=96*c;p=54*f;d=n/p<d?b.height/p:b.width/n;d=Math.min(d,2);n=Math.floor(Math.min(b.width,n*d));p=Math.floor(Math.min(b.height,p*d));b=this.table.element;b.ariaLive="polite";g.Ml(b,n,p);g.Cl(b,{marginLeft:n/-2+"px",marginTop:p/-2+"px"});this.j.kD(g.$I(this.videoData));this.j instanceof E5&&F5(this.j);g.ro(this.element,"ytp-endscreen-takeover",O5(this));P5(this);n+=4;p+=4;d=0;b.ariaBusy="true";for(h=0;h<c;h++)for(l=0;l<f;l++)if(q=d,v=0,e&&
h>=c-2&&l>=f-2?v=1:0===l%2&&0===h%2&&(2>l&&2>h?0===l&&0===h&&(v=2):v=2),q=g.be(q+this.B,m),0!==v){r=this.stills[d];r||(r=new M5(this.player),this.stills[d]=r,b.appendChild(r.element));x=Math.floor(p*l/f);var z=Math.floor(n*h/c),B=Math.floor(p*(l+v)/f)-x-4,E=Math.floor(n*(h+v)/c)-z-4;g.Il(r.element,z,x);g.Ml(r.element,E,B);g.Cl(r.element,"transitionDelay",(l+h)/20+"s");g.ro(r.element,"ytp-videowall-still-mini",1===v);g.ro(r.element,"ytp-videowall-still-large",2<v);this.Z&&(v=Math.max(E,B),g.ro(r.element,
"ytp-videowall-still-round-large",256<=v),g.ro(r.element,"ytp-videowall-still-round-medium",96<v&&256>v),g.ro(r.element,"ytp-videowall-still-round-small",96>=v));q=a[q];r.suggestion!==q&&(r.suggestion=q,v=r.api.V(),x=g.mo(r.element,"ytp-videowall-still-large")?"hqdefault.jpg":"mqdefault.jpg",C5(r,q,x),g.BH(v)&&(x=q.Un(),z={},v.Ka&&g.UP(z,v.loaderUrl),g.dQ(r.api,"addEmbedsConversionTrackingParams",[z]),x=g.ai(x,g.TP(z,"emb_rel_end")),r.updateValue("url",x)),(q=(q=q.sessionData)&&q.itct)&&r.api.kh(r.element,
q));d++}b.ariaBusy="false";g.ro(this.element,"ytp-endscreen-paginate",d<m);for(a=this.stills.length-1;a>=d;a--)c=this.stills[a],g.Me(c.element),g.Za(c);this.stills.length=d}};
g.k.onVideoDataChange=function(){var a=this.player.getVideoData();this.videoData!==a&&(this.B=0,this.videoData=a,this.To())};
g.k.fY=function(){this.B+=this.stills.length;this.To()};
g.k.gY=function(){this.B-=this.stills.length;this.To()};
g.k.mT=function(){return this.j.ek()};
g.k.JH=function(a){1===a?(this.D=!1,this.C=this.videoData.clientPlaybackNonce,this.j.uq(),this.ub&&this.To()):(this.D=!0,this.ub&&O5(this)&&(2===a?this.j.Qy():3===a&&this.j.Uu()))};
g.k.eY=function(a){if(a){for(a=0;a<this.stills.length;a++)this.F.Ta(this.stills[a].element,!0);this.JH(1)}else this.C=null,this.D=!1;this.To()};
g.k.Bf=function(){return this.ub&&O5(this)};g.w(Q5,G5);Q5.prototype.show=function(){if(3!==this.player.getPlayerState()){G5.prototype.show.call(this);var a=this.u;if(a){var b=0<this.j.suggestionData.length;g.ro(this.element,"ytp-shorts-branded-ui",b);b?a.show():a.hide()}var c;null==(c=g.gQ(this.player))||c.CC(!0);this.player.Ta(this.element,!0);this.watchButton.hc(!0)}};
Q5.prototype.hide=function(){G5.prototype.hide.call(this);var a;null==(a=g.gQ(this.player))||a.CC(!1);this.player.Ta(this.element,!1);this.watchButton.hc(!1)};g.w(tcb,g.gR);g.k=tcb.prototype;g.k.yv=function(){var a;if((null==(a=g.gQ(this.player))?0:a.dk())||this.u)return!0;a=this.player.getVideoData();var b;var c=!!((null==a?0:g.$I(a))||(null==a?0:null==(b=a.suggestions)?0:b.length));b=!qcb(this.player)||c;c=a.wj||g.LH(a.u);var d=this.player.FA();a=a.mutedAutoplay;return b&&!c&&!d&&!a};
g.k.Bf=function(){return this.endScreen.Bf()};
g.k.v2=function(){return this.Bf()?this.endScreen.mT():!1};
g.k.ra=function(){this.player.Mf("endscreen");g.gR.prototype.ra.call(this)};
g.k.load=function(){var a=this.player.getVideoData();var b=a.transitionEndpointAtEndOfStream;if(b&&b.videoId){var c=this.player.tb().Re.get("heartbeat"),d=g.$I(a);!d||b.videoId!==d.videoId||a.DI?(this.player.Xm(b.videoId,void 0,void 0,!0,!0,b),c&&c.vF("HEARTBEAT_ACTION_TRIGGER_AT_STREAM_END","HEARTBEAT_ACTION_TRANSITION_REASON_HAS_NEW_STREAM_TRANSITION_ENDPOINT"),a=!0):a=!1}else a=!1;a||(g.gR.prototype.load.call(this),this.endScreen.show())};
g.k.unload=function(){g.gR.prototype.unload.call(this);this.endScreen.hide();this.endScreen.destroy()};
g.k.onCueRangeEnter=function(a){this.yv()&&(this.endScreen.created||this.endScreen.create(),"load"===a.getId()&&this.load())};
g.k.onCueRangeExit=function(a){"load"===a.getId()&&this.loaded&&this.unload()};
g.k.onVideoDataChange=function(){scb(this);this.C&&rcb(this)&&(this.endScreen&&(this.endScreen.hide(),this.endScreen.created&&this.endScreen.destroy(),this.endScreen.dispose()),this.j?this.endScreen=new I5(this.player):this.endScreen=new N5(this.player),g.D(this,this.endScreen),g.yQ(this.player,this.endScreen.element,4))};g.fR("endscreen",tcb);})(_yt_player);
