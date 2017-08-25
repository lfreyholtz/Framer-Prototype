{locations} = require 'data_locations'
{tags} = require 'data_tags'
{openinghours} = require 'data_openinghours'


exports.venues =

	marktrestaurant:
		name: "Marktrestaurant"
		type: "buffet"
		tagline: "Ein Marktspaziergang im Süden"
		rating: 4
		numRatings: 2143
		tagline: "Saisonal, frisch und bunt"
		menucard: menucards.marktrestaurant
		wayfinding:
			title: "Wegbeschreibung"
			deck: "Deck 6"
			preview: "moduleImages/interface/deckplanPreview.png"
			content: "Deck 6 am Heck, neben Bella Donna Restaurant"
			deckplan: "moduleImages/interface/deckplan.png"
				coverImage: "moduleImages/eatdrinknightlife/marktrestaurant.jpg"
		tags: [tags.healthy, tags.family]
		description: "Hier finden Sie an fantasievoll dekorierte Ständen mediterrane und mitteleuropäische Küche, viel frisches Obst und Gemüse sowie vielfältige Käse-, Wurst- und Schinkenspezialitäten. Unser Fisch-Buffet mit Köstlichkeiten aus der restauranteigenen Fischräucherei wird Sie begeistern. Hochwertige offene Weine an der Weinstation und ein vegetarisches Buffet mit Schonkostbar runden das Angebot ab."
		includedInPrice:
			title: "Inklusive:"
			content: "Alle Speisen und Softdrinks"
		excludedInPrice:
			title: "Zum Aufpreis"
			content: "Kaffee- und Weinspezialitäten"
		openingHours:
			title: "Öffnungszeiten"
			content: openinghours.marktrestaurant
		popularTimes:
			title: "Beliebte Besuchszeiten"
			content: "images/interface/pinkbox.svg"
		isBookable: true
		isPromoted: false
		staff:
			title:"Ihre Begleitung:"
			content:[
				{
					name:"Maricel Pamintuan"
					title:"Buffet Chef"
					staffImage:"modules/moduleImages/personnel/MaricelPamintuan.png"
				},
				{
					name:"Anna Rademacher"
					title:"Hostess"
					staffImage:"modules/moduleImages/personnel/AnnaRademacher.png"
				}
			]


	weitewelt:
		name: "Weite Welt Restaurant"
		type: "buffet"
		tagline: "Kulinarische Entdeckungsreisen"
		rating: 4
		numRatings: 122
		tagline: "Kommen Sie auf eine kulinarische Entdeckungsreise!"
		menucard: menucards.marktrestaurant
		wayfinding:
			title: "Wegbeschreibung"
			deck: "Deck 7"
			preview: "moduleImages/interface/deckplanPreview.png"
			content: "Deck 7 am Heck, zwischen Lanai Bar und Brauhaus"
			deckplan: "moduleImages/interface/deckplan.png"
				coverImage: "moduleImages/eatdrinknightlife/marktrestaurant.jpg"
		tags: [tags.schnitzel, tags.family]
		description: "Eine Vielfalt internationaler Spezialitäten, mit einem anderen Thema an jedem Aben. An Hafentagen servieren wir Spezialitäten des jeweiligen Gastgeberlands, an Seetagen kulinarische Highlights aus Spanien, den USA u.a."
		includedInPrice:
			title: "Inklusive:"
			content: "Alle Speisen sowie Tischwein, Bier, Softdrinks und Tee."
		excludedInPrice:
			title: "Zum Aufpreis"
			content: "Kaffee- und Weinspezialitäten"
		openingHours:
			title: "Öffnungszeiten"
			content: [
				{
				date: "04/29/2017"
				weekday: "saturday"
				times:[
					{open:"7:00"
					close:"10:00"}
					{open:"17:00"
					close:"19:00"}
					{open:"19:30"
					close:"21:00"}
					]
				},{
				date: "04/30/2017"
				weekday: "sunday"
				times:[
					{open:"7:00"
					close:"9:00"}
					{open:"11:00"
					close:"14:00"}
					{open:"17:30"
					close:"19:00"}
					{open:"19:30"
					close:"21:00"}
					]
				},{
				date: "05/01/2017"
				weekday: "monday"
				times:[
					{open:"7:30"
					close:"9:00"}
					{open:"11:30"
					close:"14:00"}
					{open:"17:30"
					close:"19:00"}
					{open:"19:30"
					close:"21:00"}
					]
				},{
				date: "05/02/2017"
				weekday: "tuesday"
				times:[
					{open:"6:30"
					close:"9:30"}
					{open:"18:00"
					close:"19:00"}
					{open:"19:30"
					close:"20:00"}
					]
				},{
				date: "05/03/2017"
				weekday: "wednesday"
				times:[
					{open:"7:00"
					close:"10:00"}
					{open:"11:00"
					close:"14:30"}
					{open:"18:00"
					close:"21:00"}
					]
				},{
				date: "05/04/2017"
				weekday: "thursday"
				times:[
					{open:"7:30"
					close:"9:00"}
					{open:"11:30"
					close:"14:00"}
					{open:"17:00"
					close:"19:00"}
					{open:"19:30"
					close:"21:30"}
					]
				},{
				date: "05/05/2017"
				weekday: "friday"
				times:[
					{open:"6:30"
					close:"10:00"}
					{open:"11:00"
					close:"14:00"}
					{open:"17:30"
					close:"19:00"}
					{open:"19:30"
					close:"21:00"}
					]
				},{
				date: "05/06/2017"
				weekday: "saturday"
				times:[
					{open:"7:00"
					close:"10:00"}
					{open:"11:00"
					close:"14:30"}
					{open:"17:00"
					close:"19:00"}
					{open:"19:30"
					close:"22:00"}
					]
				},
			]
		popularTimes:
			title: "Beliebte Besuchszeiten"
			content: "images/interface/pinkbox.svg"
		isBookable: false
		isPromoted: false


	east:
		name: "East Restaurant"
		type: "buffet"
		tagline: "Die ganze Vielfalt Asiens"
		rating: 3
		numRatings: 766
		locations: locations.east
		tags: [tags.asian, tags.family]
		description: "Frische asiatische Küche – leicht, exotisch und fantasievoll. Unsere Vielfalt an asiatischem und europäischem Gemüse, Fisch, Fleisch und Meeresfrüchten begeistern. Mit von Ihnen ausgewählten Zutaten können Sie sich hier Ihr persönliches Lieblingsgericht im Wok oder auf dem japanischen Teppanyaki-Grill zubereiten lassen. <br>Frühstück im East: Bei uns bekommen Sie jeden morgen Ihr Tankstellenbrötchen mit Marmelade. Garantiert keine Dumplings. Versprochen."
		includedInPrice:
			title: "Inklusive:"
			content: "Alle Speisen und Softdrinks"
		excludedInPrice:
			title: "Zum Aufpreis"
			content: "Kaffee- und Weinspezialitäten"
		openingHours:
			title: "Öffnungszeiten"
			content: [
				{
				date: "04/29/2017"
				weekday: "saturday"
				times:[
					{open:"7:00"
					close:"10:00"}
					{open:"17:00"
					close:"19:00"}
					{open:"19:30"
					close:"21:00"}
					]
				},{
				date: "04/30/2017"
				weekday: "sunday"
				times:[
					{open:"7:00"
					close:"9:00"}
					{open:"11:00"
					close:"14:00"}
					{open:"17:30"
					close:"19:00"}
					{open:"19:30"
					close:"21:00"}
					]
				},{
				date: "05/01/2017"
				weekday: "monday"
				times:[
					{open:"7:30"
					close:"9:00"}
					{open:"11:30"
					close:"14:00"}
					{open:"17:30"
					close:"19:00"}
					{open:"19:30"
					close:"21:00"}
					]
				},{
				date: "05/02/2017"
				weekday: "tuesday"
				times:[
					{open:"6:30"
					close:"9:30"}
					{open:"18:00"
					close:"19:00"}
					{open:"19:30"
					close:"20:00"}
					]
				},{
				date: "05/03/2017"
				weekday: "wednesday"
				times:[
					{open:"7:00"
					close:"10:00"}
					{open:"11:00"
					close:"14:30"}
					{open:"18:00"
					close:"21:00"}
					]
				},{
				date: "05/04/2017"
				weekday: "thursday"
				times:[
					{open:"7:30"
					close:"9:00"}
					{open:"11:30"
					close:"14:00"}
					{open:"17:00"
					close:"19:00"}
					{open:"19:30"
					close:"21:30"}
					]
				},{
				date: "05/05/2017"
				weekday: "friday"
				times:[
					{open:"6:30"
					close:"10:00"}
					{open:"11:00"
					close:"14:00"}
					{open:"17:30"
					close:"19:00"}
					{open:"19:30"
					close:"21:00"}
					]
				},{
				date: "05/06/2017"
				weekday: "saturday"
				times:[
					{open:"7:00"
					close:"10:00"}
					{open:"11:00"
					close:"14:30"}
					{open:"17:00"
					close:"19:00"}
					{open:"19:30"
					close:"22:00"}
					]
					},
				]

		popularTimes:
			title: "Beliebte Besuchszeiten"
			content: "images/interface/pinkbox.svg"
		isBookable: false
		isPromoted: false


	belladonna:
		name: "Bella Donna Restaurant"
		type: "buffet"
		tagline: "Das Beste aus Italien"
		rating: 5
		numRatings: 398
		locations: locations.belladonna
		tags: [tags.pasta, tags.family]
		description: "Lernen Sie Spezialitäten aus allen Regionen Italiens (z. B. Lombardei, Emilia Romagna, Südtirol, Kampanien und Toskana) kennen – jeden Abend eine neue Region! Hier finden Sie die größte Auswahl an Antipasti, Pasta, Schinken und Desserts auf der AIDAprima."
		includedInPrice:
			title: "Inklusive:"
			content: "Alle Speisen und Softdrinks"
		excludedInPrice:
			title: "Zum Aufpreis"
			content: "Kaffee- und Weinspezialitäten"
		openingHours:
			title: "Öffnungszeiten"
			content: [
				{
				date: "04/29/2017"
				weekday: "saturday"
				times:[
					{open:"7:00"
					close:"10:00"}
					{open:"17:00"
					close:"19:00"}
					{open:"19:30"
					close:"21:00"}
					]
				},{
				date: "04/30/2017"
				weekday: "sunday"
				times:[
					{open:"7:00"
					close:"9:00"}
					{open:"11:00"
					close:"14:00"}
					{open:"17:30"
					close:"19:00"}
					{open:"19:30"
					close:"21:00"}
					]
				},{
				date: "05/01/2017"
				weekday: "monday"
				times:[
					{open:"7:30"
					close:"9:00"}
					{open:"11:30"
					close:"14:00"}
					{open:"17:30"
					close:"19:00"}
					{open:"19:30"
					close:"21:00"}
					]
				},{
				date: "05/02/2017"
				weekday: "tuesday"
				times:[
					{open:"6:30"
					close:"9:30"}
					{open:"18:00"
					close:"19:00"}
					{open:"19:30"
					close:"20:00"}
					]
				},{
				date: "05/03/2017"
				weekday: "wednesday"
				times:[
					{open:"7:00"
					close:"10:00"}
					{open:"11:00"
					close:"14:30"}
					{open:"18:00"
					close:"21:00"}
					]
				},{
				date: "05/04/2017"
				weekday: "thursday"
				times:[
					{open:"7:30"
					close:"9:00"}
					{open:"11:30"
					close:"14:00"}
					{open:"17:00"
					close:"19:00"}
					{open:"19:30"
					close:"21:30"}
					]
				},{
				date: "05/05/2017"
				weekday: "friday"
				times:[
					{open:"6:30"
					close:"10:00"}
					{open:"11:00"
					close:"14:00"}
					{open:"17:30"
					close:"19:00"}
					{open:"19:30"
					close:"21:00"}
					]
				},{
				date: "05/06/2017"
				weekday: "saturday"
				times:[
					{open:"7:00"
					close:"10:00"}
					{open:"11:00"
					close:"14:30"}
					{open:"17:00"
					close:"19:00"}
					{open:"19:30"
					close:"22:00"}
					]
				},
			]
		popularTimes:
			title: "Beliebte Besuchszeiten"
			content: "images/interface/pinkbox.svg"
		isBookable: false
		isPromoted: false


	fuego:
		name: "Fuego Restaurant"
		type: "buffet"
		tagline: "Das Beste aus Italien"
		rating: 3
		numRatings: 1187
		locations: locations.weitewelt
		tags: [tags.pasta, tags.family]
		description: "Das besonders familienfreundliche Buffet-Restaurant! Unser spezielles Kinder-Buffet mit Fischstäbchen, Lasagne, Hackbällchen u.v.m. erfreut nicht nur die lieben Kleinen, sondern auch ihre Eltern. Burger-, Pizza- und Pasta-Stationen auf Gourmet-Niveau!"
		includedInPrice:
			title: "Inklusive:"
			content: "Alle Speisen und Softdrinks"
		excludedInPrice:
			title: "Zum Aufpreis"
			content: "Kaffee- und Weinspezialitäten"
		openingHours:
			title: "Öffnungszeiten"
			content: [
				{
				date: "04/29/2017"
				weekday: "saturday"
				times:[
					{open:"7:00"
					close:"10:00"}
					{open:"17:00"
					close:"19:00"}
					{open:"19:30"
					close:"21:00"}
					]
				},{
				date: "04/30/2017"
				weekday: "sunday"
				times:[
					{open:"7:00"
					close:"9:00"}
					{open:"11:00"
					close:"14:00"}
					{open:"17:30"
					close:"19:00"}
					{open:"19:30"
					close:"21:00"}
					]
				},{
				date: "05/01/2017"
				weekday: "monday"
				times:[
					{open:"7:30"
					close:"9:00"}
					{open:"11:30"
					close:"14:00"}
					{open:"17:30"
					close:"19:00"}
					{open:"19:30"
					close:"21:00"}
					]
				},{
				date: "05/02/2017"
				weekday: "tuesday"
				times:[
					{open:"6:30"
					close:"9:30"}
					{open:"18:00"
					close:"19:00"}
					{open:"19:30"
					close:"20:00"}
					]
				},{
				date: "05/03/2017"
				weekday: "wednesday"
				times:[
					{open:"7:00"
					close:"10:00"}
					{open:"11:00"
					close:"14:30"}
					{open:"18:00"
					close:"21:00"}
					]
				},{
				date: "05/04/2017"
				weekday: "thursday"
				times:[
					{open:"7:30"
					close:"9:00"}
					{open:"11:30"
					close:"14:00"}
					{open:"17:00"
					close:"19:00"}
					{open:"19:30"
					close:"21:30"}
					]
				},{
				date: "05/05/2017"
				weekday: "friday"
				times:[
					{open:"6:30"
					close:"10:00"}
					{open:"11:00"
					close:"14:00"}
					{open:"17:30"
					close:"19:00"}
					{open:"19:30"
					close:"21:00"}
					]
				},{
				date: "05/06/2017"
				weekday: "saturday"
				times:[
					{open:"7:00"
					close:"10:00"}
					{open:"11:00"
					close:"14:30"}
					{open:"17:00"
					close:"19:00"}
					{open:"19:30"
					close:"22:00"}
					]
				},
			]

		popularTimes:
			title: "Beliebte Besuchszeiten"
			content: "images/interface/pinkbox.svg"
		isBookable: false
		isPromoted: false


	casanova:
		name: "Ristorante Casa Nova"
		type: "service"
		rating: 5
		numRatings: 544
		tagline: "Verführung auf venezianische Art"
		locations:locations.casanova
		tags: [tags.pasta, tags.family]
		description: "Lernen Sie Spezialitäten aus allen Regionen Italiens (z. B. Lombardei, Emilia Romagna, Südtirol, Kampanien und Toskana) kennen – jeden Abend eine neue Region! Hier finden Sie die größte Auswahl an Antipasti, Pasta, Schinken und Desserts auf der AIDAprima."
		includedInPrice:
			title: "Inklusive:"
			content: "Alle Speisen"
		excludedInPrice:
			title: "Zum Aufpreis"
			content: "Getränke"
		openingHours:
			title: "Öffnungszeiten"
			content: [
				{
				date: "04/29/2017"
				weekday: "saturday"
				times:[
					{open:"7:00"
					close:"10:00"}
					{open:"17:00"
					close:"19:00"}
					{open:"19:30"
					close:"21:00"}
					]
				},{
				date: "04/30/2017"
				weekday: "sunday"
				times:[
					{open:"7:00"
					close:"9:00"}
					{open:"11:00"
					close:"14:00"}
					{open:"17:30"
					close:"19:00"}
					{open:"19:30"
					close:"21:00"}
					]
				},{
				date: "05/01/2017"
				weekday: "monday"
				times:[
					{open:"7:30"
					close:"9:00"}
					{open:"11:30"
					close:"14:00"}
					{open:"17:30"
					close:"19:00"}
					{open:"19:30"
					close:"21:00"}
					]
				},{
				date: "05/02/2017"
				weekday: "tuesday"
				times:[
					{open:"6:30"
					close:"9:30"}
					{open:"18:00"
					close:"19:00"}
					{open:"19:30"
					close:"20:00"}
					]
				},{
				date: "05/03/2017"
				weekday: "wednesday"
				times:[
					{open:"7:00"
					close:"10:00"}
					{open:"11:00"
					close:"14:30"}
					{open:"18:00"
					close:"21:00"}
					]
				},{
				date: "05/04/2017"
				weekday: "thursday"
				times:[
					{open:"7:30"
					close:"9:00"}
					{open:"11:30"
					close:"14:00"}
					{open:"17:00"
					close:"19:00"}
					{open:"19:30"
					close:"21:30"}
					]
				},{
				date: "05/05/2017"
				weekday: "friday"
				times:[
					{open:"6:30"
					close:"10:00"}
					{open:"11:00"
					close:"14:00"}
					{open:"17:30"
					close:"19:00"}
					{open:"19:30"
					close:"21:00"}
					]
				},{
				date: "05/06/2017"
				weekday: "saturday"
				times:[
					{open:"7:00"
					close:"10:00"}
					{open:"11:00"
					close:"14:30"}
					{open:"17:00"
					close:"19:00"}
					{open:"19:30"
					close:"22:00"}
					]
				},
			]

		popularTimes:
			title: "Beliebte Besuchszeiten"
			content: "images/interface/pinkbox.svg"
		isBookable: false
		isPromoted: false


	brauhaus:
		name: "Brauhaus"
		type: "service"
		tagline: "So a Gaudi"
		rating: 3
		numRatings: 166
		# menucard: menucards.brauhaus
		wayfinding:
			title: "Wegbeschreibung"
			deck: "Deck 14"
			preview: "moduleImages/interface/deckplanPreview.png"
			content: "direkt neben dem Four Elements"
		coverImage: "moduleImages/eatdrinknightlife/brauhaus.jpg"
		tags: [tags.pasta, tags.family]
		description: "Herzhafte Spezialitäten aus dem Alpenland und verschiedene Biersorten aus der bordeigenen Brauerei, gebraut aus Meerwasser nach dem deutschem Reinheitsgebot. Unsere berühmte gegrillte Ente mit Blaukraut und Kartoffelknödeln, knusprige Schweinshaxe mit Semmelknödeln, Kalbsgulasch, Brezeln und Obazda lassen das Herz jeden Feinschmeckers höher schlagen."
		includedInPrice:
			title: "Inklusive:"
			content: "Alle Speisen"
		excludedInPrice:
			title: "Zum Aufpreis"
			content: "Getränke"
		minimumAge:
			title: "Mindestalter"
			content: "ab 65 Jahren"
		popularTimes:
			title: "Beliebte Besuchszeiten"
			content: "moduleImages/interface/popularTimes.png"
		isBookable: true
		isPromoted: false
		openingHours: "data_openinghours.brauhaus"


	frenchkiss:
		name: "French Kiss – Die Brasserie"
		type: "service"
		tagline: "Raffniert französisch"
		rating: 3
		numRatings: 166
		menucard: menucards.brauhaus
		wayfinding:
			title: "Wegbeschreibung"
			deck: "Deck 7"
			preview: "moduleImages/interface/deckplanPreview.png"
			content: "Deck 7, zwischen Brauhaus und Kochstudio"
			deckplan: "moduleImages/interface/deckplan.png"
		coverImage: "moduleImages/eatdrinknightlife/frenchkiss.jpg"
		tags: [tags.pasta, tags.family]
		description: "Raffnierte französische Küche, z. B. Entenrillette, verschiedene Pasteten und Terrinen, Bouillabaisse, Crème brûlée und Mousse au Chocolate. Gäste können sich ihr Menü individuell zusammenstellen. In unserer hauseigenen Bäckerei entstehen täglich knusprige Brötchen und leckere Croissants. Am nachmittag gibt es hier köstliche Croissants, Tartes, Macarons und andere süße Verführer."
		includedInPrice:
			title: "Inklusive:"
			content: "Alle Speisen"
		excludedInPrice:
			title: "Zum Aufpreis"
			content: "Getränke"
		popularTimes:
			title: "Beliebte Besuchszeiten"
			content: "moduleImages/interface/popularTimes.png"
		isBookable: true
		isPromoted: false
		openingHours:
			title: "Öffnungszeiten"
			content: [
				{
				date: "04/29/2017"
				weekday: "saturday"
				times:[
					{open:"7:00"
					close:"10:00"}
					{open:"17:00"
					close:"19:00"}
					{open:"19:30"
					close:"21:00"}
					]
				},
				{
				date: "04/30/2017"
				weekday: "sunday"
				times:[
					{open:"7:00"
					close:"9:00"}
					{open:"11:00"
					close:"14:00"}
					{open:"17:30"
					close:"19:00"}
					{open:"19:30"
					close:"21:00"}
					]
				},{
				date: "05/01/2017"
				weekday: "monday"
				times:[
					{open:"7:30"
					close:"9:00"}
					{open:"11:30"
					close:"14:00"}
					{open:"17:30"
					close:"19:00"}
					{open:"19:30"
					close:"21:00"}
					]
				},{
				date: "05/02/2017"
				weekday: "tuesday"
				times:[
					{open:"6:30"
					close:"9:30"}
					{open:"18:00"
					close:"19:00"}
					{open:"19:30"
					close:"20:00"}
					]
				},{
				date: "05/03/2017"
				weekday: "wednesday"
				times:[
					{open:"7:00"
					close:"10:00"}
					{open:"11:00"
					close:"14:30"}
					{open:"18:00"
					close:"21:00"}
					]
				},{
				date: "05/04/2017"
				weekday: "thursday"
				times:[
					{open:"7:30"
					close:"9:00"}
					{open:"11:30"
					close:"14:00"}
					{open:"17:00"
					close:"19:00"}
					{open:"19:30"
					close:"21:30"}
					]
				},{
				date: "05/05/2017"
				weekday: "friday"
				times:[
					{open:"6:30"
					close:"10:00"}
					{open:"11:00"
					close:"14:00"}
					{open:"17:30"
					close:"19:00"}
					{open:"19:30"
					close:"21:00"}
					]
				},{
				date: "05/06/2017"
				weekday: "saturday"
				times:[
					{open:"7:00"
					close:"10:00"}
					{open:"11:00"
					close:"14:30"}
					{open:"17:00"
					close:"19:00"}
					{open:"19:30"
					close:"22:00"}
					]
				},
			]

	sushibar:
		name: "Sushi Bar"
		type: "alacarte"
		tagline: "Feine Häppchen aus Japan"
		rating: 3
		numRatings: 166
		menucard: menucards.sushibar
		wayfinding:
			title: "Wegbeschreibung"
			deck: "Deck 8"
			preview: "moduleImages/interface/deckplanPreview.png"
			content: "Deck 8, am Lanaideck nahe Gourmet-Restaurant Rossini und Buffalo Steak House"
			deckplan: "moduleImages/interface/deckplan.png"
		coverImage: "moduleImages/eatdrinknightlife/sushibar.jpg"
		tags: [tags.pasta, tags.family]
		description: "warme und kalte Sushi-Spezialitäten, verschiedene Suppen, z. B. Misosuppe, Thunfischcarpaccio und Salate. Unsere Sushi-Meister bereiten die Köstlichkeiten vor den Augen der Gäste zu."
		includedInPrice:
			title: "Inklusive:"
			content: "Alle Speisen"
		excludedInPrice:
			title: "Persönlicher Service am Platz"
			content: "Speisen und Getränke"
		popularTimes:
			title: "Beliebte Besuchszeiten"
			content: "moduleImages/interface/popularTimes.png"
		isBookable: true
		isPromoted: false
		openingHours:
			title: "Öffnungszeiten"
			content: [
				{
				date: "04/29/2017"
				weekday: "saturday"
				times:[
					{open:"18:00"
					close:"23:59"}
					]
				},
				{
				date: "04/30/2017"
				weekday: "sunday"
				times:[
					{open:"18:00"
					close:"23:59"}
					]
				},
				{
				date: "05/01/2017"
				weekday: "monday"
				times:[
					{open:"18:00"
					close:"23:59"}
					]
				},{
				date: "05/02/2017"
				weekday: "tuesday"
				times:[
					{open:"18:00"
					close:"23:59"}
					]
				},{
				date: "05/03/2017"
				weekday: "wednesday"
				times:[
					{open:"18:00"
					close:"23:59"}
					]
				},{
				date: "05/04/2017"
				weekday: "thursday"
				times:[
					{open:"18:00"
					close:"23:59"}
					]
				},{
				date: "05/05/2017"
				weekday: "friday"
				times:[
					{open:"18:00"
					close:"23:59"}
					]
				},{
				date: "05/06/2017"
				weekday: "saturday"
				times:[
					{open:"18:00"
					close:"23:59"}
					]
				},
			]

	rossini:
		name: "Rossini "
		type: "service"
		tagline: "Raffniert französisch"
		rating: 3
		numRatings: 166
		menucard: menucards.brauhaus
		wayfinding:
			title: "Wegbeschreibung"
			deck: "Deck 7"
			preview: "moduleImages/interface/deckplanPreview.png"
			content: "Deck 7, zwischen Brauhaus und Kochstudio"
			deckplan: "moduleImages/interface/deckplan.png"
		coverImage: "moduleImages/eatdrinknightlife/frenchkiss.jpg"
		tags: [tags.pasta, tags.family]
		description: "Raffnierte französische Küche, z. B. Entenrillette, verschiedene Pasteten und Terrinen, Bouillabaisse, Crème brûlée und Mousse au Chocolate. Gäste können sich ihr Menü individuell zusammenstellen. In unserer hauseigenen Bäckerei entstehen täglich knusprige Brötchen und leckere Croissants. Am nachmittag gibt es hier köstliche Croissants, Tartes, Macarons und andere süße Verführer."
		includedInPrice:
			title: "Inklusive:"
			content: "Alle Speisen"
		excludedInPrice:
			title: "Zum Aufpreis"
			content: "Getränke"
		popularTimes:
			title: "Beliebte Besuchszeiten"
			content: "moduleImages/interface/popularTimes.png"
		isBookable: true
		isPromoted: false
		openingHours:
			title: "Öffnungszeiten"
			content: [
				{
				date: "04/29/2017"
				weekday: "saturday"
				times:[
					{open:"7:00"
					close:"10:00"}
					{open:"17:00"
					close:"19:00"}
					{open:"19:30"
					close:"21:00"}
					]
				},
				{
				date: "04/30/2017"
				weekday: "sunday"
				times:[
					{open:"7:00"
					close:"9:00"}
					{open:"11:00"
					close:"14:00"}
					{open:"17:30"
					close:"19:00"}
					{open:"19:30"
					close:"21:00"}
					]
				},{
				date: "05/01/2017"
				weekday: "monday"
				times:[
					{open:"7:30"
					close:"9:00"}
					{open:"11:30"
					close:"14:00"}
					{open:"17:30"
					close:"19:00"}
					{open:"19:30"
					close:"21:00"}
					]
				},{
				date: "05/02/2017"
				weekday: "tuesday"
				times:[
					{open:"6:30"
					close:"9:30"}
					{open:"18:00"
					close:"19:00"}
					{open:"19:30"
					close:"20:00"}
					]
				},{
				date: "05/03/2017"
				weekday: "wednesday"
				times:[
					{open:"7:00"
					close:"10:00"}
					{open:"11:00"
					close:"14:30"}
					{open:"18:00"
					close:"21:00"}
					]
				},{
				date: "05/04/2017"
				weekday: "thursday"
				times:[
					{open:"7:30"
					close:"9:00"}
					{open:"11:30"
					close:"14:00"}
					{open:"17:00"
					close:"19:00"}
					{open:"19:30"
					close:"21:30"}
					]
				},{
				date: "05/05/2017"
				weekday: "friday"
				times:[
					{open:"6:30"
					close:"10:00"}
					{open:"11:00"
					close:"14:00"}
					{open:"17:30"
					close:"19:00"}
					{open:"19:30"
					close:"21:00"}
					]
				},{
				date: "05/06/2017"
				weekday: "saturday"
				times:[
					{open:"7:00"
					close:"10:00"}
					{open:"11:00"
					close:"14:30"}
					{open:"17:00"
					close:"19:00"}
					{open:"19:30"
					close:"22:00"}
					]
				},
			]
