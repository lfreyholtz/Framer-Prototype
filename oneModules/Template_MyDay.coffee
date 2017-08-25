{dpr} = require 'DevicePixelRatio'
npm = require 'npm'
moment = npm.moment

#submodules
# {ItineraryCarousel} = require 'ItineraryCarousel'
{myDaySegments} = require 'data_myDaySegments'
{SegmentModel} = require 'data_myDaySegments'
{ItinCard} = require 'ItineraryDataCard'
{IconButton} = require 'IconButton'
{EditorialCoverTile} = require 'CoverTile_Editorial'
{OpenRestaurants} = require 'Section_OpenRestaurants'
{venues} = require 'data_venues'
{types} = require 'data_types'
{CoverCarousel} = require 'sectionCoverCarousel'

class exports.myDay extends Layer

	Events.menuClicked = "myDay.menuClicked"
	Events.weatherClicked = "myDay.weatherClicked"
	Events.segmentsMoving = "myDay.segmentsMoving"

	@.burgerButton = ""
	@.weather = ""
	segmentPages = ""


	constructor: (@options = {}) ->

		@options.testDate 										?= moment("4/30/2017 21:01")
		@options.sailing 											?= ""
		@options.scaleFactor 									?= 1.25
		@options.viewPadding									?= dpr 24
		@options.segmentArray									?= ""


		super @options




		moment.locale('de')
		moment.locale 'de', calendar:
			lastDay: '[gestern] [um] LT'
			sameDay: '[heute] [um] LT'
			nextDay: '[morgen] [um] LT'
			lastWeek: '[Letzter] dddd [um] LT'
			nextWeek: 'dddd [um] LT'
			sameElse: 'dddd, LL [um] LT'

		moment.updateLocale 'de', longDateFormat:
			LT: 'H:mm [Uhr]'
			LTS: 'H:mm:ss [Uhr]'


		# model object containing all itinerary objects
		model = new myDaySegments
			sailing:@options.sailing
			testDate:@options.testDate
		#
		# Model Setup
		# model = new myDaySegments
		# model.sailing = @options.sailing
		# model.testDate = @options.testDate
		# model.openTimeThreshold = 16
		console.log("Model:", model)






		css="""
				.infoPanelBlock {
					font-family:font-family: FrutigerLTStd-Bold, 'Open Sans', sans-serif;
					width:#{@.width-@options.viewPadding*2}px;
					padding:#{@options.viewPadding/2}px;
					margin-top:#{dpr 8}px;
					margin-left:#{@options.viewPadding/2}px;

					}

				.infoPanelText {
					font-size:#{dpr 14}px;
					color:#3399cc;
					font-weight:600;
					line-height:1;
					margin-bottom:#{dpr 5}px;
					text-transform: uppercase;
					background-image:url('modules/moduleImages/interface/icn_chev_down.svg');
					background-repeat:no-repeat;
					background-position:center right;
					background-size:5%;

				}
				.arrownDown {
					margin-top: #{dpr 35}px;
					width:#{dpr 12}px;
					height:#{dpr 7}px;
					background-image:url('modules/moduleImages/interface/icn_chev_down.svg');
					background-repeat:no-repeat;
					background-position:center;
					background-size:100%;
				}


				}"""

		Utils.insertCSS(css)


		# variable setup
		offsetHeight = Screen.height * @options.scaleFactor
		offsetWidth = Screen.width * @options.scaleFactor
		frameXOffset = (offsetWidth - Screen.width) / 2
		frameYOffset = (offsetHeight - Screen.height) / 2



		console.log("offset width:", offsetWidth)
		console.log("offset height:", offsetHeight)



		# create segment pages
		segmentPages = new PageComponent
			height:Screen.height
			width:Screen.width
			scrollVertical: false
			directionLock: true
			name:"segmentPages"
			parent:@

		segmentPages.directionLockThreshold = {x:50, y:50}
		segmentPages.content.clip = false


		# segmentPages = segments

		# build itinerary cards
		cards = @createArrayOfCards(model.itineraryList)
		# print @createArrayOfCards(model.itineraryList)
		@options.segmentArray = cards


		segmentPages.addPage(item.container, "right") for item in cards

		# images only array
		images = []
		for card in cards
			images.push(card.image)



		# @.segments methods

		segmentPages.onMove =>
			@emit(Events.segmentsMoving, @)
			# @.segments.content.clip = false

			# @updateImageParallax(images, segments)
			@updateImageParallax()
			# print segments.scrollX




		#Burger, weather
		burgerButton = new IconButton
			icon:"burger"
			name:"burgerButton"
			x: dpr 16
			# x:@options.viewPadding
			y:dpr 44
			parent:@

		burgerButton.originalY = burgerButton.y

		burgerButton.onClick =>
			@emit(Events.menuClicked, @)

		@.burgerButton = burgerButton

		weatherForecast = new IconButton
			icon:"weather"
			name:"weatherButton"
			y:dpr 35

			parent:@


		weatherForecast.x = Align.right(-@options.viewPadding)
		weatherForecast.originalY = weatherForecast.y

		weatherForecast.onClick =>
			@emit(Events.weatherClicked, @)


		@.weatherButton = weatherForecast
		console.groupEnd()


## GENERATE PANELS ##
	generatePanels: () ->

		# for child in @.children
		# 	child.destroy()
		#
		# console.group("Generating Panels")
		# console.group("Set Up Model")
		#
		#
		# console.log("Test Date Passed", model.testDate)
		# console.log("Model ItineraryList", model.itineraryList)
		#
		# console.groupEnd()
		# #
		# console.group("Setting Up Segments Pager and Card Array")











		#
		# console.groupEnd()
		#
		# console.group("Menu, weather")
		#
		# console.groupEnd()
		#
		#
		# console.groupEnd()



	createArrayOfCards: (itineraryData) ->

		console.group("Factory: creating card array")
		console.log("itinerary data passed to array constructor", itineraryData)

		cardArray = []
		parallaxDist = Screen.width / 3


		for segmentItem, i in itineraryData

			indicatorTime = @setIndicatorTime(segmentItem)


			# page container / mask
			segmentPage = new Layer
				height:Screen.height
				width:Screen.width
				name:"segmentPage_0#{i}"
				backgroundColor:Utils.randomColor()
				clip:true



			#image as child of container

			segmentImage = new Layer
				name:"segmentImage_0#{i}"
				width:Screen.width + parallaxDist
				height:Screen.height + parallaxDist
				image:segmentItem.segmentImage
				parent:segmentPage

			segmentImage.center()
			segmentImage.origX = segmentImage.x
			segmentImage.origY = segmentImage.y

			# gradient for legibility
			gradientMask = new Layer
				name:"imageGradientMask"
				size:segmentImage.size
				y:Align.bottom()
				parent:segmentImage

			gradientMask.style.background = "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.45) 70%, rgba(0,0,0,0.7) 100%)"



		# segment information

			segmentInfo = new ItinCard # segment information (external object)
				sailing:@options.sailing
				size:Screen.size
				backgroundColor:"transparent"
				pageType:segmentItem.pageType
				segment:segmentItem.segment
				parent:segmentPage
			segmentInfo.y = Align.bottom(-dpr(48))
			segmentInfo.originalY = segmentInfo.y


			# scrollview
			segment = new ScrollComponent # scroll component on each page (each segment)
				height:Screen.height
				width:Screen.width
				scrollHorizontal: false
				parent:segmentPage
				directionLock: true
				name:"scrollablePage#{i}"
			segment.directionLockThreshold = {x:50, y:50}
			segment.segmentIndex = i

			# segment.on Events.Scroll, =>
			#     print segment.direction


			segment.on Events.Move, (event, layer) =>
				# print layer.parent.segmentIndex

				# print layer.parent.scrollY - @options.segmentArray[index].image.origY
				index = layer.parent.segmentIndex
				originalY = @options.segmentArray[index].image.origY
				scrollY = layer.parent.scrollY
				offsetY = originalY - scrollY

				@verticalParallax(scrollY, index, originalY)
				# curSegment =  @options.segmentArray[index]
				# curSegmentImageY = curSegment.image.y

			myDayPanel = new Layer # panel within scroll showing my day contents e.g. destination article, open restaurants, etc.
				backgroundColor:"white"
				borderRadius:dpr 8
				width:Screen.width
				height:Screen.height*2
				name:"infoPanel_#{i}"
				parent:segment.content
				shadowY:dpr -2
				shadowBlur:dpr 3
				shadowColor:"rgba(0,0,0,0.3)"
				shadowSpread:dpr 1

			myDayPanel.y = @.height - dpr(48)
			myDayPanel.html = "<div class='infoPanelBlock'>
						<div class='infoPanelText'>#{indicatorTime} im Überblick</div><div class='arrowdown'></div>
				</div>"


		# destination article
			if segmentItem.segment.location.article != ""

				tipsPanel = new TextLayer
					text:"Tips für Ihren Landausflug"
					width:Screen.width - (@options.viewPadding * 2)
					parent:myDayPanel
					x:Align.center()
					y:dpr 80
					font: "700 #{dpr 24}px/#{dpr 36}px FrutigerLTStd-Medium, -apple-system"


				console.log("Segment", segmentItem.segment)
				console.log("Segment Location Data",segmentItem.segment.location)

				destinationArticle = new EditorialCoverTile
					destination:segmentItem.segment.location
					parent:myDayPanel
					y:tipsPanel.maxY + dpr 24
					width:Screen.width - (@options.viewPadding * 2)
					height:dpr 200
				destinationArticle.x = Align.center()



			# open restaurants - today
				if i == 0 # assume first itinerary item is pos 0

					console.log("open restaurants on #{@options.testDate.format('LLLL')}", @findOpenVenues())

					restaurantPanel = @createOpenRestaurants()
					restaurantPanel.parent = myDayPanel
					restaurantPanel.y = destinationArticle.maxY + @options.viewPadding *2

					restaurantPanel.carousel.on Events.coverCarouselDragStarted, () ->

						segmentPages.scrollHorizontal = false
						# print "Drag started from my day template"

					restaurantPanel.carousel.on Events.coverCarouselAnimationStopped, () ->
						segmentPages.scrollHorizontal = true
						# print "Drag stopped"

		# drop everything in array
			cardArray.push(
				{
					container:segmentPage
					image:segmentImage
					info:segmentInfo
					gradient:gradientMask
					})

		console.log("cardArray returned from create array", cardArray)
		console.groupEnd()
		return cardArray

	updateImageParallax: () ->
		numItems = @options.segmentArray.length
		lastPageLeft = (numItems * Screen.width) - Screen.width
		_scrollX = @options.segmentArray[0].container.screenFrame.x
		firstItem = @options.segmentArray[0]
		firstItem.image.originX = 0
		lastItem = @options.segmentArray[@options.segmentArray.length - 1]
		firstItem.image.scale = Utils.modulate(_scrollX, [0, Screen.width/2], [1, 1.5], true)
		firstItem.gradient.scale = Utils.modulate(_scrollX, [0, Screen.width/2], [1, 1.5], true)
		lastItem.image.scale = Utils.modulate(_scrollX, [ -lastPageLeft, -(lastPageLeft + Screen.width)], [1, 1.5], true)



		if _scrollX >= 0
			firstItem.gradient.screenFrame.x = 0
			firstItem.image.screenFrame.x = 0
			firstItem.container.screenFrame.x = 0
			firstItem.container.clip = false

		else if _scrollX <= -lastPageLeft
			lastItem.gradient.screenFrame.x = 0
			lastItem.image.screenFrame.x = 0
			lastItem.container.screenFrame.x = 0
			lastItem.container.clip = false

		else
			firstItem.container.clip = true
			lastItem.container.clip = true

		for item in @options.segmentArray
			parallaxStart = item.image.origX
			parallaxEnd = parallaxStart * 2
			modulatedX = Utils.modulate(item.container.screenFrame.x, [-Screen.width, Screen.width], [parallaxEnd, 0])
			item.image.x = modulatedX




	createOpenRestaurants: () ->
		console.group("Create open restaurants page control")
		openVenues = @findOpenVenues(@options.testDate)
		console.log("Open Venues", openVenues)
		sectionContainer = new Layer
			width:Screen.width
			height:dpr 200
			name:"OpenRestaurantsSection"
			backgroundColor:"white"

			# carousel

		title = new TextLayer
			font: "500 #{dpr 16}px/#{dpr 16}px FrutigerLTStd-Light, -apple-system"
			letterSpacing:dpr 1
			style:"color":"#555555"
			text:"Kulinarische Vielfalt"
			parent:sectionContainer
			width:Screen.width - (@options.viewPadding * 2)
			textTransform:"uppercase"
			y:@options.viewPadding

		title.x = Align.center()
		if !openVenues
			nothingOpen = new Layer


		else
		# title
			carousel = new CoverCarousel
				carouselObjects: openVenues
				coverType: "venue"
				parent:sectionContainer
				y:title.maxY + (@options.viewPadding*.70)
				parallax:true



			# all restaurants button
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
				parent:sectionContainer
				width:Screen.width - (@options.viewPadding * 2)
				x:@options.viewPadding
				textTransform:"capitalize"
				# padding:
				# 	right:dpr 20
				y:carousel.maxY + @options.viewPadding



		sectionContainer.carousel = carousel
		console.groupEnd
		return sectionContainer




	verticalParallax: (yPos, index, origY) ->
		curSegment =  @options.segmentArray[index]
		curSegmentImageY = curSegment.image.y
		curSegmentInfoY = curSegment.info.y

		# console.log("current segment", curSegment)

		# curSegment.image.originY = 0
		if yPos <= 0
			curSegment.image.y = origY
			curSegment.image.scale = Utils.modulate(yPos, [0,-1200],[1,1.3], true)
		else if yPos > 0
			curText = curSegment.info
			curSegment.image.y = Utils.modulate(yPos, [0, 600],[origY,origY-100]) # scroll up parallax
			buttonOpacity = Utils.modulate(yPos, [Screen.height / 2, Screen.height - dpr 100], [1,0])

			@.burgerButton.opacity = buttonOpacity
			@.weatherButton.opacity = buttonOpacity
			curText.opacity = Utils.modulate(yPos, [0, 300], [1,0])

			# drift
			@.burgerButton.y = Utils.modulate(yPos, [0, Screen.height / 2 ], [@.burgerButton.originalY, @.burgerButton.originalY - dpr 10])
			@.weatherButton.y = Utils.modulate(yPos, [0, Screen.height / 2 ], [@.weatherButton.originalY, @.weatherButton.originalY - dpr 10])
			curText.y = Utils.modulate(yPos, [0, Screen.height / 2 ], [curText.originalY, curText.originalY - dpr 100])

	setIndicatorTime: (item) ->
		# return moment(item.segment.segmentStart).calendar().split(" um")[0]

		if moment().isBetween(moment(item.segment.segmentStart), moment(item.segment.segmentEnd))
			if moment().hour() in [7..17]

				return "Heute"
			else if moment().hour() in [18..23]
				return "Heute Abend"
			else if moment().hour() in [12..17]

				return "Heute"

		else
			return moment(item.segment.segmentStart).calendar().split(" um")[0]

	findOpenVenues: (testDate) ->
		console.groupCollapsed("Model: Find open venues")
		allVenues = Object.values(venues)

		console.log("Model: All venues", allVenues)
		date = moment(testDate)
		# filter out non-restaurant places
		restaurantsOnly = allVenues.filter(
			(venue) =>
				venue.type.title != types.venues.place.title and venue.type.title != types.venues.wellnessfitness.title and venue.type.title != types.venues.nightclub and venue.type.title != types.venues.kids
		)

		console.log("Model: List of only restaurants", restaurantsOnly)

		# restaurants open now
		openNow = restaurantsOnly.filter( (ven) =>

			openingHours = ven.openingHours.content
			todaysHours = openingHours.find((day) => moment(day.date).isSame(date, 'day')

			)

			if todaysHours
				allTimes = todaysHours.times
				if @_openTimeThreshold
					openTimeThreshold = @_openTimeThreshold
				else openTimeThreshold = 1

				curOpenTime = allTimes.find((time) => date.isBetween(
					moment(time.open, 'HH:mm').subtract(openTimeThreshold, 'minutes'),
					moment(time.close, 'HH:mm')
				))


			console.log("Model: opening hours", openingHours)
			console.log("Model: today's hours", todaysHours)
			console.log("Model: current Open Time", curOpenTime)

			if curOpenTime || openNow
				return true

		)

		console.log("open now", openNow)
		console.groupEnd()
		return openNow

	@define 'segmentPages',
		get: ->
			segmentPages
		set: (value) ->
			segmentPages = value


	@define 'viewPadding',
			get: ->
				@options.viewPadding
			set: (value) ->
				@options.viewPadding = value

	@define 'testDate',
			get: ->
				@options.testDate
			set: (value) ->
				@options.testDate = value
				console.log("My Day - setting testDate")
				@generatePanels()

				@emit("change:testDate")

	@define 'scaleFactor',
			get: ->
				@options.scaleFactor
			set: (value) ->
				@options.scaleFactor = value

	@define 'segmentArray',
			get: ->
				@options.segmentArray
			set: (value) ->
				@options.segmentArray = value

	@define 'sailing',
			get: ->
				if @options.sailing == ""
					console.error("a sailing was not defined for myDay")
				else
					@options.sailing
			set: (value) ->
				@options.sailing = value

	@define 'openVenues',
		get: () -> @findOpenVenues(@_testDate)
