//TODO: \n cant work, try to fix it
//TODO: Try to simulate the perfamce just like real typing
var ostream = $("#outstream");
var i = 0;
var ostr = ">welcome back, master!   \n>this is  MAID_01B ";

function maidType() {
    setInterval(function () {
        ostream.append(strChoose());
        ++i;
    },80)
}

function strChoose() {
    if(ostr[i]=='\n') return '<div></div>'
    else return ostr[i];
}

maidType();

/*
var ostr1 = ">welcome back, master!";
var ostr2 = ">this is  MAID_01B ";

var ostr[] = [">welcome back, master!",">this is  MAID_01B "];

var i1 = 0;
var i2 = 0;

function maidType1() {
    if(i1<ostr1.length) {
        ostream.append(ostr1[i1]);
        ++i1;
        setTimeout("maidType1()", 100);
    }
}

function maidType2() {
    if(i2<ostr2.length) {
        ostream.append(ostr2[i2]);
        ++i2;
        setTimeout("maidType2()", 100);
    }
}


ostream.append("<div>");
maidType1();
ostream.append("</div><div>");
maidType2();
ostream.append("</div>");

function maidType() {
    var i = 0;
    setInterval(function () {
        //todo:out put the text
    },100+200*math.random)
}
*/
