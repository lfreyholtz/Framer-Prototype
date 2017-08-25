{dpr} = require 'DevicePixelRatio'


#submodules




class exports.MyDayView extends Layer

	############################ CLASS excursionS    ############################

	Events.closeClicked = "MyDayView.closeClicked"

	############################ CONSTRUCTOR    ############################
	constructor: (@options = {}) ->
		@options.segment 										?= ""
		@options.pageMargin								?= dpr 24
		@options.testDate									?= moment("05/03/2017 8:30")

		super @options


		@.backgroundColor = "#FB8E7E"
		@.style =
			"background-image": "url('modules/moduleImages/interface/img_underConstruction.png')"
			"background-repeat":"no-repeat"
			"background-position": "center"
			"background-size" : "#{dpr 90}px #{dpr 90}px"


#




## /// THE CSS ##




		css = """






			"""
		Utils.insertCSS(css)

# /// METHODS


## /// GETTERS / SETTERS ##
	@define 'segment',
			get: ->
				if @options.location == ""
					console.error("No segment defined")
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
