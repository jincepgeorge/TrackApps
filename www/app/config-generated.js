angular.module("config", [])

.constant("ENV", {
	"serviceURL": "https://itunes.apple.com/search?term=<key>&limit=200&&entity=software,iPadSoftware",
	"clientListJSON": "app/clientlist.json",
	"appTitle": "Track Apps",
	"keys": {
		"ey": "EY Global Services Limited",
		"kpmg": "KPMG",
		"pwc": "PwC",
		"deloitte": "Deloitte"
	}
})

;