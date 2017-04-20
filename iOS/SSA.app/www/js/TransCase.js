        
		var client;
        var request;

        function useMic() {
            //return document.getElementById("useMic").checked;
            return false;
        }

        function getMode() {
            return Microsoft.CognitiveServices.SpeechRecognition.SpeechRecognitionMode.shortPhrase;
        }

        function getKey() {
            //return document.getElementById("key").value;
            return '6fd4531be5f64cf3afacd972d9b75416';
        }

        
		function setText(text){
			//var tmp2 = "<p>"+text+"</p>";
			
				   
			var length = text.length;
            var obj = JSON.parse(text.substr(1, length -2));
            //document.getElementById("output").value += obj.lexical;
			tmp1=obj.lexical;	
				 tmp2 = "<p>"+tmp1+"</p>";
			document.getElementById("text-content").innerHTML = tmp2;
		}

        function getLuisConfig() {
            var appid = document.getElementById("luis_appid").value;
            var subid = document.getElementById("luis_subid").value;

            if (appid.length > 0 && subid.length > 0) {
                return {appid: appid, subid: subid};
            }

            return null;
        }

        function start(trcd) {
			var oaudio = trcd.Audio;
            var mode = getMode();
            var luisCfg = getLuisConfig();

           

            if (useMic()) {
            
            } else {
                if (luisCfg) {
                    client = Microsoft.CognitiveServices.SpeechRecognition.SpeechRecognitionServiceFactory.createDataClientWithIntent(
                        trcd.Language,
                        getKey(),
                        luisCfg.appid,
                        luisCfg.subid);
                } else {
                    client = Microsoft.CognitiveServices.SpeechRecognition.SpeechRecognitionServiceFactory.createDataClient(
                        mode,
                        trcd.Language,
                        getKey());
                }
                request = new XMLHttpRequest();
                request.open(
                    'GET',
                    (mode == Microsoft.CognitiveServices.SpeechRecognition.SpeechRecognitionMode.shortPhrase) ? oaudio : "batman.wav",
                    true);
                request.responseType = 'arraybuffer';
                request.onload = function () {
                    if (request.status !== 200) {
                        setText("unable to receive audio file");
                    } else {
                        client.sendAudio(request.response, request.response.length);
                    }
                };

                request.send();
            }

            client.onPartialResponseReceived = function (response) {
                setText(response);
            }

            client.onFinalResponseReceived = function (response) {
                setText(JSON.stringify(response));
            }

            client.onIntentReceived = function (response) {
                setText(response);
            };
        }
	