
{dpr} = require 'DevicePixelRatio'
npm = require 'npm'
moment = npm.moment
{openinghours} = require 'data_openinghours'

class exports.VenueCoverTile extends Layer


	constructor: (@options = {}) ->

		@options.venue 										?= ""
		@options.testDate									?= moment("05/03/2017 5:30")
		@options.textPanel								?= ""

		@options.pageMargin								?= dpr 24
		@options.card											?= ""
		@options.CTASpace									?= false
		@options.featureHeight						?= dpr 300
		@options.compactHeight						?= dpr 100

		super @options

		console.group("Venue Tile Constructor")
		console.log("Venue:", @options.venue)
		console.log("Test Date:", @options.testDate)

		console.groupEnd()
		# under construction elements
		@.clip = true

		@.backgroundColor = "#FB8E7E"
		@.style =
			"background-image": "url('modules/moduleImages/interface/img_underConstruction.png')"
			"background-repeat":"no-repeat"
			"background-position": "center"
			"background-size" : "#{dpr 90}px #{dpr 90}px"


		css = """
				.venueTextPanelContainer {
					font-family:FrutigerLTStd-Roman, 'Open Sans', serif;
					width:#{@.width - (@options.pageMargin * 2)}px;
					color:#FFF;
					margin-left:#{@options.pageMargin}px;
					background-color:#EECC33;

				}
				.title {
					font-size: #{dpr 32}px;
					color: #FFF;
					font-weight: 700;
					line-height: #{dpr 32}px;
					text-transform: uppercase;
					padding-top:#{dpr 8}px;
					letter-spacing: #{dpr -0.5}px;
					hyphens:manual;
				}

				.tagline {
					font-family:FrutigerLTStd-Light, 'Open Sans', serif;
					width:#{@.width - (@options.pageMargin * 2)}px;
					font-size:#{dpr 18}px;
					color:#FFF;
					font-weight:100;
					line-height: #{dpr 24}px;
					margin-bottom:#{(@options.pageMargin / 2) - dpr 6}px;
				}

				.helpText {
					font-family:FrutigerLTStd-Light, 'Open Sans', serif;
					width:#{@.width - (@options.pageMargin * 2)}px;
					font-size:#{dpr 12}px;
					color:#FFF;
					font-weight:100;
					line-height: #{dpr 16}px;
					margin-bottom:#{@options.pageMargin / 2}px;
					padding-top:#{@options.pageMargin / 2}px;
					text-transform: uppercase;
					background-image: url('modules/moduleImages/interface/gr_dotted_line.svg');
					background-repeat:repeat-x;
					background-size: #{dpr 325}px #{dpr 2}px;
					background-position:top;
				}


				.openingTime {
					font-size: #{dpr 14}px;
					color: #FFF;
					line-height: #{dpr 14}px;
					background-image: url('modules/moduleImages/interface/icn_openingHours.svg');
					background-repeat:no-repeat;
					background-size:	#{dpr 14}px; #{dpr 14}px;
					background-position:0px #{dpr 8}px;
					padding-left:#{dpr 20}px;
					padding-top:#{dpr 10}px;
					text-transform: uppercase;
				}

			"""

		Utils.insertCSS(css)


		### INTERNAL VARAIBLES ###

		tileImage = @options.venue.coverImage
		venue = @options.venue

		moment.locale('de')


		newNow = moment(@options.testDate)
		moment.now = ->
			newNow

		openHoursToday = @getOpenHours(@options.venue, moment())
		venueOpeningMessage = @lookupOpen(openHoursToday).openText




		### LAYER SETUP ###
		image = new Layer
			size:@.size
			image:tileImage
			parent:@
			name:venue.tile



		gradientMask = new Layer
			name:"#{venue.name} imageGradientMask"
			width: @.width
			height: @.height
			parent:@

		gradientMask.style.background =
			"linear-gradient(rgba(0,0,0,0) 0%, rgba(0,0,0,0) 30%, rgba(0,0,0,0.5) 70%, rgba(0,0,0,0.8) 100%)"




		# text panel - time and title
		textPanel = new Layer
			name:"timeContainer"
			parent:@
			width:@.width - (@options.pageMargin *2)
			x:@options.pageMargin
			# backgroundColor:"orange"
			backgroundColor: "Transparent"

		timeIcon = new Layer
			width:dpr 14
			height:dpr 14
			# backgroundColor:"indianred"
			backgroundColor:"transparent"
			image:"modules/moduleImages/interface/icn_openingHours.svg"
			parent:textPanel

		timeText = new TextLayer
			font: "200 #{dpr 14}px/#{dpr 14}px FrutigerLTStd-Roman, -apple-system"
			text:venueOpeningMessage
			# backgroundColor:"lightcoral"
			backgroundColor:"transparent"
			textTransform:"uppercase"
			style:
				"color":"white"
			parent:textPanel
			padding:
				top:dpr 2
				left:dpr 6
			x:timeIcon.maxX
			width:textPanel.width - (timeIcon.maxX)
		timeText.originalWidth = timeText.width

		itemTitle = new TextLayer
			font: "700 #{dpr 32}px/#{dpr 32}px FrutigerLTStd-Roman, -apple-system"
			text:venue.name
			# backgroundColor:"salmon"
			backgroundColor:"transparent"
			textTransform:"uppercase"
			style:
				"color":"white"
				# "word-break":"break-word"
				"hyphens" : "manual"
			parent:textPanel
			padding:
				top:dpr 8
			width:textPanel.width
			y:timeText.maxY
		itemTitle.originalHeight = itemTitle.height


		subTitlePanel = new TextLayer
			font: "100 #{dpr 18}px/#{dpr 24}px FrutigerLTStd-Light, -apple-system"
			name:"#{venue.name} subTitlePanel"
			width:textPanel.width
			# backgroundColor:"lightsalmon"
			backgroundColor:"transparent"
			style:
				"color":"white"
			parent:textPanel
			padding:
				bottom: (@options.pageMargin / 2) - dpr 6
			text:venue.tagline
			y:itemTitle.maxY

		helpTextPanel = new TextLayer

			name:"#{venue.name} helpText"
			# backgroundColor:"lightsteelblue"
			backgroundColor:"transparent"
			padding:
				top:@options.pageMargin / 2
				bottom:@options.pageMargin/2
			parent:textPanel
			font: "200 #{dpr 12}px/#{dpr 16}px FrutigerLTStd-Light, -apple-system"
			textTransform:"uppercase"
			width:textPanel.width
			text:venue.type.title
			style:
				"color":"white"

				"background-image": "url('modules/moduleImages/interface/gr_dotted_line.svg')"
				"background-repeat":"repeat-x"
				"background-size": "#{dpr 325}px #{dpr 2}px"
				"background-position":"top"
			y:subTitlePanel.maxY

		textPanel.height = helpTextPanel.maxY
		textPanel.y = Align.bottom()


		subTitlePanel.maxY = helpTextPanel.y

		@options.card = {

										image:image
										textPanel:textPanel
										timeIcon:timeIcon
										timeText:timeText
										itemTitle:itemTitle
										helpText:helpTextPanel
										subTitle:subTitlePanel
										gradient:gradientMask
										}
		console.log("CoverTileVenue Object:", @options.card)
		#inital position setting
		@updateContentPositions()
		# here -

		@.on "change:size", =>
			@updateContentPositions()




	updateContentPositions: () ->
		# here - reset all alignments
		console.group("Cover tile update positions")

		@options.card.gradient.size = @.size
		@options.card.image.size = @.size

		# view setup variables
		textPanel = @options.card.textPanel
		icon = @options.card.timeIcon
		time = @options.card.timeText
		title = @options.card.itemTitle
		subtitle = @options.card.subTitle
		help = @options.card.helpText


		featuredHeight = @options.featureHeight # starting place where subs should be totally visible
		compactHeight = @options.compactHeight # height where everything should be totally hidden; should be bigger than smallest size
		transitionMark = featuredHeight - compactHeight # difference between the two

		maxWidth = Screen.width
		minWidth = dpr 214

		maxTextPanelWidth = maxWidth - (@options.pageMargin * 2)
		minTextPanelWidth = minWidth - (@options.pageMargin)

		maxHeadlineSize = dpr 32
		minHeadlineSize = dpr 18

		maxTimeTitleSize = dpr 14
		minTimeTitleSize = dpr 12

		# percentage modulations

		widthPercentOfMax = Utils.modulate(@.width, [maxWidth, minWidth], [1,0]) #returns percent between max an min widths
		heightPercentOfTransition = Utils.modulate(@.height, [featuredHeight, transitionMark], [1,0], true) #returns percent between featured and min heights
		textPanelWidth = Utils.modulate(@.width, [minWidth, maxWidth], [minTextPanelWidth, maxTextPanelWidth])
		textPaneWidthPercentOfMax = Utils.modulate(textPanelWidth, [maxTextPanelWidth, minTextPanelWidth], [1,0])
		headlineFontSize = Utils.modulate(widthPercentOfMax, [0,1], [minHeadlineSize, maxHeadlineSize], true) #fits headline
		timeTextFontSize = Utils.modulate(widthPercentOfMax, [0,1], [minTimeTitleSize, maxTimeTitleSize], true) #fits time
		# measurement setups


		#parent group
		textPanel.width = textPanelWidth
		textPanel.centerX()


		#widths all align to parent
		title.width = textPanelWidth
		time.width = textPanelWidth - icon.maxX
		subtitle.width = textPanelWidth
		help.width = textPanelWidth


		# title width scaling
		title.font = "700 #{headlineFontSize}px/#{headlineFontSize}px FrutigerLTStd-Roman, -apple-system"
		time.font = "200 #{timeTextFontSize}px/#{timeTextFontSize}px FrutigerLTStd-Roman, -apple-system"
		# print time.font
		titleTopPadding = headlineFontSize / 4
		title.style = "padding-top":"#{titleTopPadding}px" # TextLayer padding won't update, needed to use style injection

		#height alignments
		title.y = time.maxY
		subtitle.y = title.maxY
		help.y = subtitle.maxY
		textPanel.height = help.maxY

		# move info off and fade based on height
		# print "textPanelX: #{textPanel.x}"
		# print "transitionMark: #{transitionMark}"
		# print "current height: #{@.height}"

		textPanelBottomHeight = (help.height + subtitle.height) - (textPanel.x / 2)
		newBottomAlign = Utils.modulate(heightPercentOfTransition, [.5,1], [textPanelBottomHeight,0], true)
		newOpacity = Utils.modulate(heightPercentOfTransition, [.5,1], [0,1], true)
		textPanel.y = Align.bottom(newBottomAlign)

		subtitle.opacity = newOpacity
		help.opacity = newOpacity

		# logs

		console.log("modulated percent between max and min width:", widthPercentOfMax)
		console.log("modulated percent between featured and compact height:", heightPercentOfTransition)
		console.log("modulated text panel width:", textPaneWidthPercentOfMax)
		console.log("modulated headline size:", headlineFontSize)


		# align bottom margin is between 0 and - minY of subTitle
		console.log("card object", @options.card)

		console.groupEnd()


	getOpenHours: (venue, day) ->
		sentDay = day
		console.group("Get Open Hours")
		console.log("Venue sent:", venue)

		openingHours = venue.openingHours.content

		console.log("Venue Opening Hours: ", openingHours)
				# look through the segment list to see where I am
		hoursObject = openingHours.find((day) => moment(day.date).isSame(sentDay, 'day'))

		if hoursObject
			# segment is between start and arrival time
			console.log("Current Hours", hoursObject)
			console.groupEnd()
			return hoursObject

		else
			console.log("TODO: Create off-cruise state")
			console.groupEnd()
			return null





		# check today's hours


	lookupOpen: (day) ->
		console.group("Look up open hours")
		console.log("Day passed in:", day)

		isOpen = false
		openText = ""
		allTimes = day.times
		console.log("All times for day:", allTimes)
		lastOpenTime = day.times[day.times.length - 1].close
		console.log("Last Open Time:", lastOpenTime)
		console.log("Test Time:", moment())

		curOpenTime = allTimes.find((time) => moment().isBetween(
			moment(time.open, 'HH:mm'),
			moment(time.close, 'HH:mm')
		))



		console.log("Opening time search result:", curOpenTime)

		if curOpenTime
			# venue is open

			console.log("Open now until", curOpenTime.close)
			console.groupEnd()
			openText = "Jetzt geöffnet bis #{curOpenTime.close}"
			isOpen = true

			return {isOpen:isOpen, openText:openText}

		else

			# "now" is not between any of the opening time pairs
			# loop through and check for the next opening time

			for time in day.times
				if moment().isBefore(moment(time.open, "HH:mm"))
					# I'm closed, but still times to visit today
					console.log("Closed - opens at", time.open)
					console.groupEnd()

					openText = "Öffnet um #{time.open}"
					isOpen = false
					return {isOpen:isOpen, openText:openText}

				else
					# I am outside the opening hours...

					## CHECK TOMORROW'S hours
					nextOpenDay = moment().add(1, 'day')
					openHoursTomorrow = @getOpenHours(@options.venue, nextOpenDay)

					if openHoursTomorrow
						isOpen = false
						openText = "Öffnet morgen um #{openHoursTomorrow.times[0].open}"
						console.log("Closed - opens tommorrow", openHoursTomorrow.times[0].open)
						console.groupEnd()

						return {isOpen:isOpen, openText:openText}

					else
					#If tomorrow doesn't exist, set the text to just Closed
						isOpen = false
						openText = "Geschlossen"
						console.log("Won't open again")
						console.groupEnd()

						return {isOpen:isOpen, openText:openText}

	@define 'CTASpace',
		get: ->
			@options.CTASpace
		set: (value) ->
			@options.CTASpace = value

	@define 'featureHeight',
		get: ->
			@options.featureHeight
		set: (value) ->
			@options.featureHeight = value

	@define 'compactHeight',
		get: ->
			@options.compactHeight
		set: (value) ->
			@options.compactHeight = value


	@define 'venue',
		get: ->
			if @options.venue == ""
				console.error("No venue defined for venue tile")
			else @options.venue
		set: (value) ->
			@options.venue = value

	@define 'card',
		get: ->
			if @options.card == ""
				console.error("Error creating card")
			else @options.card
		set: (value) ->
			@options.card = value


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
