
{dpr} = require 'DevicePixelRatio'

class exports.EventCoverTile extends Layer


		constructor: (@options = {}) ->

			super @options


			# under construction elements

			@.backgroundColor = "#FB8E7E"
			@.style =
				"background-image": "url('modules/moduleImages/interface/img_underConstruction.png')"
				"background-repeat":"no-repeat"
				"background-position": "center"
				"background-size" : "#{dpr 90}px #{dpr 90}px"


			css = """


				"""

			Utils.insertCSS(css)



	# @define 'hasPromotion',
	# 	get: ->
	# 		@options.hasPromotion
	# 	set: (value) ->
	# 		@options.hasPromotion = value
