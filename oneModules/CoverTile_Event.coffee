
{dpr} = require 'DevicePixelRatio'
npm = require 'npm'
moment = npm.moment
accounting = npm.accounting

{openinghours} = require 'data_openinghours'

class exports.EventCoverTile extends Layer


	constructor: (@options = {}) ->

		@options.event 										?= ""
		@options.testDate									?= moment("05/03/2017 5:30")
		@options.textPanel								?= ""

		@options.pageMargin								?= dpr 24
		@options.card											?= ""
		@options.CTASpace									?= false
		@options.featureHeight						?= dpr 300
		@options.compactHeight						?= dpr 100

		super @options

		console.group("Event Tile Constructor")
		console.log("Event:", @options.event)
		console.log("Event Image:", @options.event.images[0])
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

		tileImage = @options.event.images[0]
		event = @options.event

		moment.locale('de')


		newNow = moment(@options.testDate)
		moment.now = ->
			newNow




		displayTime = @determineDisplayTime(@getEventTimes(@options.event, moment()))

			# displayTime = @determineDisplayTime(@options.event.times.times)
		# venueOpeningMessage = @lookupOpen(openHoursToday).openText




		### LAYER SETUP ###
		image = new Layer
			size:@.size
			image:tileImage
			parent:@
			name:event.title



		gradientMask = new Layer
			name:"#{event.title} imageGradientMask"
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
			# text:venueOpeningMessage
			text:displayTime
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
			text:event.title
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



		# if there's no price, show location.

		if @options.event.prices.length > 0

			priceOrLoc = new TextLayer

				name:"#{event.title}_prices"
				# backgroundColor:"lightsteelblue"
				backgroundColor:"transparent"
				padding:
					top:@options.pageMargin / 2
					bottom:@options.pageMargin/2
				parent:textPanel
				font: "500 #{dpr 16}px/#{dpr 16}px FrutigerLTStd-Roman, -apple-system"
				textTransform:"uppercase"
				width:textPanel.width
				text:@checkPrice(event.prices)
				style:
					"color":"#8DCEE5"

					"background-image": "url('modules/moduleImages/interface/gr_dotted_line.svg')"
					"background-repeat":"repeat-x"
					"background-size": "#{dpr 325}px #{dpr 2}px"
					"background-position":"top"
				y:itemTitle.maxY

		else
			# priceOrLoc = new Layer
			# 	name:"#{event.title}_location"
			# 	width:textPanel.width
			# 	# borderWidth:dpr 2
			# 	# borderColor: "red"
			# 	y:itemTitle.maxY
			# 	parent:textPanel
			# 	backgroundColor:"transparent"
			# 	style:
			# 		"color":"#8DCEE5"
			#
			# 		"background-image": "url('modules/moduleImages/interface/gr_dotted_line.svg')"
			# 		"background-repeat":"repeat-x"
			# 		"background-size": "#{dpr 325}px #{dpr 2}px"
			# 		"background-position":"top"
			#
			# locIcon = new Layer
			# 	width:dpr 14
			# 	height:dpr 17
			# 	y:@options.pageMargin / 2
			# 	# backgroundColor:"indianred"
			# 	backgroundColor:"transparent"
			# 	image:"modules/moduleImages/interface/icn_white_location.svg"
			# 	parent:priceOrLoc



			priceOrLoc = new TextLayer
				font: "200 #{dpr 14}px/#{dpr 14}px FrutigerLTStd-Roman, -apple-system"
				# text:venueOpeningMessage
				text:"#{@options.event.takesplaceat}"
				width:textPanel.width
				# backgroundColor:"lightcoral"
				backgroundColor:"transparent"
				textTransform:"uppercase"
				y:itemTitle.maxY

				parent:textPanel

				padding:
					top:@options.pageMargin / 2
					bottom:@options.pageMargin/2


				style:
					"color":"white"
					"background-image": "url('modules/moduleImages/interface/gr_dotted_line.svg')"
					"background-repeat":"repeat-x"
					"background-size": "#{dpr 325}px #{dpr 2}px"
					"background-position":"top"

			# priceOrLoc.originalWidth = priceOrLoc.width
			# priceOrLoc.height = priceOrLoc.maxY

			# priceOrLoc.on "change:width", () ->
			# 	# print "CHANGING SIZE"
			# 	locText.width = priceOrLoc.width - locIcon.maxX

		textPanel.height = priceOrLoc.maxY
		textPanel.y = Align.bottom()
		itemTitle.maxY = priceOrLoc.y

		@options.card = {

										image:image
										textPanel:textPanel
										timeIcon:timeIcon
										timeText:timeText
										itemTitle:itemTitle
										priceOrLoc:priceOrLoc
										# subTitle:subTitlePanel
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
		console.groupCollapsed("Cover tile update positions")

		@options.card.gradient.size = @.size
		@options.card.image.size = @.size

		# view setup variables
		textPanel = @options.card.textPanel
		icon = @options.card.timeIcon
		time = @options.card.timeText
		title = @options.card.itemTitle
		# subtitle = @options.card.subTitle
		priceOrLoc = @options.card.priceOrLoc


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
		# subtitle.width = textPanelWidth
		priceOrLoc.width = textPanelWidth


		# title width scaling
		title.font = "700 #{headlineFontSize}px/#{headlineFontSize}px FrutigerLTStd-Roman, -apple-system"
		time.font = "200 #{timeTextFontSize}px/#{timeTextFontSize}px FrutigerLTStd-Roman, -apple-system"

		# print time.font
		titleTopPadding = headlineFontSize / 4
		title.style = "padding-top":"#{titleTopPadding}px" # TextLayer padding won't update, needed to use style injection

		#height alignments
		title.y = time.maxY
		# subtitle.y = title.maxY
		priceOrLoc.y = title.maxY
		textPanel.height = priceOrLoc.maxY



		# textPanelBottomHeight = (help.height + subtitle.height) - (textPanel.x / 2)
		textPanelBottomHeight = (priceOrLoc.height) - (textPanel.x / 2)
		newBottomAlign = Utils.modulate(heightPercentOfTransition, [.5,1], [textPanelBottomHeight,0], true)
		newOpacity = Utils.modulate(heightPercentOfTransition, [.5,1], [0,1], true)
		textPanel.y = Align.bottom(newBottomAlign)

		# subtitle.opacity = newOpacity
		priceOrLoc.opacity = newOpacity

		# logs

		console.log("modulated percent between max and min width:", widthPercentOfMax)
		console.log("modulated percent between featured and compact height:", heightPercentOfTransition)
		console.log("modulated text panel width:", textPaneWidthPercentOfMax)
		console.log("modulated headline size:", headlineFontSize)


		# align bottom margin is between 0 and - minY of subTitle
		console.log("card object", @options.card)

		console.groupEnd()

	checkPrice: (pricelist) ->

		currencyOptions = {
			symbol : "€",
			decimal : ",",
			thousand: ".",
			precision : 2,
			format: "%v %s"
		}

		console.groupCollapsed("Check Price")
		console.log("price list passed", pricelist)

		newList = pricelist.sort (a, b) ->
  							a.price - b.price

		top = accounting.formatMoney(newList[newList.length-1].price, currencyOptions)
		bottom = accounting.formatMoney(newList[0].price, currencyOptions)
		return "#{bottom} - #{top}"





	getEventTimes: (event, day) ->

		sentDay = day
		console.group("Get Event Times")
		console.log("Event sent:", event)

		eventTimes = event.times

		console.log("Event Times: ", eventTimes)
				# look through the segment list to see where I am
		hoursObject = eventTimes.find((day) => moment(day.date).isSame(sentDay, 'day'))

		if hoursObject
			# segment is between start and arrival time
			console.log("Current Hours", hoursObject)
			console.groupEnd()
			return hoursObject

		else
			console.log("No hours for passed date")
			console.groupEnd()
			return null


	determineDisplayTime: (hours) ->

		console.group("Determine Display Time")
		# check makeup of hours - none, one start stop, multiple start stops

		if hours # if it's not empty...

			console.log("Event has hours, passed object:", hours)
			if hours.times.length >= 1 and hours.times[0].close
				console.groupEnd()
				return @lookupOpen(hours.times)
			else
				console.groupEnd()
				# if started...
				if moment().isAfter(moment(hours.times[0].open, "HH:mm"))
					return "Jetzt"
				else
					return "Heute ab #{hours.times[0].open}"
		else
			console.log("Event has no hours")
			console.groupEnd()
			return ""




	lookupOpen: (times) ->
		console.group("Look up next event times")
		console.log("Times passed in:", times)
	#
	# 	isOpen = false
		openText = ""
		console.log("All times for day:", times)
		lastOpenTime = times[times.length - 1].close
		console.log("Last Open Time:", lastOpenTime)
		console.log("Test Time:", moment().format('LLLL'))
	#


		curOpenTime = times.find((time) => moment().isBetween(
			moment(time.open, 'HH:mm'),
			moment(time.close, 'HH:mm')
		))
	#
	#
	#
		console.log("Opening time search result:", curOpenTime)

		if curOpenTime
			# event is current
			# check if event has end time

			console.log("Happening now until", curOpenTime.close)
			console.groupEnd()
			displayText = "Jetzt bis #{curOpenTime.close}"
			isOpen = true

			# return {isOpen:isOpen, openText:openText}
			return displayText
		else
		#
		# 	# "now" is not between any of the opening time pairs
		# 	# loop through and check for the next opening time
		#
			for time in times
				if moment().isBefore(moment(time.open, "HH:mm"))
					# I'm closed, but still times to visit today
					console.log("Closed - opens at", time.open)
					console.groupEnd()

					openText = "Heute von #{time.open} bis #{time.close}"
					isOpen = false
					# return {isOpen:isOpen, openText:openText}
					return openText
		#
				else
					# I am outside the opening hours...
					console.log("outside open hours")
					console.groupEnd()
					#

					# look through ALL hours, not just TOMORROW

					# ## CHECK TOMORROW'S hours
					# nextOpenDay = moment().add(1, 'day')
					# openHoursTomorrow = @lookupOpen(@options.event)
					# #
					# if openHoursTomorrow
					# 	isOpen = false
					# 	openText = "Öffnet morgen um #{openHoursTomorrow.time[0].open}"
					# 	console.log("Closed - opens tommorrow", openHoursTomorrow.time[0].open)
					# 	console.groupEnd()
					#
					# 	return openText
					# 	# return {isOpen:isOpen, openText:openText}
					#
					# else
					# #If tomorrow doesn't exist, set the text to just Closed
					# 	isOpen = false
					# 	openText = "Geschlossen"
					# 	console.log("Won't open again")
					# 	console.groupEnd()
					#
					# 	return openText
						# return {isOpen:isOpen, openText:openText}

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


	@define 'event',
		get: ->
			if @options.event == ""
				console.error("No event defined for event tile")
			else @options.event
		set: (value) ->
			@options.event = value

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
