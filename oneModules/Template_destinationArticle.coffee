{dpr} = require 'DevicePixelRatio'
npm = require 'npm'
moment = npm.moment

#submodules


{BlueButton} = require 'BlueButton'

{IconButton} = require 'IconButton'


class exports.DestArticle extends Layer

	############################ CLASS excursionS    ############################

	Events.closeClicked = "DestArticle.closeClicked"

	############################ CONSTRUCTOR    ############################
	constructor: (@options = {}) ->
		@options.list 										?= ""
		@options.pageMargin								?= dpr 24
		@options.testDate									?= moment("05/03/2017 8:30")

		super @options


		@.backgroundColor = "#FB8E7E"
		@.html ="<div style=
					'margin-top:#{(@.height / 2) + dpr 80}px;
					margin-bottom:auto;
					width:#{@.width}px;
					text-align:center;
					line-height:1.2;
					'>Image List Not Yet Available in Prototype</div>"
		@.style =
			"background-image": "url('modules/moduleImages/interface/img_underConstruction.png')"
			"background-repeat":"no-repeat"
			"background-position": "center"
			"background-size" : "#{dpr 90}px #{dpr 90}px"




		closeButton = new IconButton
			icon:"close"
			name:"close"

			x:0
			y:0
			parent:@

		closeButton.onClick =>
			@emit(Events.closeClicked, @)

#




## /// THE CSS ##




		css = """






			"""
		Utils.insertCSS(css)

# /// METHODS


## /// GETTERS / SETTERS ##
	@define 'location',
			get: ->
				if @options.location == ""
					console.error("No location for destination article defined")
				else
					@options.list
			set: (value) ->
				@options.list = value

	@define 'pageMargin',
			get: ->
				@options.pageMargin
			set: (value) ->
				@options.pageMargin = value

	@define 'testDate',
			get: ->
				@options.testDate
			set: (value) ->
				@options.testDate = value
