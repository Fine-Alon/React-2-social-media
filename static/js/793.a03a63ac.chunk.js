"use strict";(self.webpackChunk_1_1_app=self.webpackChunk_1_1_app||[]).push([[793],{7716:function(e,n,r){r.r(n),r.d(n,{default:function(){return G}});var t=r(5671),o=r(3144),i=r(136),s=r(516),u=r(2791),l=r(8687),c=r(3349),a="Friends_users_section__QE5cG",f="Friends_ava__2Z1sh",p="Friends_friend__g5k9f",d="Friends_friend_left_side__zxgKj",g="Friends_friend_right_side__kKvGF",h="Friends_friend_right_side_top__-IwWf",P="Friends_friend_right_side_bottom__-LN6M",v=r(6695),_=r(9439),w=r(5987),m="Paginator_currentPage__05pm0",j="Paginator_pages__FyPjw",x="Paginator_paginator_container__IKi6k",y=r(184),C=["portionSize"],F=function(e){for(var n=e.portionSize,r=(0,w.Z)(e,C),t=Math.ceil(r.totalUsersCount/r.countPerPage),o=[],i=1;i<=t;i++)o.push(i);Math.ceil(t/n);var s=(0,u.useState)(1),l=(0,_.Z)(s,2),c=l[0],a=l[1],f=(c-1)*n+1,p=f+n-1;return(0,y.jsxs)("div",{className:x,children:[f>1&&(0,y.jsx)("button",{onClick:function(){a(c-1)},children:"prev"}),(0,y.jsxs)("div",{className:j,children:[o.filter((function(e){return e>=f&&e<=p})).map((function(e){return(0,y.jsxs)("span",{onClick:function(){r.onPageChanged(e)},className:r.currentPage===e?m:"",children:[e,e!==p?",":"..."]})})),(0,y.jsxs)("span",{onClick:function(){r.onPageChanged(t)},className:r.currentPage===t?m:"",children:[" ",t]})]}),p<t&&(0,y.jsx)("button",{onClick:function(){a(c+1)},children:"next"})]})},b=r.p+"static/media/users_ava.07bb4975e4c32fc1a3ea.png",k=r(1087),N=function(e){var n=e.followingProgress,r=e.subscribeFollower,t=e.deleteFollower,o=e.user;return(0,y.jsx)(y.Fragment,{children:(0,y.jsxs)("li",{className:p,children:[(0,y.jsxs)("div",{className:d,children:[(0,y.jsx)(k.OL,{to:"/profile/"+o.id,children:(0,y.jsx)("img",{className:f,src:o.photos.small?o.photos.small:b,alt:"friends"})}),o.followed?(0,y.jsx)("button",{disabled:n.includes(o.id),onClick:function(){t(o.id)},children:"Unfollow"}):(0,y.jsx)("button",{disabled:n.includes(o.id),onClick:function(){r(o.id)},children:"Follow"})]}),(0,y.jsxs)("div",{className:g,children:[(0,y.jsxs)("div",{className:h,children:[(0,y.jsx)("span",{children:o.name}),(0,y.jsx)("p",{children:o.status})]}),(0,y.jsxs)("div",{className:P,children:[(0,y.jsx)("span",{children:"user.location.country"}),(0,y.jsx)("span",{children:"user.location.city"})]})]})]},o.id)})},U=function(e){return(0,y.jsxs)("div",{className:a,children:[(0,y.jsx)("h3",{children:"Users"}),(0,y.jsxs)("ul",{children:[(0,y.jsx)(F,{totalUsersCount:e.totalUsersCount,portionSize:15,countPerPage:e.countPerPage,onPageChanged:e.onPageChanged,currentPage:e.currentPage}),e.isFetching?(0,y.jsx)(v.Z,{width:{width:"120px"}}):e.users.map((function(n){return(0,y.jsx)(N,{user:n,followingProgress:e.followingProgress,subscribeFollower:e.subscribeFollower,deleteFollower:e.deleteFollower})}))]})]})},z=r(7781),S="NOT_FOUND";var Z=function(e,n){return e===n};function A(e,n){var r="object"===typeof n?n:{equalityCheck:n},t=r.equalityCheck,o=void 0===t?Z:t,i=r.maxSize,s=void 0===i?1:i,u=r.resultEqualityCheck,l=function(e){return function(n,r){if(null===n||null===r||n.length!==r.length)return!1;for(var t=n.length,o=0;o<t;o++)if(!e(n[o],r[o]))return!1;return!0}}(o),c=1===s?function(e){var n;return{get:function(r){return n&&e(n.key,r)?n.value:S},put:function(e,r){n={key:e,value:r}},getEntries:function(){return n?[n]:[]},clear:function(){n=void 0}}}(l):function(e,n){var r=[];function t(e){var t=r.findIndex((function(r){return n(e,r.key)}));if(t>-1){var o=r[t];return t>0&&(r.splice(t,1),r.unshift(o)),o.value}return S}return{get:t,put:function(n,o){t(n)===S&&(r.unshift({key:n,value:o}),r.length>e&&r.pop())},getEntries:function(){return r},clear:function(){r=[]}}}(s,l);function a(){var n=c.get(arguments);if(n===S){if(n=e.apply(null,arguments),u){var r=c.getEntries().find((function(e){return u(e.value,n)}));r&&(n=r.value)}c.put(arguments,n)}return n}return a.clearCache=function(){return c.clear()},a}function E(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),t=1;t<n;t++)r[t-1]=arguments[t];return function(){for(var n=arguments.length,t=new Array(n),o=0;o<n;o++)t[o]=arguments[o];var i,s=0,u={memoizeOptions:void 0},l=t.pop();if("object"===typeof l&&(u=l,l=t.pop()),"function"!==typeof l)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof l+"]");var c=u.memoizeOptions,a=void 0===c?r:c,f=Array.isArray(a)?a:[a],p=function(e){var n=Array.isArray(e[0])?e[0]:e;if(!n.every((function(e){return"function"===typeof e}))){var r=n.map((function(e){return"function"===typeof e?"function "+(e.name||"unnamed")+"()":typeof e})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+r+"]")}return n}(t),d=e.apply(void 0,[function(){return s++,l.apply(null,arguments)}].concat(f)),g=e((function(){for(var e=[],n=p.length,r=0;r<n;r++)e.push(p[r].apply(null,arguments));return i=d.apply(null,e)}));return Object.assign(g,{resultFunc:l,memoizedResultFunc:d,dependencies:p,lastResult:function(){return i},recomputations:function(){return s},resetRecomputations:function(){return s=0}}),g}}var O=E(A),q=O((function(e){return e.friendsPage.users}),(function(e){return e.filter((function(e){return!0}))})),M=function(e){return e.friendsPage.countPerPage},R=function(e){return e.friendsPage.totalUsersCount},I=function(e){return e.friendsPage.currentPage},K=function(e){return e.friendsPage.isFetching},L=function(e){return e.friendsPage.followingProgress},D=function(e){(0,i.Z)(r,e);var n=(0,s.Z)(r);function r(){var e;(0,t.Z)(this,r);for(var o=arguments.length,i=new Array(o),s=0;s<o;s++)i[s]=arguments[s];return(e=n.call.apply(n,[this].concat(i))).onPageChanged=function(n){e.props.getUsers(e.props.countPerPage,n)},e}return(0,o.Z)(r,[{key:"componentDidMount",value:function(){this.props.getUsers(this.props.countPerPage,this.props.currentPage)}},{key:"render",value:function(){return(0,y.jsx)(U,{users:this.props.users,totalUsersCount:this.props.totalUsersCount,countPerPage:this.props.countPerPage,onPageChanged:this.onPageChanged,currentPage:this.props.currentPage,followConfirm:this.props.followConfirm,unfollowConfirm:this.props.unfollowConfirm,followed:this.props.followed,isFetching:this.props.isFetching,toggleFollowingProgress:this.props.toggleFollowingProgress,followingProgress:this.props.followingProgress,deleteFollower:this.props.deleteFollower,subscribeFollower:this.props.subscribeFollower})}}]),r}(u.Component),G=(0,z.qC)((0,l.$j)((function(e){return{users:q(e),countPerPage:M(e),totalUsersCount:R(e),currentPage:I(e),isFetching:K(e),followingProgress:L(e)}}),(function(e){return{followConfirm:function(n){e((0,c.Jc)(n))},unfollowConfirm:function(n){e((0,c.cv)(n))},toggleFollowingProgress:function(n,r){e((0,c.lL)(n,r))},getUsers:function(n,r){e((0,c.Rf)(n,r))},deleteFollower:function(n){e((0,c.v7)(n))},subscribeFollower:function(n){e((0,c.bS)(n))}}})))(D)}}]);
//# sourceMappingURL=793.a03a63ac.chunk.js.map