################## FRAMER INFO ######################
Framer.Info =
	title: "AIDA Mobile App"
	author: "Lew Freyholtz"
	twitter: ""
	description: "Source of truth prototype for AIDA mobile app"




#### MODULES ####

npm = require 'npm'
moment = npm.moment
{dpr} = require 'DevicePixelRatio'
{myDay} = require 'Template_MyDay'
{BurgerMenu} = require 'BurgerMenu'
{placeholder} = require 'Template_NotAvailable'
{types} = require 'data_types'
{TopicPage} = require 'Template_topicPage'
{ImageList} = require 'Template_imageList'
{VenueCoverTile} = require "CoverTile_Venue"
{Venue} = require 'Template_VenueDetail'
{CoverCarousel} = require 'sectionCoverCarousel'
{SectionLocation} = require 'SectionLocation'
{Button} = require 'Button'
#### PROTOTYPE SETTINGS ###


scenarioIndexes = [
	{
		name: "Day 1: Before Boarding"
		time: moment("4/29/2017 10:45")
	},{
		
		name: "Day 1: After Boarding"
		time: moment("4/29/2017 15:45")
	},{
				
		name: "Day 1: Leaving Hamburg"
		time: moment("4/29/2017 18:01")
	},{
				
		name: "Day 1: After Dinner"
		time: moment("4/30/2017 21:01")
	},{
				
		name: "Day 2: Morning At Sea"
		time: moment("4/30/2017 21:01")
	},{
		name: "Day 2: Evening At Sea"
		time: moment("4/30/2017 21:01")
	}
	]

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




#### DATA ####
{sailing} = require 'data_itinerary'
{topics} = require 'data_topics'
{venues} = require 'data_venues'
{events} = require 'data_events'
{tags} = require 'data_tags'
{types} = require 'data_types'
################ APP #####################
app = new Layer
	size:Screen.size
	backgroundColor:"black"

################## TEST BED  ###################

{BaseSection} = require 'Section_BaseSection'

	

	
# btn = new Button	
# 	fullWidth:false
# 	type:"white"
# 	
# 		
# location = new SectionLocation
# 	width:Screen.width
# 	height:dpr 200
# 
# cover = new Layer
# 	width:Screen.width
# 	height:Screen.height
# 	backgroundColor: "white"
# 	
# buffets = []
# allVenues = []
# # print venues.marktrestaurant.type
# 
# for venue, details of venues
# 	buffets.push(details) if details.type.title == types.venues.buffet.title
# 		
# 
# console.log("buffets only", buffets)
# buffetRestaurants = new CoverCarousel
# 	width:Screen.width
# 	carouselObjects:buffets
# 	coverType:"venue"
# 	itemSpacing:dpr 10
# 	itemHeight:dpr 212
# 	itemWidth:dpr 212
# 	
# # 
# buffetRestaurants.on Events.carouselItemClicked, (item, type) ->
# 	print item.name

################## ONBOARDING ##################

################## GLOBAL VARIABLES ############


################## MY DAY ##################

	
# print scenarioIndexes[0].time.format('LLLL')
MY_DAY = new myDay
	sailing: sailing
	size: Screen.size
	testDate: scenarioIndexes[0].time
	parent:app


	




# ###### BURGER MENU ########
# 
HAMBURGER_MENU = new BurgerMenu
	topics: topics
	width: Screen.width
	

	
HAMBURGER_MENU.x = -HAMBURGER_MENU.width
	
HAMBURGER_MENU.on Events.closeClicked, =>
	flow.showPrevious()
	
HAMBURGER_MENU.on Events.itemClicked, (d) ->
	flow.showPrevious()
	Utils.delay 0.3, ->
		flow.showOverlayBottom(createNewTopicPage(d), animate:true, scroll:false)
		
HAMBURGER_MENU.on Events.chatNavClicked, ->
	flow.showPrevious()
	Utils.delay 0.3, ->
		flow.showOverlayBottom(CHAT, animate:true, scroll:false)
		
HAMBURGER_MENU.on Events.profileNavClicked, ->
	flow.showPrevious()
	Utils.delay 0.3, ->
		flow.showOverlayBottom(PROFILE, animate:true, scroll:false)
		
		
HAMBURGER_MENU.on Events.meineTermineClicked, ->
	flow.showPrevious()
	Utils.delay 0.3, ->
		flow.showOverlayBottom(SCHEDULE, animate:true, scroll:false)
		
		
			
					
		
		

##### TEMP MENU #####

TEMP_MENU = new placeholder
	size:Screen.size
	parent:app
	featureName:"The main menu"
	
TEMP_MENU.x = Screen.width

TEMP_MENU.on Events.backClicked, () ->
	flow.showPrevious()
	
TEMP_MENU.on Events.closeClicked, () ->
	flow.showPrevious()

################## WEATHER OVERLAY       ##################

################## TOPIC PAGE            ##################


createNewTopicPage = (whichTopic) ->
	
	TOPIC_PAGE.destroy() if TOPIC_PAGE
		
	TOPIC_PAGE = new TopicPage
		size: Screen.size
		parent:app
		topic:whichTopic
	
	TOPIC_PAGE.on Events.closeClicked, () ->
		flow.showPrevious()
		
	TOPIC_PAGE.on Events.itemClicked, (l, t) ->
		console.log("Members to be passed to list", l)
		flow.showNext(createListPage(l, t), animate:true, scroll:false)
		console.log("data passed from topic to list:", l)
			
			
	console.groupEnd()
	
	return TOPIC_PAGE
	
	

	
	




################## LIST PAGE             ##################


createListPage = (whichList, memberType) ->
	console.group("list page")
	IMAGE_LIST.destroy() if IMAGE_LIST
	
	console.log("list passed into list template:", whichList)
	console.log("type passed into list template:", memberType)
	
	IMAGE_LIST = new ImageList
		size: Screen.size
		parent:app
		listType:memberType	
		list:whichList
	
	IMAGE_LIST.on Events.closeClicked, () ->
		flow.showPrevious()
		
	IMAGE_LIST.on Events.listItemClicked, (item, type) ->
		console.log("item clicked:", item)
		console.log("item type clicked:", type)
		flow.showNext(createDetailPage(item, type), animate:true, scroll:false)
	console.groupEnd()
	
	return IMAGE_LIST
	
	
################## DETAIL PAGE           ##################


createDetailPage = (item, type) ->
	console.group("detail page")
	ITEM_DETAIL.destroy() if ITEM_DETAIL
	
	console.log("item passed into detail template:", item)
	console.log("type passed into detail template:", type)
	
	itemType = switch
		when type == "venue"
			ITEM_DETAIL = new Venue
				venue:item
				size:Screen.size
				testDate:testDate
				bookable:item.isBookable
		else
			ITEM_DETAIL = new placeholder
			

	ITEM_DETAIL.on Events.closeClicked, () ->
		flow.showPrevious()
# 		
# 	IMAGE_LIST.on Events.listItemClicked, (item, type) ->
# 		console.log("item clicked:", item)
# 		console.log("item type clicked:", type)
# 		flow.showPrevious()
# 		Utils.delay 0.3, ->
# 			flow.showOverlayBottom(createNewTopicPage(d), animate:true, scroll:false)
	console.groupEnd()
# 	console.log('List passed into list:', TOPIC_PAGE.topic)
	return ITEM_DETAIL

################## MENU CARD             ##################
################## DECKPLAN              ##################

################## SCHEDULE              ##################

SCHEDULE = new placeholder
	size:Screen.size
	parent:app
	featureName:"The schedule feature"
	
SCHEDULE.x = Screen.width

SCHEDULE.on Events.backClicked, () ->
	flow.showPrevious()
	
SCHEDULE.on Events.closeClicked, () ->
	flow.showPrevious()
################## PROFILE               ##################

PROFILE = new placeholder
	size:Screen.size
	parent:app
	featureName:"The profile feature"
	
PROFILE.x = Screen.width

PROFILE.on Events.backClicked, () ->
	flow.showPrevious()
	
PROFILE.on Events.closeClicked, () ->
	flow.showPrevious()
################## CHAT                  ##################

CHAT = new placeholder
	size:Screen.size
	parent:app
	featureName:"The chat feature"
	
CHAT.x = Screen.width

CHAT.on Events.backClicked, () ->
	flow.showPrevious()
	
CHAT.on Events.closeClicked, () ->
	flow.showPrevious()


### FLOW COMPONENT ###
flow = new FlowComponent
flow.parent = app

flow.showNext(MY_DAY, animate:false, scroll:false)

#for easy testing (comment out to remove)
# testTile = new VenueCoverTile
# 	width:Screen.width
# 	height:dpr(300)
# 	venue:topics.eatdrinknightlife.content[0].members[0]
# 	testDate:testDate
# 	
# flow.showNext(testTile, animate:false, scroll:false)
# 






	