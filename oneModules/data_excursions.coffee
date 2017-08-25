{locations} = require 'data_locations'
{tags} = require 'data_tags'

## TODO: add at least 2 for each port##
# LeHavre
# ZeeBrugge
# Rotterdam

exports.excursions =

	PAKPR1:
			name:"Paket 1 - Individuell entdecken"
			type:"packet"
			tagline:"Erobern Sie die Metropolen mit einem Preisvorteil"
			locations:[locations.GBSOU, locations.FRLEH, locations.NLRTM]
			images:[]
			tags:[tags.culture, tags.family]
			duration:9
			costs:[
					{
						label: "Erwachsener"
						price: 169.00
					},
					{
						label: "Children"
						price: 89.00
					},
				]
			difficulty:1
			startTime:11:45
			includedItems:[]
			minimumAge:2
			description:"Schlendern Sie entlang der romantischen Grachten von Amsterdam, seien Sie Gast in der Stadt, die einst das zu Hause von Van Gogh war. Lauschen Sie dem Glockenschlag von Big Ben und beobachten
									Sie die tägliche Zeremonie der Wachablösung am Buckingham Palace. Lassen Sie sich bei dem unvergesslichen Blick über Paris vom Eiffelturm aus
									frischen Wind um die Nase wehen oder werden Sie während eines Besuchs im Louvre zum Kunstliebhaber - sofern Sie es nicht schon sind.  Diese und viele
									weitere historische und kulturelle Sehenswürdigkeiten können Sie frei nach ihren Wünschen entdecken. Wir bringen Sie zu diesen eindrucksvollen Orten und überlassen Ihnen die Wahl,
									welche persönlichen Highlights von Ihnen erobert werden sollen.

									Eigens dafür haben wir für Sie ein Paket erstellt, dass nur noch darauf wartet reserviert zu werden, damit Sie in den Genuss dieses einmaligen Angebots kommen können."


			includedExcursions:["Amsterdam auf eigene Faust", "London auf eigene Faust", "Paris auf eigene Faust"]

			ticketInfo:"Ihre Ausflugstickets mit den genauen Startzeiten und Treffpunkten liegen am Anreisetag in Ihrer Kabine für Sie bereit.
									Wir bemühen uns in allen Fahrtgebieten um deutschsprachige Reiseleiter, die jedoch in manchen Ländern gar nicht bzw. nicht ausreichend zur Verfügung stehen.
									In diesem Fall werden die Ausflüge von englischsprachigen Reiseleitern geführt."

			addlInfo:"Fotostopps und Dauer der Freizeit verkehrsabhängig, Zustieg des Reiseleiters auf dem Weg nach London,
			Rückfahrt ohne Reiseleiter Bitte beachten Sie, dass die Teilnahme bis zum 16. Geburtstag ausschließlich in Begleitung eines Erwachsenen möglich ist,
			der von einem Erziehungsberechtigten benannt werden muss. Bis zum 18. Geburtstag benötigen Jugendliche eine ausflugsbezogene, schriftliche Erlaubnis eines Erziehungsberechtigten."

			conditions:"Die Ausflüge für dieses Paket sind festgelegt und können nicht getauscht werden.
						An Bord ist das Paket nach dem Buchungsschluss des Hafens Southampton nicht mehr stornierbar."

	PAKPR3:
			name:"Paket 3 - Endlos entdecken"
			type:"packet"
			tagline:"Seien Sie wählerisch - Nutzen Sie einen Preisvorteil bis zu 101,80 € p.P."
			locations:[locations.GBSOU, locations.FRLEH, locations.NLRTM]
			images:[]
			tags:[tags.culture, tags.family]
			duration:9
			costAdults:333.00
			costChildren:249.00
			difficulty:1
			startTime:1145
			includedItems:[]
			minimumAge:2
			description:"Wo die Reise Sie hinführt, liegt bei diesem Paket ganz allein in Ihrem Ermessen. Ihrem Entdeckerdrang sind keine Grenzen gesetzt. In Southampton bietet sich ein Trip in die englische Hauptstadt London an. Mit SOU05 erleben Sie die Hauptsehenswürdigkeiten und können freie Zeit zum Bummeln nutzen. Sollten Sie sich Ihre Zeit in London lieber selbst gestalten wollen, empfehlen wir Ihnen die Tour SOU07. Ein unvergessliches Highlight ist SOU08. Bei dem Sie London mit einer Bootstour auf der Themse und bei einer Stadtrundfahrt kennenlernen können.<br> In Le Havre angekommen, lohnt sich ein Besuch von Honfleur. Schlendern Sie mit uns auf der Tour LEH03 durch die gemütlichen Gassen der alten Seefahrerstadt, bevor es weiter geht zum Seebad Deauville. Mit LEH08 bringen wir Sie nach Honfleur und sie können Ihre Zeit für individuelle Erkundungen nutzen. Ein Highlight ist Frankreichs Hauptstadt Paris. Mit der Tour LEH11 können Sie bei einer Panoramafahrt Pariser Highlights sehen und die Kathedrale Notre-Dame de Paris besichtigen.<br> In Zeebrügge bieten wir Ihnen bei dem Ausflug ZEE01 eine Bootsfahrt auf den romantischen Grachten sowie einen Spaziergang durch die mittelalterliche Stadt an. ZEE03 ist für individuelle Erkundungen der Hansestadt geeignet. In Europas Hauptstadt Brüssel entdecken Sie mit der Tour ZEE06 Sehenswürdigkeiten wie Manneken PIS, den Königlichen Palast oder den Japanischen Turm. Das alte und neue Rotterdam können Sie mit einer Panoramafahrt RTM06 erkunden. Sollten Sie den Wunsch haben einen Trip nach Amsterdam zu unternehmen, bietet sich für Sie auf dem Ausflug RTM01 die Möglichkeit per Bus und Boot die Stadt zu erleben und dort Freizeit zu verbringen. Für Selbstentdecker ist die Tour RTM03 empfehlenswert, um Amsterdam ausgiebig allein zu erobern. Neben den aufgeführten Touren, haben wir weitere Ausflüge im Programm. Schauen Sie einfach in unser MyAIDA-Reiseportal und entscheiden Sie sich für die schönsten und exklusivsten Touren aus unserem Ausflugsprogramm. Somit machen Sie jeden Tag zum Highlight und Ihren Urlaub zu einem unvergesslichen Erlebnis. <br> Sehr gern können Sie uns Ihre Auswahl bereits vorab mitteilen. Ihre Ausflugstickets mit den genauen Startzeiten und Treffpunkten liegen dann am Anreisetag in Ihrer Kabine für Sie bereit. "

			includedExcursions:["Kombinieren Sie Ihre Ausflüge frei nach Ihren Wünschen", "Bis 4 Ausflüge aussuchen", "Privat-Touren, Bike/Pedelec, Segway und Golf sind ausgenommen"]

			ticketInfo:"Wir bemühen uns in allen Fahrtgebieten um deutschsprachige Reiseleiter, die jedoch in manchen Ländern gar nicht bzw. nicht ausreichend zur Verfügung stehen. In diesem Fall werden die Ausflüge von englischsprachigen Reiseleitern geführt. Bitte beachten Sie, dass die Teilnahme bis zum 16. Geburtstag ausschließlich in Begleitung eines Erwachsenen möglich ist, der von einem Erziehungsberechtigten benannt werden muss. Bis zum 18. Geburtstag benötigen Jugendliche eine ausflugsbezogene, schriftliche Erlaubnis eines Erziehungsberechtigten."

			addlInfo:""

			conditions:"An Bord ist das Paket nach dem Buchungsschluss des Hafens Southampton nicht mehr stornierbar."

	SOU01:
			name: "Englands Hauptstadt: London"
			type :"excursion"
			tagline: "Panoramafahrt entlang der wichtigsten Sehenswürdigkeiten!"
			locations: [locations.GBSOU]
			images: ["modules/moduleImages/excursions/GBSOU/SOU01cover.jpg"]
			tags: [tags.culture, tags.family]
			duration: 9
			costAdults: 71.96
			costChildren: 50.36
			difficulty: 2
			startTime: 1115
			includedItems: []
			minimumAge: 2
			description: "Der Ausflug beginnt mit einer 120-minütigen Landschaftsfahrt nach London. Anschließend folgt eine 2 h Orientierungsfahrt per Bus, vorbei an bekannten Sehenswürdigkeiten wie dem Parlamentsgebäude, dem Buckingham-Palast und der Westminster Abbey. Im Anschluss stehen ca. 1,5 h Freizeit zum Mittagessen, Bummeln und Einkaufen zur Verfügung. Danach erfolgt die Rückfahrt zum Schiff."
			stations:[
				{
					startTime:1115
					endTime:"--"
					description:"Alle treffen sich am Sammelpunkt"
				},
				{
					startTime:1130
					endTime:1330
					description:"Busfahrt in die Metropole London"
				},
				{
					startTime:1330
					endTime:1530
					description:"Orientierungsfahrt entlang der wichtigsten Sehenswürdigkeiten
											wie Parlamentsgebäude, Buckingham-Palast und Westminster Abbey"
				},
				{
					startTime:1530
					endTime:1700
					description:"Freizeit zum Mattagessen"
				},
				{
					startTime:1700
					endTime:1900
					description:"Rückfahrt zum Schiff"
				},
			]
			ticketInfo:"Ihre Ausflugstickets mit den genauen Startzeiten und Treffpunkten liegen am Anreisetag in Ihrer Kabine für Sie bereit. Wir bemühen uns in allen Fahrtgebieten um deutschsprachige Reiseleiter, die jedoch in manchen Ländern gar nicht bzw. nicht ausreichend zur Verfügung stehen. In diesem Fall werden die Ausflüge von englischsprachigen Reiseleitern geführt."
			addlInfo:"Fotostopps und Dauer der Freizeit verkehrsabhängig, Zustieg des Reiseleiters auf dem Weg nach London, Rückfahrt ohne Reiseleiter Bitte beachten Sie, dass die Teilnahme bis zum 16. Geburtstag ausschließlich in Begleitung eines Erwachsenen möglich ist, der von einem Erziehungsberechtigten benannt werden muss. Bis zum 18. Geburtstag benötigen Jugendliche eine ausflugsbezogene, schriftliche Erlaubnis eines Erziehungsberechtigten."

	SOU02:
			name:"Königliche Hauptstadt & Tower of London"
			type:"excursion"
			tagline:"Besuchen Sie eine der beliebtesten Attraktionen der Stadt!"
			locations:[locations.GBSOU]
			images: ["modules/moduleImages/excursions/GBSOU/SOU02cover.jpg"]
			tags:[tags.culture, tags.family]
			duration:10
			costAdults:98.95
			costChildren:69.25
			difficulty:2
			startTime:1000
			includedItems:[]
			minimumAge:2
			description: "Der Ausflug beginnt mit einer 120-minütigen Landschaftsfahrt nach London. Anschließend folgt eine 2 h Orientierungsfahrt per Bus, vorbei an bekannten Sehenswürdigkeiten wie dem Parlamentsgebäude, dem Buckingham-Palast und der Westminster Abbey. Im Anschluss stehen ca. 1,5 h Freizeit zum Mittagessen, Bummeln und Einkaufen zur Verfügung. Danach erfolgt die Rückfahrt zum Schiff."
			stations:[
				{
					startTime:1000
					endTime:"--"
					description:"Alle treffen sich am Sammelpunkt"
				},
				{
					startTime:1000
					endTime:1130
					description:"Busfahrt in die Metropole London"
				},
				{
					startTime:1130
					endTime:1300
					description:"Orientierungsfahrt entlang der wichtigsten Sehenswürdigkeiten
											wie Parlamentsgebäude, Buckingham-Palast und Westminster Abbey"
				},
				{
					startTime:1300
					endTime:1500
					description:"Freizeit zum Mattagessen oder Einkäufe"
				},
				{
					startTime:1500
					endTime:1600
					description:"Geführte Tour durch den Tower of London"
				},
				{
					startTime:1700
					endTime:1900
					description:"Rückfahrt zum Schiff"
				},
			]
			ticketInfo:"Ihre Ausflugstickets mit den genauen Startzeiten und Treffpunkten liegen am Anreisetag in Ihrer Kabine für Sie bereit. Wir bemühen uns in allen Fahrtgebieten um deutschsprachige Reiseleiter, die jedoch in manchen Ländern gar nicht bzw. nicht ausreichend zur Verfügung stehen. In diesem Fall werden die Ausflüge von englischsprachigen Reiseleitern geführt. "
			addlInfo:"Fotostopps und Dauer der Freizeit verkehrsabhängig, Zustieg des Reiseleiters auf dem Weg nach London, Rückfahrt ohne Reiseleiter. Bitte beachten Sie, dass die Teilnahme bis zum 16. Geburtstag ausschließlich in Begleitung eines Erwachsenen möglich ist, der von einem Erziehungsberechtigten benannt werden muss. Bis zum 18. Geburtstag benötigen Jugendliche eine ausflugsbezogene, schriftliche Erlaubnis eines Erziehungsberechtigten."

	SOU03:
			name:"Salisbury & Mysteriöses Stonehenge"
			type:"excursion"
			tagline:"Besuchen Sie eine der beliebtesten Attraktionen der Stadt!"
			locations:[locations.GBSOU]
			images: ["modules/moduleImages/excursions/GBSOU/SOU03cover.jpg"]
			tags:[tags.culture, tags.family]
			duration:7
			costAdults:75.19
			costChildren:49.45
			difficulty:2
			startTime:1000
			includedItems:[]
			minimumAge:2
			description:"Ziel der ca. 90-minütigen Busfahrt ist das mysteriöse Stonehenge. Bei den Megalith Monuments sind ca. 1,5 h Aufenthalt geplant. Nach diesem Highlight beginnt die ca. 30- minütige Weiterfahrt durch die ländliche Umgebung vorbei an englischen Landhäusern nach Salisbury. Dort sind fast 2 Stunden Zeit zur individuellen Besichtigung der mittelalterlich geprägten Stadt geplant. Anschließend erfolgt die Rückfahrt zum Schiff."
			stations:[
				{
					startTime:1000
					endTime:"--"
					description:"Alle treffen sich am Sammelpunkt"
				},
				{
					startTime:1000
					endTime:"--"
					description:"Busfahrt nach Stonehenge"
				},
				{
					startTime:1130
					endTime:"--"
					description:"Besuch des berühmten Megalith Monuments"
				},
				{
					startTime:1300
					endTime:"--"
					description:"Weiterfahrt nach Salisbury"
				},
				{
					startTime:1330
					endTime:"--"
					description:"Freizeit zur individuellen Besichtigung"
				},
				{
					startTime:1600
					endTime:"--"
					description:"Rückfahrt zum Schiff"
				},
			]
			ticketInfo:"Ihre Ausflugstickets mit den genauen Startzeiten und Treffpunkten liegen am Anreisetag in Ihrer Kabine für Sie bereit. Wir bemühen uns in allen Fahrtgebieten um deutschsprachige Reiseleiter, die jedoch in manchen Ländern gar nicht bzw. nicht ausreichend zur Verfügung stehen. In diesem Fall werden die Ausflüge von englischsprachigen Reiseleitern geführt."

			addlInfo:"Deutschsprachige Audioguides in Stonehenge: Bitte beachten Sie, dass die Teilnahme bis zum 16. Geburtstag ausschließlich in Begleitung eines Erwachsenen möglich ist, der von einem Erziehungsberechtigten benannt werden muss. Bis zum 18. Geburtstag benötigen Jugendliche eine ausflugsbezogene, schriftliche Erlaubnis eines Erziehungsberechtigten."

	SOU04:
		name:"Zu Besuch im Paultons Family Theme Park"
		type: "excursion"
		tagline:"Spaß für Groß & Klein"
		locations:[locations.GBSOU]
		images: ["modules/moduleImages/excursions/GBSOU/SOU04cover.jpg"]
		tags:[tags.family]
		duration: 8
		costAdults: 69.25
		costChildren: 59.45
		difficulty: 2
		startTime: "0900"
		includedItems: []
		minimumAge: 2
		description: "Im Anschluss an die 45-minütige Landschaftsfahrt zum Paultons Family Theme Parknach stehen ca. 6 Stunden Freizeit um unzählige Shows, Attraktionen und Fahrgeschäfte auszuprobieren zur Verfügung. Hier kann man in die Welt von Peppa Pig oder in den Dinosaurier-Themenpark einzutauchen. Anschließend erfolgt die Rückfahrt zum Schiff. "
		stations: [
			{
				startTime: "09:00"
				endTime: "--"
				description: "Alle treffen sich am Sammelpunkt"
			},
			{
				startTime: "09:15"
				endTime: "--"
				description:"Busfahrt nach Stonehenge"
			},
			{
				startTime: "10:00"
				endTime:"--"
				description:"6 Stunden Aufenthalt in Paultons Family Theme Park"
			},
			{
				startTime: "16:00"
				endTime:"--"
				description:"Rückfahrt zum Schiff"
			}
		]
		ticketInfo:"Ihre Ausflugstickets mit den genauen Startzeiten und Treffpunkten liegen am Anreisetag in Ihrer Kabine für Sie bereit. Wir bemühen uns in allen Fahrtgebieten um deutschsprachige Reiseleiter, die jedoch in manchen Ländern gar nicht bzw. nicht ausreichend zur Verfügung stehen. In diesem Fall werden die Ausflüge von englischsprachigen Reiseleitern geführt."

		addlInfo:"Deutschsprachige Audioguides in Stonehenge: Bitte beachten Sie, dass die Teilnahme bis zum 16. Geburtstag ausschließlich in Begleitung eines Erwachsenen möglich ist, der von einem Erziehungsberechtigten benannt werden muss. Bis zum 18. Geburtstag benötigen Jugendliche eine ausflugsbezogene, schriftliche Erlaubnis eines Erziehungsberechtigten."

	SOU05:
		name: "New Forest: Den Nationalpark mit einem Ranger erkunden"
		type: "excursion"
		tagline:"Lernen Sie Flora & Fauna kennen!"
		locations:[locations.GBSOU]
		images: ["modules/moduleImages/excursions/GBSOU/SOU05cover.jpg"]
		tags:[tags.family, tags.nature]
		duration: "5:15"
		costAdults: 59.35
		costChildren: 59.35
		difficulty: 2
		startTime: "10:30"
		includedItems: "Cream Tea"
		minimumAge: 2
		description: "Ziel der ca. 45-minütigen Busfahrt ist der New Forest. Dort beginnt der ca. 90-minütige Rundgang mit einem Ranger und Erklärungen zur Flora und Fauna. Anschließend steht ca. 1 h Freizeit in einem der Dörfer im New Forest mit Gelegenheit zum Kauf von Souvenirs zur Verfügung. Danach erfolgt der 60-minütige Aufenthalt in einem Café zum Genuss des typisch englischen Cream Tea, bevor die Rückfahrt zum Schiff angetreten wird."
		stations: [
			{
				startTime: "10:30"
				endTime: "--"
				description: "Alle treffen sich am Sammelpunkt"
			},
			{
				startTime: "10:45"
				endTime: "--"
				description:"Busfahrt in den New Forest"
			},
			{
				startTime: "11:30"
				endTime:"--"
				description:"Rundgang im Wald mit einem Ranger"
			},
			{
				startTime: "13:00"
				endTime:"14:00"
				description:"Freizeit in einem der Dörfer im New Forest"
			},{
				startTime: "14:00"
				endTime:"15:00"
				description:"Aufenthalt in einem Café zum Genuss des typisch englischen Cream Tea"
			},{
				startTime: "15:00"
				endTime:"15:45"
				description:"Rückfahrt zum Schiff"
			}
		]
		ticketInfo: "Ihre Ausflugstickets mit den genauen Startzeiten und Treffpunkten liegen am Anreisetag in Ihrer Kabine für Sie bereit. Wir bemühen uns in allen Fahrtgebieten um deutschsprachige Reiseleiter, die jedoch in manchen Ländern gar nicht bzw. nicht ausreichend zur Verfügung stehen. In diesem Fall werden die Ausflüge von englischsprachigen Reiseleitern geführt."

		addlInfo: "Bitte beachten Sie, dass die Teilnahme bis zum 16. Geburtstag ausschließlich in Begleitung eines Erwachsenen möglich ist, der von einem Erziehungsberechtigten benannt werden muss. Bis zum 18. Geburtstag benötigen Jugendliche eine ausflugsbezogene, schriftliche Erlaubnis eines Erziehungsberechtigten."

	LEH01:
		name: "Honfleur auf eigene Faust"
		type: "excursion"
		tagline: "Erkunden Sie das maritime Städtchen individuell!"
		locations: [locations.FRLEH]
		images: ["modules/moduleImages/excursions/GBSOU/LEH01cover.jpg"]
		tags: [tags.family, tags.culture]
		duration: "4:00"
		costAdults: 29.65
		costChildren: 19.75
		difficulty: 2
		startTime: "11:30"
		includedItems: ""
		minimumAge: 2
		description: "Mit einem 30-minütigen Bustransfer bringen wir sie nach Honfleur. Dort stehen ca. 3 Stunden Freizeit zur Verfügung, die zur individuellen Erkundung der idyllischen Hafenstadt mit seinen typischen Fachwerkhäusern, zahlreichen Galerien und erstklassigen Restaurants genutzt werden kann. Anschließend erfolgt der Transfer zurück zum Schiff. "
		stations: [
			{
				startTime: "11:30"
				endTime: ""
				description: "Alle treffen sich am Sammelpunkt"
			},
			{
				startTime: "11:45"
				endTime: ""
				description:"Busfahrt nach Honfleur"
			},
			{
				startTime: "12:15"
				endTime:""
				description:"ca. drei Stunden zur freien Verfügung"
			},
			{
				startTime: "15:15"
				endTime:""
				description:"Rückfahrt zum Schiff"
			}
		]
		ticketInfo: "Ihre Ausflugstickets mit den genauen Startzeiten und Treffpunkten liegen am Anreisetag in Ihrer Kabine für Sie bereit. Wir bemühen uns in allen Fahrtgebieten um deutschsprachige Reiseleiter, die jedoch in manchen Ländern gar nicht bzw. nicht ausreichend zur Verfügung stehen. In diesem Fall werden die Ausflüge von englischsprachigen Reiseleitern geführt."

		addlInfo: "Viel Kopfsteinpflaster, ohne Reiseleiter. Bitte beachten Sie, dass die Teilnahme bis zum 16. Geburtstag ausschließlich in Begleitung eines Erwachsenen möglich ist, der von einem Erziehungsberechtigten benannt werden muss. Bis zum 18. Geburtstag benötigen Jugendliche eine ausflugsbezogene, schriftliche Erlaubnis eines Erziehungsberechtigten."


	LEH02:
		name: "Giverny & Rouen"
		type: "excursion"
		tagline:"Besuchen Sie das Monet-Haus & die historische Altstadt!"
		locations:[locations.FRLEH]
		images: ["modules/moduleImages/excursions/GBSOU/LEH02cover.jpg"]
		tags:[tags.culture]
		duration: "10:00"
		costAdults: 104.45
		costChildren: 72.15
		difficulty: 2
		startTime: "09:00"
		includedItems: "Mittagessen und Getränke"
		minimumAge: 2
		description: "Die ca. 2-stündige Busfahrt führt durch die abwechslungsreiche Landschaft der Normandie nach Giverny. Dort kann das Haus des Malers Claude Monet besucht werden. Anschließend steht Freizeit im Programm, die in der schönen Gartenanlage, die Motiv vieler von Monets Gemälden war, genossen werden kann. Weiterhin ist es auch möglich, die freie Zeit für ein Mittagessen zu nutzen. Anschließend folgt die ca. 75-minütige Autobahnfahrt nach Rouen. Geplant wird hier ein geführter Rundgang durch die historische Altstadt und Zeit für eigene Erkundungen, bevor die Rückfahrt zum Schiff angetreten wird. "
		stations: [
			{
				startTime: "1000"
				endTime: ""
				description: "Alle treffen sich am Sammelpunkt"
			},
			{
				startTime: "1015"
				endTime: "1215"
				description:"Landschaftsfahrt durch die Normandie nach Giverny"
			},
			{
				startTime: "12:15"
				endTime:"1330"
				description:"Besuch im Hause des Malers Claude Monet"
			},
			{
				startTime: "1330"
				endTime:"1530"
				description:"geführter Rundgang in Rouen"
			},
			{
				startTime: "15:30"
				endTime: "1630"
				description:"Zeit für eigene Erkundungen"
			},
			{
				startTime: "16:30"
				endTime:"1830"
				description:"Rückfahrt zum Schiff"
			}
		]
		ticketInfo: "Ihre Ausflugstickets mit den genauen Startzeiten und Treffpunkten liegen am Anreisetag in Ihrer Kabine für Sie bereit. Wir bemühen uns in allen Fahrtgebieten um deutschsprachige Reiseleiter, die jedoch in manchen Ländern gar nicht bzw. nicht ausreichend zur Verfügung stehen. In diesem Fall werden die Ausflüge von englischsprachigen Reiseleitern geführt."

		addlInfo: "Bitte beachten Sie, dass die Teilnahme bis zum 16. Geburtstag ausschließlich in Begleitung eines Erwachsenen möglich ist, der von einem Erziehungsberechtigten benannt werden muss. Bis zum 18. Geburtstag benötigen Jugendliche eine ausflugsbezogene, schriftliche Erlaubnis eines Erziehungsberechtigten."

	LEH03:
		name: "Kulinarisch: Normannische Gaumenfreuden"
		type: "excursion"
		tagline: "Probieren Sie die regionalen Köstlichkeiten!"
		locations: [locations.FRLEH]
		images: ["modules/moduleImages/excursions/GBSOU/LEH03cover.jpg"]
		tags: [tags.culture, tags.nature, tags.family]
		duration: "08:30"
		costAdults: 98.95
		costChildren: 79.15
		difficulty: 2
		startTime: "09:00"
		includedItems: "Mittagessen, Kostproben von Käse, Apfelsaft, Cidre und Calvados"
		minimumAge: 2
		description: "Der Ausflug beginnt mit der ca. 90-minütigen Busfahrt durch die schöne Landschaft der Normandie, der Heimat der drei großen normannischen 'C': Cidre, Calvados & Camembert. Es folgt der ca. 90-minütige Besuch der privaten Käserei Graindorge, wo alle Schritte zur Käseherstellung miterlebt werden können, eine Verkostung stattfindet und etwas Freizeit eingeplant ist. Mit der anschließenden 1-stündigen Weiterfahrt wird Pont-l’Évêque angesteuert, wo ebenfalls etwas Freizeit und ein Mittagessen mit besonderem Ambiente angeboten wird. <br>Nach einer kurzen Busfahrt geht es zur Destillerie Père Magloire mit einer 90-minütigen Besichtigung der Produktionsstätte einer der führenden französischen Calvados-Marken mit Kostproben. "
		stations: [
			{
				startTime: "0945"
				endTime: ""
				description: "Alle treffen sich am Sammelpunkt"
			},
			{
				startTime: "1000"
				endTime: "1130"
				description:"Landschaftsfahrt durch die Normandie"
			},
			{
				startTime: "11:30"
				endTime:"1300"
				description:"Besuch der privaten Käserei Graindorge"
			},
			{
				startTime: "1330"
				endTime:"1530"
				description:"Käseherstellung und Verkostung "
			},
			{
				startTime: "15:30"
				endTime: "1600"
				description:"Weiterfahrt nach Pont-l’Évêque"
			},{
				startTime: "16:00"
				endTime: "1645"
				description:"Besichtigung der Produktionsstätte von Calvados "
			},
			{
				startTime: "17:00"
				endTime:"1830"
				description:"Rückfahrt zum Schiff"
			}
		]
		ticketInfo: "Ihre Ausflugstickets mit den genauen Startzeiten und Treffpunkten liegen am Anreisetag in Ihrer Kabine für Sie bereit. Wir bemühen uns in allen Fahrtgebieten um deutschsprachige Reiseleiter, die jedoch in manchen Ländern gar nicht bzw. nicht ausreichend zur Verfügung stehen. In diesem Fall werden die Ausflüge von englischsprachigen Reiseleitern geführt."

		addlInfo: "Bitte beachten Sie, dass die Teilnahme bis zum 16. Geburtstag ausschließlich in Begleitung eines Erwachsenen möglich ist, der von einem Erziehungsberechtigten benannt werden muss. Bis zum 18. Geburtstag benötigen Jugendliche eine ausflugsbezogene, schriftliche Erlaubnis eines Erziehungsberechtigten."

	LEH04:
		name: "Transfer nach Rouen"
		type: "excursion"
		tagline: "Erleben Sie die historische Hauptstadt der Normandie!"
		locations: [locations.FRLEH]
		images: ["modules/moduleImages/excursions/GBSOU/LEH04cover.jpg"]
		tags: [tags.culture, tags.nature, tags.family]
		duration: "05:00"
		costAdults: 49.95
		costChildren: 29.95
		difficulty: 2
		startTime: "09:30"
		includedItems: "Mittagessen, Kostproben von Käse, Apfelsaft, Cidre und Calvados"
		minimumAge: 2
		description: "Erkunden Sie Rouen, die hostorische Hauptstadt der Normandie, auf eigene Faust! Erleben Sie die berühmten Königsgräber von Citee du Rois und probieren Sie die weltberühmte Fischsauce."
		stations: [
			{
				startTime: "0945"
				endTime: ""
				description: "Alle treffen sich am Sammelpunkt"
			},
			{
				startTime: "1000"
				endTime: "1130"
				description:"Busfahrt nach Rouen"
			},
			{
				startTime: "11:30"
				endTime:"1330"
				description:"2 Stunden Freizeit"
			},
			{
				startTime: "1330"
				endTime:"1500"
				description:"Rückfahrt zum Schiff"
			}
		]
		ticketInfo: "Ihre Ausflugstickets mit den genauen Startzeiten und Treffpunkten liegen am Anreisetag in Ihrer Kabine für Sie bereit. Wir bemühen uns in allen Fahrtgebieten um deutschsprachige Reiseleiter, die jedoch in manchen Ländern gar nicht bzw. nicht ausreichend zur Verfügung stehen. In diesem Fall werden die Ausflüge von englischsprachigen Reiseleitern geführt."

		addlInfo: "Bitte beachten Sie, dass die Teilnahme bis zum 16. Geburtstag ausschließlich in Begleitung eines Erwachsenen möglich ist, der von einem Erziehungsberechtigten benannt werden muss. Bis zum 18. Geburtstag benötigen Jugendliche eine ausflugsbezogene, schriftliche Erlaubnis eines Erziehungsberechtigten."



	LEH05:
		name: "Golf D‘Étretat"
		type: "excursion"
		tagline:"18-Loch-Platz; 6.073 m; Par 72"
		locations:[locations.FRLEH]
		images:[]
		tags:[tags.culture, tags.nature, tags.family]
		duration: "08:30"
		costAdults: 98.95
		costChildren: 79.15
		difficulty: 2
		startTime: "09:00"
		includedItems: "Mittagessen, Kostproben von Käse, Apfelsaft, Cidre und Calvados"
		minimumAge: 2
		description: "Ziel der Tour ist ein 18-Loch Platz, 6.073m, Par 72, der bereits 1908 gegründet wurde. Die Anlage liegt direkt auf den Klippen am Ärmelkanal und gehört zu den besten Golfplätzen Frankreichs. Sie bietet eine atemberaubende Aussicht auf die Bucht von Étretat. Auf dem Golfplatz gibt es offene Fairways, satte Roughs, gut verteidigte Grüns, aber auch kleine Waldflächen. Der typische Charakter eines Küstenplatzes mit permanentem Wind lässt den Platz zur Herausforderung werden."
		stations: [
			{
				startTime: "0945"
				endTime: ""
				description: "Alle treffen sich am Sammelpunkt"
			},
			{
				startTime: "1000"
				endTime: "1130"
				description:"Landschaftsfahrt durch die Normandie"
			},
			{
				startTime: "11:30"
				endTime:"1300"
				description:"Besuch der privaten Käserei Graindorge"
			},
			{
				startTime: "1330"
				endTime:"1530"
				description:"Käseherstellung und Verkostung "
			},
			{
				startTime: "15:30"
				endTime: "1600"
				description:"Weiterfahrt nach Pont-l’Évêque"
			},{
				startTime: "16:00"
				endTime: "1645"
				description:"Besichtigung der Produktionsstätte von Calvados "
			},
			{
				startTime: "17:00"
				endTime:"1830"
				description:"Rückfahrt zum Schiff"
			}
		]
		ticketInfo: "Ihre Ausflugstickets mit den genauen Startzeiten und Treffpunkten liegen am Anreisetag in Ihrer Kabine für Sie bereit. Wir bemühen uns in allen Fahrtgebieten um deutschsprachige Reiseleiter, die jedoch in manchen Ländern gar nicht bzw. nicht ausreichend zur Verfügung stehen. In diesem Fall werden die Ausflüge von englischsprachigen Reiseleitern geführt."

		addlInfo: "Bitte beachten Sie, dass die Teilnahme bis zum 16. Geburtstag ausschließlich in Begleitung eines Erwachsenen möglich ist, der von einem Erziehungsberechtigten benannt werden muss. Bis zum 18. Geburtstag benötigen Jugendliche eine ausflugsbezogene, schriftliche Erlaubnis eines Erziehungsberechtigten."


	ZEE01:
		name: "Brügge entdecken - vormittags"
		type: "excursion"
		tagline:"Lernen Sie die Weltkulturerbestadt zu Fuß & per Boot kennen!"
		locations:[locations.BEZEE]
		images:[]
		tags:[tags.culture, tags.activeadventure]
		duration: "04:30"
		costAdults: 54.50
		costChildren: 37.57
		difficulty: 2
		startTime: "09:30"
		includedItems: ""
		minimumAge: 2
		description: "Der Ausflug beginnt mit einer 30-minütigen Busfahrt in die mittelalterliche Hansestadt Brügge. Anschließend folgt ein ca. 1,5 h geführter Spaziergang durch das historische Stadtzentrum, vorbei am Burgplatz mit gotischem Rathaus, der Heilig-Blut-Basilika, dem Marktplatz mit Belfried-Turm und der Liebfrauenkirche. Danach beginnt die 30-minütige Bootsfahrt auf den romantischen Grachten. Anschließend erfolgt ein kurzer Fußweg zum Walplein, dort steht ca. 1 h Freizeit zum Bummeln oder Einkaufen zur Verfügung. Nach einem weiteren 15-minütigen Spaziergang zurück zum Bus, kann die Rückfahrt zum Schiff angetreten werden."
		stations: [
			{
				startTime: "0930"
				endTime: ""
				description: "Alle treffen sich am Sammelpunkt"
			},
			{
				startTime: "0945"
				endTime: "1015"
				description:"Busfahrt in die mittelalterliche Hansestadt Brügge"
			},
			{
				startTime: "10:15"
				endTime:"1145"
				description:"Geführter Spaziergang durch das historische Stadtzentrum"
			},
			{
				startTime: "1215"
				endTime:"1245"
				description:"Bootsfahrt auf den romantischen Grachten "
			},
			{
				startTime: "12:45"
				endTime: "1400"
				description: "kurzer Fußweg zum Walplein, ca. 1 h Freizeit zum Bummeln oder Einkaufen "
			},{
				startTime: "14:00"
				endTime: "1445"
				description:"Fußweg zum Bus und Rückfahrt zum Schiff "
			}
		]
		ticketInfo: "Ihre Ausflugstickets mit den genauen Startzeiten und Treffpunkten liegen am Anreisetag in Ihrer Kabine für Sie bereit. Wir bemühen uns in allen Fahrtgebieten um deutschsprachige Reiseleiter, die jedoch in manchen Ländern gar nicht bzw. nicht ausreichend zur Verfügung stehen. In diesem Fall werden die Ausflüge von englischsprachigen Reiseleitern geführt."

		addlInfo: "Offenes Kanalboot <br>Bitte beachten Sie, dass die Teilnahme bis zum 16. Geburtstag ausschließlich in Begleitung eines Erwachsenen möglich ist, der von einem Erziehungsberechtigten benannt werden muss. Bis zum 18. Geburtstag benötigen Jugendliche eine ausflugsbezogene, schriftliche Erlaubnis eines Erziehungsberechtigten."

	ZEE02:
		name: "Europas Hauptstadt Brüssel"
		type: "excursion"
		tagline:"Die Highlights während einer Panoramafahrt entdecken"
		locations:[locations.BEZEE]
		images:[]
		tags:[tags.culture, tags.activeadventure]
		duration: "8:30"
		costAdults: 59.46
		costChildren: 42.46
		difficulty: 2
		startTime: "09:30"
		includedItems: ""
		minimumAge: 2
		description: "Lernen Sie Europas Hauptstadt auf einerPanorama-Busfahrtkennen. Vorbei an zwei der bemerkenswertesten architektonischen Werken Leopolds II,dem Chinesischen Pavillonund dem Japanischen Turm, geht es Richtung Notre-Dame de Laeken und dem imposanten Königlichen Palast. Fotografieren Sie das Atomium, dem Symbol für eine friedliche Nutzung von Atomkraft und erkunden Sie bei einem geführten Spaziergang den historischen Grote Markt mit alten Gildehäusern und dem prächtigen Rathaus. Bewundern Sie Manneken Pis, das Wahrzeichen der Stadt und erkunden Sie das historische Zentrum auf eigene Faust bevor es mit dem Bus zurück zum Schiff geht."
		stations: [
			{
				startTime: "0930"
				endTime: ""
				description: "Alle treffen sich am Sammelpunkt"
			},
			{
				startTime: "0945"
				endTime: "1130"
				description: "Busfahrt nach Brüssel via Autobahn"
			},
			{
				startTime: "1130"
				endTime: "1300"
				description: "Panoramafahrt durch die Hauptstadt Belgiens und der EU, u. a. vorbei am Chinesischen Pavillon, am Japanischen Turm, an der Kirche Notre-Dame de Laeken und am Königlichen Palast "
			},
			{
				startTime: "1300"
				endTime: "1330"
				description: "Fotostopp am Atomium "
			},
			{
				startTime: "1330"
				endTime: "1415"
				description: "geführter Spaziergang rund um den Grote Markt mit den barocken Gildehäusern, dem Rathaus und dem Wahrzeichen der Stadt, Manneken Pis"
			},{
				startTime: "1415"
				endTime: "1545"
				description: "Freizeit im Stadtzentrum"
			},{
				startTime: "1545"
				endTime: "1700"
				description: "Fußweg zum Bus und Rückfahrt zum Schiff"
			}
		]
		ticketInfo: "Ihre Ausflugstickets mit den genauen Startzeiten und Treffpunkten liegen am Anreisetag in Ihrer Kabine für Sie bereit. Wir bemühen uns in allen Fahrtgebieten um deutschsprachige Reiseleiter, die jedoch in manchen Ländern gar nicht bzw. nicht ausreichend zur Verfügung stehen. In diesem Fall werden die Ausflüge von englischsprachigen Reiseleitern geführt."

		addlInfo: "Bitte beachten Sie, dass die Teilnahme bis zum 16. Geburtstag ausschließlich in Begleitung eines Erwachsenen möglich ist, der von einem Erziehungsberechtigten benannt werden muss. Bis zum 18. Geburtstag benötigen Jugendliche eine ausflugsbezogene, schriftliche Erlaubnis eines Erziehungsberechtigten."


	ZEE03:
		name: "Ghent & Belgische Pralinen"
		type: "excursion"
		tagline: "Historisches Stadtzentrum & Pralinenmanufaktur besuchen"
		locations:[locations.BEZEE]
		images:[]
		tags:[tags.culture, tags.family]
		duration: "04:45"
		costAdults: 55.46
		costChildren: 32.46
		difficulty: 2
		startTime: "13:00"
		includedItems: "Kostprobe belgischer Pralinen"
		minimumAge: 2
		description: "Der Ausflug beginnt mit einer ca. 60-minütigen Busfahrt nach Ghent. Dort beginnt der 45-minütige geführte Spaziergang durch das historische Stadtzentrum vorbei an der St.-Michael-Brücke mit Blick auf den alten Hafen, der Festung Gravensteen und den Türmen von Ghent. Anschließend geht es zu Fuß entlang des Hafens zu einer kleinen privaten Pralinenmanufaktur mit einer 45-minütigen Demonstration zur Pralinenherstellung und Kostproben. Danach geht es zu Fuß zur St.-Bavo-Kathedrale, wo 45 min Freitzeit eingeplant sind. Nach einem ca. 30-minütigen Spaziergang zurück zum Bus, geht es zurück zum Schiff. "
		stations: [
			{
				startTime: "1300"
				endTime: "1315"
				description: "Alle treffen sich am Sammelpunkt"
			},
			{
				startTime: "1315"
				endTime: "1415"
				description: "Busfahrt nach Ghent via Autobahn"
			},
			{
				startTime: "1415"
				endTime: "1430"
				description: "Zu Fuß entlang des Hafens zu einer kleinen privaten Pralinenmanufaktur"
			},
			{
				startTime: "1430"
				endTime: "1515"
				description: "Demonstration der Pralinenherstellung mit Kostprobe"
			},
			{
				startTime: "1515"
				endTime: "1600"
				description: "kurzer Fußweg zur St.-Bavo-Kathedrale, ca. 45 min Freizeit"
			},{
				startTime: "1615"
				endTime: "1630"
				description: "Spaziergang zurück zum Bus"
			},{
				startTime: "1630"
				endTime: "1730"
				description: "Rückfahrt zum Schiff"
			}
		]
		ticketInfo: "Ihre Ausflugstickets mit den genauen Startzeiten und Treffpunkten liegen am Anreisetag in Ihrer Kabine für Sie bereit. Wir bemühen uns in allen Fahrtgebieten um deutschsprachige Reiseleiter, die jedoch in manchen Ländern gar nicht bzw. nicht ausreichend zur Verfügung stehen. In diesem Fall werden die Ausflüge von englischsprachigen Reiseleitern geführt."

		addlInfo: "Bitte beachten Sie, dass die Teilnahme bis zum 16. Geburtstag ausschließlich in Begleitung eines Erwachsenen möglich ist, der von einem Erziehungsberechtigten benannt werden muss. Bis zum 18. Geburtstag benötigen Jugendliche eine ausflugsbezogene, schriftliche Erlaubnis eines Erziehungsberechtigten."

	ZEE04:
		name: "Transfer nach Brügge (11:00 Uhr)"
		type: "excursion"
		tagline: "Erkunden Sie die Stadt auf eigene Faust!"
		locations:[locations.BEZEE]
		images:[]
		tags:[tags.culture]
		duration: "05:00"
		costAdults: 24.70
		costChildren: 19.75
		difficulty: 2
		startTime: "11:00"
		includedItems: ""
		minimumAge: 2
		description: "Lernen Sie das herrliche belgische Kleinod auf eigene Faus kennen! Wir bringen Sie in einem schönen Reisebus hin und wieder zurück"
		stations: [
			{
				startTime: "1100"
				endTime: "1115"
				description: "Alle treffen sich am Sammelpunkt"
			},
			{
				startTime: "1115"
				endTime: "1145"
				description: "Busfahrt Brügge"
			},
			{
				startTime: "1145"
				endTime: "1545"
				description: "4 Stunden Freizeit zur eigenen Verfügung"
			},{
				startTime: "1545"
				endTime: "1615"
				description: "Rückfahrt zum Schiff"
			}
		]
		ticketInfo: "Ihre Ausflugstickets mit den genauen Startzeiten und Treffpunkten liegen am Anreisetag in Ihrer Kabine für Sie bereit. Wir bemühen uns in allen Fahrtgebieten um deutschsprachige Reiseleiter, die jedoch in manchen Ländern gar nicht bzw. nicht ausreichend zur Verfügung stehen. In diesem Fall werden die Ausflüge von englischsprachigen Reiseleitern geführt."

		addlInfo: "Bitte beachten Sie, dass die Teilnahme bis zum 16. Geburtstag ausschließlich in Begleitung eines Erwachsenen möglich ist, der von einem Erziehungsberechtigten benannt werden muss. Bis zum 18. Geburtstag benötigen Jugendliche eine ausflugsbezogene, schriftliche Erlaubnis eines Erziehungsberechtigten."

	ZEE05:
		name: "Flanderns malerische Landschaften & Brügge per Bike"
		type: "excursion"
		tagline: "Soft-Aktiv-Bikingtour (ca. 50 km // 40 hm)"
		locations: [locations.BEZEE]
		images: []
		tags: [tags.culture]
		duration: "06:00"
		costAdults: 24.70
		costChildren: null
		difficulty: 4
		startTime: "10:30"
		includedItems: "AIDA Trinkflasche, Energy Pulver, Fitnessriegel"
		minimumAge: 12
		description: "Die Tour beginnt mit einer Landschaftsfahrt durch Flandern nach Brügge. Die Fahrt führt durch die Stadt zur St.-Salvator-Kathedrale und zum Grote Markt mit Rathaus. In der historischen Innenstadt wird ein Kaffeestopp eingelegt. Die Weiterfahrt geht durch die engen Gassen mit alten Gildehäusern und vorbei an schönen Kanälen. Danach erfolgt die Rückfahrt nach Zeebrügge."
		stations: [
			{
				startTime: "1030"
				endTime: "1045"
				description: "Alle treffen sich am Sammelpunkt"
			},
			{
				startTime: "1115"
				endTime: "1200"
				description: "Landschaftsfahrt durch Flandern nach Brügge"
			},
			{
				startTime: "1200"
				endTime: "1345"
				description: "Stadttour in Brügge"
			},{
				startTime: "1345"
				endTime: "1430"
				description: "Kaffeestop in der historischen ALtstadt"
			},{
				startTime: "1430"
				endTime: "1530"
				description: "Fahrt durch die Altstadt"
			},{
				startTime: "1530"
				endTime: "1630"
				description: "Rückfahrt zum Schiff"
			}
		]
		ticketInfo: "Ihre Ausflugstickets mit den genauen Startzeiten und Treffpunkten liegen am Anreisetag in Ihrer Kabine für Sie bereit."

		addlInfo: "Die Teilnahme an AIDA Bikingtouren ist für 12- bis 15-Jährige nur nach persönlicher Beratung am Biking Counter sowie ausschließlich in Begleitung eines Erziehungsbeauftragten möglich ist.<br>Restkontingente sind an Bord verfügbar. Bitte wenden Sie sich dazu, nach Möglichkeit noch am Anreisetag, an Ihr Activities Team an Bord."

		importantInfo: "Unsere AIDA Biking Guides an Bord beraten Sie vor der Tour persönlich. Sollte der von Ihnen gebuchte Ausflug nicht Ihrem Leistungsstand entsprechen, buchen wir Sie gern kurzfristig auf einen anderen Ausflug um."


	RTM01:
		name: "Panoramafahrt durch Amsterdam & Madame Tussauds"
		type: "excursion"
		tagline: "Stadtrundfahrt & Wachsfigurenkabinett"
		locations:[locations.BEZEE]
		images:[]
		tags:[tags.culture]
		duration: "09:00"
		costAdults: 71.90
		costChildren: 50.87
		difficulty: 2
		startTime: "8:30"
		includedItems: ""
		minimumAge: 2
		description: "Im Anschluss an die ca. 90-minütige Busfahrt nach Amsterdam folgt ein ca. 30-minütiger Fotostopp an einer der typischen Windmühlen, bevor die Weiterfahrt ins Stadtzentrum angetreten wird. Dort folgt eine ca. 60-minütige Panoramafahrt entlang der malerischen Kanäle, vorbei am Dam und am Königlichen Palast. Nach einem ca. 30-minütigen Spaziergang zum belebten Blumenmarkt steht ca. 1 Stunde Freizeit zur Verfügung, die zum Bummeln oder für ein Mittagessen genutzt werden kann. Nach einem weiteren ca. 30-minütigen Spaziergang wird das Wachsfigurenmuseum Madame Tussauds erreicht. Die Ausstellung mit zahlreichen Figuren von Berühmtheiten aus TV, Musik und Politik kann ca. 1 Stunde lang besucht werden. Danach erfolgt die Rückfahrt zum Schiff."
		stations: [
			{
				startTime: "0830"
				endTime: "0845"
				description: "Alle treffen sich am Sammelpunkt"
			},
			{
				startTime: "0845"
				endTime: "1015"
				description: "Busfahrt nach Amsterdam"
			},
			{
				startTime: "1015"
				endTime: "1045"
				description: "Fotostopp an einer der typischen Windmühlen"
			},{
				startTime: "1045"
				endTime: "1145"
				description: "Panoramafahrt duch Amsterdam"
			},{
				startTime: "1145"
				endTime: "1300"
				description: "Malerische Kanäle und königlicher Palast"
			},{
				startTime: "1300"
				endTime: "1400"
				description: "Freizeit am Blumenmarkt"
			},{
				startTime: "1500"
				endTime: "1630"
				description: "Besuch im Wachsfigurenkabinet Madame Tussauds"
			},{
				startTime: "1630"
				endTime: "1800"
				description: "Rückfahrt zum Schiff"
			}
		]
		ticketInfo: "Ihre Ausflugstickets mit den genauen Startzeiten und Treffpunkten liegen am Anreisetag in Ihrer Kabine für Sie bereit."

		addlInfo: "Bitte beachten Sie, dass die Teilnahme bis zum 16. Geburtstag ausschließlich in Begleitung eines Erwachsenen möglich ist, der von einem Erziehungsberechtigten benannt werden muss. Bis zum 18. Geburtstag benötigen Jugendliche eine ausflugsbezogene, schriftliche Erlaubnis eines Erziehungsberechtigten."

	RTM02:
		name: "Blumenparadies Keukenhof - nachmittags"
		type: "excursion"
		tagline: "Besuchen Sie die weltgrößte Freilandblumenschau!"
		locations:[locations.BEZEE]
		images:[]
		tags:[tags.culture, tags.family]
		duration: "05:00"
		costAdults: 55.90
		costChildren: 39.80
		difficulty: 2
		startTime: "13:30"
		includedItems: ""
		minimumAge: 2
		description: "Der Ausflug beginnt mit einer ca. 60-minütigen Landschaftsfahrt nach Lisse zum Keukenhof mit der größten Freilandblumenschau der Welt. Anschließend stehen ca. 3 Stunden Freizeit für den Besuch der wunderschönen Parkanlagen mit einmaliger Blüten- und Farbenpracht im Freien und in Gewächshäusern zur Verfügung. Danach erfolgt die Rückfahrt zum Schiff."
		stations: [
			{
				startTime: "1330"
				endTime: "1345"
				description: "Alle treffen sich am Sammelpunkt"
			},
			{
				startTime: "1345"
				endTime: "1445"
				description: "Landschaftsfahrt nach Lisse"
			},
			{
				startTime: "1345"
				endTime: "1645"
				description: "Besuch von Keukenhof mit der größten Freilandblumenschau der Welt"
			},{
				startTime: "1645"
				endTime: "1730"
				description: "Rückfahrt zum Schiff"
			}
		]
		ticketInfo: "Ihre Ausflugstickets mit den genauen Startzeiten und Treffpunkten liegen am Anreisetag in Ihrer Kabine für Sie bereit."

		addlInfo: "Bitte beachten Sie, dass die Teilnahme bis zum 16. Geburtstag ausschließlich in Begleitung eines Erwachsenen möglich ist, der von einem Erziehungsberechtigten benannt werden muss. Bis zum 18. Geburtstag benötigen Jugendliche eine ausflugsbezogene, schriftliche Erlaubnis eines Erziehungsberechtigten."

	RTM03:
		name: "Rotterdam bei Nacht"
		type: "excursion"
		tagline: "Stadtrundfahrt & Spaziergang durch die Stadt"
		locations:[locations.NLRTM]
		images:[]
		tags:[tags.culture, tags.activeadventure]
		duration: "04:00"
		costAdults: 49.90
		costChildren: null
		difficulty: 2
		startTime: "19:30"
		includedItems: "2 Gläser Wein, Bier oder Softdrink"
		minimumAge: 14
		description: "Im Anschluss an den ca. 30-minütigen Bustransfer ins Stadtzentrum folgt eine ca. 90-minütige Panoramafahrt durch eine der architektonisch innovativsten Städte Europas, vorbei an beeindruckenden Bauten des 20. Jahrhunderts. An den markantesten Sehenswürdigkeiten werden Fotostopps eingelegt. Danach folgt ein ca. 90-minütiger geführter Spaziergang durch die nächtliche Stadt mit Besuch zweier typischer Bars. Anschließend erfolgt die Rückfahrt zum Schiff."
		stations: [
			{
				startTime: "1930"
				endTime: "1945"
				description: "Alle treffen sich am Sammelpunkt"
			},
			{
				startTime: "1945"
				endTime: "2030"
				description: "Bustransfer ins Stadtzentrum mit Fotostopps an den markantesten Sehenswürdigkeiten"
			},
			{
				startTime: "2030"
				endTime: "2200"
				description: "geführter Spaziergang durch die nächtliche Stadt"
			},{
				startTime: "2200"
				endTime: "2300"
				description: "Besuch zweier typischer Bars"
			},{
				startTime: "2300"
				endTime: "2315"
				description: "Rückfahrt zum Schiff"
			}
		]
		ticketInfo: "Ihre Ausflugstickets mit den genauen Startzeiten und Treffpunkten liegen am Anreisetag in Ihrer Kabine für Sie bereit."

		addlInfo: "Bitte beachten Sie, dass die Teilnahme bis zum 16. Geburtstag ausschließlich in Begleitung eines Erwachsenen möglich ist, der von einem Erziehungsberechtigten benannt werden muss. Bis zum 18. Geburtstag benötigen Jugendliche eine ausflugsbezogene, schriftliche Erlaubnis eines Erziehungsberechtigten."


	RTM04:
		name: "Saisonal: Scheveningen - Strand & Shopping"
		type: "excursion"
		tagline: "Besuchen Sie das größte Seebad der Niederlande!"
		locations:[locations.NLRTM]
		images:[]
		tags:[tags.culture, tags.activeadventure]
		duration: "08:00"
		costAdults: 49.90
		costChildren: 37.25
		difficulty: 2
		startTime: "19:30"
		includedItems: "2 Gläser Wein, Bier oder Softdrink"
		minimumAge: 14
		description: "Ziel der ca. 60-minütigen Busfahrt ist einer der beliebtesten Badeorte der Niederlande. Dort stehen ca. 6 Stunden Freizeit zur Verfügung. Diese werden in einem ehemaligen Fischerdorf mit langem Sandstrand, schöner Strandpromenade, vielen Geschäften und Bars, einer Seebrücke und einem Fischereihafen verbracht. Begleitung durch örtlichen Eskort, von Mai bis Anfang Juni Austragung des internationalen Sandskulpturenfestival am Strand von Scheveningen. Anschließend erfolgt die Rückfahrt zum Schiff. "
		stations: [
			{
				startTime: "1000"
				endTime: "1015"
				description: "Alle treffen sich am Sammelpunkt"
			},
			{
				startTime: "1015"
				endTime: "1115"
				description: "Busfahrt ist einer der beliebtesten Badeorte der Niederlande"
			},
			{
				startTime: "1115"
				endTime: "1715"
				description: "ca. 6 Stunden Freizeit zur Verfügung am Sandstrand und Strandpromenade"
			},{
				startTime: "1715"
				endTime: "1815"
				description: "Rückfahrt zum Schiff"
			}
		]
		ticketInfo: "Ihre Ausflugstickets mit den genauen Startzeiten und Treffpunkten liegen am Anreisetag in Ihrer Kabine für Sie bereit."

		addlInfo: "Bitte beachten Sie, dass die Teilnahme bis zum 16. Geburtstag ausschließlich in Begleitung eines Erwachsenen möglich ist, der von einem Erziehungsberechtigten benannt werden muss. Bis zum 18. Geburtstag benötigen Jugendliche eine ausflugsbezogene, schriftliche Erlaubnis eines Erziehungsberechtigten."

	RTM05:
		name: "Gouda komplett"
		type: "excursion"
		tagline: "Spaziergang durch Gouda & Käserei mit Kostprobe"
		locations:[locations.NLRTM]
		images:[]
		tags:[tags.culture, tags.activeadventure]
		duration: "04:00"
		costAdults: 44.50
		costChildren: 33.25
		difficulty: 2
		startTime: "19:30"
		includedItems: "Käse-Verkostung"
		minimumAge: 14
		description: "Im Anschluss an die ca. 45-minütige Busfahrt zur Käserei Hoogerwaard folgt ein ca. 60-minütiger Besuch mit Kostprobe verschiedener Käsesorten und Gelegenheiten zum Einkaufen. Die Weiterfahrt geht nach Gouda, einer typisch holländischen Stadt aus dem 13. Jahrhundert. Dort folgt ein ca. 60-minütiger geführter Spaziergang, u.a. vorbei am alten Marktplatz, bevor die Rückfahrt zum Schiff angetreten wird. "
		stations: [
			{
				startTime: "0915"
				endTime: "0930"
				description: "Alle treffen sich am Sammelpunkt"
			},{
				startTime: "0930"
				endTime: "1015"
				description: "Busfahrt zur Käserei Hoogerwaard"
			},{
				startTime: "1015"
				endTime: "1115"
				description: "Besuch mit Kostprobe verschiedener Käsesorten "
			},{
				startTime: "1115"
				endTime: "1145"
				description: "Weiterfahrt nach Gouda"
			},{
				startTime: "1145"
				endTime: "1300"
				description: "Geführter Sparziergang durch die Altstadt"
			},{
				startTime: "1300"
				endTime: "1345"
				description: "Rückfahrt zum Schiff"
			}
		]
		ticketInfo: "Ihre Ausflugstickets mit den genauen Startzeiten und Treffpunkten liegen am Anreisetag in Ihrer Kabine für Sie bereit."

		addlInfo: "Bitte beachten Sie, dass die Teilnahme bis zum 16. Geburtstag ausschließlich in Begleitung eines Erwachsenen möglich ist, der von einem Erziehungsberechtigten benannt werden muss. Bis zum 18. Geburtstag benötigen Jugendliche eine ausflugsbezogene, schriftliche Erlaubnis eines Erziehungsberechtigten."
