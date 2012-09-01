function SentenceCtrl($scope, $location, $routeParams, wordService, sentenceService){
	
	$scope.wordGrid = wordService.get();
	  $scope.config = sentenceService;

	$scope.add = function(word){
		 if (word.link === undefined) { // no link exists
			sentenceService.add(word);
		}
		else {
			$location.path('/sentence/' + word.link)
		};
	};

	$scope.page = function(item) {
		if ($routeParams.page === undefined && item.page == "1") {return true}
			else { return (item.page == $routeParams.page)};

	};

	$scope.say = function(){
	     
	        host="http://mumble.libertus.co.uk:59125"
  			voice="dfki-poppy-hsmm";
  
			var audioword = new Audio("http://imedia-ventures.com/taptospeak/test.php?q=" + $scope.getSentence());

  			audioword.play();
  		};
  	$scope.resetForm = function() {
            
            sentenceService.clear();           
        };

    $scope.getSentence = function(){
    	return sentenceService.entries.join(' ');
    };

}
function EditCtrl($scope, editService){
	
    $scope.edit = editService;

  
}

function GridCtrl($scope, $location, $routeParams, wordService){
	
    $scope.wordGrid = wordService.get();
  
  
	       $scope.say = function(word){
	     
	        host="http://mumble.libertus.co.uk:59125"
  			voice="dfki-poppy-hsmm";
  			//var audioword=new Audio(host+"/process?INPUT_TYPE=TEXT&OUTPUT_TYPE=AUDIO&INPUT_TEXT=" + text + "&OUTPUT_TEXT=&effect_Volume_selected=&effect_Volume_parameters=amount%3A2.0%3B&effect_Volume_default=Default&effect_Volume_help=Help&effect_TractScaler_selected=&effect_TractScaler_parameters=amount%3A1.5%3B&effect_TractScaler_default=Default&effect_TractScaler_help=Help&effect_F0Scale_selected=&effect_F0Scale_parameters=f0Scale%3A2.0%3B&effect_F0Scale_default=Default&effect_F0Scale_help=Help&effect_F0Add_selected=&effect_F0Add_parameters=f0Add%3A50.0%3B&effect_F0Add_default=Default&effect_F0Add_help=Help&effect_Rate_selected=&effect_Rate_parameters=durScale%3A1.5%3B&effect_Rate_default=Default&effect_Rate_help=Help&effect_Robot_selected=&effect_Robot_parameters=amount%3A100.0%3B&effect_Robot_default=Default&effect_Robot_help=Help&effect_Whisper_selected=&effect_Whisper_parameters=amount%3A100.0%3B&effect_Whisper_default=Default&effect_Whisper_help=Help&effect_Stadium_selected=&effect_Stadium_parameters=amount%3A100.0&effect_Stadium_default=Default&effect_Stadium_help=Help&effect_Chorus_selected=&effect_Chorus_parameters=delay1%3A466%3Bamp1%3A0.54%3Bdelay2%3A600%3Bamp2%3A-0.10%3Bdelay3%3A250%3Bamp3%3A0.30&effect_Chorus_default=Default&effect_Chorus_help=Help&effect_FIRFilter_selected=&effect_FIRFilter_parameters=type%3A3%3Bfc1%3A500.0%3Bfc2%3A2000.0&effect_FIRFilter_default=Default&effect_FIRFilter_help=Help&effect_JetPilot_selected=&effect_JetPilot_parameters=&effect_JetPilot_default=Default&effect_JetPilot_help=Help&HELP_TEXT=&exampleTexts=&VOICE_SELECTIONS="
			//+voice+

			//"&AUDIO_OUT=WAVE_FILE&LOCALE=en_GB&VOICE="
			//+voice+"&AUDIO=WAVE_FILE");
			var audioword = new Audio("http://imedia-ventures.com/taptospeak/test.php?q=" + word.text);
			//var audioword = new Audio("http://translate.google.com/translate_tts?tl=en&q=" + text);
			

  			audioword.play();
  			if (word.link != undefined) {
  			$location.path('/page/' + word.link)};

	};
	$scope.page = function(item) {
		if ($routeParams.page === undefined && item.page == "1") {return true}
			else { return (item.page == $routeParams.page)};

	};

  
}
	
GridCtrl.$inject = ['$scope', '$location', '$routeParams', 'wordService'];
EditCtrl.$inject = ['$scope', 'editService'];
SentenceCtrl.$inject = ['$scope', '$location', '$routeParams', 'wordService', 'sentenceService'];