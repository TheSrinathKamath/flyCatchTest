(self.webpackChunkui=self.webpackChunkui||[]).push([[246],{3246:(t,e,a)=>{"use strict";a.r(e),a.d(e,{FeedModule:()=>w});var i=a(8583),n=a(9763),o=a(5319),s=a(7716),r=a(2340),c=a(1841);let d=(()=>{class t{constructor(t){this._http=t}getFeed(){return this._http.get(`${r.N.feeds}`)}}return t.\u0275fac=function(e){return new(e||t)(s.LFG(c.eN))},t.\u0275prov=s.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var l=a(1094),u=a(4984),p=a(2071),h=a(8545),m=a(3738),g=a(1095);const f=function(t){return["/posts",t]};function Z(t,e){if(1&t){const t=s.EpF();s.TgZ(0,"mat-card",6),s.TgZ(1,"mat-card-header"),s._UZ(2,"div",7),s.TgZ(3,"mat-card-title"),s.TgZ(4,"a",8),s.ALo(5,"titlecase"),s._uU(6),s.ALo(7,"titlecase"),s.qZA(),s.qZA(),s.TgZ(8,"mat-card-subtitle"),s._uU(9),s.qZA(),s.qZA(),s._UZ(10,"img",9),s.TgZ(11,"mat-card-content"),s.TgZ(12,"p",10),s._uU(13),s.qZA(),s.qZA(),s.TgZ(14,"mat-card-actions"),s.TgZ(15,"button",11),s.NdJ("click",function(){const e=s.CHM(t).$implicit;return s.oxw(2).goToPost(e.id)}),s._uU(16,"VIEW"),s.qZA(),s.TgZ(17,"button",12),s._uU(18,"SHARE"),s.qZA(),s.qZA(),s.qZA()}if(2&t){const t=e.$implicit;s.xp6(4),s.s9C("title",s.lcZ(5,5,null==t?null:t.title)),s.Q6J("routerLink",s.VKq(9,f,t.id)),s.xp6(2),s.Oqu(s.lcZ(7,7,null==t?null:t.title)),s.xp6(3),s.hij("By User #",null==t?null:t.userId,""),s.xp6(4),s.hij(" ",null==t?null:t.body," ")}}function v(t,e){if(1&t&&(s.TgZ(0,"cdk-virtual-scroll-viewport",3),s.TgZ(1,"div",4),s.YNc(2,Z,19,11,"mat-card",5),s.qZA(),s.qZA()),2&t){const t=s.oxw();s.xp6(2),s.Q6J("cdkVirtualForOf",t.feed)}}const b=[{path:"",component:(()=>{class t{constructor(t,e,a){this.router=t,this._feed=e,this.snackBar=a,this.subscription=new o.w,this.feed=[],this.isDataLoaded=!1,this.hasAPIFailed=!1}ngOnInit(){this.getFeeds()}ngOnDestroy(){this.subscription.unsubscribe()}getFeeds(){this.subscription.add(this._feed.getFeed().subscribe(t=>{this.feed=t,this.isDataLoaded=!0},t=>{this.isDataLoaded=!0,this.hasAPIFailed=!0,this.snackBar.open(`${null==t?void 0:t.message}`,"OK")}))}goToPost(t){this.router.navigate(["/posts",t])}}return t.\u0275fac=function(e){return new(e||t)(s.Y36(n.F0),s.Y36(d),s.Y36(l.ux))},t.\u0275cmp=s.Xpm({type:t,selectors:[["app-feed"]],decls:4,vars:3,consts:[[3,"isDataLoaded"],[3,"hasAPIFailed"],["itemSize","10","class","vh-80 mt-5",4,"ngIf"],["itemSize","10",1,"vh-80","mt-5"],[1,"row","justify-content-center"],["class","mat-card",4,"cdkVirtualFor","cdkVirtualForOf"],[1,"mat-card"],["mat-card-avatar","",1,"mat-header-image"],[3,"routerLink","title"],["mat-card-image","","src","https://source.unsplash.com/random","alt","Post Image"],[1,"post-body"],["mat-button","",3,"click"],["mat-button",""]],template:function(t,e){1&t&&(s.TgZ(0,"section"),s._UZ(1,"app-spinner",0),s._UZ(2,"app-api-error",1),s.YNc(3,v,3,1,"cdk-virtual-scroll-viewport",2),s.qZA()),2&t&&(s.xp6(1),s.Q6J("isDataLoaded",e.isDataLoaded),s.xp6(1),s.Q6J("hasAPIFailed",e.hasAPIFailed),s.xp6(1),s.Q6J("ngIf",e.isDataLoaded&&!e.hasAPIFailed))},directives:[u.O,p.a,i.O5,h.N7,h.xd,h.x0,m.a8,m.dk,m.kc,m.n5,n.yS,m.$j,m.G2,m.dn,m.hq,g.lW],pipes:[i.rS],styles:[".vh-80[_ngcontent-%COMP%]{height:85vh}.mat-card[_ngcontent-%COMP%]{max-width:400px;margin:5px}.mat-card-title[_ngcontent-%COMP%]{width:300px!important;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.mat-card-image[_ngcontent-%COMP%]{max-height:300px;object-fit:cover}.post-body[_ngcontent-%COMP%]{display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;letter-spacing:.9px;overflow:hidden}.mat-header-image[_ngcontent-%COMP%]{background-image:url(https://i.pravatar.cc/300);background-size:cover}a[_ngcontent-%COMP%]{text-decoration:none!important}a[_ngcontent-%COMP%]:hover{color:#ff4081}"]}),t})()}];let x=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=s.oAB({type:t}),t.\u0275inj=s.cJS({imports:[[n.Bz.forChild(b)],n.Bz]}),t})();var A=a(898),k=a(4466);let w=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=s.oAB({type:t}),t.\u0275inj=s.cJS({imports:[[i.ez,x,k.m,A.q]]}),t})()}}]);