
{dpr} = require 'DevicePixelRatio'
npm = require 'npm'
{locations} = require 'data_locations'

class exports.EditorialCoverTile extends Layer


	constructor: (@options = {}) ->

		@options.destination 							?= ""
		@options.textPanel								?= ""

		@options.pageMargin								?= dpr 24
		@options.card											?= ""
		@options.CTASpace									?= false
		@options.featureHeight						?= dpr 300
		@options.compactHeight						?= dpr 100

		super @options

		console.group("Article Tile Constructor")
		console.log("Article:", @options.venue)
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

		tileImage = @options.destination.article.articleImage
		destination = @options.destination





		### LAYER SETUP ###
		image = new Layer
			size:@.size
			image:tileImage
			parent:@
			name:destination.name



		gradientMask = new Layer
			name:"#{destination.name} imageGradientMask"
			width: @.width
			height: @.height
			parent:@

		gradientMask.style.background =
			"linear-gradient(rgba(0,0,0,0) 0%, rgba(0,0,0,0) 30%, rgba(0,0,0,0.5) 70%, rgba(0,0,0,0.8) 100%)"




		# text panel - time and title
		textPanel = new Layer
			name:"textContainer"
			parent:@
			width:@.width - (@options.pageMargin *2)
			x:@options.pageMargin
			# backgroundColor:"orange"
			backgroundColor: "Transparent"

		locationIcon = new Layer
			width:dpr 14
			height:dpr 17
			# backgroundColor:"indianred"
			backgroundColor:"transparent"
			image:"modules/moduleImages/interface/icn_white_location.svg"
			parent:textPanel

		locationText = new TextLayer
			font: "200 #{dpr 14}px/#{dpr 18}px FrutigerLTStd-Roman, -apple-system"
			text:destination.marketingName
			# backgroundColor:"lightcoral"
			backgroundColor:"transparent"
			textTransform:"uppercase"
			style:
				"color":"white"
			parent:textPanel
			padding:
				top:dpr 2
				left:dpr 6
			x:locationIcon.maxX
			width:textPanel.width - (locationIcon.maxX)
		locationText.originalWidth = locationText.width

		itemTitle = new TextLayer
			font: "700 #{dpr 32}px/#{dpr 32}px FrutigerLTStd-Roman, -apple-system"
			text:destination.article.title
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
			y:locationText.maxY
		itemTitle.originalHeight = itemTitle.height






		# textPanel.y = Align.bottom()



		@options.card = {

										image:image
										textPanel:textPanel
										locationIcon:locationIcon
										locationText:locationText
										itemTitle:itemTitle
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
		icon = @options.card.locationIcon
		loc = @options.card.locationText
		title = @options.card.itemTitle

		featuredHeight = @options.featureHeight # starting place where subs should be totally visible
		compactHeight = @options.compactHeight # height where everything should be totally hidden; should be bigger than smallest size
		transitionMark = featuredHeight - compactHeight # difference between the two

		maxWidth = Screen.width
		minWidth = dpr 214

		maxTextPanelWidth = maxWidth - (@options.pageMargin * 2)
		minTextPanelWidth = minWidth - (@options.pageMargin)

		maxHeadlineSize = dpr 32
		minHeadlineSize = dpr 18

		maxLocTitleSize = dpr 14
		minLocTitleSize = dpr 12


		# vertical alignment


		# percentage modulations



		widthPercentOfMax = Utils.modulate(@.width, [maxWidth, minWidth], [1,0]) #returns percent between max an min widths
		heightPercentOfTransition = Utils.modulate(@.height, [featuredHeight, transitionMark], [1,0], true) #returns percent between featured and min heights
		textPanelWidth = Utils.modulate(@.width, [minWidth, maxWidth], [minTextPanelWidth, maxTextPanelWidth])
		textPaneWidthPercentOfMax = Utils.modulate(textPanelWidth, [maxTextPanelWidth, minTextPanelWidth], [1,0])
		headlineFontSize = Utils.modulate(widthPercentOfMax, [0,1], [minHeadlineSize, maxHeadlineSize], true) #fits headline
		locTextFontSize = Utils.modulate(widthPercentOfMax, [0,1], [minLocTitleSize, maxLocTitleSize], true) #fits Loc
		# measurement setups


		#parent group
		textPanel.width = textPanelWidth
		textPanel.centerX()


		#widths all align to parent
		title.width = textPanelWidth
		loc.width = textPanelWidth - icon.maxX



		# title width scaling
		title.font = "700 #{headlineFontSize}px/#{headlineFontSize}px FrutigerLTStd-Roman, -apple-system"
		# loc.font = "200 #{locTextFontSize}px/#{locTextFontSize}px FrutigerLTStd-Roman, -apple-system"
		# # print loc.font
		titleTopPadding = headlineFontSize / 4
		title.style = "padding-top":"#{titleTopPadding}px" # TextLayer padding won't update, needed to use style injection

		#height alignments
		title.y = loc.maxY


		# move info off and fade based on height
		# print "textPanelX: #{textPanel.x}"
		# print "transitionMark: #{transitionMark}"
		# print "current height: #{@.height}"

		# textPanelBottomHeight = (help.height + subtitle.height) - (textPanel.x / 2)
		newBottomAlign = Utils.modulate(heightPercentOfTransition, [.5,1], [@options.pageMargin,0], true)
		newOpacity = Utils.modulate(heightPercentOfTransition, [.5,1], [0,1], true)
		textPanel.y = Align.bottom()

		# print textPanel.x
		loc.opacity = newOpacity
		icon.opacity = newOpacity

		textPanel.height = title.maxY
		textPanel.y = Align.bottom(-textPanel.x)
		# logs
		#
		console.log("modulated percent between max and min width:", widthPercentOfMax)
		console.log("modulated percent between featured and compact height:", heightPercentOfTransition)
		console.log("modulated text panel width:", textPaneWidthPercentOfMax)
		console.log("modulated headline size:", headlineFontSize)


		# align bottom margin is between 0 and - minY of subTitle
		console.log("card object", @options.card)

		console.groupEnd()



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
