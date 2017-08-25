{dpr} = require 'DevicePixelRatio'



class exports.BaseSection extends Layer

	constructor: (@options = {}) ->

		@options.sectionTitle 						?= "Default title"
		@options.pageMargin								?= dpr 24
		@options.hasStroke										?= false


		super @options

		@.width = Screen.width
		@.backgroundColor = "white"
		title = new TextLayer

			font: "500 #{dpr 16}px/#{dpr 16}px FrutigerLTStd-Light, -apple-system"
			letterSpacing:dpr 1
			style:"color":"#555555"
			text:@options.sectionTitle
			width:Screen.width - (@options.pageMargin * 2)
			textTransform:"uppercase"
			y:@options.pageMargin
			
		title.x = Align.center()

# /* Popular Times: */
# font-family: FrutigerLTStd-Light;
# font-size: 16px;
# color: #555555;
# letter-spacing: 1px;
# line-height: 12px;


	@define 'testDate',
			get: ->
				@options.testDate
			set: (value) ->
				@options.testDate = value
