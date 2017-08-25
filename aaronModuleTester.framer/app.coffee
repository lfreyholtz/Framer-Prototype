## INCLUDES ##

{dpr} = require 'DevicePixelRatio'
# {Text} = require 'Text'
{IconButton} = require 'IconButton'
{TopicPage} = require 'Template_topicPage'
{burgerData} = require 'data_burger'
{excursions} = require 'data_excursions'
{topics} = require 'data_topics'
{venues} = require 'data_venues'
{events} = require 'data_events'
{excursions} = require 'data_excursions'
# {excursionsByLocation} = require 'data_excursions'
{Venue} = require 'Template_VenueDetail'

{SectionSimpleText} = require 'SectionSimpleText'
	

# {brauhaus} = require 'brauhaus'


## dont forget Tri's JSON.stringify trick to print an object: ##
## - - - - 
# print "usingData is: " + JSON.stringify helloSectionFatPara.usingData 
## - - - - 
## why is this helpful? If we use "+", and one of the items to be added is a string, then the all items will be converted to a string, too, and then we can't print the object anymore. So we use JSON.stringify to convert the JSON before we perform the addition.
##
## An alternative way is:
##
## print "Something: "
## print object
## print "--------------"


## TEST THE TOPICPAGE
# 
# helloTopic = new TopicPage
# 	size:Screen.size
# # 	topicTitle: topics.events.title
# # 	topicSubtitle: topics.events.subtitle
# 	topicCategories: data_topics.categories
# 	name: "topicPage"
# 	hasPromotion: true
# # 	hasPromotion: false
# 
# 	topicData: data_topics.wellness

## TEST THE BURGER MENU ##

# helloBurger = new BurgerMenu
# 	name: "burgerMenuContainer"
# 	basicData: burgerData
# 	width: Screen.width

## TEST THE RATINGS ##

# helloRating = new Ratings
# 	numStars: 5
# 	starRating: 2
# 	starHeight: dpr 24
# 	starWidth: dpr 24


hello = new Venue
	venue: venues.marktrestaurant
	size: Screen.size
	
	

## TEST THE DETAILPAGE SECTION MODULES
 
# fakeDetailPage = new Layer
# 	size: Screen.size
# 	name: "fakeDetailPage"
# 	backgroundColor: "pink"
# 
# 
# somebutton = new IconButton
# 	icon: "back"
# 	
# somebutton.on Events.Tap, ->
# 	print "huhu"


## SECTION OPENING HOURS
# helloSectionOpeningHours = new SectionOpeningHours
# 	secOHvenue: 		data_eatdrinknightlife.brauhaus
# 	secOHtestDate: 		"17/04/30"
# 	name: 				"sectionOpeningHours"
# 	parent: 			fakeDetailPage
# 	y: fakeDetailPage.y + dpr 24

## SECTION EXCLUDED INCLUDE
# helloSectionExIncluded = new SectionExIncluded
# 	secExInVenue: 		data_eatdrinknightlife.brauhaus
# 	exOrIn: 			"i"
# 	name: 				"SectionExIncluded"
# 	parent: 			fakeDetailPage
# 	y: fakeDetailPage.y + dpr 24
	

## SECTION MINIMUM AGE
# helloSectionMinimumAge = new SectionMinimumAge
# 	secMinAgeVenue: 		data_eatdrinknightlife.brauhaus
# 	name: 				"SectionMinimumAge"
# 	parent: 			fakeDetailPage

## SECTION EXCLUDED
# helloSectionExcluded = new SectionExcluded
# 	secExcludedVenue: 		data_eatdrinknightlife.brauhaus
# 	name: 				"SectionExcluded"
# 	parent: 			fakeDetailPage

## SECTION INCLUDED
# helloSectionIncluded = new SectionIncluded
# 	secExcludedVenue: 		data_eatdrinknightlife.brauhaus
# 	name: 				"SectionIncluded"
# 	parent: 			fakeDetailPage

## SECTION ONELINER
## the OneLiner can do all what SectionMinimumAge, SectionExcluded and 
## SectionIncluded can do, but needs "oneLinerTopic" to be configured.
#
# helloSectionOneLiner = new SectionOneLiner
# 	secMinAgeVenue: 	data_eatdrinknightlife.brauhaus
# 	name: 				"SectionOneLiner"
# # the oneLinerTopic accepts any string starting with either i, e, or m 	
# 	oneLinerTopic: 		"minimumAge"
# 	parent: 			fakeDetailPage


## SECTION MAIN ARTICLE
# helloSectionMainArticle = new SectionMainArticle
# 	secMinAgeVenue: 	data_eatdrinknightlife.brauhaus
# 	name: 				"SectionMainArticle"
# 	parent: 			fakeDetailPage

## SECTION MENUBUTTON
# helloSectionMenuButton = new SectionMenuButton
# 	name: 				"SectionMenuButton"
# 	parent: 			fakeDetailPage
# 	bigBtnLabel:		"Button Label"

# ## SECTION SectionPopularTimes
# helloSectionPopularTimes = new SectionPopularTimes
# 	secExcludedVenue: 		data_eatdrinknightlife.brauhaus
# 	name: 					"SectionPopularTimes"
# 	parent: 				fakeDetailPage

# ## SECTION SectionPopularTimes
# helloSectionPopularTimes = new SectionWayfinding
# 	secExcludedVenue: 		data_eatdrinknightlife.brauhaus
# 	name: 					"SectionWayfinding"
# 	parent: 				fakeDetailPage



