(window.webpackJsonp=window.webpackJsonp||[]).push([[51,21],{130:function(e,a,t){"use strict";var n=t(0),r=t.n(n),l=t(125),c=t(142),o=t(126),m=t(129),i=(t(55),t(3)),s=t(7),u=function(e){var a=e.color,t=void 0===a?"#161F31":a,n=Object(s.a)(e,["color"]);return r.a.createElement("svg",Object(i.a)({width:"13",height:"13",xmlns:"http://www.w3.org/2000/svg"},n),r.a.createElement("path",{d:"M11.807 12.578a.744.744 0 00.547-.224.744.744 0 00.224-.547.698.698 0 00-.234-.537L7.383 6.29l4.96-4.981a.698.698 0 00.235-.538.744.744 0 00-.224-.546.744.744 0 00-.547-.225.698.698 0 00-.537.234L6.29 5.195 1.308.235A.698.698 0 00.77 0a.744.744 0 00-.546.225A.744.744 0 000 .77c0 .215.078.394.234.538l4.961 4.98-4.96 4.98a.698.698 0 00-.235.538c0 .214.075.397.225.547.15.15.332.224.546.224a.698.698 0 00.538-.234l4.98-4.98 4.98 4.98a.698.698 0 00.538.234z",fill:t,"fill-rule":"nonzero"}))};var d=function(){var e,a=Object(m.a)(),t=a.isAnnouncementBarClosed,n=a.closeAnnouncementBar,c=Object(o.useThemeConfig)().announcementBar;if(!c)return null;var i=c.content,s=(c.backgroundColor,c.textColor,c.isCloseable);return!i||s&&t?null:r.a.createElement("div",{className:"announcementBar",role:"banner"},r.a.createElement("div",{className:Object(l.a)("announcementBarContent",(e={},e.announcementBarCloseable=s,e)),dangerouslySetInnerHTML:{__html:i}}),s?r.a.createElement("button",{type:"button",className:"announcementBarClose",onClick:n,"aria-label":"Close"},r.a.createElement(u,{color:"#FFFFFF"})):null)},b=t(149),f=t(144),E=t(131),h=t(145),v=t(138),g=t(139),p=t(150),_=t(141),k=t(140),N=t(56),w=t.n(N),O="right";var j=function(){var e,a,t=Object(o.useThemeConfig)(),c=t.navbar,m=c.items,s=c.hideOnScroll,u=c.style,d=t.colorMode.disableSwitch,N=Object(n.useState)(!1),j=N[0],y=N[1],C=Object(n.useState)(!1),x=C[0],T=C[1],L=Object(E.a)(),B=L.isDarkTheme,F=L.setLightTheme,S=L.setDarkTheme,H=Object(h.a)(s),I=H.navbarRef,A=H.isNavbarVisible;Object(v.a)(j);var M=Object(n.useCallback)((function(){y(!0)}),[y]),U=Object(n.useCallback)((function(){y(!1)}),[y]),D=Object(n.useCallback)((function(e){return e.target.checked?S():F()}),[F,S]),P=Object(g.a)();Object(n.useEffect)((function(){P===g.b.desktop&&y(!1)}),[P]);var R=function(e){return{leftItems:e.filter((function(e){var a;return"left"===(null!==(a=e.position)&&void 0!==a?a:O)})),rightItems:e.filter((function(e){var a;return"right"===(null!==(a=e.position)&&void 0!==a?a:O)}))}}(m),z=R.leftItems,J=R.rightItems;return r.a.createElement("nav",{ref:I,className:Object(l.a)("navbar","navbar--fixed-top",(e={"navbar--dark":"dark"===u,"navbar--primary":"primary"===u,"navbar-sidebar--show":j},e[w.a.navbarHideable]=s,e[w.a.navbarHidden]=!A,e))},r.a.createElement("div",{className:"navbar__inner"},r.a.createElement("div",{className:"navbar__items"},null!=m&&0!==m.length&&r.a.createElement("div",{"aria-label":"Navigation bar toggle",className:"navbar__toggle",role:"button",tabIndex:0,onClick:M,onKeyDown:M},r.a.createElement(k.a,null)),r.a.createElement(_.a,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:Object(l.a)("navbar__title",(a={},a[w.a.hideLogoText]=x,a))}),z.map((function(e,a){return r.a.createElement(p.a,Object(i.a)({},e,{key:a}))}))),r.a.createElement("div",{className:"navbar__items navbar__items--right"},J.map((function(e,a){return r.a.createElement(p.a,Object(i.a)({},e,{key:a}))})),!d&&r.a.createElement(f.a,{className:w.a.displayOnlyInLargeViewport,"aria-label":"Dark mode toggle",checked:B,onChange:D}),r.a.createElement(b.a,{handleSearchBarToggle:T,isSearchBarExpanded:x}))),r.a.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:U}),r.a.createElement("div",{className:"navbar-sidebar"},r.a.createElement("div",{className:"navbar-sidebar__brand"},r.a.createElement(_.a,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:"navbar__title",onClick:U}),!d&&j&&r.a.createElement(f.a,{"aria-label":"Dark mode toggle in sidebar",checked:B,onChange:D})),r.a.createElement("div",{className:"navbar-sidebar__items"},r.a.createElement("div",{className:"menu"},r.a.createElement("ul",{className:"menu__list"},m.map((function(e,a){return r.a.createElement(p.a,Object(i.a)({mobile:!0},e,{onClick:U,key:a}))})))))))},y=t(128),C=t(127),x=t(57),T=t.n(x),L=function(e){var a=e.color,t=void 0===a?"#465282":a,n=Object(s.a)(e,["color"]);return r.a.createElement("svg",Object(i.a)({width:"785",height:"158",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink"},n),r.a.createElement("defs",null,r.a.createElement("path",{d:"M786.344 392.459c-41.822 22.164-258.313 110.84-305.056 135.477-46.742 24.637-72.163 23.812-108.246 6.57-36.082-17.24-267.334-111.664-309.156-131.377-41.822-19.713-42.642-33.657-1.64-49.271C103.25 338.265 332.86 247.94 381.243 229.875c48.383-18.065 65.604-18.065 106.605-2.473 41.003 15.614 256.674 100.996 297.676 115.785 41.002 14.791 42.642 27.912.82 49.273v-.001z",id:"a"}),r.a.createElement("mask",{id:"b",maskContentUnits:"userSpaceOnUse",maskUnits:"objectBoundingBox",x:"0",y:"0",width:"785",height:"331",fill:"#fff"},r.a.createElement("use",{xlinkHref:"#a"}))),r.a.createElement("use",{mask:"url(#b)",xlinkHref:"#a",transform:"translate(-32 -216)",stroke:t,"stroke-width":"4",fill:"none","fill-rule":"evenodd","stroke-dasharray":"3.637"}))};function B(e){var a=e.to,t=e.href,n=e.label,l=e.prependBaseUrlToHref,c=Object(s.a)(e,["to","href","label","prependBaseUrlToHref"]),o=Object(C.a)(a),m=Object(C.a)(t,{forcePrependBaseUrl:!0});return r.a.createElement(y.a,Object(i.a)({className:"footer__link-item"},t?{target:"_blank",rel:"noopener noreferrer",href:l?m:t}:{to:o},c),n)}var F=function(e){var a=e.url,t=e.alt;return r.a.createElement("img",{className:"footer__logo",alt:t,src:a})};var S=function(){var e=Object(o.useThemeConfig)().footer,a=e||{},t=a.copyright,n=a.links,c=void 0===n?[]:n,m=a.logo,i=void 0===m?{}:m,s=Object(C.a)(i.src);return e?r.a.createElement("footer",{className:Object(l.a)("footer",{"footer--dark":"dark"===e.style})},r.a.createElement("div",{className:"container"},r.a.createElement(L,{className:"shape"}),r.a.createElement("img",{src:Object(C.a)("/img/code-2.png"),className:"code",alt:""}),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col--3"},i&&i.src&&r.a.createElement("div",null,i.href?r.a.createElement("a",{href:i.href,target:"_blank",rel:"noopener noreferrer",className:T.a.footerLogoLink},r.a.createElement(F,{alt:i.alt,url:s})):r.a.createElement(F,{alt:i.alt,url:s}))),r.a.createElement("div",{className:"col col--9"},c&&c.length>0&&r.a.createElement("div",{className:"row footer__links"},c.map((function(e,a){return r.a.createElement("div",{key:a,className:"col col--4 footer__col"},null!=e.title?r.a.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?r.a.createElement("ul",{className:"footer__items"},e.items.map((function(e,a){return e.html?r.a.createElement("li",{key:a,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):r.a.createElement("li",{key:e.href||e.to,className:"footer__item"},r.a.createElement(B,e))}))):null)}))))),t?r.a.createElement("div",{className:"footer__copyright",dangerouslySetInnerHTML:{__html:t}}):null)):null},H=t(148),I=t(23),A=t(22),M=t(146);function U(e){var a=Object(A.default)(),t=a.siteConfig,n=a.i18n.currentLocale,l=t.favicon,c=t.themeConfig,m=c.image,s=c.metadatas,u=t.url,d=e.title,b=e.description,f=e.image,E=e.keywords,h=e.permalink,v=e.searchMetadatas,g=Object(o.useTitleFormatter)(d),p=f||m,_=Object(C.a)(p,{absolute:!0}),k=Object(C.a)(l),N=n.split("-")[0];return r.a.createElement(r.a.Fragment,null,r.a.createElement(I.a,null,r.a.createElement("html",{lang:N}),g&&r.a.createElement("title",null,g),g&&r.a.createElement("meta",{property:"og:title",content:g}),l&&r.a.createElement("link",{rel:"shortcut icon",href:k}),b&&r.a.createElement("meta",{name:"description",content:b}),b&&r.a.createElement("meta",{property:"og:description",content:b}),E&&E.length&&r.a.createElement("meta",{name:"keywords",content:E.join(",")}),p&&r.a.createElement("meta",{property:"og:image",content:_}),p&&r.a.createElement("meta",{name:"twitter:image",content:_}),p&&r.a.createElement("meta",{name:"twitter:image:alt",content:"Image for "+g}),h&&r.a.createElement("meta",{property:"og:url",content:u+h}),h&&r.a.createElement("link",{rel:"canonical",href:u+h}),r.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),r.a.createElement("link",{rel:"preconnect",href:"https://fonts.gstatic.com"}),r.a.createElement("link",{href:"https://fonts.googleapis.com/css2?family=Lato:wght@400;700&family=Roboto+Mono:wght@400;500;600;700&display=swap",rel:"stylesheet"})),r.a.createElement(M.a,Object(i.a)({tag:o.DEFAULT_SEARCH_TAG,locale:n},v)),r.a.createElement(I.a,null,s.map((function(e,a){return r.a.createElement("meta",Object(i.a)({key:"metadata_"+a},e))}))))}var D=t(147);t(58);a.a=function(e){var a=e.children,t=e.noFooter,n=e.wrapperClassName;return Object(D.a)(),r.a.createElement(H.a,null,r.a.createElement(U,e),r.a.createElement(c.a,null),r.a.createElement(d,null),r.a.createElement(j,null),r.a.createElement("div",{className:Object(l.a)("main-wrapper",n)},a),!t&&r.a.createElement(S,null))}},131:function(e,a,t){"use strict";var n=t(0),r=t(137);a.a=function(){var e=Object(n.useContext)(r.a);if(null==e)throw new Error("`useThemeContext` is used outside of `Layout` Component. See https://v2.docusaurus.io/docs/theme-classic#usethemecontext.");return e}},137:function(e,a,t){"use strict";var n=t(0),r=t.n(n).a.createContext(void 0);a.a=r},164:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(130);a.default=function(){return r.a.createElement(l.a,{title:"Page Not Found"},r.a.createElement("main",{className:"container margin-vert--xl"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col--6 col--offset-3"},r.a.createElement("h1",{className:"hero__title"},"Page Not Found"),r.a.createElement("p",null,"We could not find what you were looking for."),r.a.createElement("p",null,"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))}}}]);