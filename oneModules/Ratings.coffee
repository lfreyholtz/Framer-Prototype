{SVGLayer} = require 'SVGLayer'
{dpr} = require 'DevicePixelRatio'

class exports.Ratings extends Layer

	constructor: (@options = {}) ->

		@options.numStars				?=	10
		@options.starRating			?=	3
		@options.starHeight			?=	dpr 30
		@options.starWidth			?=	dpr 30
		@options.starGap				?=	dpr 10

		super @options
		@setRatings()


		@.backgroundColor = "transparent"
		@.height = @options.starHeight

		css = """
				.filled {
						width:#{@options.starWidth}px;
						height:#{@options.starHeight}px;
						background-image:url('modules/moduleImages/interface/rating_star_filled.png');
						background-repeat:no-repeat;
						background-position:center;
						background-size:100%;
				}
				.open {
						width:#{@options.starWidth}px;
						height:#{@options.starHeight}px;
						background-image:url('modules/moduleImages/interface/rating_star_open.png');
						background-repeat:no-repeat;
						background-position:center;
						background-size:100%;
				}
			"""

		Utils.insertCSS(css)

	setRatings: ->



		for i in [0...@options.numStars]

			star = new Layer
				name: "star_#{i}"
				width:@options.starWidth
				backgroundColor:"transparent"
				height:@options.starHeight
				parent:@

			if i < @options.starRating
				# use filled in star
				star.html = "<div class='filled'></div>"
			else
				# use grey star
				star.html = "<div class='open'></div>"
			star.x = i *(star.width + @options.starGap)
			@.width = star.maxX

	@define 'numStars',
		get: ->
			@options.numStars
		set: (value) ->
			@options.numStars = value

	@define 'starRating',
		get: ->
			@options.starRating
		set: (value) ->
			@options.starRating = value

	@define 'starHeight',
		get: ->
			@options.starHeight
		set: (value) ->
			@options.starHeight = value

	@define 'starWidth',
		get: ->
			@options.starWidth
		set: (value) ->
			@options.starWidth = value

	@define 'starGap',
		get: ->
			@options.starGap
		set: (value) ->
			@options.starGap = value
