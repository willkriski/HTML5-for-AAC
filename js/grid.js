function GridCtrl($scope){
	
	
	$scope.imageGrid = [
	       {type:'speak', url: 'http://placehold.it/50x50', link:'#', text:'I'},
	       {type:'speak', url: 'http://placehold.it/50x50', link: '#', text:'Mine'},
	       {type:'speak', url: 'http://placehold.it/50x50', link:'#', text:'Want'},
	       {type:'speak', url: 'http://placehold.it/50x50', link:'#', text:'You'},
	       {type:'speak', url: 'http://placehold.it/50x50', link:'#', text:'Help'},
	       {type:'speak', url: 'http://placehold.it/50x50', link:'#', text:'All Done'},
	       {type:'speak', url: 'http://placehold.it/50x50', link:'#', text:'Stop'},
	       {type:'speak', url: 'http://placehold.it/50x50', link:'#', text:'That'},
	       {type:'speak', url: 'http://placehold.it/50x50', link:'#', text:'What'},
	       {type:'speak', url: 'http://placehold.it/50x50', link:'#', text:'Away'},
	       {type:'speak', url: 'http://placehold.it/50x50', link:'#', text:'Go'},
	       {type:'speak', url: 'http://placehold.it/50x50', link:'#', text:'Here'},
	       {type:'speak', url: 'http://placehold.it/50x50', link:'#', text:'It'},
	       {type:'speak', url: 'http://placehold.it/50x50', link:'#', text:'Like'},
	       {type:'speak', url: 'http://placehold.it/50x50', link:'#', text:'More'},
	       {type:'speak', url: 'http://placehold.it/50x50', link:'#', text:'Again'},
	       {type:'speak', url: 'http://placehold.it/50x50', link:'#', text:'Big'},
	       {type:'speak', url: 'http://placehold.it/50x50', link:'#', text:'Do'},
	       {type:'speak', url: 'http://placehold.it/50x50', link:'#', text:'Down'},
	       {type:'speak', url: 'http://placehold.it/50x50', link:'#', text:'Get'},
	       {type:'speak', url: 'http://placehold.it/50x50', link:'#', text:'In'},
	       {type:'speak', url: 'http://placehold.it/50x50', link:'#', text:'Little'},
	       {type:'speak', url: 'http://placehold.it/50x50', link:'#', text:'My'},
	       {type:'speak', url: 'http://placehold.it/50x50', link:'#', text:'Off'},
	       {type:'speak', url: 'http://placehold.it/50x50', link:'#', text:'On'},
	       {type:'speak', url: 'http://placehold.it/50x50', link:'#', text:'Out'},
	       {type:'speak', url: 'http://placehold.it/50x50', link:'#', text:'Put'},
	       {type:'speak', url: 'http://placehold.it/50x50', link:'#', text:'Some'},
	       {type:'speak', url: 'http://placehold.it/50x50', link:'#', text:'There'},
	       {type:'speak', url: 'http://placehold.it/50x50', link:'#', text:'Up'},
	       {type:'speak', url: 'http://placehold.it/50x50', link:'#', text:'All'},
	       {type:'speak', url: 'http://placehold.it/50x50', link:'#', text:'Bad'},
	       {type:'speak', url: 'http://placehold.it/50x50', link:'#', text:'Happy'},
	       {type:'speak', url: 'http://placehold.it/50x50', link:'#', text:'Eat'},
	       {type:'speak', url: 'http://placehold.it/50x50', link:'#', text:'Feel'},
	       {type:'speak', url: 'http://placehold.it/50x50', link:'#', text:'Drink'},
	       {type:'speak', url: 'http://placehold.it/50x50', link:'#', text:'Sad'},
	       {type:'speak', url: 'http://placehold.it/50x50', link:'#', text:'Read'},
	       {type:'speak', url: 'http://placehold.it/50x50', link:'#', text:'Play'},
	       {type:'speak', url: 'http://placehold.it/50x50', link:'#', text:'Turn'},
	       {type:'speak', url: 'http://placehold.it/50x50', link:'#', text:'Why'},
	       {type:'speak', url: 'http://placehold.it/50x50', link:'#', text:'Where'},
	       {type:'speak', url: 'http://placehold.it/50x50', link:'#', text:'Who'},
	       {type:'speak', url: 'http://placehold.it/50x50', link:'#', text:'Tell'},
	       {type:'speak', url: 'http://placehold.it/50x50', link:'#', text:'Not'},
	       {type:'speak', url: 'http://placehold.it/50x50', link:'#', text:'Now'},
	       {type:'speak', url: 'http://placehold.it/50x50', link:'#', text:'Me'},
	       {type:'speak', url: 'http://placehold.it/50x50', link:'#', text:'Sad'}
	       ];

	       $scope.say = function(text){
	     
	        host="http://mumble.libertus.co.uk:59125"
  			voice="dfki-poppy-hsmm";
  			var audioword=new Audio(host+"/process?INPUT_TYPE=TEXT&OUTPUT_TYPE=AUDIO&INPUT_TEXT=" + text + "&OUTPUT_TEXT=&effect_Volume_selected=&effect_Volume_parameters=amount%3A2.0%3B&effect_Volume_default=Default&effect_Volume_help=Help&effect_TractScaler_selected=&effect_TractScaler_parameters=amount%3A1.5%3B&effect_TractScaler_default=Default&effect_TractScaler_help=Help&effect_F0Scale_selected=&effect_F0Scale_parameters=f0Scale%3A2.0%3B&effect_F0Scale_default=Default&effect_F0Scale_help=Help&effect_F0Add_selected=&effect_F0Add_parameters=f0Add%3A50.0%3B&effect_F0Add_default=Default&effect_F0Add_help=Help&effect_Rate_selected=&effect_Rate_parameters=durScale%3A1.5%3B&effect_Rate_default=Default&effect_Rate_help=Help&effect_Robot_selected=&effect_Robot_parameters=amount%3A100.0%3B&effect_Robot_default=Default&effect_Robot_help=Help&effect_Whisper_selected=&effect_Whisper_parameters=amount%3A100.0%3B&effect_Whisper_default=Default&effect_Whisper_help=Help&effect_Stadium_selected=&effect_Stadium_parameters=amount%3A100.0&effect_Stadium_default=Default&effect_Stadium_help=Help&effect_Chorus_selected=&effect_Chorus_parameters=delay1%3A466%3Bamp1%3A0.54%3Bdelay2%3A600%3Bamp2%3A-0.10%3Bdelay3%3A250%3Bamp3%3A0.30&effect_Chorus_default=Default&effect_Chorus_help=Help&effect_FIRFilter_selected=&effect_FIRFilter_parameters=type%3A3%3Bfc1%3A500.0%3Bfc2%3A2000.0&effect_FIRFilter_default=Default&effect_FIRFilter_help=Help&effect_JetPilot_selected=&effect_JetPilot_parameters=&effect_JetPilot_default=Default&effect_JetPilot_help=Help&HELP_TEXT=&exampleTexts=&VOICE_SELECTIONS="
			+voice+

			"&AUDIO_OUT=WAVE_FILE&LOCALE=en_GB&VOICE="
			+voice+"&AUDIO=WAVE_FILE");
  			audioword.play();

};
	
}