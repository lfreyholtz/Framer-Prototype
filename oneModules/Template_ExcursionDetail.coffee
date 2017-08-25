{dpr} = require 'DevicePixelRatio'
npm = require 'npm'
moment = npm.moment

#submodules
{ExcursionCoverTile} = require 'ExcursionCoverTile'
{SectionMainArticle} = require 'SectionMainArticle'

{BlueButton} = require 'BlueButton'

{IconButton} = require 'IconButton'


class exports.Excursion extends Layer

	############################ CLASS excursionS    ############################

	Events.closeClicked = "Excursion.closeClicked"

	############################ CONSTRUCTOR    ############################
	constructor: (@options = {}) ->
		@options.excursion 										?= ""
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
					'>Excursion Detail Not Yet Available in Prototype</div>"
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
	@define 'excursion',
			get: ->
				if @options.excursion == ""
					console.error("No Excursion Defined")
				else
					@options.excursion
			set: (value) ->
				@options.excursion = value

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
