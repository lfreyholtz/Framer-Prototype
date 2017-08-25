{tags} = require 'data_tags'
{venues} = require 'data_venues'
{eventTimes} = require 'data_eventTimes'

exports.events =

	event001:
		title: "Shuffleboard mit Julian"
		date: "04/29/2017"
		times: eventTimes.event001
		description: "The difference between copying an object through assignment and through this clone-function is how they handle references. The assignment only copies the object's reference, whereas the clone-function creates a complete new object."
		tags: [tags.wellnessfitness]
		images: ["modules/moduleImages/events/shuffleboard.jpg"]
		takesplaceat: venues.rossini
		notInMyDay: false
		isBookable: false
		hasExtraFee: false
		prices: [{
						label: "Erwachsener"
						price: 29.80
					},{
						label: "Kinder"
						price: 19.80
					},{
						label: "Senior"
						price: 18.00
						}]
		minimumAge: ""

	event002:
		title: "Eiskaffee und Eisschokolade mit Vanilleeis"
		date: "04/29/2017"
		times: eventTimes.event002
		description: "You can use either Hirschberg or Wagner–Fischer's algorithm to calculate a Levenshtein distance. This example uses Wagner–Fischer's algorithm. This version of Levenshtein algorithm is linear in memory, quadratic in time."
		tags: [tags.enjoy]
		images: ["modules/moduleImages/events/eiskaffee.jpg"]
		meetingpoint: []
		takesplaceat: [venues.frenchkiss]
		notInMyDay: false
		isBookable: false
		hasExtraFee: false
		prices: []
		minimumAge: ""

	event003:
		title: "Einsteiger Tanzkurs: Cha-Cha-Cha mit Tanzlehrer Matthias"
		date: "04/29/2017"
		times: eventTimes.event003
		description: "You can use either Hirschberg or Wagner–Fischer's algorithm to calculate a Levenshtein distance. This example uses Wagner–Fischer's algorithm. This version of Levenshtein algorithm is linear in memory, quadratic in time."
		tags: [tags.wellnessfitness]
		images: ["modules/moduleImages/events/tanzkurs.jpg"]
		meetingpoint: [venues.rossini]
		takesplaceat: "#{venues.rossini.name}, #{venues.rossini.wayfinding.deck}"
		notInMyDay: false
		isBookable: true
		hasExtraFee: false
		prices: []
		minimumAge: ""

	event004:
		title: "Dart mit Michael"
		date: "04/29/2017"
		times: eventTimes.event004
		description: "You can use either Hirschberg or Wagner–Fischer's algorithm to calculate a Levenshtein distance. This example uses Wagner–Fischer's algorithm. This version of Levenshtein algorithm is linear in memory, quadratic in time."
		tags: [tags.enjoy]
		images: ["modules/moduleImages/events/dart.jpg"]
		meetingpoint: []
		takesplaceat: "#{venues.brauhaus.name}, #{venues.brauhaus.wayfinding.deck}"
		notInMyDay: false
		isBookable: false
		hasExtraFee: false
		prices: []
		minimumAge: ""

	event005:
		title: "Familienzeit im Organic Spa"
		date: "04/29/2017"
		times: eventTimes.event005
		takesplaceat: "Body & Soul Organic Spa, Deck 8"
		description: "The difference between copying an object through assignment and through this clone-function is how they handle references. The assignment only copies the object's reference, whereas the clone-function creates a complete new object"
		tags: [tags.family]
		images: ["modules/moduleImages/events/spa.jpg"]
		meetingpoint: []
		takesplaceat: [venues.buffalosteakhouse]
		notInMyDay: false
		isBookable: true
		hasExtraFee: true
		prices: [{
				label: "Erwachsener"
				price: 29.80
			},{
				label: "Kinder"
				price: 19.80
			}]
		minimumAge: ""


	event006:
		title: "AIDA Reisequiz"
		date: "04/30/2017"
		times: eventTimes.event006
		takesplaceat: "Theatrium, Deck 6-8"
		description: "You can use either Hirschberg or Wagner–Fischer's algorithm to calculate a Levenshtein distance. This example uses Wagner–Fischer's algorithm. This version of Levenshtein algorithm is linear in memory, quadratic in time."
		tags: [tags.discover]
		images: ["modules/moduleImages/events/reisequiz.jpg"]
		meetingpoint: []
		takesplaceat: [venues.brauhaus]
		notInMyDay: false
		isBookable: false
		hasExtraFee: false
		prices: []

	event007:
		title: "Offiziers-Shaken im 5. Element"
		date: "04/30/2017"
		times: eventTimes.event007
		description: "The difference between copying an object through assignment and through this clone-function is how they handle references. The assignment only copies the object's reference, whereas the clone-function creates a complete new object."
		tags: [tags.enjoy, tags.discover]
		images: ["modules/moduleImages/events/shaken.jpg"]
		meetingpoint: []
		takesplaceat: [venues.weitewelt]
		notInMyDay: false
		isBookable: false
		hasExtraFee: false
		prices: []
		minimumAge: "18"

	event008:
		title: "Boccia"
		date: "04/30/2017"
		times: eventTimes.event008
		description: "The difference between copying an object through assignment and through this clone-function is how they handle references. The assignment only copies the object's reference, whereas the clone-function creates a complete new object."
		tags: [tags.wellnessfitness]
		images: ["modules/moduleImages/events/boccia.jpg"]
		meetingpoint: []
		takesplaceat: [venues.belladonna]
		notInMyDay: false
		isBookable: false
		hasExtraFee: false
		prices: []
		minimumAge: ""

	event009:
		title: "Kids-Kino: Mein Freund, der Delfin 2"
		date: "04/30/2017"
		times: eventTimes.event009
		description: "You can use either Hirschberg or Wagner–Fischer's algorithm to calculate a Levenshtein distance. This example uses Wagner–Fischer's algorithm. This version of Levenshtein algorithm is linear in memory, quadratic in time."
		tags: [tags.family, tags.entertainmenrt]
		images: ["modules/moduleImages/events/kids.jpg"]
		meetingpoint: []
		takesplaceat: [venues.buffalosteakhouse]
		notInMyDay: false
		isBookable: false
		hasExtraFee: false
		prices: []
		minimumAge: ""


	event010:
		title: "Workshop: Make-up"
		date: "04/30/2017"
		times: eventTimes.event010
		description: "You can use either Hirschberg or Wagner–Fischer's algorithm to calculate a Levenshtein distance. This example uses Wagner–Fischer's algorithm. This version of Levenshtein algorithm is linear in memory, quadratic in time."
		tags: [tags.wellnessfitness]
		images: ["modules/moduleImages/events/event1.jpg"]
		meetingpoint: []
		takesplaceat: [venues.east]
		notInMyDay: false
		isBookable: true
		hasExtraFee: true
		prices: [{
				label: "Erwachsener"
				price: 29.80
			}]
		minimumAge: "16"


	event011:
		title: "Fotoshooting: Lupo-Portraits"
		date: "05/01/2017"
		times: eventTimes.event011
		description: "You can use either Hirschberg or Wagner–Fischer's algorithm to calculate a Levenshtein distance. This example uses Wagner–Fischer's algorithm. This version of Levenshtein algorithm is linear in memory, quadratic in time."
		tags: [tags.discover]
		images: ["modules/moduleImages/events/fotoshooting.jpg"]
		meetingpoint: []
		takesplaceat: [venues.casanova]
		notInMyDay: false
		isBookable: false
		hasExtraFee: false
		prices: []
		minimumAge: ""


	event012:
		title: "Rock-Show: Addicted To Love"
		date: "05/01/2017"
		times: eventTimes.event012
		description: "The difference between copying an object through assignment and through this clone-function is how they handle references. The assignment only copies the object's reference, whereas the clone-function creates a complete new object."
		tags: [tags.entertainment]
		images: ["modules/moduleImages/events/rockshow.jpg"]
		meetingpoint: []
		takesplaceat: [venues.buffalosteakhouse]
		notInMyDay: false
		isBookable: false
		hasExtraFee: false
		prices: []
		minimumAge: ""


	event013:
		title: "Kneipenabend"
		date: "05/01/2017"
		times: eventTimes.event013
		description: "You can use either Hirschberg or Wagner–Fischer's algorithm to calculate a Levenshtein distance. This example uses Wagner–Fischer's algorithm. This version of Levenshtein algorithm is linear in memory, quadratic in time."
		tags: [tags.discover, tags.enjoy]
		images: ["modules/moduleImages/events/kneipenabend.jpg"]
		meetingpoint: []
		takesplaceat: [venues.brauhaus]
		notInMyDay: false
		isBookable: false
		hasExtraFee: false
		prices: []
		minimumAge: "18"


	event014:
		title: "Power-Plate-Gruppentraining"
		date: "05/01/2017"
		times: eventTimes.event014
		description: "You can use either Hirschberg or Wagner–Fischer's algorithm to calculate a Levenshtein distance. This example uses Wagner–Fischer's algorithm. This version of Levenshtein algorithm is linear in memory, quadratic in time."
		tags: [tags.wellnessfitness]
		images: ["modules/moduleImages/events/shuffleboard.jpg"]
		meetingpoint: []
		takesplaceat: [venues.fuego]
		notInMyDay: false
		isBookable: false
		hasExtraFee: false
		prices: []
		minimumAge: ""


	event015:
		title: "Küchenführung"
		date: "05/01/2017"
		times: eventTimes.event015
		description: "You can use either Hirschberg or Wagner–Fischer's algorithm to calculate a Levenshtein distance. This example uses Wagner–Fischer's algorithm. This version of Levenshtein algorithm is linear in memory, quadratic in time."
		tags: [tags.discover]
		images: ["modules/moduleImages/events/kneipenabend.jpg"]
		meetingpoint: []
		takesplaceat: [venues.marktrestaurant]
		notInMyDay: false
		isBookable: false
		hasExtraFee: false
		prices: []
		minimumAge: ""


	event016:
		title: "Vorrrag von Beatrice Barden: 24 Typen – Farb- und Stilberatung"
		date: "05/02/2017"
		times: eventTimes.event016
		description: "You can use either Hirschberg or Wagner–Fischer's algorithm to calculate a Levenshtein distance. This example uses Wagner–Fischer's algorithm. This version of Levenshtein algorithm is linear in memory, quadratic in time."
		tags: [tags.enjoy]
		images: ["modules/moduleImages/events/tanzkurs.jpg"]
		meetingpoint: []
		takesplaceat: [venues.brauhaus]
		notInMyDay: false
		isBookable: false
		hasExtraFee: false
		prices: []
		minimumAge: ""


	event017:
		title: "Fruit-Carving-Workshop"
		date: "05/02/2017"
		times: eventTimes.event017
		description: "You can use either Hirschberg or Wagner–Fischer's algorithm to calculate a Levenshtein distance. This example uses Wagner–Fischer's algorithm. This version of Levenshtein algorithm is linear in memory, quadratic in time."
		tags: [tags.enjoy]
		images: ["modules/moduleImages/events/spa.jpg"]
		meetingpoint: []
		takesplaceat: [venues.rossini]
		notInMyDay: false
		isBookable: true
		hasExtraFee: false
		prices: []
		minimumAge: ""


	event018:
		title: "Brauseminar"
		date: "05/02/2017"
		times: eventTimes.event018
		description: "You can use either Hirschberg or Wagner–Fischer's algorithm to calculate a Levenshtein distance. This example uses Wagner–Fischer's algorithm. This version of Levenshtein algorithm is linear in memory, quadratic in time."
		tags: [tags.discover, tags.enjoy]
		images: ["modules/moduleImages/events/kneipenabend.jpg"]
		meetingpoint: []
		takesplaceat: [venues.brauhaus]
		notInMyDay: false
		isBookable: true
		hasExtraFee: false
		prices: []
		minimumAge: "18"

	event019:
		title: "Kunstauktion"
		date: "05/02/2017"
		times: eventTimes.event019
		description: "You can use either Hirschberg or Wagner–Fischer's algorithm to calculate a Levenshtein distance. This example uses Wagner–Fischer's algorithm. This version of Levenshtein algorithm is linear in memory, quadratic in time."
		tags: [tags.family]
		images: ["modules/moduleImages/events/dart.jpg"]
		meetingpoint: []
		takesplaceat: [venues.marktrestaurant]
		notInMyDay: false
		isBookable: false
		hasExtraFee: false
		prices: []
		minimumAge: ""


	event020:
		title: "Nautische Stunde mit Kapitän Boris Becker"
		date: "05/02/2017"
		times: eventTimes.event020
		description: "You can use either Hirschberg or Wagner–Fischer's algorithm to calculate a Levenshtein distance. This example uses Wagner–Fischer's algorithm. This version of Levenshtein algorithm is linear in memory, quadratic in time."
		tags: [tags.family, tags.discover]
		images: ["modules/moduleImages/events/kids.jpg"]
		meetingpoint: []
		takesplaceat: [venues.buffalosteakhouse]
		notInMyDay: false
		isBookable: false
		hasExtraFee: false
		prices: []
		minimumAge: ""


	event021:
		title: "Stephans Prime Time"
		date: "05/03/2017"
		times: eventTimes.event021
		description: "You can use either Hirschberg or Wagner–Fischer's algorithm to calculate a Levenshtein distance. This example uses Wagner–Fischer's algorithm. This version of Levenshtein algorithm is linear in memory, quadratic in time."
		tags: [tags.entertainment]
		images: ["modules/moduleImages/events/reisequiz.jpg"]
		meetingpoint: []
		takesplaceat: [venues.brauhaus]
		notInMyDay: false
		isBookable: false
		hasExtraFee: false
		prices: []
		minimumAge: ""


	event022:
		title: "Baraktion: Aperitif Amaretto Sour"
		date: "05/03/2017"
		times: eventTimes.event022
		description: "You can use either Hirschberg or Wagner–Fischer's algorithm to calculate a Levenshtein distance. This example uses Wagner–Fischer's algorithm. This version of Levenshtein algorithm is linear in memory, quadratic in time."
		tags: [tags.enjoy]
		images: ["modules/moduleImages/events/shaken.jpg"]
		meetingpoint: []
		takesplaceat: [venues.weitewelt]
		notInMyDay: false
		isBookable: false
		hasExtraFee: false
		prices: []
		minimumAge: "18"


	event023:
		title: "3D-Modelling"
		date: "05/03/2017"
		times: eventTimes.event023
		description: "You can use either Hirschberg or Wagner–Fischer's algorithm to calculate a Levenshtein distance. This example uses Wagner–Fischer's algorithm. This version of Levenshtein algorithm is linear in memory, quadratic in time."
		tags: [tags.discover, tags.family]
		images: ["modules/moduleImages/events/kneipenabend.jpg"]
		meetingpoint: []
		takesplaceat: [venues.rossini]
		notInMyDay: false
		isBookable: false
		hasExtraFee: false
		prices: []
		minimumAge: ""


	event024:
		title: "Party-Show: Absolutly Everybody"
		date: "05/03/2017"
		times: eventTimes.event024
		description: "You can use either Hirschberg or Wagner–Fischer's algorithm to calculate a Levenshtein distance. This example uses Wagner–Fischer's algorithm. This version of Levenshtein algorithm is linear in memory, quadratic in time."
		tags: [tags.family, tags.entertainment]
		images: ["modules/moduleImages/events/shaken.jpg"]
		meetingpoint: []
		takesplaceat: [venues.casanova]
		notInMyDay: false
		isBookable: false
		hasExtraFee: false
		prices: []
		minimumAge: ""


	event025:
		title: "Flitterwochen- und Hochzeitstreff"
		date: "05/03/2017"
		times: eventTimes.event025
		description: "You can use either Hirschberg or Wagner–Fischer's algorithm to calculate a Levenshtein distance. This example uses Wagner–Fischer's algorithm. This version of Levenshtein algorithm is linear in memory, quadratic in time."
		tags: [tags.family]
		images: ["modules/moduleImages/events/fotoshooting.jpg"]
		meetingpoint: []
		takesplaceat: [venues.belladonna]
		notInMyDay: false
		isBookable: false
		hasExtraFee: false
		prices: []
		minimumAge: ""


	event026:
		title: "Party-Show: Grandmaster Flash Forever"
		date: "05/04/2017"
		times: eventTimes.event026
		description: "A-hip, a-hop, a-hippi hippi hip hop, we don't stop... och ne, das waren ja die Sugarhill Gang, aber egal, Grandmaster Flash ist  noch einen Zacken schärfer. Und jetzt alle im Chor: 'Se taun is leik ä tschungl sam teims, mäks me wonder hau ei kiip from going ander!'."
		tags: [tags.entertainment]
		images: ["modules/moduleImages/events/grandmaster.jpg"]
		meetingpoint: []
		takesplaceat: [venues.fuego]
		notInMyDay: false
		isBookable: false
		hasExtraFee: false
		prices: []
		minimumAge: ""


	event027:
		title: "Multimedia-Workshop mit Holger"
		date: "05/04/2017"
		times: eventTimes.event027
		description: "You can use either Hirschberg or Wagner–Fischer's algorithm to calculate a Levenshtein distance. This example uses Wagner–Fischer's algorithm. This version of Levenshtein algorithm is linear in memory, quadratic in time."
		tags: [tags.discover]
		images: ["modules/moduleImages/events/moreshow.jpg"]
		meetingpoint: []
		takesplaceat: [venues.buffalosteakhouse]
		notInMyDay: false
		isBookable: false
		hasExtraFee: false
		prices: []
		minimumAge: ""


	event028:
		title: "Texas Hold'em Poker-Turnier"
		date: "05/04/2017"
		times: eventTimes.event028
		description: "You can use either Hirschberg or Wagner–Fischer's algorithm to calculate a Levenshtein distance. This example uses Wagner–Fischer's algorithm. This version of Levenshtein algorithm is linear in memory, quadratic in time."
		tags: [tags.entertainment]
		images: ["modules/moduleImages/events/boccia.jpg"]
		meetingpoint: []
		takesplaceat: [venues.weitewelt]
		notInMyDay: false
		isBookable: false
		hasExtraFee: false
		prices: []
		minimumAge: "18"


	event029:
		title: "Kochschule mit Tim Mälzer: Fleisch & Dips"
		date: "05/04/2017"
		times: eventTimes.event029
		description: "You can use either Hirschberg or Wagner–Fischer's algorithm to calculate a Levenshtein distance. This example uses Wagner–Fischer's algorithm. This version of Levenshtein algorithm is linear in memory, quadratic in time."
		tags: [tags.enjoy]
		images: ["modules/moduleImages/events/kneipenabend.jpg"]
		meetingpoint: []
		takesplaceat: [venues.rossini]
		notInMyDay: false
		isBookable: false
		hasExtraFee: false
		prices: []
		minimumAge: "16"


	event030:
		title: "Best of Nightfly"
		date: "05/04/2017"
		times: eventTimes.event030
		description: "You can use either Hirschberg or Wagner–Fischer's algorithm to calculate a Levenshtein distance. This example uses Wagner–Fischer's algorithm. This version of Levenshtein algorithm is linear in memory, quadratic in time."
		tags: [tags.entertainment]
		images: ["modules/moduleImages/events/rockshow.jpg"]
		meetingpoint: []
		takesplaceat: [venues.Nightfly]
		notInMyDay: false
		isBookable: true
		hasExtraFee: true
		prices: [{
				label: "Erwachsener"
				price: 10.00
			}]
		minimumAge: "18"


	event031:
		title: "Frühschoppen mit Bastian"
		date: "05/05/2017"
		times: eventTimes.event031
		description: "You can use either Hirschberg or Wagner–Fischer's algorithm to calculate a Levenshtein distance. This example uses Wagner–Fischer's algorithm. This version of Levenshtein algorithm is linear in memory, quadratic in time."
		tags: [tags.enjoy]
		images: ["modules/moduleImages/events/kneipenabend.jpg"]
		meetingpoint: []
		takesplaceat: [venues.brauhaus]
		notInMyDay: false
		isBookable: false
		hasExtraFee: false
		prices: []
		minimumAge: "18"


	event032:
		title: "African Dance mit Julian"
		date: "05/05/2017"
		times: eventTimes.event032
		description: "You can use either Hirschberg or Wagner–Fischer's algorithm to calculate a Levenshtein distance. This example uses Wagner–Fischer's algorithm. This version of Levenshtein algorithm is linear in memory, quadratic in time."
		tags: [tags.family]
		images: ["modules/moduleImages/events/tanzkurs.jpg"]
		meetingpoint: []
		takesplaceat: [venues.fuego]
		notInMyDay: false
		isBookable: false
		hasExtraFee: false
		prices: []
		minimumAge: ""


	event033:
		title: "Familien-Minigolf"
		date: "05/05/2017"
		times: eventTimes.event033
		description: "You can use either Hirschberg or Wagner–Fischer's algorithm to calculate a Levenshtein distance. This example uses Wagner–Fischer's algorithm. This version of Levenshtein algorithm is linear in memory, quadratic in time."
		tags: [tags.wellnessfitness]
		images: ["modules/moduleImages/events/kneipenabend.jpg"]
		meetingpoint: []
		takesplaceat: [venues.weitewelt]
		notInMyDay: false
		isBookable: false
		hasExtraFee: false
		prices: []
		minimumAge: ""


	event034:
		title: "Birtes Welt"
		date: "05/05/2017"
		times: eventTimes.event034
		description: "You can use either Hirschberg or Wagner–Fischer's algorithm to calculate a Levenshtein distance. This example uses Wagner–Fischer's algorithm. This version of Levenshtein algorithm is linear in memory, quadratic in time."
		tags: [tags.wellnessfitness]
		images: ["modules/moduleImages/events/kneipenabend.jpg"]
		meetingpoint: []
		takesplaceat: [venues.east]
		notInMyDay: false
		isBookable: false
		hasExtraFee: false
		prices: []
		minimumAge: ""


	event035:
		title: "Boccia"
		date: "05/05/2017"
		times: eventTimes.event035
		description: "You can use either Hirschberg or Wagner–Fischer's algorithm to calculate a Levenshtein distance. This example uses Wagner–Fischer's algorithm. This version of Levenshtein algorithm is linear in memory, quadratic in time."
		tags: [tags.wellnessfitness]
		images: ["modules/moduleImages/events/boccia.jpg"]
		meetingpoint: []
		takesplaceat: [venues.brauhaus]
		notInMyDay: false
		isBookable: false
		hasExtraFee: false
		prices: []
		minimumAge: ""
