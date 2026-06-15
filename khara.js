(()=>{var a=window.location.hash;var b=location.search;var c=localStorage.getItem("token");var d=sessionStorage.getItem("x");var e=decodeURIComponent(a);var f=atob(a);

var x=document.getElementById("app");
var y=document.createElement("div");
var z=window.__STATE__ || {};

x.innerHTML=a;
y.outerHTML=b;

document.body.innerHTML=c;

document.querySelector(".root").innerHTML=d;

z.render=e;
document.body.innerHTML=z.render;

var p=a.split("#")[1];
document.body.innerHTML=p;

var q=location.hash.replace("#","");
document.body.innerHTML=q;

var r=decodeURIComponent(location.hash);
document.body.innerHTML=r;

var s=atob(location.hash);
document.body.innerHTML=s;

var t=JSON.parse(localStorage.getItem("profile"));
document.body.innerHTML=t.name;

var u=`Hello ${location.hash}`;
x.innerHTML=u;

var v=`Data:${localStorage.getItem("token")}`;
y.innerHTML=v;

var w=`X:${decodeURIComponent(location.hash)}`;
x.innerHTML=w;

function render(data){document.body.innerHTML=data;}
render(location.hash);

setTimeout(()=>{document.body.innerHTML=location.hash},100);

eval(location.hash);

Function(location.hash);

new Function("return "+location.hash)();

document.write(location.hash);

var safe = sanitize(location.hash);
document.body.innerHTML = safe;

var chain1 = a;
var chain2 = chain1;
var chain3 = chain2;
document.body.innerHTML = chain3;

var obj={a:location.hash};
document.body.innerHTML=obj.a;

var arr=[location.hash];
document.body.innerHTML=arr[0];

var complex = (x)=>x;
document.body.innerHTML = complex(location.hash);

})();
