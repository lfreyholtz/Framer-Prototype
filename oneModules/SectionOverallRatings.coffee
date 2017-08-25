

{dpr} = require 'DevicePixelRatio'
{Ratings} = require 'Ratings'


class exports.SectionOverallRatings extends Layer

	constructor: (@options = {}) ->

		@options.pageMargin						?= dpr 24
		@options.hasStroke						?= false
		@options.sectionLabel					?= "No label defined"
		@options.rating								?= 0
		@options.ratingCount					?= 0
		super @options

		@.backgroundColor = "white"

		# @.backgroundColor = "#FB8E7E"
		@.name = "overallRating"
		# @.x = @options.pageMargin


		grey2 = "#555555"
		css = """
			.contentContainerOverallRatings {

				font-family: FrutigerLTStd-Light, 'Open Sans', sans-serif;
				width: #{@.width - (@options.pageMargin * 2) }px;
				margin-top:#{@options.pageMargin}px;
				color: #{grey2};
				text-transform: uppercase;

			}

			.placeholderOverallRatings {
				background-color:#FB8E7E;
				background-image:url('modules/moduleImages/interface/img_underConstruction.png');
				background-repeat:no-repeat;
				background-position:center;
				background-size:#{dpr 40}px #{dpr 40}px;
			}

			.totalRatings {
				font-family: FrutigerLTStd-Light, 'Open Sans', sans-serif;
				color: #{grey2};
				font-size:#{dpr 14}px;
				line-height:#{dpr 14}px;
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

		sectionHeader = new Layer
			name:"#{@options.sectionLabel}"
			parent:@
			x:@options.pageMargin
			backgroundColor:"transparent"
			html: "

			#{seperator}
			<div class='contentContainerOverallRatings'>
				<div class='secSTSectionHeader'>#{@options.sectionLabel}</div>
			</div>"

		sectionHeader.size = Utils.textSize(sectionHeader.html)

		ratingStars = new Ratings
			numStars:5
			starWidth: dpr 10
			starHeight: dpr 10
			backgroundColor:"transparent"
			starRating:@options.rating
			parent:@
			X:0
			x:@options.pageMargin
			y:sectionHeader.maxY + @options.pageMargin

		numRatings = new Layer
			y:ratingStars.y
			parent:@
			backgroundColor:"transparent"
			html:"<div class='totalRatings'>(#{@options.ratingCount} Bewertungen)</div>"

		numRatings.size = Utils.textSize(numRatings.html)

		numRatings.maxX = @.width - @options.pageMargin
		numRatings.midY = ratingStars.midY
		@.height = ratingStars.maxY + @options.pageMargin


	@define 'rating',
			get: ->
				@options.rating
			set: (value) ->
				@options.rating = value

	@define 'ratingCount',
			get: ->
				@options.ratingCount
			set: (value) ->
				@options.ratingCount = value

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
