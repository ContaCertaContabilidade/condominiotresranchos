window.LOGO_SRC="/LOGO%20ORIGINAL%20-%20SEM%20FUNDO%20(1).png";
(function(){var D,P;
function junta(v){var n=window.NOVOS||[];return v.filter(function(m){return !n.some(function(x){return x.id===m.id})}).concat(n).sort(function(a,b){return a.ano-b.ano||a.mes-b.mes})}
Object.defineProperty(window,"DADOS",{configurable:true,get:function(){return D},set:function(v){D=junta(v)}});
Object.defineProperty(window,"PDFS",{configurable:true,get:function(){return P},set:function(v){P=Object.assign({},v,window.NOVOS_PDFS||{})}});
})();
document.write('<script src="novos.js"><\/script>');
