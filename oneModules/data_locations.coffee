{destinationArticles} = require 'data_destinationArticles'

exports.locations =
	XXSEA:
		name: "Auf See"
		marketingName: "Auf See"
		images:
			dawn: ["modules/moduleImages/itinerary/seaday/img_sea-dawn.jpg"]
			day: ["modules/moduleImages/itinerary/seaday/img_sea-day.jpg"]
			dusk: ["modules/moduleImages/itinerary/seaday/img_sea-dusk.jpg"]
			night: ["modules/moduleImages/itinerary/seaday/img_sea-night.jpg"]
		article:""

	DEHAM:
		name: "Hamburg"
		marketingName: "Hamburg"
		images:
			dawn: ["modules/moduleImages/itinerary/hamburg/img_hamburg_dawn.jpg"]
			day: ["modules/moduleImages/itinerary/hamburg/img_hamburg_day.jpg", "modules/moduleImages/itinerary/hamburg/img_hamburg_day2.jpg"]
			dusk: ["modules/moduleImages/itinerary/hamburg/img_hamburg_dusk.jpg"]
			night: ["modules/moduleImages/itinerary/hamburg/img_hamburg_night.jpg", "modules/moduleImages/itinerary/hamburg/img_hamburg_night2.jpg"]
		article: destinationArticles.hamburg

	GBSOU:
		name: "Southampton"
		marketingName: "London / Southampton"
		images:
			dawn: ["modules/moduleImages/itinerary/southampton/img_london_dawn.jpg"]
			day: ["modules/moduleImages/itinerary/southampton/img_london_day.jpg", "modules/moduleImages/itinerary/southampton/img_london_day2.jpg"]
			dusk: ["modules/moduleImages/itinerary/southampton/img_london_dusk.jpg"]
			night: ["modules/moduleImages/itinerary/southampton//img_london_night.jpg", "modules/moduleImages/itinerary/southampton//img_london_night2.jpg"]
		article: destinationArticles.southampton


	FRLEH:
		name: "Le Havre"
		marketingName: "Paris / Le Havre"
		images:
			dawn: ["modules/moduleImages/itinerary/lehavre/img_lehavre_dawn.jpg", "modules/moduleImages/itinerary/lehavre/img_paris_dawn.jpg"]
			day: ["modules/moduleImages/itinerary/lehavre/img_paris_day.jpg","modules/moduleImages/itinerary/lehavre/img_lehavre_day.jpg"]
			dusk: ["modules/moduleImages/itinerary/lehavre/img_paris_dusk.jpg","modules/moduleImages/itinerary/lehavre/img_lehavre_dusk.jpg"]
			night: ["modules/moduleImages/itinerary/lehavre/img_paris_night.jpg"]
		article: destinationArticles.lehavre


	BEZEE:
		name: "Zeebrügge"
		marketingName: "Brüssel / Zeebrügge"
		images:
			dawn: ["modules/moduleImages/itinerary/zeebrugge/img_brussels_dawn.jpg"]
			day: ["modules/moduleImages/itinerary/zeebrugge/img_brussels_day.jpg"]
			dusk: ["modules/moduleImages/itinerary/zeebrugge/img_brussels_dusk.jpg"]
			night: ["modules/moduleImages/itinerary/zeebrugge/img_brussels_night.jpg"]
		article: destinationArticles.zeebrugge


	NLRTM:
		name: "Rotterdam"
		marketingName: "Amsterdam / Rotterdam"
		images:
			dawn: ["modules/moduleImages/itinerary/rotterdam/img_rotterdam_dawn.jpg", "modules/moduleImages/itinerary/rotterdam/img_rotterdam_dawn2.jpg"]
			day: ["modules/moduleImages/itinerary/rotterdam/img_rotterdam_day.jpg"]
			dusk: ["modules/moduleImages/itinerary/rotterdam/img_rotterdam_dusk.jpg", "modules/moduleImages/itinerary/rotterdam/img_rotterdam_dusk.jpg"]
			night: ["modules/moduleImages/itinerary/rotterdam/img_rotterdam_night.jpg", "modules/moduleImages/itinerary/rotterdam/img_rotterdam_night2.jpg"]
		article: destinationArticles.rotterdam
