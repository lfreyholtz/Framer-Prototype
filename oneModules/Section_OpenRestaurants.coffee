{dpr} = require 'DevicePixelRatio'
npm = require 'npm'
moment = npm.moment
{CoverCarousel} = require 'sectionCoverCarousel'
{venues} = require 'data_venues'
{VenueCoverTile} = require 'CoverTile_Venue'
{types} = require 'data_types'

class exports.OpenRestaurants extends Layer

	Events.itemClicked = "openRest.itemClicked"
	Events.allClicked = "openRest.allClicked"
	Events.scrollMoving = "openRest.scrollmoving"
	Events.openRestaurantsDragStarted = "openRest.openRestaurantsDragStarted"

	constructor: (@options = {}) ->

		@options.sectionTitle 						?= "Default title"
		@options.pageMargin								?= dpr 24
		@options.hasStroke								?= false
		@options.testDate									?= ""
		@options.openThreshold						?= 0

		super @options

		@.width = Screen.width
		@.backgroundColor = "white"
		# venues = venues
		openVenues = @findOpenVenues(venues, @options.testDate)

		title = new TextLayer
			font: "500 #{dpr 16}px/#{dpr 16}px FrutigerLTStd-Light, -apple-system"
			letterSpacing:dpr 1
			style:"color":"#555555"
			text:@options.sectionTitle
			# backgroundColor:"pink"
			parent:@
			width:Screen.width - (@options.pageMargin * 2)
			textTransform:"uppercase"
			y:@options.pageMargin

		title.x = Align.center()




		carousel = new CoverCarousel
			carouselObjects: openVenues
			coverType: "venue"
			parent:@
			y:title.maxY + (@options.pageMargin*.70)
			parallax:false

		carousel.on Events.carouselItemClicked, () =>

			@emit(Events.itemClicked, @)

		carousel.content.on Events.DragStart, () =>
			"carousel being dragged event from openRestaurantsSection"
			@emit(Events.openRestaurantsDragStarted)

		moreButton = new TextLayer
			font: "500 #{dpr 14}px/#{dpr 14}px FrutigerLTStd-Light, -apple-system"
			letterSpacing:dpr 1
			# backgroundColor:"pink"
			style:
				"color":"#3399CC"
				# "background-image": "url('modules/moduleImages/interface/icn_blue_chev.svg')"
				# "background-repeat" : "no-repeat"
				# "background-position":"right"
				# "background-size": "#{dpr 5}px #{dpr 8}px"

			text:"Alle Restaurants"
			textAlign:"right"
			parent:@
			width:Screen.width - (@options.pageMargin * 2)
			x:@options.pageMargin
			textTransform:"capitalize"
			# padding:
			# 	right:dpr 20
			y:carousel.maxY + @options.pageMargin


		for child in @.children
			@.height = child.maxY + @options.pageMargin



	findOpenVenues: (venues, testDate) ->
		console.groupCollapsed("Find Open Venues")
		allVenues = Object.values(venues)
		console.log("All venues passed in", allVenues)

		# filter out non-restaurant places
		restaurantsOnly = allVenues.filter(
			(venue) =>
				venue.type.title != types.venues.place.title and venue.type.title != types.venues.wellnessfitness.title and venue.type.title != types.venues.nightclub and venue.type.title != types.venues.kids
		)

		console.log("List of only restaurants", restaurantsOnly)

		# restaurants open now
		openNow = restaurantsOnly.filter( (ven) =>

			openingHours = ven.openingHours.content
			todaysHours = openingHours.find((day) => moment(day.date).isSame(testDate, 'day')

			)

			if todaysHours
				allTimes = todaysHours.times

				curOpenTime = allTimes.find((time) => testDate.isBetween(
					moment(time.open, 'HH:mm').subtract(@options.openThreshold, 'minutes'),
					moment(time.close, 'HH:mm')
				))


			console.log("opening hours", openingHours)
			console.log("today's hours", todaysHours)
			console.log("current Open Time", curOpenTime)

			if curOpenTime || openNow
				return true

		)

		console.log("All venues", allVenues)

		console.log("Only non-places", restaurantsOnly)
		console.log("open now", openNow)
		return openNow


	@define 'sectionTitle',
			get: ->
				@options.sectionTitle
			set: (value) ->
				@options.sectionTitle = value

	@define 'openThreshold',
			get: ->
				@options.openThreshold
			set: (value) ->
				@options.openThreshold = value


	@define 'hasStroke',
			get: ->
				@options.hasStroke
			set: (value) ->
				@options.hasStroke = value


	@define 'testDate',
			get: ->
				@options.testDate
			set: (value) ->
				@options.testDate = value

	@define 'pageMargin',
			get: ->
				@options.pageMargin
			set: (value) ->
				@options.pageMargin = value
