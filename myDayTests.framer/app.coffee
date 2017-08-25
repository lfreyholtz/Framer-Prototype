npm = require 'npm'
moment = npm.moment
{dpr} = require 'DevicePixelRatio'

{sailing} = require 'data_itinerary'
{topics} = require 'data_topics'
{venues} = require 'data_venues'
{events} = require 'data_events'
{tags} = require 'data_tags'
{types} = require 'data_types'
{locations} = require 'data_locations'
{CollectionComponent} = 'collectionComponent'
{myDay} = require 'Template_MyDay'


testDate = moment("4/29/2017 9:45")
newNow = testDate
moment.now = ->
	newNow
# moment localized defaults
moment.locale('de')
moment.locale 'de', calendar:
	lastDay: '[gestern] [um] LT'
	sameDay: '[heute] [um] LT'
	nextDay: '[morgen] [um] LT'
	lastWeek: '[Letzter] dddd [um] LT'
	nextWeek: 'dddd [um] LT'
	sameElse: 'dddd, LT [um] LT'
# moment.relativeTimeRounding(Math.floor)
moment.updateLocale 'de', longDateFormat:
	LT: 'H:mm [Uhr]'
	LTS: 'H:mm:ss [Uhr]'




app = new Layer
	size:Screen.size
	backgroundColor:"black"

flow = new FlowComponent
flow.parent = app
# MY_DAY = new myDay
# 		sailing: sailing
# 		size: Screen.size
# 		testDate: scenarioIndexes[3].time
# 		parent:app
# 		
# MY_DAY.on Events.menuClicked, () ->
# 	flow.showOverlayTop(dateTimePanel, animate:true, scroll:false)

loader = new Layer
	size:Screen.size
	backgroundColor: "orange"
	parent:app
	x:-Screen.width

MY_DAY = new Layer
	name:"MyDay Container"
	size:Screen.size
	parent:app
	
createMyDay = (testDate) ->
# 	flow.showOverlayCenter(loader, animate:false, scroll:false)
# 	print "creating new day with testDate #{testDate}"
	for child in MY_DAY.children
		child.destroy()
# 	flow.showPrevious()
		
	My_Day = new myDay
		sailing:sailing
		size:Screen.size
		testDate:testDate
		parent:MY_DAY
	
	

	My_Day.on Events.menuClicked, () ->
		appHeader.opacity = 0
		flow.showOverlayTop(dateTimePanel, animate:true, scroll:false)

	



#### SWITCH FOR BUTTONS ####
# 
dateTimePanel = new Layer
	width:Screen.width
	height:Screen.height / 2
	backgroundColor: "white"
	x:0
	y:-Screen.height / 2
	parent:app






# cellWidth = 40
# cellHeight = 60




# variables 
times = ["6:01","9:01","13:01","18:01","20:01","22:01","23:01"]

	
totalDays = sailing.segments.length
totalTimes = times.length
columns = 3
gutter = 20

timeButtons = []
# dayRows = Math.floor totalDays / columns
# timeRows = Math.floor totalTimes / columns

# DAYS
segmentButtons = []

dayParent = new Layer
	backgroundColor: "white"
	parent:dateTimePanel
	width:Screen.width
	height:Screen.height
	
dayParent.y = Align.top()

for i in [0...totalDays]
	offsetX = i % columns
	offsetY = Math.floor i / columns
	
	dayButton  = new TextLayer
# 		parent:cellParent
		name: "DayButton " + i
		text:sailing.segments[i].location.name
		textAlign: "center"
		font: "500 #{dpr 12}px/#{dpr 12}px FrutigerLTStd-Roman, -apple-system"
		borderWidth: 2
		borderRadius: 10
		padding:
			vertical:20
			horizontal:20

		backgroundColor: "white"
		borderColor: "#BBBBBB"
		style:
			"color":"#BBBBBB"
 		
	dayButton.onTapStart ->
		switchDay(this)
 				
	s = sailing.segments[i].segmentStart
			
	dayButton.info = 
		cX: offsetX + 1
		cY: offsetY + 1
		index:i
		date:s.substring(0, s.indexOf(' '))
	

	segmentButtons.push(dayButton)

maxWidth = Math.max.apply(null, segmentButtons.map (button) -> button.width)
maxHeight = Math.max.apply(null, segmentButtons.map (button)-> button.height)
# 
lastCell = segmentButtons[segmentButtons.length-1]
firstCell = segmentButtons[0]
dayParent.height = (maxHeight * (segmentButtons.length - 4) ) + gutter

for dayButton,i in segmentButtons
	
		
	if i == 0
		dayButton.backgroundColor = "orange"
		dayButton.style = "color":"#FFFFFF"
		dayButton.borderColor = "orange"
	dayButton.parent = dayParent
	dayButton.width = maxWidth
	quarterWidth = Screen.width / 4
	offsetX = dayButton.info.cX
	offsetY = dayButton.info.cY - 1
# 
# 
# 	
	if offsetX == 1
		dayButton.x = gutter * 2 
	else if offsetX == 2
		dayButton.midX = Screen.width / 2
	else
		dayButton.maxX = Screen.width - gutter * 2
	dayButton.y = (offsetY * maxHeight) + (offsetY * gutter) + gutter


# TIMES

timesParent = new Layer
	backgroundColor: ""
	parent:dateTimePanel
	width:Screen.width
	height:Screen.height
	y:dayParent.maxY

for i in [0...totalTimes]
	offsetX = i % columns
	offsetY = Math.floor i / columns
	
	timeButton  = new TextLayer

		name: "TimeButton " + i
		text:times[i]
		textAlign: "center"
		font: "500 #{dpr 12}px/#{dpr 12}px FrutigerLTStd-Roman, -apple-system"
		borderWidth: 2
		borderRadius: 10
		padding:
			vertical:20
			horizontal:20

		backgroundColor: "white"
		borderColor: "#BBBBBB"
		style:
			"color":"#BBBBBB"
			
			
	timeButton.onTapStart ->
		switchTime(this)
 				
	
			
	timeButton.info = 
		cX: offsetX + 1
		cY: offsetY + 1
		index:i
		time:times[i]	

	timeButtons.push(timeButton)

maxWidth = Math.max.apply(null, timeButtons.map (button) -> button.width)
maxHeight = Math.max.apply(null, timeButtons.map (button)-> button.height)
# 
lastCell = timeButtons[timeButtons.length-1]
firstCell = timeButtons[0]
timesParent.height = (maxHeight * (timeButtons.length - 4) ) + gutter

for timeButton, i in timeButtons
	
		
	if i == 3
		timeButton.backgroundColor = "orange"
		timeButton.style = "color":"#FFFFFF"
		timeButton.borderColor = "orange"
	timeButton.parent = timesParent
	timeButton.width = maxWidth
	quarterWidth = Screen.width / 4
	offsetX = timeButton.info.cX
	offsetY = timeButton.info.cY - 1
# 
# 
# 	
	if offsetX == 1
		timeButton.x = gutter * 2 
	else if offsetX == 2
		timeButton.midX = Screen.width / 2
	else
		timeButton.maxX = Screen.width - gutter * 2
	timeButton.y = (offsetY * maxHeight) + (offsetY * gutter) + gutter
	 
currentDateTime = 
	time: times[3]
	day: segmentButtons[0].info.date
	


			
switchDay = (button) ->
	for cell, index in segmentButtons
		cell.backgroundColor =  "white"
		cell.borderColor =  "#BBBBBB"
		cell.style = 
			"color":"#BBBBBB"
	
	button.backgroundColor = "orange"
	button.style = "color":"#FFFFFF"
	button.borderColor = "orange"
	currentDateTime.day = button.info.date
	updateDisplay()
	
switchTime = (button) ->
	for cell, index in timeButtons
		cell.backgroundColor =  "white"
		cell.borderColor =  "#BBBBBB"
		cell.style = 
			"color":"#BBBBBB"
	
	button.backgroundColor = "orange"
	button.style = "color":"#FFFFFF"
	button.borderColor = "orange"
	currentDateTime.time = button.info.time

	updateDisplay()
	

flow.showNext(MY_DAY, animate:false, scroll:false)

appHeader = new Layer
	width:Screen.width
	height:dpr 30
	backgroundColor: ""
	parent:app
# appHeader.bringToFront()	

signalStrength = new Layer
	parent:appHeader
	x:Align.left(dpr 4)
	y:dpr 4
	width:dpr 49
	height:dpr 10
	backgroundColor: ""
	style:
		"background-image":"url('modules/moduleImages/interface/icn_white_sigStrength.svg')"
		"background-repeat":"no-repeat"
		"background-position":"center"
		"background-size":"100%"

time = new TextLayer
	text:currentDateTime.time
	parent:appHeader
	x:Align.center()
	y:dpr 4
	font: "500 #{dpr 12}px/#{dpr 12}px  -apple-system"
	style:
		"color":"white"
		
battery = new Layer
	parent:appHeader
	x:Align.right(-dpr 4)
	y:dpr 4
	width:dpr 49
	height:dpr 10
	backgroundColor: ""
	style:
		"background-image":"url('modules/moduleImages/interface/icn_white_bat.svg')"
		"background-repeat":"no-repeat"
		"background-position":"center"
		"background-size":"100%"
		
updateDisplay = () ->
	curDate =  moment("#{currentDateTime.day} #{currentDateTime.time}")
	time.text = currentDateTime.time
	createMyDay(curDate)
	
	Utils.delay 1, ->
		flow.showPrevious()
		appHeader.opacity = 1
		
updateDisplay(currentDateTime) # default
