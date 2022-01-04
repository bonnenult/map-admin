import{s2 as n,s3 as a}from"./vendor.c8f3cc8c.js";import{a as m}from"./moment.e805f63e.js";function i(s,o){return o.forEach(function(e){e&&typeof e!="string"&&!Array.isArray(e)&&Object.keys(e).forEach(function(t){if(t!=="default"&&!(t in s)){var r=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(s,t,r.get?r:{enumerable:!0,get:function(){return e[t]}})}})}),Object.freeze(s)}var _={exports:{}};(function(s,o){(function(e,t){t(typeof n=="function"?m.exports:e.moment)})(a,function(e){//! moment.js locale configuration
var t=e.defineLocale("th",{months:"\u0E21\u0E01\u0E23\u0E32\u0E04\u0E21_\u0E01\u0E38\u0E21\u0E20\u0E32\u0E1E\u0E31\u0E19\u0E18\u0E4C_\u0E21\u0E35\u0E19\u0E32\u0E04\u0E21_\u0E40\u0E21\u0E29\u0E32\u0E22\u0E19_\u0E1E\u0E24\u0E29\u0E20\u0E32\u0E04\u0E21_\u0E21\u0E34\u0E16\u0E38\u0E19\u0E32\u0E22\u0E19_\u0E01\u0E23\u0E01\u0E0E\u0E32\u0E04\u0E21_\u0E2A\u0E34\u0E07\u0E2B\u0E32\u0E04\u0E21_\u0E01\u0E31\u0E19\u0E22\u0E32\u0E22\u0E19_\u0E15\u0E38\u0E25\u0E32\u0E04\u0E21_\u0E1E\u0E24\u0E28\u0E08\u0E34\u0E01\u0E32\u0E22\u0E19_\u0E18\u0E31\u0E19\u0E27\u0E32\u0E04\u0E21".split("_"),monthsShort:"\u0E21.\u0E04._\u0E01.\u0E1E._\u0E21\u0E35.\u0E04._\u0E40\u0E21.\u0E22._\u0E1E.\u0E04._\u0E21\u0E34.\u0E22._\u0E01.\u0E04._\u0E2A.\u0E04._\u0E01.\u0E22._\u0E15.\u0E04._\u0E1E.\u0E22._\u0E18.\u0E04.".split("_"),monthsParseExact:!0,weekdays:"\u0E2D\u0E32\u0E17\u0E34\u0E15\u0E22\u0E4C_\u0E08\u0E31\u0E19\u0E17\u0E23\u0E4C_\u0E2D\u0E31\u0E07\u0E04\u0E32\u0E23_\u0E1E\u0E38\u0E18_\u0E1E\u0E24\u0E2B\u0E31\u0E2A\u0E1A\u0E14\u0E35_\u0E28\u0E38\u0E01\u0E23\u0E4C_\u0E40\u0E2A\u0E32\u0E23\u0E4C".split("_"),weekdaysShort:"\u0E2D\u0E32\u0E17\u0E34\u0E15\u0E22\u0E4C_\u0E08\u0E31\u0E19\u0E17\u0E23\u0E4C_\u0E2D\u0E31\u0E07\u0E04\u0E32\u0E23_\u0E1E\u0E38\u0E18_\u0E1E\u0E24\u0E2B\u0E31\u0E2A_\u0E28\u0E38\u0E01\u0E23\u0E4C_\u0E40\u0E2A\u0E32\u0E23\u0E4C".split("_"),weekdaysMin:"\u0E2D\u0E32._\u0E08._\u0E2D._\u0E1E._\u0E1E\u0E24._\u0E28._\u0E2A.".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY \u0E40\u0E27\u0E25\u0E32 H:mm",LLLL:"\u0E27\u0E31\u0E19dddd\u0E17\u0E35\u0E48 D MMMM YYYY \u0E40\u0E27\u0E25\u0E32 H:mm"},meridiemParse:/ก่อนเที่ยง|หลังเที่ยง/,isPM:function(r){return r==="\u0E2B\u0E25\u0E31\u0E07\u0E40\u0E17\u0E35\u0E48\u0E22\u0E07"},meridiem:function(r,u,c){return r<12?"\u0E01\u0E48\u0E2D\u0E19\u0E40\u0E17\u0E35\u0E48\u0E22\u0E07":"\u0E2B\u0E25\u0E31\u0E07\u0E40\u0E17\u0E35\u0E48\u0E22\u0E07"},calendar:{sameDay:"[\u0E27\u0E31\u0E19\u0E19\u0E35\u0E49 \u0E40\u0E27\u0E25\u0E32] LT",nextDay:"[\u0E1E\u0E23\u0E38\u0E48\u0E07\u0E19\u0E35\u0E49 \u0E40\u0E27\u0E25\u0E32] LT",nextWeek:"dddd[\u0E2B\u0E19\u0E49\u0E32 \u0E40\u0E27\u0E25\u0E32] LT",lastDay:"[\u0E40\u0E21\u0E37\u0E48\u0E2D\u0E27\u0E32\u0E19\u0E19\u0E35\u0E49 \u0E40\u0E27\u0E25\u0E32] LT",lastWeek:"[\u0E27\u0E31\u0E19]dddd[\u0E17\u0E35\u0E48\u0E41\u0E25\u0E49\u0E27 \u0E40\u0E27\u0E25\u0E32] LT",sameElse:"L"},relativeTime:{future:"\u0E2D\u0E35\u0E01 %s",past:"%s\u0E17\u0E35\u0E48\u0E41\u0E25\u0E49\u0E27",s:"\u0E44\u0E21\u0E48\u0E01\u0E35\u0E48\u0E27\u0E34\u0E19\u0E32\u0E17\u0E35",ss:"%d \u0E27\u0E34\u0E19\u0E32\u0E17\u0E35",m:"1 \u0E19\u0E32\u0E17\u0E35",mm:"%d \u0E19\u0E32\u0E17\u0E35",h:"1 \u0E0A\u0E31\u0E48\u0E27\u0E42\u0E21\u0E07",hh:"%d \u0E0A\u0E31\u0E48\u0E27\u0E42\u0E21\u0E07",d:"1 \u0E27\u0E31\u0E19",dd:"%d \u0E27\u0E31\u0E19",w:"1 \u0E2A\u0E31\u0E1B\u0E14\u0E32\u0E2B\u0E4C",ww:"%d \u0E2A\u0E31\u0E1B\u0E14\u0E32\u0E2B\u0E4C",M:"1 \u0E40\u0E14\u0E37\u0E2D\u0E19",MM:"%d \u0E40\u0E14\u0E37\u0E2D\u0E19",y:"1 \u0E1B\u0E35",yy:"%d \u0E1B\u0E35"}});return t})})();var d=_.exports,p=Object.freeze(i({__proto__:null,[Symbol.toStringTag]:"Module",default:d},[_.exports]));export{p as t};