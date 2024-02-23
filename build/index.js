"use strict";var e=require("react"),n=require("styled-components");function t(e){var n=Object.create(null);return e&&Object.keys(e).forEach((function(t){if("default"!==t){var r=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(n,t,r.get?r:{enumerable:!0,get:function(){return e[t]}})}})),n.default=e,Object.freeze(n)}var r=t(e),a=[{name:"New Year's Day",date:new Date("2024-01-01")},{name:"New Year's Day",date:new Date("2024-01-02")},{name:"Christmas (Orthodox)",date:new Date("2024-01-07")},{name:"Women's Day",date:new Date("2024-03-08")},{name:"Labour Day",date:new Date("2024-05-01")},{name:"Victory Day",date:new Date("2024-05-09")},{name:"Radunitsa",date:new Date("2024-05-14")},{name:"Independence Day of the Republic of Belarus",date:new Date("2024-07-03")},{name:"October Revolution Day",date:new Date("2024-11-07")},{name:"Christmas (Catholic)",date:new Date("2024-12-25")}],i=function(e,n){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])},i(e,n)};var o=function(){return o=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var a in n=arguments[t])Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a]);return e},o.apply(this,arguments)};function l(e,n){return Object.defineProperty?Object.defineProperty(e,"raw",{value:n}):e.raw=n,e}"function"==typeof SuppressedError&&SuppressedError;var s,c=n.createGlobalStyle(s||(s=l(["\n    @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap');\n    *{\n        font-family: 'Open Sans', sans-serif;\n        margin: 0;\n        padding: 0;\n        box-sizing: border-box;\n    }\n"],["\n    @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap');\n    *{\n        font-family: 'Open Sans', sans-serif;\n        margin: 0;\n        padding: 0;\n        box-sizing: border-box;\n    }\n"]))),u={sizes:o({},{s1:"1px",s4:"4px",s8:"8px",s12:"12px",s16:"16px",s18:"18px",s20:"20px",s24:"24px",s28:"28px",s32:"32px",s36:"36px",s40:"40px"}),colors:o({},{white:"#FFFFFF",red:"#FD1E1E",chineseWhite:"#E1E1E1",azure:"#007BFF",darkGrey:"#AAAAAA",coralRed:"#FB3A3A",darkWhite:"#F1F1F1"}),fontWeights:o({},{normal:400,semiBold:600,bold:700})},d=function(t){function r(r){return e.createElement(n.ThemeProvider,{theme:u},e.createElement(c,null),e.createElement(t,o({},r)))}var a=t.displayName||t.name;return r.displayName="withTheme(".concat(a,")"),r},f=function(e,n,t){var r=new Date(n,t,e).getDay();return 0===r||6===r},m=function(e,n,t,r){return r.some((function(r){var a=r.date;return a.getFullYear()===t&&a.getMonth()===n&&a.getDate()===e}))},h=function(e,n,t,r){return r.getFullYear()===t&&(r.getMonth()===n&&r.getDate()===e)},p=function(e,n,t,r,a){if(r&&a){var i=new Date(t,n,e);return i<r||i>a}return!1},g=function(e,n,t,r){return!(!e||e.getFullYear()!==t||e.getMonth()!==r||e.getDate()!==n)},v=function(e,n,t,r){return!(!e||e.getFullYear()!==t||e.getMonth()!==r||e.getDate()!==n)},y=function(e,n,t,r,a){var i=new Date(r,a,t);return!!(e&&n&&i>=e&&i<=n)},D=new Date,x=e.createContext({today:D,selectedDate:void 0,selectedMonth:D.getMonth(),selectedYear:D.getFullYear(),setSelectedDate:function(){},setSelectedMonth:function(){},setSelectedYear:function(){}}),E=function(){return e.useContext(x)};function w(n){var t=n.children,r=e.useState(void 0),a=r[0],i=r[1],o=e.useState(D.getMonth()),l=o[0],s=o[1],c=e.useState(D.getFullYear()),u=c[0],d=c[1],f=e.useMemo((function(){return{today:D,selectedDate:a,selectedMonth:l,selectedYear:u,setSelectedDate:i,setSelectedMonth:s,setSelectedYear:d}}),[a,l,u]);return e.createElement(x.Provider,{value:f},t)}var b=e.createContext({minDate:void 0,maxDate:void 0}),k=function(){return e.useContext(b)},S=e.createContext({startDate:void 0,endDate:void 0,setStartDate:void 0,setEndDate:void 0,setRangeOnClick:void 0,clearRange:void 0}),z=e.createContext({selectedDate:void 0,setSelectedDate:function(){}});function C(e){return r.createElement("svg",o({xmlns:"http://www.w3.org/2000/svg",width:16,height:16,fill:"none"},e),r.createElement("path",{fill:"#000",d:"m4.273 4-.94.94L6.387 8l-3.054 3.06.94.94 4-4z"}),r.createElement("path",{fill:"#000",d:"m8.667 4-.94.94L10.78 8l-3.053 3.06.94.94 4-4z"}))}function $(e){return r.createElement("svg",o({xmlns:"http://www.w3.org/2000/svg",width:16,height:16,fill:"none"},e),r.createElement("path",{fill:"#000",d:"m11.727 12 .94-.94L9.613 8l3.054-3.06-.94-.94-4 4z"}),r.createElement("path",{fill:"#000",d:"m7.333 12 .94-.94L5.22 8l3.053-3.06-.94-.94-4 4z"}))}var F,M,W,O=n.div(F||(F=l(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 5px 0;\n  font-size: 14px;\n  font-weight: ",";\n"],["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 5px 0;\n  font-size: 14px;\n  font-weight: ",";\n"])),(function(e){return e.theme.fontWeights.bold})),A=n.div(M||(M=l([""],[""]))),T=n.div(W||(W=l(["\n  display: flex;\n  align-items: center;\n  gap: ","; \n"],["\n  display: flex;\n  align-items: center;\n  gap: ","; \n"])),(function(e){return e.theme.sizes.s4}));var Y,R=d((function(n){var t=n.isByYear,r=E(),a=r.setSelectedYear,i=r.setSelectedMonth,o=r.selectedYear,l=r.selectedMonth,s=new Date(o,l+1,0),c=function(e){e?a(o-1):(a(0===l?o-1:o),i(l>0?l-1:11))},u=function(e){e?a(o+1):(a(11===l?o+1:o),i(l<11?l+1:0))};return e.createElement(O,null,e.createElement($,{onClick:function(){c()}}),e.createElement(T,null,t&&e.createElement($,{onClick:function(){c(!0)}}),e.createElement(A,null,s.toLocaleString("en-US",{month:"long"})," ",s.getFullYear()),t&&e.createElement(C,{onClick:function(){u(!0)}})),e.createElement(C,{onClick:function(){u()}}))})),q={Sunday:["Su","Mo","Tu","We","Th","Fr","Sa"],Monday:["Mo","Tu","We","Th","Fr","Sa","Su"]},P=n.div(Y||(Y=l(["\n    font-size: 14px;\n    text-align: center;\n    font-weight: ",";\n    padding: "," 0;\n"],["\n    font-size: 14px;\n    text-align: center;\n    font-weight: ",";\n    padding: "," 0;\n"])),(function(e){return e.theme.fontWeights.bold}),(function(e){return e.theme.sizes.s8}));var j,H,_,B=d((function(n){var t=n.isMondayFirst;return q[t?"Monday":"Sunday"].map((function(n){return e.createElement(P,{key:n},n)}))})),I=function(e){return e.theme.sizes.s4},L=function(e){return e.theme.sizes.s8},N=function(e){return e.theme.colors.azure},V=function(e){return e.theme.colors.white},G=function(e){return e.theme.colors.darkGrey},U=function(e){return e.theme.colors.red},J=n.div(j||(j=l(["\n    width: 250px;\n    min-height: 240px;\n    padding: 10px;\n    border: "," solid ",";\n    border-radius: ",";\n"],["\n    width: 250px;\n    min-height: 240px;\n    padding: 10px;\n    border: "," solid ",";\n    border-radius: ",";\n"])),(function(e){return e.theme.sizes.s1}),(function(e){return e.theme.colors.chineseWhite}),(function(e){var n=e.$isWithTodos,t=e.theme;return n?"".concat(t.sizes.s8," ").concat(t.sizes.s8," 0 0"):L})),K=n.div(H||(H=l(["\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n"],["\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n"]))),Q=n.div(_||(_=l(["\n  text-align: center;\n  cursor: pointer;\n  font-size: 13px;\n  font-weight:  ",";\n  border-radius:  ",";\n  padding: ",";\n  background-color: ",";\n  color: ",";\n  transition: background-color 0.3s ease;\n  &:hover{\n    background-color: ",";\n  }\n"],["\n  text-align: center;\n  cursor: pointer;\n  font-size: 13px;\n  font-weight:  ",";\n  border-radius:  ",";\n  padding: ",";\n  background-color: ",";\n  color: ",";\n  transition: background-color 0.3s ease;\n  &:hover{\n    background-color: ",";\n  }\n"])),(function(e){return e.theme.fontWeights.semiBold}),(function(e){var n=e.$isStartDate,t=e.$isEndDate,r=e.theme,a=e.$isInRange;return n?"".concat(r.sizes.s4," 0 0 ").concat(r.sizes.s4):t?"0 ".concat(r.sizes.s4," ").concat(r.sizes.s4," 0"):a?"0":I}),L,(function(e){var n=e.$isSelected,t=e.$isStartDate,r=e.$isEndDate,a=e.$isInRange;return n||r?N:t?"#82B3F4":a?"#EBF3FE":"transparent"}),(function(e){var n=e.$isSelected,t=e.$isDisabled,r=e.$isWeekend,a=e.$isHoliday,i=e.$isStartDate,o=e.$isEndDate,l=e.$isInRange;return n||i||o?V:t?G:r||a?U:l?"#2F80ED":"inherit"}),(function(e){return e.theme.colors.darkWhite}));var X=e.memo(d((function(n){var t=n.isWithRange,r=n.isWithTodos,i=n.isMondayFirst,o=n.isWeekDaysHighlighted,l=n.isHolidaysHighlighted,s=e.useContext(z),c=s.selectedDate,u=s.setSelectedDate,d=E(),D=d.selectedYear,x=d.selectedMonth,w=e.useContext(S),b=w.startDate,C=w.endDate,$=w.setRangeOnClick,F=k(),M=F.minDate,W=F.maxDate,O=function(e,n){return new Date(e,n+1,0).getDate()}(D,x),A=function(e,n){return new Date(e,n,1).getDay()}(D,x),T=function(e,n,t,r){return Array.from({length:0===t&&r?6:t-(r?1:0)},(function(a,i){var o=new Date(e,n,0).getDate(),l=r?o-t+i+2:o-t+i+1;return l>o?l-o:l}))}(D,x,A,i),Y=Array.from({length:O},(function(e,n){return n+1})),q=Array.from({length:7-(Y.length+T.length)%7},(function(e,n){return n+1})),P=function(e,n,r){return function(){var a=new Date(D,n?x-1:r?x+1:x,e);M&&W?a>=M&&a<=W&&(t?$(a):u(a)):t?$(a):u(a)}};return e.createElement(J,{$isWithTodos:r||t},e.createElement(R,null),e.createElement(K,null,e.createElement(B,{isMondayFirst:i}),T.map((function(n){return e.createElement(Q,{key:"prev-".concat(n),onClick:P(n,!0,!1),$isSelected:c&&h(n,x-1,D,c),$isDisabled:!0,$isWeekend:o&&f(n,D,x),$isHoliday:l&&m(n,x,D,a),$isStartDate:g(b,n,D,x-1),$isEndDate:v(C,n,D,x-1),$isInRange:y(b,C,n,D,x-1)},n)})),Y.map((function(n){return e.createElement(Q,{key:n,$isSelected:c&&h(n,x,D,c),onClick:P(n,!1,!1),$isWeekend:o&&f(n,D,x),$isDisabled:p(n,x,D,M,W),$isHoliday:l&&m(n,x,D,a),$isStartDate:g(b,n,D,x),$isEndDate:v(C,n,D,x),$isInRange:y(b,C,n,D,x)},n)})),q.length<7&&q.map((function(n){return e.createElement(Q,{key:"next-".concat(n),onClick:P(n,!1,!0),$isSelected:c&&h(n,x+1,D,c),$isDisabled:!0,$isWeekend:o&&f(n,D,x),$isHoliday:l&&m(n,x,D,a),$isStartDate:g(b,n,D,x+1),$isEndDate:v(C,n,D,x+1),$isInRange:y(b,C,n,D,x+1)},n)}))))}))),Z=function(){function e(){this.calendar=X}return e.prototype.addDecorator=function(e){this.calendar=e(this.calendar)},e.prototype.getCalendar=function(){return this.calendar},e}();function ee(e){return r.createElement("svg",o({xmlns:"http://www.w3.org/2000/svg",width:16,height:16,fill:"none"},e),r.createElement("g",{clipPath:"url(#calendar_svg__a)"},r.createElement("path",{fill:"#AAA",d:"M8.2 9.6a.77.77 0 0 1-.57-.23.77.77 0 0 1-.23-.57q0-.34.23-.57A.77.77 0 0 1 8.2 8q.34 0 .57.23T9 8.8a.77.77 0 0 1-.23.57.78.78 0 0 1-.57.23M5 9.6a.78.78 0 0 1-.57-.23.77.77 0 0 1-.23-.57q0-.34.23-.57A.78.78 0 0 1 5 8q.34 0 .57.23t.23.57a.77.77 0 0 1-.23.57.78.78 0 0 1-.57.23m6.4 0a.77.77 0 0 1-.57-.23.77.77 0 0 1-.23-.57q0-.34.23-.57A.77.77 0 0 1 11.4 8q.34 0 .57.23t.23.57a.77.77 0 0 1-.23.57.77.77 0 0 1-.57.23m-3.2 3.2a.77.77 0 0 1-.57-.23.77.77 0 0 1-.23-.57q0-.34.23-.57a.77.77 0 0 1 .57-.23q.34 0 .57.23T9 12a.77.77 0 0 1-.23.57.78.78 0 0 1-.57.23m-3.2 0a.78.78 0 0 1-.57-.23.77.77 0 0 1-.23-.57q0-.34.23-.57A.78.78 0 0 1 5 11.2q.34 0 .57.23t.23.57a.77.77 0 0 1-.23.57.78.78 0 0 1-.57.23m6.4 0a.77.77 0 0 1-.57-.23.77.77 0 0 1-.23-.57q0-.34.23-.57a.77.77 0 0 1 .57-.23q.34 0 .57.23t.23.57a.77.77 0 0 1-.23.57.77.77 0 0 1-.57.23M2.6 16q-.66 0-1.13-.47A1.54 1.54 0 0 1 1 14.4V3.2q0-.66.47-1.13T2.6 1.6h.8V0H5v1.6h6.4V0H13v1.6h.8q.66 0 1.13.47t.47 1.13v11.2q0 .66-.47 1.13T13.8 16zm0-1.6h11.2v-8H2.6z"})),r.createElement("defs",null,r.createElement("clipPath",{id:"calendar_svg__a"},r.createElement("path",{fill:"#fff",d:"M0 0h16v16H0z"}))))}function ne(e){return r.createElement("svg",o({xmlns:"http://www.w3.org/2000/svg",width:16,height:16,fill:"none"},e),r.createElement("path",{fill:"#AAA",d:"M12.987 3.042c-2.73-2.723-7.21-2.723-9.94 0-2.73 2.724-2.73 7.192 0 9.916a6.983 6.983 0 0 0 9.87 0c2.73-2.724 2.8-7.192.07-9.916m-3.01 7.89-1.96-1.954-1.96 1.955-.98-.978L7.037 8l-1.96-1.955.98-.978 1.96 1.955 1.96-1.955.98.978L8.997 8l1.96 1.955z"}))}var te,re,ae,ie,oe,le,se=function(e){return e.theme.sizes.s8},ce=function(e){return e.theme.colors.coralRed},ue=n.div(te||(te=l(["\n    display: flex;\n    flex-direction: column;\n    align-items: start;\n    gap: ",";\n"],["\n    display: flex;\n    flex-direction: column;\n    align-items: start;\n    gap: ",";\n"])),se),de=n.div(re||(re=l(["\n    display: flex;\n    align-items: center;\n    width: 250px;\n    padding: 14px;\n    box-sizing: border-box;\n    border-radius: ",";\n    border: "," solid ",";\n"],["\n    display: flex;\n    align-items: center;\n    width: 250px;\n    padding: 14px;\n    box-sizing: border-box;\n    border-radius: ",";\n    border: "," solid ",";\n"])),se,(function(e){return e.theme.sizes.s1}),(function(e){return e.theme.colors.darkGrey})),fe=n.label(ae||(ae=l(["\n    font-family: inherit;\n    font-size: 15px;\n    font-weight: ",";\n"],["\n    font-family: inherit;\n    font-size: 15px;\n    font-weight: ",";\n"])),(function(e){return e.theme.fontWeights.semiBold})),me=n.div(ie||(ie=l(["\n    display: flex;\n    align-items: center;\n    gap: ",";\n"],["\n    display: flex;\n    align-items: center;\n    gap: ",";\n"])),se),he=n.input(oe||(oe=l(["\n    width: 172px;\n    height: ",";\n    font-size: 15px;\n    border: none;\n    outline: none;\n    color: ",";\n"],["\n    width: 172px;\n    height: ",";\n    font-size: 15px;\n    border: none;\n    outline: none;\n    color: ",";\n"])),(function(e){return e.theme.sizes.s20}),(function(e){return e.$isValid?"inherit":ce}));n.div(le||(le=l(["\n"],["\n"])));var pe,ge,ve,ye,De=e.memo(d((function(n){var t=n.selectedDate,r=n.setSelectedDate,a=n.handleCalendarClick,i=n.label,o=void 0===i?"Date":i,l=e.useState(""),s=l[0],u=l[1],d=e.useState(!0),f=d[0],m=d[1],h=k(),p=h.minDate,g=h.maxDate;return e.useEffect((function(){m(!0),u(null==t?void 0:t.toLocaleDateString())}),[t]),e.useEffect((function(){t||u("")}),[t]),e.createElement(e.Fragment,null,e.createElement(c,null),e.createElement(ue,null,e.createElement(fe,null,o),e.createElement(de,null,e.createElement(me,null,e.createElement(ee,{onClick:a}),e.createElement(he,{placeholder:"DD.MM.YYYY",value:s,onChange:function(e){var n=e.target.value;if(m(!1),u(n),/^\d{2}\.\d{2}\.\d{4}$/.test(n)){var t=n.split("."),a=parseInt(t[0],10),i=parseInt(t[1],10)-1,o=parseInt(t[2],10);if(function(e,n,t,r,a){var i=new Date(e,n,t);return!r||!a||i>r&&i<a}(o,i,a,p,g)){var l=new Date(o,i,a);r(l)}}},maxLength:10,$isValid:!!f})),s&&e.createElement(ne,{onClick:function(){r(null),u("")}}))))}))),xe=n.div(pe||(pe=l(["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n    height: 100%;\n"],["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n    height: 100%;\n"]))),Ee=n.h1(ge||(ge=l(["\n    color: #FD1E1E;\n"],["\n    color: #FD1E1E;\n"]))),we=function(n){function t(e){var t=n.call(this,e)||this;return t.state={hasError:!1,error:void 0},t}return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function t(){this.constructor=e}i(e,n),e.prototype=null===n?Object.create(n):(t.prototype=n.prototype,new t)}(t,n),t.getDerivedStateFromError=function(e){return{hasError:!0,error:e}},t.prototype.render=function(){var n=this.state,t=n.hasError,r=n.error,a=this.props.children;return t||r?e.createElement(xe,null,e.createElement(Ee,null,"Something went wrong with the layout")):a},t}(e.Component),be=n.div(ve||(ve=l(["\n  position: relative;\n  display: inline-block;\n"],["\n  position: relative;\n  display: inline-block;\n"]))),ke=n.div(ye||(ye=l(["\n  position: absolute;\n  top: 100%;\n  left: 0;\n  z-index: 1000;\n  display: ",";\n"],["\n  position: absolute;\n  top: 100%;\n  left: 0;\n  z-index: 1000;\n  display: ",";\n"])),(function(e){return e.$show?"block":"none"}));var Se,ze=d((function(n){var t=n.CalendarType,r=n.minDate,a=n.maxDate,i=e.useState(!1),o=i[0],l=i[1],s=e.useMemo((function(){return{minDate:r,maxDate:a}}),[r,a]),u=e.useState(),d=u[0],f=u[1],m=e.useMemo((function(){return{selectedDate:d,setSelectedDate:f}}),[d,f]),h=e.useCallback((function(){l((function(e){return!e}))}),[]);return e.createElement(we,null,e.createElement(w,null,e.createElement(z.Provider,{value:m},e.createElement(b.Provider,{value:s},e.createElement(be,null,e.createElement(c,null),e.createElement(De,{handleCalendarClick:h,selectedDate:d,setSelectedDate:f}),e.createElement(ke,{$show:o},e.createElement(t,null)))))))})),Ce=function(e){return e.theme.sizes.s8},$e=n.button(Se||(Se=l(["\n    width: 250px;\n    height: ",";\n    padding: 10px 0;\n    font-weight: ",";\n    font-size: ",";\n    background-color: ",";\n    border: "," solid ",";\n    border-radius: 0px 0px "," ",";\n    transition: background-color 0.3s ease;\n    &:hover{\n        background-color: ",";\n    }\n"],["\n    width: 250px;\n    height: ",";\n    padding: 10px 0;\n    font-weight: ",";\n    font-size: ",";\n    background-color: ",";\n    border: "," solid ",";\n    border-radius: 0px 0px "," ",";\n    transition: background-color 0.3s ease;\n    &:hover{\n        background-color: ",";\n    }\n"])),(function(e){return e.theme.sizes.s36}),(function(e){return e.theme.fontWeights.semiBold}),(function(e){return e.theme.sizes.s12}),(function(e){return e.theme.colors.white}),(function(e){return e.theme.sizes.s1}),(function(e){return e.theme.colors.chineseWhite}),Ce,Ce,(function(e){return e.theme.colors.darkWhite}));var Fe,Me,We,Oe=e.memo(d((function(n){var t=n.label,r=n.onClick;return e.createElement($e,{onClick:r},t)}))),Ae=n.div(Fe||(Fe=l(["\n  display: flex;\n  gap: ",";\n"],["\n  display: flex;\n  gap: ",";\n"])),(function(e){return e.theme.sizes.s16})),Te=n.div(Me||(Me=l(["\n  position: relative;\n  display: inline-block;\n"],["\n  position: relative;\n  display: inline-block;\n"]))),Ye=n.div(We||(We=l(["\n  position: absolute;\n  top: 100%;\n  left: 0;\n  z-index: 1000;\n  display: ",";\n"],["\n  position: absolute;\n  top: 100%;\n  left: 0;\n  z-index: 1000;\n  display: ",";\n"])),(function(e){return e.show?"block":"none"}));var Re=d((function(n){var t=n.CalendarType,r=n.minDate,a=n.maxDate,i=e.useState(!1),o=i[0],l=i[1],s=e.useState(),u=s[0],d=s[1],f=e.useState(),m=f[0],h=f[1],p=e.useMemo((function(){return{minDate:r,maxDate:a}}),[r,a]),g=e.useCallback((function(){l((function(e){return!e}))}),[]),v=e.useCallback((function(e){if(u)return m?void(e.getTime()<(u.getTime()+m.getTime())/2?d(e):h(e)):e.getTime()<u.getTime()?void d(e):void h(e);d(e)}),[u,m]),y=e.useCallback((function(){d(null),h(null)}),[]),D=e.useMemo((function(){return{startDate:u,endDate:m,setStartDate:d,setEndDate:h,setRangeOnClick:v,clearRange:y}}),[u,m,v]);return e.createElement(we,null,e.createElement(w,null,e.createElement(S.Provider,{value:D},e.createElement(b.Provider,{value:p},e.createElement(Te,null,e.createElement(c,null),e.createElement(Ae,null,e.createElement(De,{handleCalendarClick:g,label:"From",selectedDate:u,setSelectedDate:d}),e.createElement(De,{handleCalendarClick:g,label:"To",selectedDate:m,setSelectedDate:h})),e.createElement(Ye,{show:o},e.createElement(t,{isWithRange:!0}),e.createElement(Oe,{label:"Clear interval",onClick:y})))))))})),qe=new Z;exports.CalendarService=Z,exports.DatePicker=ze,exports.DatePickerWithRange=Re,exports.calendar=qe,exports.withHolidays=function(n){function t(t){return e.createElement(n,o({},t,{isHolidaysHighlighted:!0}))}var r=n.displayName||n.name;return t.displayName="withHolidays(".concat(r,")"),t},exports.withMondayFirst=function(n){function t(t){return e.createElement(n,o({},t,{isMondayFirst:!0}))}var r=n.displayName||n.name;return t.displayName="withMondayFirst(".concat(r,")"),t},exports.withWeekends=function(n){function t(t){return e.createElement(n,o({},t,{isWeekDaysHighlighted:!0}))}var r=n.displayName||n.name;return t.displayName="withWeekends(".concat(r,")"),t};
//# sourceMappingURL=index.js.map
