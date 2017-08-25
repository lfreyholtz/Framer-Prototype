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
testDate = moment("4/30/2017 10:45")

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


{SegmentModel} = require 'data_myDaySegments_alt'
model = new SegmentModel
model.sailing = sailing

console.log("Model's itinerary List", model.itineraryList) 
model.testDate = testDate
model.openTimeThreshold = 16
console.log("Model's current event list", model.currentEvents)

		

