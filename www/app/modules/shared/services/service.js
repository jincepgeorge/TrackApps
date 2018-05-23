angular.module('nakApp')
.service('Service', function(ENV){
	this.current = {
		selectedApp: {},
        appCount:''
	};
	this.showLoader = function(IsOn){
		if(IsOn){
			if(typeof(cordova) != "undefined" && window.plugins){
                window.plugins.spinnerDialog.show("","",true);
			}else{
				$(".loading").show();
			}
		}else{
			if(typeof(cordova) != "undefined" && window.plugins){
                    window.plugins.spinnerDialog.hide();
                $(".loading").hide();
			}else{
				$(".loading").hide();
			}
		}
	};
	this.showAlert=function(message, buttonName, callback){
		var handler;
		if (buttonName == "")
			buttonName = "OK";

		if (typeof callback != 'function') {
			handler = function () { };
		}
		else
			handler = callback;

		if (navigator.notification) {
			navigator.notification.alert(
            message,  // message
            handler,         // callback
            ENV.appTitle,            // title
            buttonName                  // buttonName
            );
		}
		else {
			alert(message);
		}
	};
});
