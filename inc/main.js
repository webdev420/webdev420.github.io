    var agt=navigator.userAgent.toLowerCase();
    var appVer = navigator.appVersion.toLowerCase();
    var is_minor = parseFloat(appVer);
    var is_major = parseInt(is_minor);
    var iePos  = appVer.indexOf('msie');
    if (iePos !=-1) {
       is_minor = parseFloat(appVer.substring(iePos+5,appVer.indexOf(';',iePos)))
       is_major = parseInt(is_minor);
    }
    var is_gecko = ((navigator.product)&&(navigator.product.toLowerCase()=="gecko"))?true:false;
    var is_gver  = 0;
    if (is_gecko) is_gver=navigator.productSub;

    var is_moz   = ((agt.indexOf('mozilla/5')!=-1) && (agt.indexOf('spoofer')==-1) &&
                    (agt.indexOf('compatible')==-1) && (agt.indexOf('opera')==-1)  &&
                    (agt.indexOf('webtv')==-1) && (agt.indexOf('hotjava')==-1)     &&
                    (is_gecko) && 
                    ((navigator.vendor=="")||(navigator.vendor=="Mozilla")));
    if (is_moz) {
       var is_moz_ver = (navigator.vendorSub)?navigator.vendorSub:0;
       if(!(is_moz_ver)) {
           is_moz_ver = agt.indexOf('rv:');
           is_moz_ver = agt.substring(is_moz_ver+3);
           is_paren   = is_moz_ver.indexOf(')');
           is_moz_ver = is_moz_ver.substring(0,is_paren);
       }
       is_minor = is_moz_ver;
       is_major = parseInt(is_moz_ver);
    }
    var is_nav  = ((agt.indexOf('mozilla')!=-1) && (agt.indexOf('spoofer')==-1)
                && (agt.indexOf('compatible') == -1) && (agt.indexOf('opera')==-1)
                && (agt.indexOf('webtv')==-1) && (agt.indexOf('hotjava')==-1)
                && (!(is_moz)));
    if ((navigator.vendor)&&
        ((navigator.vendor=="Netscape6")||(navigator.vendor=="Netscape"))&&
        (is_nav)) {
       is_major = parseInt(navigator.vendorSub);
       is_minor = parseFloat(navigator.vendorSub);
    }
    var is_opera = (agt.indexOf("opera") != -1);
    var is_nav7   = (is_nav && is_major == 7);
    var is_nav7up = (is_nav && is_minor >= 7);
    var is_ie   = ((iePos!=-1) && (!is_opera));
    var is_ie5_5  = (is_ie && (agt.indexOf("msie 5.5") !=-1)); // 020128 new - abk
    var is_ie5_5up =(is_ie && is_minor >= 5.5);                // 020128 new - abk
    var is_ie6   = (is_ie && is_major == 6);
    var is_ie6up = (is_ie && is_minor >= 6);
	var is_ok = (is_ie5_5 || is_ie5_5up || is_ie6 || is_ie6up);
		
if (document.images){

        // T O P    M E N U
        
        // Active Images
        over13 = new Image();
        over13.src = "images/opt1-r.gif";
        over14 = new Image();
        over14.src = "images/opt2-r.gif";
        over15 = new Image();
        over15.src = "images/opt3-r.gif";
		over16 = new Image();
        over16.src = "images/opt4-r.gif";
		over17 = new Image();
        over17.src = "images/button-devo-r.gif";
		overtip = new Image();
		overtip.src = "images/tips-r.gif";
		
        // Inactive Images
        out13 = new Image();                                                     
        out13.src = "images/opt1.gif";
        out14 = new Image();                                                     
        out14.src = "images/opt2.gif";
        out15 = new Image();                                                     
        out15.src = "images/opt3.gif";
		out16 = new Image();                                                     
        out16.src = "images/opt4.gif";
		out17 = new Image();                                                     
        out17.src = "images/button-devo.gif";
		outtip = new Image();
		outtip.src = "images/tips.gif";
		
		out0 = new Image();
        out0.src = "images/opt0.gif";
}


function onoff(x, y) {
        if(document.images) {
                document.images[x].src=eval(y+'.src');
		     }
        }
function opnr(pagename) {
	if (is_ok) {
	window.open(pagename,"devotions");
	} else {
	window.open(pagename,"devotions", "location=no,resizable=yes,scrollbars=yes,menubar=no,toolbar=no,titlebar=no,statusbar=no,top=0,left=0,height=350,width=375");
	}
}

//-->