{locations} = require 'data_locations'
{tags} = require 'data_tags'
{openinghours} = require 'data_openinghours'
{types} = require 'data_types'

# Add some places for events! Like:
# Lanai Bar, Deck 7
# Außendeck, Deck 15
# Theatrium, Deck 6-8


exports.venues =

	marktrestaurant:
		name: "Marktrestaurant"
		type: types.venues.buffet
		tagline: "Ein Marktspaziergang im Süden"
		rating: 4
		numRatings: 2143
		# menucard: menucards.marktrestaurant
		wayfinding:
			title: "Wegbeschreibung"
			deck: "Deck 6"
			preview: "modules/moduleImages/interface/deckplanPreview.png"
			content: "Deck 6 am Heck, neben Bella Donna Restaurant"
			deckplan: "modules/moduleImages/interface/deckplan.png"
		coverImage: "modules/moduleImages/eatdrinknightlife/marktrestaurant.jpg"
		tags: [tags.healthy, tags.family]
		description: "Hier finden Sie an fantasievoll dekorierte Ständen mediterrane und mitteleuropäische Küche, viel frisches Obst und Gemüse sowie vielfältige Käse-, Wurst- und Schinkenspezialitäten. Unser Fisch-Buffet mit Köstlichkeiten aus der restauranteigenen Fischräucherei wird Sie begeistern. Hochwertige offene Weine an der Weinstation und ein vegetarisches Buffet mit Schonkostbar runden das Angebot ab."
		includedInPrice:
			title: "Inklusive:"
			content: "Alle Speisen und Softdrinks"
		excludedInPrice:
			title: "Zum Aufpreis"
			content: "Kaffee- und Weinspezialitäten"
		minimumAge:
			title: "Mindestalter"
			content: "ab 65 Jahren"
		openingHours:
			title: "Öffnungszeiten"
			content: openinghours.marktrestaurant
		popularTimes:
			title: "Beliebte Besuchszeiten"
			content: "images/interface/pinkbox.svg"
		isBookable: false
		isPromoted: false
		staff:
			title:"Ihre Gastgeber:"
			content:[
				{
					name:"Maricel Pamintuan"
					title:"Buffet Chef"
					staffImage:"modules/moduleImages/personnel/MaricelPamintuan.png"
				},
				{
					name:"Anna Rademacher"
					title:"Maitre'D"
					staffImage:"modules/moduleImages/personnel/AnnaRademacher.png"
				}
			]


	weitewelt:
		name: "Weite Welt Restaurant"
		type: types.venues.buffet
		tagline: "Kulinarische Entdeckungsreisen"
		rating: 4
		numRatings: 122
		tagline: "Kommen Sie auf eine kulinarische Entdeckungsreise!"
		# menucard: menucards.marktrestaurant
		wayfinding:
			title: "Wegbeschreibung"
			deck: "Deck 7"
			preview: "modules/moduleImages/interface/deckplanPreview.png"
			content: "Deck 7 am Heck, zwischen Lanai Bar und Brauhaus"
			deckplan: "modules/moduleImages/interface/deckplan.png"
		coverImage: "modules/moduleImages/eatdrinknightlife/weitewelt.jpg"
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
			content: openinghours.weitewelt
		popularTimes:
			title: "Beliebte Besuchszeiten"
			content: "images/interface/pinkbox.svg"
		isBookable: false
		isPromoted: false
		staff:
			title: "Ihre Gastgeber:"
			content:[
				{
					name:"Maricel Pamintuan"
					title:"Buffet Chef"
					staffImage:"modules/moduleImages/personnel/MaricelPamintuan.png"
				},
				{
					name:"Anna Rademacher"
					title:"Maitre'D"
					staffImage:"modules/moduleImages/personnel/AnnaRademacher.png"
				}
			]


	east:
		name: "East Restaurant"
		type: types.venues.buffet
		tagline: "Die ganze Vielfalt Asiens"
		rating: 3
		numRatings: 766
		wayfinding:
			title: "Wegbeschreibung"
			deck: "Deck 6"
			preview: "modules/moduleImages/interface/deckplanPreview.png"
			content: "Deck 6 am Heck, neben Bella Donna Restaurant"
			deckplan: "modules/moduleImages/interface/deckplan.png"
		coverImage: "modules/moduleImages/eatdrinknightlife/east.jpg"
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
			content: openinghours.east
		popularTimes:
			title: "Beliebte Besuchszeiten"
			content: "images/interface/pinkbox.svg"
		isBookable: false
		isPromoted: false
		staff:
			title:"Ihre Gastgeber:"
			content:[
				{
					name:"Maricel Pamintuan"
					title:"Buffet Chef"
					staffImage:"modules/moduleImages/personnel/MaricelPamintuan.png"
				},
				{
					name:"Anna Rademacher"
					title:"Maitre'D"
					staffImage:"modules/moduleImages/personnel/AnnaRademacher.png"
				}
			]

	belladonna:
		name: "Bella Donna Restaurant"
		type: types.venues.buffet
		tagline: "Das Beste aus Italien"
		rating: 5
		numRatings: 398
		wayfinding:
			title: "Wegbeschreibung"
			deck: "Deck 6"
			preview: "modules/moduleImages/interface/deckplanPreview.png"
			content: "Deck 6, zwischen Markt Restaurant und Ristorante Casa Nova "
			deckplan: "modules/moduleImages/interface/deckplan.png"
		coverImage: "modules/moduleImages/eatdrinknightlife/belladonna.jpg"
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
			content: openinghours.belladonna
		popularTimes:
			title: "Beliebte Besuchszeiten"
			content: "images/interface/pinkbox.svg"
		isBookable: false
		isPromoted: false
		staff:
			title:"Ihre Gastgeber:"
			content:[
				{
					name:"Maricel Pamintuan"
					title:"Buffet Chef"
					staffImage:"modules/moduleImages/personnel/MaricelPamintuan.png"
				},
				{
					name:"Anna Rademacher"
					title:"Maitre'D"
					staffImage:"modules/moduleImages/personnel/AnnaRademacher.png"
				}
			]


	fuego:
		name: "Fuego Restaurant"
		type: types.venues.buffet
		tagline: "Das Beste aus Italien"
		rating: 3
		numRatings: 1187
		# menucard: menucards.fuego
		wayfinding:
			title: "Wegbeschreibung"
			deck: "Activity-Deck 14"
			preview: "modules/moduleImages/interface/deckplanPreview.png"
			content: "Activity-Deck 14, direkt neben dem Four Elements"
			deckplan: "modules/moduleImages/interface/deckplan.png"
		coverImage: "modules/moduleImages/eatdrinknightlife/fuego.jpg"
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
			content: openinghours.fuego
		popularTimes:
			title: "Beliebte Besuchszeiten"
			content: "images/interface/pinkbox.svg"
		isBookable: false
		isPromoted: false
		staff:
			title:"Ihre Gastgeber:"
			content:[
				{
					name:"Maricel Pamintuan"
					title:"Buffet Chef"
					staffImage:"modules/moduleImages/personnel/MaricelPamintuan.png"
				},
				{
					name:"Anna Rademacher"
					title:"Maitre'D"
					staffImage:"modules/moduleImages/personnel/AnnaRademacher.png"
				}
			]


	casanova:
		name: "Ristorante Casa Nova"
		type: types.venues.service
		rating: 5
		numRatings: 544
		tagline: "Verführung auf venezianische Art"
		# menucard: menucards.casanova
		wayfinding:
			title: "Wegbeschreibung"
			deck: "Deck 6"
			preview: "modules/moduleImages/interface/deckplanPreview.png"
			content: "Deck 6, zwischen Bella Donna Restaurant und East Restaurant"
			deckplan: "modules/moduleImages/interface/deckplan.png"
		coverImage: "modules/moduleImages/eatdrinknightlife/casanova.jpg"
		tags: [tags.healthy, tags.family]
		description: "Spezialitäten der venezianischen Küche, z.B. Rindercarpaccio, luftgetrockneter italienischer Landschinken, Minestrone, Kalbsleber mit Polenta und Goldbrasse in Weißwein. Gäste können sich ihr Menü individuell zusammenstellen."
		includedInPrice:
			title: "Inklusive:"
			content: "Alle Speisen"
		excludedInPrice:
			title: "Zum Aufpreis"
			content: "Getränke"
		openingHours:
			title: "Öffnungszeiten"
			content: openinghours.casanova
		popularTimes:
			title: "Beliebte Besuchszeiten"
			content: "images/interface/pinkbox.svg"
		isBookable: true
		isPromoted: false
		staff:
			title:"Ihre Gastgeber:"
			content:[
				{
					name:"Maricel Pamintuan"
					title:"Buffet Chef"
					staffImage:"modules/moduleImages/personnel/MaricelPamintuan.png"
				},
				{
					name:"Anna Rademacher"
					title:"Maitre'D"
					staffImage:"modules/moduleImages/personnel/AnnaRademacher.png"
				}
			]


	brauhaus:
		name: "Brauhaus"
		type: types.venues.service
		tagline: "So a Gaudi"
		rating: 3
		numRatings: 166
		# menucard: menucards.brauhaus
		wayfinding:
			title: "Wegbeschreibung"
			deck: "Deck 14"
			preview: "modules/moduleImages/interface/deckplanPreview.png"
			content: "direkt neben dem Four Elements"
		coverImage: "modules/moduleImages/eatdrinknightlife/brauhaus.jpg"
		tags: [tags.pasta, tags.family]
		description: "Herzhafte Spezialitäten aus dem Alpenland und verschiedene Biersorten aus der bordeigenen Brauerei, gebraut aus Meerwasser nach dem deutschem Reinheitsgebot. Unsere berühmte gegrillte Ente mit Blaukraut und Kartoffelknödeln, knusprige Schweinshaxe mit Semmelknödeln, Kalbsgulasch, Brezeln und Obazda lassen das Herz jeden Feinschmeckers höher schlagen."
		includedInPrice:
			title: "Inklusive:"
			content: "Alle Speisen"
		excludedInPrice:
			title: "Zum Aufpreis"
			content: "Getränke"
		openingHours:
			title: "Öffnungszeiten"
			content: openinghours.brauhaus
		popularTimes:
			title: "Beliebte Besuchszeiten"
			content: "modules/moduleImages/interface/popularTimes.png"
		isBookable: true
		isPromoted: false
		staff:
			title:"Ihre Gastgeber:"
			content:[
				{
					name:"Maricel Pamintuan"
					title:"Küchenchef"
					staffImage:"modules/moduleImages/personnel/MaricelPamintuan.png"
				},
				{
					name:"Anna Rademacher"
					title:"Maitre'D"
					staffImage:"modules/moduleImages/personnel/AnnaRademacher.png"
				}
			]


	frenchkiss:
		name: "French Kiss – Die Brasserie"
		type: types.venues.service
		tagline: "Raffniert französisch"
		rating: 3
		numRatings: 166
		# menucard: menucards.brauhaus
		wayfinding:
			title: "Wegbeschreibung"
			deck: "Deck 7"
			preview: "modules/moduleImages/interface/deckplanPreview.png"
			content: "Deck 7, zwischen Brauhaus und Kochstudio"
			deckplan: "modules/moduleImages/interface/deckplan.png"
		coverImage: "modules/moduleImages/eatdrinknightlife/frenchkiss.jpg"
		tags: [tags.pasta, tags.family]
		description: "Raffnierte französische Küche, z. B. Entenrillette, verschiedene Pasteten und Terrinen, Bouillabaisse, Crème brûlée und Mousse au Chocolate. Gäste können sich ihr Menü individuell zusammenstellen. In unserer hauseigenen Bäckerei entstehen täglich knusprige Brötchen und leckere Croissants. Am nachmittag gibt es hier köstliche Croissants, Tartes, Macarons und andere süße Verführer."
		includedInPrice:
			title: "Inklusive:"
			content: "Alle Speisen"
		excludedInPrice:
			title: "Zum Aufpreis"
			content: "Getränke"
		openingHours:
			title: "Öffnungszeiten"
			content: openinghours.frenchkiss
		popularTimes:
			title: "Beliebte Besuchszeiten"
			content: "modules/moduleImages/interface/popularTimes.png"
		isBookable: true
		isPromoted: false
		openingHours:
			title: "Öffnungszeiten"
			content: openinghours.frenchkiss
		staff:
			title:"Ihre Gastgeber:"
			content:[
				{
					name:"Maricel Pamintuan"
					title:"Chef de Cuisine"
					staffImage:"modules/moduleImages/personnel/MaricelPamintuan.png"
				},
				{
					name:"Anna Rademacher"
					title:"Maitre'D"
					staffImage:"modules/moduleImages/personnel/AnnaRademacher.png"
				}
			]

	sushibar:
		name: "Sushi Bar"
		type: types.venues.alacarte
		tagline: "Feine Häppchen aus Japan"
		rating: 3
		numRatings: 166
		# menucard: menucards.sushibar
		wayfinding:
			title: "Wegbeschreibung"
			deck: "Deck 8"
			preview: "modules/moduleImages/interface/deckplanPreview.png"
			content: "Deck 8, am Lanaideck nahe Gourmet-Restaurant Rossini und Buffalo Steak House"
			deckplan: "modules/moduleImages/interface/deckplan.png"
		coverImage: "modules/moduleImages/eatdrinknightlife/sushibar.jpg"
		tags: [tags.pasta, tags.family]
		description: "Warme und kalte Sushi-Spezialitäten, verschiedene Suppen, z. B. Misosuppe, Thunfischcarpaccio und Salate. Unsere Sushi-Meister bereiten die Köstlichkeiten vor den Augen der Gäste zu."
		includedInPrice:
			title: "Inklusive:"
			content: "Alle Speisen"
		excludedInPrice:
			title: "Persönlicher Service am Platz"
			content: "Speisen und Getränke"
		openingHours:
			title: "Öffnungszeiten"
			content: openinghours.sushibar
		popularTimes:
			title: "Beliebte Besuchszeiten"
			content: "modules/moduleImages/interface/popularTimes.png"
		isBookable: true
		isPromoted: false
		staff:
			title:"Ihre Gastgeber:"
			content:[
				{
					name:"Maricel Pamintuan"
					title:"Sushi Meister"
					staffImage:"modules/moduleImages/personnel/MaricelPamintuan.png"
				},
			]


	rossini:
		name: "Rossini "
		type: types.venues.alacarte
		tagline: "Spitzenköche zaubern für Sie"
		rating: 3
		numRatings: 166
		# menucard: menucards.brauhaus
		wayfinding:
			title: "Wegbeschreibung"
			deck: "Deck 7"
			preview: "modules/moduleImages/interface/deckplanPreview.png"
			content: "Deck 8, am Lanaideck neben Sushi Bar und nahe Buffalo Steak Haus"
			deckplan: "modules/moduleImages/interface/deckplan.png"
		coverImage: "modules/moduleImages/eatdrinknightlife/rossini.jpg"
		tags: [tags.pasta, tags.family]
		description: "Raffnierte französische Küche, z. B. Entenrillette, verschiedene Pasteten und Terrinen, Bouillabaisse, Crème brûlée und Mousse au Chocolate. Gäste können sich ihr Menü individuell zusammenstellen. In unserer hauseigenen Bäckerei entstehen täglich knusprige Brötchen und leckere Croissants. Am nachmittag gibt es hier köstliche Croissants, Tartes, Macarons und andere süße Verführer."
		includedInPrice:
			title: "Inklusive:"
			content: "Alle Speisen"
		excludedInPrice:
			title: "Zum Aufpreis"
			content: "Speisen und Getränke"
		openingHours:
			title: "Öffnungszeiten"
			content: openinghours.marktrestaurant
		popularTimes:
			title: "Beliebte Besuchszeiten"
			content: "modules/moduleImages/interface/popularTimes.png"
		isBookable: true
		isPromoted: false
		staff:
			title:"Ihre Gastgeber:"
			content:[
				{
					name:"Maricel Pamintuan"
					title:"Chef de Cuisine"
					staffImage:"modules/moduleImages/personnel/MaricelPamintuan.png"
				},
				{
					name:"Anna Rademacher"
					title:"Maitre'D"
					staffImage:"modules/moduleImages/personnel/AnnaRademacher.png"
				}
			]

	buffalosteakhouse:
		name: "Buffalo Steak House"
		type: types.venues.alacarte
		tagline: "Widerstand zwecklos"
		rating: 5
		numRatings: 61
		# menucard: menucards.buffalosteakhouse
		wayfinding:
			title: "Wegbeschreibung"
			deck: "Deck 8"
			preview: "modules/moduleImages/interface/deckplanPreview.png"
			content: "Deck 8, am Lanaideck nahe Sushi Bar und Gourmet- Restaurant Rossini"
			deckplan: "modules/moduleImages/interface/deckplan.png"
		coverImage: "modules/moduleImages/eatdrinknightlife/buffalo.jpg"
		tags: [tags.healthy, tags.family]
		description: "Bestes American Beef und Bisonfleisch von den Tieren der  Morgan Ranch in Nebraska, USA sowie Wagyu-Rind garantieren höchsten Genuss von der Vorspeise über den Hauptgang bis hin zum Dessert.  Unser besonders saftiges, fettarmes Fleisch hat seinen erstklassiger Geschmack dank schonender Reife im gläsernen Fleischkühltresen an Bord (Dry-aging-Verfahren). Unser Grillmeister bereitet alles nach Wunsch zu.
		Hier geniesen Sie auch saftige Burger, American-Rib-Eye-Steak aus dem Reifeschrank und andere Spezialitäten sowie erlesene Weine und Bierspezialitäten."
		excludedInPrice:
			title: "Zum Aufpreis"
			content: "Alle Speisen und Getränke"
		openingHours:
			title: "Öffnungszeiten"
			content: openinghours.buffalosteakhouse
		popularTimes:
			title: "Beliebte Besuchszeiten"
			content: "images/interface/pinkbox.svg"
		isBookable: true
		isPromoted: false
		staff:
			title:"Ihre Gastgeber:"
			content:[
				{
					name:"Maricel Pamintuan"
					title:"Chef de Cuisine"
					staffImage:"modules/moduleImages/personnel/MaricelPamintuan.png"
				},
				{
					name:"Anna Rademacher"
					title:"Maitre'D"
					staffImage:"modules/moduleImages/personnel/AnnaRademacher.png"
				}
			]

	aussendeck:
		name: "Außendeck 15"
		type: types.venues.place
		tagline: "Spiel & Spaß für Groß & Klein"
		rating: 5
		numRatings: 61
		# menucard: menucards.buffalosteakhouse
		wayfinding:
			title: "Wegbeschreibung"
			deck: "Deck 15"
			preview: "moduleImages/interface/deckplanPreview.png"
			content: "Deck 8, am Lanaideck nahe Sushi Bar und Gourmet- Restaurant Rossini"
			deckplan: "moduleImages/interface/deckplan.png"
		coverImage: "moduleImages/eatdrinknightlife/buffalosteakhouse.jpg"
		tags: [tags.healthy, tags.family]
		description: "Bestes American Beef und Bisonfleisch von den Tieren der  Morgan Ranch in Nebraska, USA sowie Wagyu-Rind garantieren höchsten Genuss von der Vorspeise über den Hauptgang bis hin zum Dessert.  Unser besonders saftiges, fettarmes Fleisch hat seinen erstklassiger Geschmack dank schonender Reife im gläsernen Fleischkühltresen an Bord (Dry-aging-Verfahren). Unser Grillmeister bereitet alles nach Wunsch zu.
		Hier geniesen Sie auch saftige Burger, American-Rib-Eye-Steak aus dem Reifeschrank und andere Spezialitäten sowie erlesene Weine und Bierspezialitäten."
		excludedInPrice:
			title: "Zum Aufpreis"
			content: "Alle Speisen und Getränke"
		openingHours:
			title: "Öffnungszeiten"
			content: openinghours.buffalosteakhouse
		popularTimes:
			title: "Beliebte Besuchszeiten"
			content: "images/interface/pinkbox.svg"
		isBookable: true
		isPromoted: false
		staff:
			title:"Ihre Gastgeber:"
			content:[
				{
					name:"Maricel Pamintuan"
					title:"Chef de Cuisine"
					staffImage:"modules/moduleImages/personnel/MaricelPamintuan.png"
				},
				{
					name:"Anna Rademacher"
					title:"Maitre'D"
					staffImage:"modules/moduleImages/personnel/AnnaRademacher.png"
				}
			]
