{tags} = require 'data_tags'
{excursions} = require 'data_excursions'
{excursionsByLocation} = require 'data_excursionsByLocation'
{locations} = require 'data_locations'
{venues} = require 'data_venues'
{events} = require 'data_events'
{types} = require 'data_types'


exports.topics =

	eatdrinknightlife:
		title: "Essen, Trinken & Nachtleben"
		tagline: "Grenzenlose Vielfalt für Genieser"
		image: ["modules/moduleImages/topics/topicEatdrinknight.jpg"]
		hasPromotion: true
		content: [
			{
				title: "Restaurants & Snacks"
				source: venues
				memberType: "venue"
				members: [ venues.marktrestaurant, venues.weitewelt,
									venues.east, venues.belladonna, venues.fuego,
									venues.casanova, venues.brauhaus, venues.frenchkiss, venues.sushibar, venues.rossini, venues.buffalosteakhouse]
				tags: []
				type: [types.venues.buffet, types.venues.service, types.venues.alacarte, types.venues.snackbar]
				subtitle: "Restaurants & Snackbars"
				subsingle: "this can't be true..."
				fakecount: "14"
			},
			{
				title: "Bars"
				source: venues
				memberType: "venue"
				members:[]
				tags: []
				type: [types.venues.nightlife]
				subtitle: "Clubs & Bars"
				subsingle: "this can't be true..."
				fakecount: "16"
			},
			{
				title: "Abendunterhaltung"
				source: events
				memberType: "event"
				members:["event006", "event009", "event012", "event013", "event021", "event024", "event028", "event034"]
				tags: []
				type: [tags.entertainment]
				subtitle: "Veranstaltungen"
				subsingle: "Veranstaltung"
				fakecount: "17"
			}]

	events:
		title: "Veranstaltungen"
		tagline: "Showtime für große Gefühle"
		image: ["modules/moduleImages/topics/topicEvents.jpg"]
		hasPromotion: true
		content: [
			{
				title: "Alle Veranstaltungen"
				source: events
				memberType: "event"
				members:["event001", "event002", "event003", "event004", "event005", "event006", "event007", "event008", "event009", "event010", "event011", "event012", "event013", "event014", "event015", "event016", "event017", "event018", "event019", "event020", "event021", "event022", "event023", "event024", "event025", "event026", "event027", "event028", "event029", "event030", "event031","event032", "event033",  "event034",  "event035"]
				tags: [tags.family, tags.sport, tags.entertainment, tags.enjoy, tags.discover]
				types: []
				subtitle: "Veranstaltungen insgesamt"
				subsingular: "Veranstaltung"
				fakecount: "51"
			},{
				title: "Sport & Spiel"
				source: events
				memberType: "event"
				members:["event001", "event003", "event004", "event006", "event008", "event014", "event029", "event030", "event031","event032", "event033",  "event035"]
				tags: [tags.sport]
				types: []
				subtitle: "Veranstaltungen"
				subsingular: "Veranstaltung"
				fakecount: "14"
			},{
				title: "Unterhaltung"
				source: events
				memberType: "event"
				members:["event006", "event009", "event012", "event013", "event021", "event024", "event028", "event034"]
				tags: [tags.entertainment]
				types: []
				subtitle: "Veranstaltungen"
				subsingular: "Veranstaltung"
				fakecount: "19"
			},{
				title: "Geniesen"
				source: events
				memberType: "event"
				members:[ "event002", "event005", "event007", "event013", "event015", "event017", "event018", "event022",  "event029", "event031"]
				tags: [tags.enjoy]
				types: []
				subtitle: "Veranstaltungen"
				subsingular: "Veranstaltung"
				fakecount: "8"
			},{
				title: "Entdecken"
				source: events
				memberType: "event"
				members:["event002", "event006", "event007", "event011", "event013", "event018", "event020", "event025"]
				tags: [tags.discover]
				types: []
				subtitle: "Veranstaltungen"
				subsingular: "Veranstaltung"
				fakecount: "7"
			},{
				title: "Für Familie & Kinder"
				source: events
				memberType: "event"
				members:["event001", "event002", "event004", "event005", "event006", "event009", "event015", "event020",  "event027", "event033",  "event034",  "event035"]
				tags: [tags.family]
				types: []
				subtitle: "Veranstaltungen"
				subsingular: "Veranstaltung"
				fakecount: "12"
			}]

	excursions:
		title: "Ausflüge"
		tagline: "Für Weltentdecker"
		image: ["modules/moduleImages/topics/topicExcursions.jpg"]
		hasPromotion: true
		content: [
			{
			title: "Alle Ausflüge"
			source: excursions
			memberType: "excursion"
			members: [excursionsByLocation.DEHAM, excursionsByLocation.FRLEH, excursionsByLocation.GBSOU, excursionsByLocation.BEZEE, excursionsByLocation.NLRTM  ]
			tags: []
			types: []
			subtitle: "Ausflüge"
			subsingular: "Ausflug"
			fakecount: "4"
			},{
			title: "Southampton/London"
			source: excursions
			memberType: "excursion"
			members: [excursionsByLocation.GBSOU]
			tags: []
			types: []
			subtitle: "Ausflüge"
			subsingular: "Ausflug"
			fakecount: "31"
			},{
			title: "Le Havre/Paris"
			source: excursions
			memberType: "excursion"
			members: [excursionsByLocation.FRLEH]
			tags: []
			types: []
			subtitle: "Ausflüge"
			subsingular: "Ausflug"
			fakecount: "26"
			},{
			title: "Zeebrügge/Brüssel"
			source: excursions
			memberType: "excursion"
			members: [excursionsByLocation.BEZEE]
			tags: []
			types: []
			subtitle: "Ausflüge"
			subsingular: "Ausflug"
			fakecount: "19"
			},{
			title: "Rotterdam/Amsterdam"
			source: excursions
			memberType: "excursion"
			members: [excursionsByLocation.NLRTM]
			tags: []
			types: []
			subtitle: "Ausflüge"
			subsingular: "Ausflug"
			fakecount: "36"
			}]

	family:
		title: "Familie und Kinder"
		tagline: "Für große und kleine Kreuzfahrer"
		image: ["modules/moduleImages/topics/topicFamily.jpg"]
		content: [
			{
				title: "Einrichtungen für Kinder"
				source: venues
				members: []
				tags: []
				type: [types.venues.kids]
				subtitle: "aufregende Orte"
				subsingular: "aufregender Ort"
				fakecount: "6"
			},{
				title: "Veranstaltungen"
				source: events
				members: ["ev009", "ev010", "ev011", "ev012"]
				tags: [tags.family]
				types: []
				subtitle: "Veranstaltungen für Familien & Kinder"
				subsingular: "Veranstaltung"
				fakecount: "16"
			},{
				title: "Familienfreundliche Ausflüge"
				source: excursions
				members: []
				tags: [tags.family]
				types: []
				subtitle: "Ausflüge"
				subsingular: "Ausflug"
				fakecount: "19"
			},{
				title: "Produkte für Kinder"
				source: []
				members: []
				tags: []
				types: []
				subtitle: "Produkte"
				subsingular: "Produkt"
				fakecount: "51"
			}
		]

	wellnessfitness:
		title: "Wellness & Fitness"
		tagline: "Weltreise für die Sinne"
		image: ["modules/moduleImages/topics/topicWellness.jpg"]
		hasPromotion: true
		content: [
			{
				title: "Einrichtungen"
				source: venues
				memberType: "venue"
				members: []
				tags: []
				types: [types.venues.wellnessfitness]
				subtitle: "Orte zum Wohlfühlen"
				subsingle: "Ort zum Wohlfühlen"
				fakecount: "31"
			},{
				title: "Spa-Behandlungen"
				source: events
				memberType: "venue"
				members: []
				tags: [tags.wellnessfitness]
				types: []
				subtitle: "mal die Seele baummeln lassen"
				subsingle: "Behandlung"
				fakecount: "16"
			},{
				title: "Veranstaltungen"
				source: events
				memberType: "event"
				members: []
				tags: [tags.wellnessfitness]
				types: []
				subtitle: "Sport- und Wellness-Veranstaltungen"
				subsingle: "Veranstaltung"
				fakecount: "6"
			},{
				title: "Ausflüge"
				source: excursions
				memberType: "excursion"
				members: []
				tags: [tags.sport]
				types: []
				subtitle: "besondere Ausflüge"
				subsingle: "Ausflug"
				fakecount: "9"
			},{
				title: "Produkte"
				memberType: "product"
				source: []
				members: []
				tags: [tags.wellnessfitness]
				types: []
				subtitle: "Produkte"
				subsingle: "Produkte"
				fakecount: "29"
			}]

	shopping:
		title: "Shopping"
		tagline: "Willkommen im Einkaufsparadies"
		image: ["modules/moduleImages/topics/topicShopping.jpg"]
		hasPromotion: true
		content: [
			{
				title: "Unsere Shops"
				source: events
				memberType: "shop"
				members: []
				tags: [tags.wellnessfitness]
				types: []
				subtitle: "großartige Geschäfte"
				subsingle: "This cant be true"
				fakecount: "16"
			},{
				title: "Online einkaufen"
				source: events
				memberType: "product"
				members: []
				tags: [tags.wellnessfitness]
				types: []
				subtitle: "aufregende Produkte"
				subsingle: "Produkt"
				fakecount: "253"
			}]
