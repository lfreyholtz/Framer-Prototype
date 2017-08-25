{dpr} = require 'DevicePixelRatio'
npm = require 'npm'
moment = npm.moment

#submodules
{VenueCoverTile} = require "CoverTile_Venue"



{IconButton} = require 'IconButton'


class exports.ImageList extends Layer

	############################ CLASS excursionS    ############################

	Events.closeClicked = "ImageList.closeClicked"
	Events.listItemClicked = "ImageList.listItemClicked"

	############################ CONSTRUCTOR    ############################
	constructor: (@options = {}) ->
		@options.list 										?= ""
		@options.pageMargin								?= dpr 24
		@options.testDate									?= moment("05/03/2017 8:30")
		@options.listType									?= "venue"


		@options.compactHeight						?= dpr 100
		@options.featureHeight						?= dpr 300
		@options.scrollDist								?= dpr 180 # arbitrary; determines distance to scroll to change images

		super @options
		console.group('Image List')
		console.log("List into ImageList: ", @options.list)

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




##### STARTER VARIABLES #####
		numItems = @options.list.length
		cards = []




		console.log("number of items:", numItems)



		listTemplateScrollView = new ScrollComponent
			name:"imageListScrollView"
			size:@.size
			scrollHorizontal:false
			backgroundColor:"transparent"
			parent:@


		@generateList(@options.listType, @options.list, listTemplateScrollView)



		navigationTint = new Layer
			width:@.width
			height:dpr 100
			x:0
			y:0
			backgroundColor:"pink"
			parent:@

		navigationTint.style.background =
			"linear-gradient(rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.3) 60%, rgba(0,0,0,0) 100%)"


		## close button ##
		closeButton = new IconButton
			icon:"back"
			name:"back"

			x:dpr 8
			y:dpr 44
			parent:@

		closeButton.onClick =>
			@emit(Events.closeClicked, @)

		# gradient layer intended to make the navigation more visible when the scroll is stationary

		listTemplateScrollView.on Events.ScrollStart, () =>
			closeButton.animate
				opacity:0
				options:
						time:0.3

			navigationTint.animate
				opacity:0
				options:
						time:0.3

		listTemplateScrollView.on Events.Move, () =>
			closeButton.opacity = 0
			# navigationTint.opacity = 0

		listTemplateScrollView.on Events.ScrollAnimationDidEnd, () =>
			closeButton.animate
				opacity:1
				options:
						time:0.2

			navigationTint.animate
				opacity:1
				options:
						time:0.4



############################ LAYER STRUCTURE ########################################



		console.groupEnd()


	generateList: (type, list, scrollview) ->
		if @options.list.length > 0
			console.log("generate list of type:", type)
			console.log("from this list:", list)


			type = switch

				when type == "venue"

					for venue,i in list
						listItem = @createVenue(venue)
						listItem.y = i * listItem.height
						listItem.parent = scrollview.content
						listItem.data = venue
						listItem.index = i

						listItem.on Events.Click, (event, layer) =>
							item = layer.data
							type = "venue"
							@emit(Events.listItemClicked, item, type)

				else console.error("list item type not supported")



	createVenue: (venue) ->

		venueCard = new VenueCoverTile
			name:"#{venue.name}_card"
			venue:venue
			width:Screen.width
			testDate:@options.testDate
			height:dpr 300

		return venueCard

## /// GETTERS / SETTERS ##
	@define 'list',
			get: ->
				if @options.list == ""
					console.error("No list defined for image template")
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

	@define 'compactHeight',
			get: ->
				@options.compactHeight
			set: (value) ->
				@options.compactHeight = value

	@define 'featureHeight',
			get: ->
				@options.featureHeight
			set: (value) ->
				@options.featureHeight = value

	@define 'scrollDist',
			get: ->
				@options.scrollDist
			set: (value) ->
				@options.scrollDist = value

	@define 'listType',
			get: ->
				@options.listType
			set: (value) ->
				@options.listType = value
