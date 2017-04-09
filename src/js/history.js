
function objRecord(date, content,audio){
	this.Date = date;
	this.Content = content;
	this.Audio = audio;
}

var rcd1 = new objRecord("170420_fin01", "Efficiently manage cash flow, payments, liquidity, and risk with treasury and cash management software from SAP.","tengwanggexu.mp3");
var rcd2 = new objRecord("170420_fin02", "Source cash and liquidity data from multiple systems to improve business forecasting and the financial health of your business.", "ailianshuo.mp3");

var rcd = new Array();
rcd[0] = rcd1;
rcd[1] = rcd2;

function addItem(rcd){
	var tmp = " ";
	for(var i=0; i<=rcd.length-1; i++){
		tmp += "<li><a style=\'text-decoration:none;color:white;font-weight:bold;\' href=\'#\' onclick = \'changeRecord("+JSON.stringify(rcd[i])+")\'>"+rcd[i].Date+"</a></li>";
	}
	document.getElementById("main-nav").innerHTML = tmp;
}	

	
function changeRecord(orcd){
	//change date
	var tmp1 = "<hgroup><h1>ID: "+orcd.Date+"</h1></hgroup>";
	document.getElementById("date").innerHTML = tmp1;
	
	//change content
	var tmp2 = "<p>"+orcd.Content+"</p>";
	document.getElementById("text-content").innerHTML = tmp2;

	playAudio(orcd.Audio);	
}

function playAudio(currentSrc){	
		var oAudio = document.getElementById("audiosrc");

		if(oAudio.play && oAudio.src != currentSrc){
			oAudio.src = currentSrc;
		}
		oAudio.load();
}

var site = new Bamboo ();
addItem(rcd);
