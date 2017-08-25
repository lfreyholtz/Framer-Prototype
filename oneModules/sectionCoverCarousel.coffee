{dpr} = require 'DevicePixelRatio'
npm = require 'npm'
moment = npm.moment

#submodules
{VenueCoverTile} = require "CoverTile_Venue"
{EventCoverTile} = require 'EventCoverTile'


class exports.CoverCarousel extends Layer

############################ CLASS EVENTS    ############################
	Events.coverCarouselDragStarted 			= "CoverCarousel.coverCarouselDragStarted"
	Events.carouselItemClicked 						= "CoverCarousel.carouselItemClicked"
	Events.coverCarouselAnimationStopped 	= "CoverCarousel.coverCarouselAnimationStopped"

############################ CONSTRUCTOR    ############################

	cards = []
	constructor: (@options = {}) ->
			# @options.photo			?= "images/defaultImage"
		@options.pageMargin						?= 	dpr 24
		@options.itemSpacing					?=	dpr 8
		@options.carouselObjects			?= 	""
		@options.itemWidth						?= 	dpr 214
		@options.itemHeight						?=	dpr 214
		@options.testDate									?= moment("05/03/2017 8:30")
		@options.parallax							?= 	true
		@options.coverType						?= "venue"

		super @options

		# @.backgroundColor = "pink"
		# @.height = 400
		# @.width = Screen.width







		imageCarousel = new PageComponent
			width:@options.itemWidth
			x:0
			height:@options.itemHeight + (@options.itemSpacing*2)
			backgroundColor: "transparent"
			scrollVertical: false
			parent:@
			clip:false
			originX:0
			contentInset:
				left:@options.pageMargin
				right:@options.pageMargin



		@generateList(@options.coverType, @options.carouselObjects, imageCarousel)


		@activateParallaxEffect(imageCarousel)

		imageCarousel.content.on Events.DragStart, () =>
			# print "drag on section cover carousel started"
			@emit(Events.coverCarouselDragStarted)

		imageCarousel.content.on Events.AnimationStop, () =>
			@emit(Events.coverCarouselAnimationStopped)


		imageCarousel.content.on "change:x", =>
				@activateParallaxEffect(imageCarousel)



		@.height = imageCarousel.maxY
		@.width = Screen.width

		@.backgroundColor = 'white'

	activateParallaxEffect: (carousel) ->
		if @options.parallax
			size = Screen.width - @options.itemWidth
			for card in carousel.content.children

				# Calculate what percentage of card is visible
				xRelativeToPage = card.x + carousel.content.x
				howNotVisible = Math.abs(xRelativeToPage / size)
				# print "xRelativeToPage:#{xRelativeToPage}"
				# print "howNotVisible:#{howNotVisible}"
				visibleArea = Utils.modulate(howNotVisible, [0, 1], [1, 0], true) #inverts and ranges howNotVisible
				desiredScale = Utils.modulate(visibleArea, [1, 0], [1, 0.9], true)
				card.scale = desiredScale
				# print "Desired Scale:#{desiredScale}"


	generateList: (type, list, pc) ->
		if list.length > 0
			console.log("generate list of type:", type)
			console.log("from this list:", list)


			type = switch

				when type == "venue"
					console.log("venue being created", venue)
					for venue,i in list
						listItem = @createVenue(venue)
						listItem.x = (@options.itemWidth + @options.itemSpacing) * i
						listItem.y = @options.itemSpacing
						listItem.parent = pc.content
						listItem.data = venue
						listItem.index = i

						listItem.on Events.Click, (event, layer) =>
							item = layer.data
							type = "venue"
							@emit(Events.carouselItemClicked, item, type)


					console.log("card object", listItem.card)


				when type == "event"
					console.log("event being created", event)
					for event,i in list
						listItem = @createEvent(event)
						listItem.x = (@options.itemWidth + @options.itemSpacing) * i
						listItem.y = @options.itemSpacing
						listItem.parent = pc.content
						listItem.data = event
						listItem.index = i

						listItem.on Events.Click, (event, layer) =>
							item = layer.data
							type = "venue"
							@emit(Events.carouselItemClicked, item, type)


					console.log("card object", listItem.card)

				else console.error("list item type not supported")


	createVenue: (venue) ->

		venueCard = new VenueCoverTile
			name:"#{venue.name}_card"
			venue:venue
			width:@options.itemWidth
			height:@options.itemHeight
			testDate:@options.testDate
			featureHeight:Screen.height # to keep things from scaling

		return venueCard

	createEvent: (event) ->
		eventCard = new EventCoverTile
			name:"#{event.title}_card"
			event:event
			width:@options.itemWidth
			height:@options.itemHeight
			testDate:@options.testDate
			featureHeight:Screen.height # to keep things from scaling




##### GETTERS / SETTERS ######
	#
	@define 'itemSpacing',
			get: ->
				@options.itemSpacing
			set: (value) ->
				@options.itemSpacing = value

	@define 'pageMargin',
			get: ->
				@options.pageMargin
			set: (value) ->
				@options.pageMargin = value

	@define 'carouselObjects',
			get: ->
				if @options.carouselObjects == ""
					console.error("You must define objects of type venue, excursion, or event for the carousel to work")
				else
					@options.carouselObjects
			set: (value) ->
				@options.carouselObjects = value

	@define 'itemWidth',
			get: ->
				@options.itemWidth
			set: (value) ->
				@options.itemWidth = value

	@define 'itemHeight',
			get: ->
				@options.itemHeight
			set: (value) ->
				@options.itemHeight = value

	@define 'parallax',
			get: ->
				@options.parallax
			set: (value) ->
				@options.parallax = value

	@define 'testDate',
			get: ->
				@options.testDate
			set: (value) ->
				@options.testDate = value
