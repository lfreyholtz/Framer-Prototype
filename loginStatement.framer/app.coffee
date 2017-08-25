
{dpr} = require 'DevicePixelRatio'
{Button} = require 'Button'
{IconButton} = require 'IconButton'
{placeholder} = require "Template_NotAvailable"
app = new Layer
	size:Screen.size
	backgroundColor: "transparent"


Framer.Defaults.Animation = 
	curve: "bezier-curve"
	curveOptions: "easeInOut"
	time:.4
	
	
spacer = dpr 8
margin = spacer * 3
tileWidth = dpr 244
tileHeight = dpr 202


	
# LOOP SCREEN	
loopScreen = new Layer
	size:Screen.size
	parent:app


loopVideo = new VideoLayer
	size:Screen.size
	video:'./images/attractVid.mp4'
	parent:loopScreen

loopVideo.player.autoPlay = true
loopVideo.player.loop = true
loopVideo.player.play()


# LOOP TEXT
loopText = [
	{
		headline: "Ihr Kreuzfahrt-Begleiter"
		subheading: "Machen Sie mehr aus Ihrer Kreuzfahrt: mit der MyAIDAprima App."
		
	},{
		headline: "Ihr kompletter Reiseplan"
		subheading: "Ankunfts-, Abfahrts-, Boardingzeiten und Tipps zu den Zielen."
		
	},{
		headline: "Die Restaurants im Überblick"
		subheading: "Mit Beschreibung, Öffnungszeiten und Tischreservierungen."
		
	},{
		headline: "Chatten Sie mit Ihrer Reisegruppe"
		subheading: "So geht auf der 300 m langen AIDAprima niemand verloren."
		
	}
]
	
# tinting for legibility
loopTint = new Layer
	size:Screen.size
	backgroundColor: "green"
	parent:loopScreen
	
loopTint.style.background =
	"linear-gradient(rgba(0,0,0,0) 0%, rgba(0,0,0,0) 30%, rgba(0,0,0,0.5) 70%, rgba(0,0,0,0.8) 100%)"



contentPages = []
indicators = []
pageCount = loopText.length

loopPages = new PageComponent
	backgroundColor: "transparent"
	scrollVertical: false
	size:Screen.size
	parent:loopScreen	
	
# loopPages.y = Align.center(dpr 80)
# loopPages.x = Align.center()
	
indicatorContainer = new Layer
	width:loopPages.width / 2
	height:dpr 8
	y:Align.bottom(-dpr 90)
	backgroundColor: "transparent"
	parent:loopScreen

textMaxHeight = 0
for textItem,i in loopText

	pageContainer = new Layer
		name:"page_0#{i}"
		size:Screen.size
		clip:false
		backgroundColor:"transparent"
		

	headline = new TextLayer
		width:Screen.width - (margin * 2)
		text: textItem.headline
		font: "300 #{dpr 32}px/#{dpr 40}px FrutigerLTStd-Light, -apple-system"
		style:
			"color":"white"
		textAlign:"center"
		parent:pageContainer
		
	headline.y = Align.center(dpr 80)
	headline.x = Align.center()
	
	subheading = new TextLayer
		width:Screen.width - (margin * 2)
		text: textItem.subheading
		y:headline.maxY + dpr 8
		font: "300 #{dpr 18}px/#{dpr 24}px FrutigerLTStd-Light, -apple-system"
		style:
			"color":"white"
		textAlign:"center"
		parent:pageContainer
	subheading.x = Align.center()

	contentPages.push(pageContainer)
	loopPages.addPage(pageContainer, "right")
	
	indicatorDist = dpr 8
	indicator = new Layer
		parent: indicatorContainer
		size: indicatorContainer.height
		borderRadius: indicatorContainer.height
		x: i * (indicatorContainer.height + indicatorDist)
		name: i
		backgroundColor: "rgba(255,255,255,0.2)"
		borderColor: "#fff"
		borderWidth: 1
	indicatorContainer.width = indicator.maxX
	# creating states for the indicator
	indicator.states = 
		active: 
			backgroundColor: "white"
			y: -1
		inactive: 
			backgroundColor: "rgba(255,255,255,0.2)"
	
	#pushing indicators into array
	indicators.push(indicator)
	

checkIndex = () ->
	return loopPages.horizontalPageIndex(loopPages.currentPage)
	
indicatorContainer.x = Align.center()
loopPages.snapToPage(loopPages.content.children[0])
current = checkIndex()
maxIndex = loopPages.content.children.length - 1
firstPage = contentPages[0]
indicators[current].states.switch("active")
	



autoLoop=()->
	current = checkIndex()
# 	print firstPage
	if current >= maxIndex
		loopPages.snapToPage(firstPage)
	else
		loopPages.snapToNextPage("right", true)
	
shouldLoop = true
Utils.interval 5, ->
	if shouldLoop
		autoLoop()

loopPages.on Events.TouchStart, ->
	shouldLoop = false

loopPages.on Events.TouchEnd, ->
	shouldLoop = true
	
# 	Utils.interval 5, ->
# 		shouldLoop = true



		
loopPages.on "change:currentPage", ->
	
	indicator.states.switch("default") for indicator in indicators
	current = checkIndex()
	indicators[current].states.switch("active")
# 	print "current page index: #{current}"

	
weiter = new Button	
	text:"weiter"
	type:"blue"
	fullWidth:true
	parent:loopScreen

weiter.y = Align.bottom()
weiter.on Events.Tap, () ->
		toWarningSheet()
		loopVideo.player.pause()

# tint for when sheet shows up		
modalTint = new Layer
	size:Screen.size
	backgroundColor: "black"
	opacity: 0.6
	parent:loopScreen


modalTint.states.invisible = 
	opacity: 0
modalTint.stateSwitch("invisible")


flow = new FlowComponent
flow.parent = app

flow.showNext(loopScreen, animate:false, scroll:false)




# WARNING SHEET



supportedShips = [{
				name: "AIDAperla"
				image:'./images/img_ship_Perla.jpg'
			},{ 
				name:"AIDAprima"
				image:'./images/img_ship_Prima.jpg'
			}]

warningSheet = new Layer
	width:Screen.width
	height:Screen.height
	backgroundColor: "white"
	y:Align.bottom(margin*2)
	shadowY:-dpr(10)
	shadowBlur: dpr(9)
	shadowColor:"rgba(0,0,0,0.10)"

warningSheet.states.hidden = 
# 	size: weiter.size
	y:weiter.y
	x:weiter.x
	opacity:0
	shadowY:0
	backgroundColor: "#3399CC"

warningSheet.states.blueClosed = 
# 	size: weiter.size
	y:weiter.y
	x:weiter.x
	opacity:1
	shadowY:0
	backgroundColor: "#3399CC"




		
warningSheet.parent = app
warningSheet.stateSwitch("hidden")


ws_contents = new Layer
	backgroundColor: "transparent"
	height:Screen.height - (margin*2) + dpr 16
	width:Screen.width
	parent:warningSheet

ws_contents.states.invisible = 
	opacity:0

ws_contents.stateSwitch("invisible")

ws_bug = new TextLayer
	font: "500 #{dpr 14}px/#{dpr 18}px FrutigerLTStd-Roman, -apple-system"
	text:"Bitte Beachten:"
	textTransform: "uppercase"
	style:
		"color":"#3399CC"
	wordSpacing:dpr(0.5)
# 	padding:
# 		top:dpr 7
# 		bottom:dpr 5
# 		left:dpr 14
# 		right:dpr 14
# 		
# 	borderColor: "#3399CC"
# 	borderRadius: dpr 3
# 	borderWidth: dpr 1
	x:margin
	y:spacer * 6
	parent:ws_contents


ws_icnClose = new IconButton
	icon:"closeBlue"
	y: spacer * 5
	parent:ws_contents	
ws_icnClose.x = Align.right(-margin)
ws_icnClose.on Events.Tap, () ->
	fromWarningSheet()
	loopVideo.player.play()

headline = new TextLayer
	font: "300 #{dpr 32}px/#{dpr 40}px FrutigerLTStd-Light, -apple-system"
	text:"Aktuell funktioniert diese App auf folgenden Schiffen:"	
	style:
		"color":"#3399CC"
	width:Screen.width - (margin*2)
	letterSpacing:dpr(0.36)	
	x:margin
	y:ws_bug.maxY + (spacer)
	parent:ws_contents	


supportedCarousel = new PageComponent
	width:tileWidth + spacer * 2
	height:tileHeight + spacer * 2
	backgroundColor: "transparent"
	originX: 0
	y:headline.maxY + (spacer * 5) - spacer
	scrollVertical: false
	clip:false
	contentInset:
		left: spacer
		right: (-tileWidth / 2) + spacer * 2
	letterSpacing:dpr 0.36
	parent:ws_contents
			
note = new TextLayer
	font: "300 #{dpr 16}px/#{dpr 24}px FrutigerLTStd-Light, -apple-system"
	text:"Weitere Schiffe sind bald verfügbar"	
	style:
		"color":"#555555"
	x:margin
	y:supportedCarousel.maxY + spacer
	letterSpacing:dpr(0.18)
	parent:ws_contents
	 
# 	
wsButton = new Button
	text:"verstanden"
	type:"blue"
	parent:ws_contents
	y:Align.bottom(- dpr 60)
	pageMargin:margin

wsButton.on Events.Tap, () ->
	
	transitionOutOfScreen()
		
		
for ship,i in supportedShips
	shipTile = new Layer
		height:tileHeight
		width:tileWidth
		borderRadius: dpr 3
		image:ship.image
		y:spacer
		x:(tileWidth + (spacer)) * i	
		parent:supportedCarousel.content
	
	title = new TextLayer
		font: "600 #{dpr 18}px/#{dpr 24}px FrutigerLTStd-Bold, -apple-system"
		text:ship.name
		parent:shipTile
		x:margin / 2
		y:Align.bottom(-margin / 2)
		style:
			"color":"white"
# 		

	
# transition animations
warningHiddenToVisible = new Animation warningSheet, 
	opacity:1
	options:
		time:0.1
warningVisibleToHidden = warningHiddenToVisible.reverse()

warningGrowFromButtonToWhitePanel = new Animation warningSheet,
	height:Screen.height 
	borderRadius: dpr 10

	y:margin*2
	
warningShrinkToButton = warningGrowFromButtonToWhitePanel.reverse()
	
	
warningTransitionFromBlueToWhite = new Animation warningSheet,
	backgroundColor: "white"
warningFromWhiteToBlue = warningTransitionFromBlueToWhite.reverse()

warningPanelBringInShadow = new Animation warningSheet,
	shadowY:-dpr(10)
	shadowBlur: dpr(9)
	shadowColor:"rgba(0,0,0,0.10)"
warningPanelRemoveShadow = warningPanelBringInShadow.reverse()

# transition to warning sheet

toWarningSheet = () ->
	
	warningHiddenToVisible.start()
	warningGrowFromButtonToWhitePanel.start()
	
	modalTint.stateSwitch("default")

	Utils.delay 0.3, ->
		ws_contents.animate("default")
		warningTransitionFromBlueToWhite.start()
		warningPanelBringInShadow.start() # fade in content

fromWarningSheet = () ->
	
	ws_contents.animate("invisible")
	warningShrinkToButton.start()
	warningPanelRemoveShadow.start()
	Utils.delay 0.1, ->
		warningFromWhiteToBlue.on Events.AnimationEnd, warningVisibleToHidden.start
		warningFromWhiteToBlue.start()
		modalTint.stateSwitch("invisible")

transitionOutOfScreen = () ->
	ws_contents.animate("invisible")
	warningShrinkToButton.start()
	warningPanelRemoveShadow.start()
	Utils.delay 0.1, ->
		warningFromWhiteToBlue.on Events.AnimationEnd, warningVisibleToHidden.start
		warningFromWhiteToBlue.start()
		modalTint.stateSwitch("invisible")
		Utils.delay 0.3, ->
			flow.showNext(login, animate:true, scroll:false)



# placeholder layer
login = new placeholder
	size:Screen.size
	featureName:"The Login Screen"
	parent:app
	x:Screen.width
	
login.on Events.backClicked, () ->
	flow.showPrevious()

login.on Events.closeClicked, () ->
	flow.showPrevious()

