npm = require 'npm'
accounting = npm.accounting
moment = npm.moment
{dpr} = require 'DevicePixelRatio'
{myDay} = require 'Template_MyDay'


{types} = require 'data_types'
{TopicPage} = require 'Template_topicPage'
{ImageList} = require 'Template_imageList'
{EventCoverTile} = require "CoverTile_Event"

{Venue} = require 'Template_VenueDetail'

{locations} = require 'data_locations'
{sailing} = require 'data_itinerary'
{topics} = require 'data_topics'
{venues} = require 'data_venues'
{events} = require 'data_events'
{tags} = require 'data_tags'


{BaseSection} = require 'Section_BaseSection'
testDate = moment("5/02/2017 7:01")

# section = new BaseSection
# 	sectionTitle:"This is a section"
{EditorialCoverTile} = require 'CoverTile_Editorial'

testTile = new EditorialCoverTile
	width:Screen.width
	height:dpr 400
	destination:locations.DEHAM

# testTile = new EventCoverTile
# 	event:events.event004
# 	width:Screen.width / 2
# 	height:Screen.height / 4
# 	testDate:testDate

# print accounting.formatMoney(4999.99, currencyOptions);

sliderBackground = new Layer
	width:Screen.width
	height:300
	y:Align.bottom
	backgroundColor: "white"
	
	
heightSlider = new SliderComponent
	x:Align.center()
	y:Align.center()
	width:500
	backgroundColor: "lightGrey"
	min:dpr 214
	max:Screen.height
	parent:sliderBackground
	
heightSlider.fill.backgroundColor = "orange"	

widthSlider = new SliderComponent
	x:Align.center()
	y:Align.center(80)
	width:500
	backgroundColor: "lightGrey"
	min:dpr 214
	max:Screen.width
	parent:sliderBackground
widthSlider.value = widthSlider.min
widthSlider.fill.backgroundColor = "orange"	

testTile.height = heightSlider.value
testTile.width = widthSlider.value


heightSlider.on "change:value", ->
	testTile.height = heightSlider.value
# 	print "height:#{this.value}"
	
widthSlider.on "change:value", ->
	testTile.width = widthSlider.value