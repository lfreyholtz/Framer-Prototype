
{dpr} = require 'DevicePixelRatio'

class exports.Button extends TextLayer


	constructor: (@options = {}) ->

		@options.type 										?= 		"blue"
		@options.buttonText 							?=		"This is a button"
		@options.pageMargin 							?= 			dpr 24
		@options.fullWidth								?= 		false
		@options.outlineStyle							?=		false
		super @options


		@.font = 	"500 #{dpr 16}px/#{dpr 16}px FrutigerLTStd-Roman, -apple-system"
		@.letterSpacing = dpr(1)
		@.textTransform = "uppercase"

		@.textAlign = 'center'
		@.borderRadius = dpr 3
		@.height = @setHeights().height
		@.width = @setWidth()
		@.padding =
			top:@setHeights().topPadding
			bottom:@setHeights().bottomPadding
			left:dpr 16
			right:dpr 16
		@.x = Align.center()
		# @.borderRadius = @setBorderOffset()

		console.log("heightObjects", @setHeights())




		style = switch
			when @options.type == "blue"
				@.backgroundColor = "#3399CC"
				@.style = "color":"white"

			when @options.type == "white"
				@.backgroundColor = "white"
				@.style = "color":"#3399CC"


			when @options.type == "outlineBlue"
				@.backgroundColor = "white"
				@.style = "color":"#3399CC"
				@.borderColor = "#3399CC"
				@.borderWidth = dpr 1


			when @options.type == "outlineGrey"
				@.backgroundColor = "Transparent"
				@.style = "color":"#555555"
				@.borderColor = "#555555"
				@.borderWidth = dpr 1

			when @options.type == "outlineWhite"
				@.backgroundColor = "Transparent"
				@.style = "color":"white"
				@.borderColor = "white"
				@.borderWidth = dpr 1

			else
				console.error("unsupported button style - use blue, fullblue, outlineBlue, or outlineGrey")
				@.backgroundColor = "#3399CC"
				@.style = "color":"white"

	setWidth: ->
		if @options.fullWidth
			return Screen.width
		else
			return Screen.width - (@options.pageMargin * 2)

	setBorderOffset: ->
		if @options.type == "outlineBlue" or @options.type == "outlineGrey"
			return dpr 1
		else
			return 0

	setWidth: ->
		if @options.fullWidth
			return Screen.width
		else
			return Screen.width - (@options.pageMargin * 2)

	setHeights: ->
		if @options.fullWidth
			return {
				topPadding: dpr 21 - @setBorderOffset()
				bottomPadding: dpr 20
				height: dpr 54
				}
		else
				return {
					topPadding: dpr 18 - @setBorderOffset()
					bottomPadding: dpr 14
					height: dpr 48
					}


	@define 'type',
			get: ->
				@options.type
			set: (value) ->
				@options.type = value

	#
	@define 'fullWidth',
			get: ->
				@options.fullWidth
			set: (value) ->
				@options.fullWidth = value

	@define 'outlineStyle',
			get: ->
				@options.outlineStyle
			set: (value) ->
				@options.outlineStyle = value

	@define 'pageMargin',
			get: ->
				@options.pageMargin
			set: (value) ->
				@options.pageMargin = value
