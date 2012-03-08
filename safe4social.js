jQuery(document).ready(function(){

	// get the general settings
	var settings_object = Drupal.settings.safe4social[0].js_other_settings;
	
	// a property for dymanic share urls
	settings_object.uri = function(context){
		return window.location.protocol + '//' + 
		window.location.host + 
		$(context).parent().attr("data-path");
	};
	
	// get the service specific settings
	settings_object.services = {
			facebook : Drupal.settings.safe4social[0].facebook,
			twitter : Drupal.settings.safe4social[0].twitter,
			gplus : Drupal.settings.safe4social[0].google
	};

	// initialize plugin with settings
	$(".safe4social").socialSharePrivacy(settings_object);

});
