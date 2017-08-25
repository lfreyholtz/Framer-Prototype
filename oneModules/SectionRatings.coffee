

{dpr} = require 'DevicePixelRatio'



class exports.SectionRatings extends Layer

	constructor: (@options = {}) ->

		@options.pageMargin						?= dpr 24
		@options.hasStroke						?= false
		@options.sectionLabel					?= "No label defined"
		super @options

		@.backgroundColor = "transparent"

		# @.backgroundColor = "#FB8E7E"
		@.name = "popular times"
		@.x = @options.pageMargin


		grey2 = "#555555"
		css = """
			.contentContainer {

				font-family: FrutigerLTStd-Light, 'Open Sans', sans-serif;
				width: #{@.width - (@options.pageMargin * 2) }px;
				height:#{@options.pageMargin * 5}px;
				margin-top:#{@options.pageMargin}px;
				color: #{grey2};


			}

			.placeholder {
				background-color:#FB8E7E;
				background-image:url('modules/moduleImages/interface/img_underConstruction.png');
				background-repeat:no-repeat;
				background-position:center;
				background-size:#{dpr 40}px #{dpr 40}px;
			}

			.spacer {
				margin-top:#{@options.pageMargin}px;
			}

			.line {
				border-top:#{dpr 1}px solid #e3e3e3;
				margin-bottom:#{@options.pageMargin}px;
			}

			.secSSSectionHeader {
				text-transform: uppercase;
				margin-bottom:#{@options.pageMargin}px;
				font-size: #{dpr 16}px;
				line-height:1.1;
				margin-top:#{@options.pageMargin}px;
			}
			"""

		Utils.insertCSS(css)

		seperator = "<div class='spacer'></div>"
		if @options.hasStroke
			seperator = "<div class='spacer line'></div>"


		@.html = "

			#{seperator}
			<div class='contentContainer placeholder'>
				<div class='secSTSectionHeader'>#{@options.sectionLabel}</div>
			</div>"

		@.size = Utils.textSize(@.html)


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
