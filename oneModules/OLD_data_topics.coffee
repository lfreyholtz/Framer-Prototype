{excursions} = require 'data_excursions'
{venues} = require 'data_venues'


exports.data_topics =

		wellness:
			title: "Wellness,<br />Sport & Spa"
			subtitle: "Sich wohlfühlen war nie einfacher"
			image: "modules/moduleImages/topics/topicWellness.jpg"
			categorySubline: "großartige Orte zum Geniessen und feiern"
			subtopics: [
				{
					name:"Sport und Wellness Angebote"
					members:[]
				},
				{
					name:"Aktive Ausflüge"
					members:[excursions.A1001, excursions.A1002, excursions.A1003]
				},
				{
					name:"Sport und Spiel Veranstaltungen"
					members:[]
				}]

		# events:
		# 	title: "Veranstaltungen"
		# 	subtitle: "Alles was los ist an Bord"
		# 	image: "modules/moduleImages/topics/topicEvents.jpg"
		# 	categorySubline: "großartige Orte zum Geniessen und feiern"
		# 	categories: [
		# 		{
		# 			catTitle: "Alle Veranstaltungen heute"
		# 			catSubtitle: "57 Veranstaltungen insgesamt"
		# 		},{
		# 			catTitle: "Familie"
		# 			catSubtitle: "31 Veranstaltungen"
		# 		},{
		# 			catTitle: "Sport & Spiel"
		# 			catSubtitle: "17 Veranstaltungen"
		# 		},{
		# 			catTitle: "Unterhaltung"
		# 			catSubtitle: "23 Veranstaltungen"
		# 		},{
		# 			catTitle: "Geniessen"
		# 			catSubtitle: "14 Veranstaltungen"
		# 		},{
		# 			catTitle: "Entdecken"
		# 			catSubtitle: "9 Veranstaltungen"
		# 		}
		# 		]
		#
		# excursions:
		# 	title: "Ausflüge"
		# 	subtitle: "Entdecken Sie die Welt"
		# 	image: "modules/moduleImages/topics/topicExcursions.jpg"
		# 	categorySubline: "großartige Orte zum Geniessen und feiern"
		# 	categories: [
		# 		{
		# 			catTitle: "Alle Ausflüge"
		# 			catSubtitle: "something"
		# 		},{
		# 			catTitle: "Ausflüge nach Kategorien"
		# 			catSubtitle: "Die besten Ausflüge für Sie"
		# 		},{
		# 			catTitle: "Southampton/London"
		# 			catSubtitle: "87 Ausflüge"
		# 		},{
		# 			catTitle: "Le Havre/Paris"
		# 			catSubtitle: "68 Ausflüge"
		# 		},{
		# 			catTitle: "Zeebrügge/Brüssel"
		# 			catSubtitle: "55 Ausflüge"
		# 		},{
		# 			catTitle: "Rotterdam/Amsterdam"
		# 			catSubtitle: "72 Ausflüge"
		# 		}
		# 		]
		#
		# eatdrinknightlife:
		# 	title: "Essen, Trinken und Nightlife"
		# 	subtitle: "Geniessen und feiern"
		# 	image: "modules/moduleImages/topics/topicEatdrinknight.jpg"
		# 	categorySubline: "großartige Orte zum Geniessen und feiern"
		# 	categories: [
		# 		{
		# 			catTitle: "Restaurants"
		# 			catSubtitle: "Buffet-, Service- und à la Carte-Restaurants"
		# 		},{
		# 			catTitle: "Snackbars und Cáfes"
		# 			catSubtitle: "Der kleine Genuss zwischendurch"
		# 		},{
		# 			catTitle: "Bars und Nachtclubs"
		# 			catSubtitle: "Feiern bis in den Morgen"
		# 		}
		# 		]
		#
		# shopping:
		# 	title: "Shopping"
		# 	subtitle: "Das schwimmende Einkaufserlebnis"
		# 	image: "modules/moduleImages/topics/topicShopping.jpg"
		# 	categorySubline: "großartige Orte zum Geniessen und feiern"
		# 	categories: [
		# 		{
		# 			catTitle: "Alle Shops an Bord"
		# 			catSubtitle: "Something with shops"
		# 		},{
		# 			catTitle: "Unsere Produkte"
		# 			catSubtitle: "Alles was es gibt"
		# 		}
		# 		]
