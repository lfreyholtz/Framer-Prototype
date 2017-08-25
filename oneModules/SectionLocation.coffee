

{dpr} = require 'DevicePixelRatio'



class exports.SectionLocation extends Layer

	constructor: (@options = {}) ->

		@options.pageMargin						?= dpr 24

		super @options


		@.backgroundColor = "#FB8E7E"

		@.style =
			"background-image": "url('modules/moduleImages/interface/img_underConstruction.png')"
			"background-repeat":"no-repeat"
			"background-position": "center"
			"background-size" : "#{dpr 40}px #{dpr 40}px"


		@.width = @.width - (@options.pageMargin *2)
		@.x = @options.pageMargin


		css = """


			"""

		Utils.insertCSS(css)



	@define 'pageMargin',
			get: ->
				@options.pageMargin
			set: (value) ->
				@options.pageMargin = value
