
function objRecord(date, content,audio){
	this.Date = date;
	this.Content = content;
	this.Audio = audio;
}

var rcd1 = new objRecord(
			"170420_fin01", 
			
			"利用 SAP SuccessFactors 可以帮助你自动化并加快员工工时与考勤管理流程：缺勤管理解决方案，使员工能够管理自己的工时相关信息，同时管理人员也能访问这些信息。使用考勤表工具，你能够更全面的了解员工状况，增强工时管理合规性，并提升员工满意度。通过劳动力管理解决方案，你能够满足企业复杂的人力资源需求。",
			
			"audios/chinese-CN_SF_audio.mp3"
);
			
var rcd2 = new objRecord(
			"170420_fin02", 
			
			"Die Lösungen von Ariba, einem S A P Unternehmen, vereinfachen die Zusammenarbeit bei Aufträgen und Bestellungen, indem Kaufaufträge und auftragsbezogene Dokumente über das Ariba Network übermittelt werden.", 
			
			"audios/German-DE_Ariba_audio.mp3"
);
			
var rcd3 = new objRecord(
			"170420_fin03",
			
			"With the SAP CRM Service Manager mobile app, you can extend your SAP CRM and SAP ERP applications to a variety of mobile devices, so you can ensure that your field technicians have all the information and tools they need to execute their service calls quickly and efficiently. Engage customers with personalized experiences across all channels and transform your sales, service, and marketing activities by using on-premise SAP CRM.",
			
			"audios/english-US_CRM_audio.mp3"
);
			
var rcd4 = new objRecord(
			"170420_fin04",
			
			"Avec les solutions SAP de gestion de la chaîne logistique (SCM), vous répondez aux attentes de plus en plus élevées des clients, vous exécutez des réseaux de distribution de plus en plus complexes et vous atteignez une vitesse de réactivité sans.",
			
			"audios/french-FR_SCM_audio.mp3"
);

var rcd5 = new objRecord(
			"170420_fin05",
			
			"Como líder de mercado en software de aplicaciones para empresas, SAP ayuda a las organizaciones a combatir los efectos de la complejidad, generar nuevas oportunidades para la innovación y el crecimiento, y mantenerse a la delantera de la competencia.",
			
			"audios/Spain-ES_SAP_audio.mp3"
);

var rcd6 = new objRecord(
			"170420_fin06",
			
			"Visita il nostro sito aziendale e scopri news, informazioni per investitori e analisti, risorse per la carriera, la storia di SAP Italia e altro.",
			
			"audios/Italian-IT_SAP_audio.mp3"
);

var rcd = new Array();
rcd[0] = rcd1;
rcd[1] = rcd2;
rcd[2] = rcd3;
rcd[3] = rcd4;
rcd[4] = rcd5;
rcd[5] = rcd6;


//translation cases

//language: "en-us", "zh-cn", "en-GB", "de-DE", "fr-FR", "it-IT", "es-ES"
function testTranslate(date, audio, lang){
	this.Date = date;
	this.Audio = audio;
	this.Language = lang;
}

var otransrcd1 = new testTranslate(
				"170420_trans01",
				"audios/whatstheweatherlike.wav",
				"en-us"
);

var otransrcd2 = new testTranslate(
				"170420_trans02",
				"audios/whatstheweatherlike.wav",
				"en-us"
);

var transrcd = new Array();
transrcd[0] = otransrcd1;
transrcd[1] = otransrcd2;


function addItem(rcd, transrcd){
	var tmp = " ";
	for(var i=0; i<=rcd.length-1; i++){
		tmp += "<li><a style=\'text-decoration:none;color:white;font-weight:bold;\' href=\'#\' onclick = \'changeRecord("+JSON.stringify(rcd[i])+")\'>"+rcd[i].Date+"</a></li>";
	}
	
	for(var j=0; j<= transrcd.length - 1; j++){
		tmp += "<li><a style=\'text-decoration:none;color:white;font-weight:bold;\' href=\'#\' onclick = \'TransRecord("+JSON.stringify(transrcd[j])+")\'>"+transrcd[j].Date+"</a></li>";
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

function TransRecord(trcd){
	var tmp1 = "<hgroup><h1>ID: "+trcd.Date+"</h1></hgroup>";
	document.getElementById("date").innerHTML = tmp1;
	
	start(trcd);
	
	playAudio(trcd.Audio);
}

var site = new Bamboo ();
addItem(rcd, transrcd);
