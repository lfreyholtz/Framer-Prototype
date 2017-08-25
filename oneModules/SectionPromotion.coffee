

{dpr} = require 'DevicePixelRatio'



class exports.SectionPromotion extends Layer

	constructor: (@options = {}) ->

		@options.pageMargin						?= dpr 24
		@options.hasStroke						?= false
		@options.sectionLabel					?= "No label defined"
		@options.sectionBG						?= "#F3F3F3"

		super @options

		@.backgroundColor = @options.sectionBG

		# @.backgroundColor = "#FB8E7E"
		@.name = "popular times"
		@.width = Screen.width



		grey2 = "#555555"
		css = """


			.spacer {
				margin-top:#{@options.pageMargin * 2}px;
			}

			.line {
				border-top:#{dpr 1}px solid #e3e3e3;
				margin-bottom:#{@options.pageMargin}px;
			}

			.sectionPromoSecHeader {
				font-family: FrutigerLTStd-Light, 'Open Sans', sans-serif;
				text-transform: uppercase;
				margin-bottom:#{@options.pageMargin/4}px;
				font-size: #{dpr 16}px;
				line-height:1.1;
				margin-top:#{dpr 48}px;
				color:#{grey2};
			}
			"""

		Utils.insertCSS(css)

		seperator = ""
		if @options.hasStroke
			seperator = "<div class='line'></div>"


		@.html = "#{seperator}"

		@.height = dpr(300)

		# @.size = Utils.textSize(@.html)

		sectionHeader = new Layer
			width:@.width - (@options.pageMargin * 2)
			backgroundColor:"transparent"
			parent:@
			html:" <div class='sectionPromoSecHeader'>#{@options.sectionLabel}</div>"

		sectionHeader.x = @options.pageMargin
		sectionHeader.size  = Utils.textSize(sectionHeader.html)
		#
		#
		promotItem = new Layer
			width: @.width - (@options.pageMargin * 2)
			parent: @
			backgroundColor: "#FB8E7E"
			height:@.height - (@options.pageMargin *2)
			x:@options.pageMargin
			y:sectionHeader.maxY
		#
		promotItem.style =
			"background-image": "url('modules/moduleImages/interface/img_underConstruction.png')"
			"background-repeat":"no-repeat"
			"background-position": "center"
			"background-size" : "#{dpr 40}px #{dpr 40}px"

		@.height = promotItem.maxY + @options.pageMargin

	@define 'pageMargin',
			get: ->
				@options.pageMargin
			set: (value) ->
				@options.pageMargin = value

	@define 'sectionLabel',
			get: ->
				@options.sectionLabel
			set: (value) ->
				@options.sectionLabel = value

	@define 'hasStroke',
			get: ->
				@options.hasStroke
			set: (value) ->
				@options.hasStroke = value

	@define 'sectionBG',
			get: ->
				@options.sectionBG
			set: (value) ->
				@options.sectionBG = value
