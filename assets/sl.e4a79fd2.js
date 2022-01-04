import{s2 as _,s3 as p}from"./vendor.c8f3cc8c.js";import{a as j}from"./moment.e805f63e.js";function L(c,d){return d.forEach(function(o){o&&typeof o!="string"&&!Array.isArray(o)&&Object.keys(o).forEach(function(n){if(n!=="default"&&!(n in c)){var m=Object.getOwnPropertyDescriptor(o,n);Object.defineProperty(c,n,m.get?m:{enumerable:!0,get:function(){return o[n]}})}})}),Object.freeze(c)}var l={exports:{}};(function(c,d){(function(o,n){n(typeof _=="function"?j.exports:o.moment)})(p,function(o){//! moment.js locale configuration
function n(r,s,t,a){var e=r+" ";switch(t){case"s":return s||a?"nekaj sekund":"nekaj sekundami";case"ss":return r===1?e+=s?"sekundo":"sekundi":r===2?e+=s||a?"sekundi":"sekundah":r<5?e+=s||a?"sekunde":"sekundah":e+="sekund",e;case"m":return s?"ena minuta":"eno minuto";case"mm":return r===1?e+=s?"minuta":"minuto":r===2?e+=s||a?"minuti":"minutama":r<5?e+=s||a?"minute":"minutami":e+=s||a?"minut":"minutami",e;case"h":return s?"ena ura":"eno uro";case"hh":return r===1?e+=s?"ura":"uro":r===2?e+=s||a?"uri":"urama":r<5?e+=s||a?"ure":"urami":e+=s||a?"ur":"urami",e;case"d":return s||a?"en dan":"enim dnem";case"dd":return r===1?e+=s||a?"dan":"dnem":r===2?e+=s||a?"dni":"dnevoma":e+=s||a?"dni":"dnevi",e;case"M":return s||a?"en mesec":"enim mesecem";case"MM":return r===1?e+=s||a?"mesec":"mesecem":r===2?e+=s||a?"meseca":"mesecema":r<5?e+=s||a?"mesece":"meseci":e+=s||a?"mesecev":"meseci",e;case"y":return s||a?"eno leto":"enim letom";case"yy":return r===1?e+=s||a?"leto":"letom":r===2?e+=s||a?"leti":"letoma":r<5?e+=s||a?"leta":"leti":e+=s||a?"let":"leti",e}}var m=o.defineLocale("sl",{months:"januar_februar_marec_april_maj_junij_julij_avgust_september_oktober_november_december".split("_"),monthsShort:"jan._feb._mar._apr._maj._jun._jul._avg._sep._okt._nov._dec.".split("_"),monthsParseExact:!0,weekdays:"nedelja_ponedeljek_torek_sreda_\u010Detrtek_petek_sobota".split("_"),weekdaysShort:"ned._pon._tor._sre._\u010Det._pet._sob.".split("_"),weekdaysMin:"ne_po_to_sr_\u010De_pe_so".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD. MM. YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd, D. MMMM YYYY H:mm"},calendar:{sameDay:"[danes ob] LT",nextDay:"[jutri ob] LT",nextWeek:function(){switch(this.day()){case 0:return"[v] [nedeljo] [ob] LT";case 3:return"[v] [sredo] [ob] LT";case 6:return"[v] [soboto] [ob] LT";case 1:case 2:case 4:case 5:return"[v] dddd [ob] LT"}},lastDay:"[v\u010Deraj ob] LT",lastWeek:function(){switch(this.day()){case 0:return"[prej\u0161njo] [nedeljo] [ob] LT";case 3:return"[prej\u0161njo] [sredo] [ob] LT";case 6:return"[prej\u0161njo] [soboto] [ob] LT";case 1:case 2:case 4:case 5:return"[prej\u0161nji] dddd [ob] LT"}},sameElse:"L"},relativeTime:{future:"\u010Dez %s",past:"pred %s",s:n,ss:n,m:n,mm:n,h:n,hh:n,d:n,dd:n,M:n,MM:n,y:n,yy:n},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:7}});return m})})();var y=l.exports,v=Object.freeze(L({__proto__:null,[Symbol.toStringTag]:"Module",default:y},[l.exports]));export{v as s};