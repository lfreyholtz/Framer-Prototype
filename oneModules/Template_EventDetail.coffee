{dpr} = require 'DevicePixelRatio'
npm = require 'npm'
moment = npm.moment

#submodules
{EventCoverTile} = require 'EventCoverTile'
{SectionMainArticle} = require 'SectionMainArticle'

{BlueButton} = require 'BlueButton'

{IconButton} = require 'IconButton'


class exports.Event extends Layer

	############################ CLASS EVENTS    ############################

	Events.closeClicked = "Event.closeClicked"

	############################ CONSTRUCTOR    ############################
	constructor: (@options = {}) ->
		@options.event 										?= ""
		@options.pageMargin								?= dpr 24
		@options.bookable									?=	true
		@options.testDate									?= moment("05/03/2017 8:30")

		super @options


		@.backgroundColor = "#FB8E7E"
		@.html ="<div style=
					'margin-top:#{(@.height / 2) + dpr 80}px;
					margin-bottom:auto;
					width:#{@.width}px;
					text-align:center;
					line-height:1.2;
					'>Event Detail Not Yet Available in Prototype</div>"
		@.style =
			"background-image": "url('modules/moduleImages/interface/img_underConstruction.png')"
			"background-repeat":"no-repeat"
			"background-position": "center"
			"background-size" : "#{dpr 90}px #{dpr 90}px"




		closeButton = new IconButton
			icon:"back"
			name:"backButton"

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
	@define 'event',
			get: ->
				if @options.event == ""
					console.error("No Event Defined")
				else
					@options.event
			set: (value) ->
				@options.event = value

	@define 'pageMargin',
			get: ->
				@options.pageMargin
			set: (value) ->
				@options.pageMargin = value

	@define 'bookable',
			get: ->
				@options.bookable
			set: (value) ->
				@options.bookable = value

	@define 'testDate',
			get: ->
				@options.testDate
			set: (value) ->
				@options.testDate = value
