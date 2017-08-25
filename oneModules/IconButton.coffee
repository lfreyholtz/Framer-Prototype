
{dpr} = require 'DevicePixelRatio'

class exports.IconButton extends Layer


	constructor: (@options = {}) ->

		@options.icon 										?= 		"close"

		super @options


		# under construction elements
		@.backgroundColor = "transparent"





		css = """
				.placeholder {
						width:#{dpr 40}px;
						height:#{dpr 40}px;
						background-image:url('modules/moduleImages/interface/img_underConstruction.png');
						background-repeat:no-repeat;
						background-position:center;
						background-size:60%;
				}
				.close {
						width:#{dpr 25}px;
						height:#{dpr 25}px;
						background-image:url('modules/moduleImages/interface/icn_white_close.svg');
						background-repeat:no-repeat;
						background-position:center;
						background-size:100%;
				}
				.closeBlue {
						width:#{dpr 24}px;
						height:#{dpr 24}px;
						background-image:url('modules/moduleImages/interface/icn_blue_close.svg');
						background-repeat:no-repeat;
						background-position:center;
						background-size:100%;
				}

				.back {
						width:#{dpr 20}px;
						height:#{dpr 40}px;
						background-image:url('modules/moduleImages/interface/icn_backarrow.png');
						background-repeat:no-repeat;
						background-position:center;
						background-size:70%;
				}
				.burger {
						width:#{dpr 30}px;
						height:#{dpr 20}px;
						background-image:url('modules/moduleImages/interface/icn_hamburger_menu.svg');
						background-repeat:no-repeat;
						background-position:center;
						background-size:100%;
				}
				.weather {
						width:#{dpr 75}px;
						height:#{dpr 58}px;
						background-image:url('modules/moduleImages/interface/placeholder_weather.png');
						background-repeat:no-repeat;
						background-position:center;
						background-size:100%;
				}

			}
			"""

		Utils.insertCSS(css)

		icon = switch
			when @options.icon == "close" then "<div class= 'close'></div>"
			when @options.icon == "closeBlue" then "<div class='closeBlue'></div>"
			when @options.icon == "back" then "<div class='back'></div>"
			when @options.icon == "burger" then "<div class='burger'></div>"
			when @options.icon == "weather" then "<div class='weather'></div>"
			else "<div class='placeholder'></div>"
			# when @options.icon == "filter" then "filter"
			# when @options.icon == "favorite" then "favorite"

		@.html = "
			#{icon}
			"
		@.size = Utils.textSize @.html




	@define 'icon',
			get: ->
				@options.icon
			set: (value) ->
				@options.icon = value
