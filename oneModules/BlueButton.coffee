
{dpr} = require 'DevicePixelRatio'

class exports.BlueButton extends Layer


	constructor: (@options = {}) ->

		@options.outlineStyle 						?= 		false
		@options.buttonText 							?=		"This is a button"
		@options.pageMargin 							?= 			dpr 24
		@options.fullWidth								?= 		false
		super @options


		# under construction elements
		@.backgroundColor = "transparent"

		if !@options.outlineStyle
			buttonClass = "<div class='blue'>#{@options.buttonText}</div>"
		else
			buttonClass = "<div class='outline'>#{@options.buttonText}</div>"

		if @options.fullWidth
			buttonWidth = @.width
		else
			buttonWidth = @.width - (@options.pageMargin * 2)

		css = """
			.buttonContainer {
				font-family: FrutigerLTStd-Roman, 'Open Sans', sans-serif, 'Open Sans', sans-serif;
				font-size:#{dpr 16}px;
				line-height:#{dpr 16}px;
				font-weight:400;
				text-transform: uppercase;
			}

			.blue {
				width: #{buttonWidth}px;
				background-color: #3399cc;
				padding-top:#{dpr 22}px;
				padding-bottom: #{dpr 20}px;
				text-align:center;
				border-radius:#{dpr 3}px;
			}

			.outline {
				width: #{buttonWidth}px;
				margin-left:#{@options.pageMargin}px;
				border: #{dpr 1}px solid #3399cc;
				border-radius: #{dpr 2}px;
				background-color: #FFFFFF;
				color:#3399cc;
				padding-top:#{dpr 17}px;
				padding-bottom: #{dpr 15}px;
				text-align:center;
				border-radius:#{dpr 3}px;
			}
			"""

		Utils.insertCSS(css)

		@.html = "
			<div class='buttonContainer'>
			#{buttonClass}
			</div>
			"
		@.size = Utils.textSize @.html



	@define 'outlineStyle',
			get: ->
				@options.outlineStyle
			set: (value) ->
				@options.outlineStyle = value


	@define 'buttonText',
			get: ->
				@options.buttonText
			set: (value) ->
				@options.buttonText = value


	@define 'fullWidth',
			get: ->
				@options.fullWidth
			set: (value) ->
				@options.fullWidth = value


	@define 'pageMargin',
			get: ->
				@options.pageMargin
			set: (value) ->
				@options.pageMargin = value
