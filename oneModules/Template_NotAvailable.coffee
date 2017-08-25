{dpr} = require 'DevicePixelRatio'
npm = require 'npm'
moment = npm.moment

#submodules
{EventCoverTile} = require 'EventCoverTile'
{SectionMainArticle} = require 'SectionMainArticle'

{BlueButton} = require 'BlueButton'

{IconButton} = require 'IconButton'


class exports.placeholder extends Layer

	############################ CLASS EVENTS    ############################

	Events.closeClicked = "placeholder.closeClicked"
	Events.backClicked = "placeholder.backClicked"
	############################ CONSTRUCTOR    ############################
	constructor: (@options = {}) ->
		@options.pageMargin								?= dpr 24
		@options.featureName							?= "This feature"

		super @options


		@.backgroundColor = "#FB8E7E"
		@.style =
			"background-image": "url('modules/moduleImages/interface/img_underConstruction.png')"
			"background-repeat":"no-repeat"
			"background-position": "center #{dpr 100}px"
			"background-size" : "#{dpr 90}px #{dpr 90}px"


## /// THE CSS ##




		css = """

			.message {
				font-family:font-family: FrutigerLTStd-Bold, 'Open Sans', sans-serif;
				font-size:#{dpr 20}px;
				text-align:center;
				line-height:2;
				width:#{ Screen.width  - (@options.pageMargin * 4) }px;

			}

			.button {
				font-family:font-family: FrutigerLTStd-Bold, 'Open Sans', sans-serif;
				font-size:#{dpr 24}px;
				font-weight:600;
				text-align:center;
				line-height:1;
				color:#FB8E7E;
				padding:#{dpr 20}px;
			}


			"""
		Utils.insertCSS(css)


		messageText = new Layer
			html:"<div class='message'>#{@options.featureName} is not yet available in prototype</div>"
			parent:@

			backgroundColor:"transparent"

		messageText.size = Utils.textSize(messageText.html)
		messageText.x = Align.center()
		messageText.y = Align.center(-messageText.height)

		closeButton = new IconButton
			icon: "close"
			name: "backButton"
			x: @options.pageMargin
			y:dpr 44
			parent: @

		closeButton.onClick =>
			@emit(Events.closeClicked, @)




		backButton = new Layer
			backgroundColor: "white"
			html:"<div class='button'>Back to previous screen</div>"
			parent:@
			borderRadius: dpr(8)


		backButton.size = Utils.textSize(backButton.html)
		backButton.x = Align.center()
		backButton.y = Align.center(messageText.height)


		backButton.onClick =>
			@emit(Events.backClicked, @)
#






# /// METHODS


## /// GETTERS / SETTERS ##
	@define 'featureName',
			get: ->
				@options.featureName
			set: (value) ->
				@options.featureName = value


	@define 'pageMargin',
			get: ->
				@options.pageMargin
			set: (value) ->
				@options.pageMargin = value
