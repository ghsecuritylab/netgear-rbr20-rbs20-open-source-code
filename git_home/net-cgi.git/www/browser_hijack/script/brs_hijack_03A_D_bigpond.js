function initPage(){var e=document.getElementsByTagName("h1");var c=document.createTextNode(bh_bpa_connection);e[0].appendChild(c);var s=document.getElementsByTagName("p");var g=document.createTextNode(bh_enter_info_below);s[0].appendChild(g);var i=document.getElementById("loginName");var r=document.createTextNode(bh_pptp_login_name);i.appendChild(r);var q=document.getElementById("passwd");var d=document.createTextNode(bh_ddns_passwd);q.appendChild(d);var n=document.getElementById("idleTimeout");var h=document.createTextNode(bh_basic_pppoe_idle);n.appendChild(h);var m=document.getElementById("serverIP");var a=document.createTextNode(bh_basic_bpa_auth_serv);m.appendChild(a);var p=document.getElementById("inputName");p.onkeypress=ssidKeyCode;var j=document.getElementById("inputPasswd");j.onkeypress=ssidKeyCode;var b=document.getElementById("inputIdle");b.onkeypress=numKeyCode;var k=document.getElementById("inputServerIP");k.onkeypress=ssidKeyCode;var f=document.getElementById("btnsContainer_div");f.onclick=function(){return checkBPA()};var l=document.getElementById("btn_text_div");var o=document.createTextNode(bh_next_mark);l.appendChild(o)}function checkBPA(){var c=document.getElementsByTagName("form");var g=c[0];var h=document.getElementById("inputName");var f=document.getElementById("inputPasswd");var b=document.getElementById("inputIdle");var a=document.getElementById("inputServerIP");if(h.value==""){alert(bh_login_name_null);return false}for(d=0;d<f.value.length;d++){if(isValidChar(f.value.charCodeAt(d))==false){alert(bh_password_error);return false}}if(b.value.length<=0){alert(bh_idle_time_null);return false}else{if(!_isNumeric(b.value)){alert(bh_invalid_idle_time);return false}}if(a.value.length<=0){alert(bh_bpa_invalid_serv_name);return false}var e=a.value.split(".");var d;for(d=0;d<e.length;d++){if(e[d].length>63){alert(bh_invalid_servip_length);return false}}for(d=0;d<a.value.length;d++){if(isValidChar(a.value.charCodeAt(d))==false){alert(bh_bpa_invalid_serv_name);return false}}g.submit();return true}addLoadEvent(initPage);