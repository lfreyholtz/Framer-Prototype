### REQUIRES ###

{sailing} = require 'itinerary'
{ItineraryCarousel} = require 'itineraryCarousel'
{dpr} = require 'DevicePixelRatio'
npm = require 'npm'
moment = npm.moment






#### ITINERARY SCROLLER ###

myDay = new ItineraryCarousel
	sailing:sailing
	size:Screen.size
	testDate:"04/29/2017 11:31:00"
	

	
# landOnly = segments.filter (seg) -> seg.type != "seaday"

# print landOnly[0].location.marketingName
