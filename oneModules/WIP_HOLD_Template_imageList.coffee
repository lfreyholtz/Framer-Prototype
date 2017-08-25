# {dpr} = require 'DevicePixelRatio'
# npm = require 'npm'
# moment = npm.moment
#
# #submodules
# {VenueCoverTile} = require "CoverTile_Venue"
#
#
#
# {IconButton} = require 'IconButton'
#
#
# class exports.ImageList extends Layer
#
# 	############################ CLASS excursionS    ############################
#
# 	Events.closeClicked = "ImageList.closeClicked"
#
# 	############################ CONSTRUCTOR    ############################
# 	constructor: (@options = {}) ->
# 		@options.list 										?= ""
# 		@options.pageMargin								?= dpr 24
# 		@options.testDate									?= moment("05/03/2017 8:30")
# 		@options.listType									?= "venue"
#
#
# 		@options.compactHeight						?= dpr 100
# 		@options.featureHeight						?= dpr 300
# 		@options.scrollDist								?= dpr 180 # arbitrary; determines distance to scroll to change images
#
# 		super @options
# 		console.group('Image List')
# 		console.log("List into ImageList: ", @options.list)
#
# 		@.backgroundColor = "#FB8E7E"
# 		@.html ="<div style=
# 					'margin-top:#{(@.height / 2) + dpr 80}px;
# 					margin-bottom:auto;
# 					width:#{@.width}px;
# 					text-align:center;
# 					line-height:1.2;
# 					'>Image List Not Yet Available in Prototype</div>"
# 		@.style =
# 			"background-image": "url('modules/moduleImages/interface/img_underConstruction.png')"
# 			"background-repeat":"no-repeat"
# 			"background-position": "center"
# 			"background-size" : "#{dpr 90}px #{dpr 90}px"
#
#
#
#
# ##### STARTER VARIABLES #####
# 		numItems = @options.list.length
# 		featureHeight = @options.featureHeight
# 		compactHeight = @options.compactHeight
# 		scrollDist = @options.scrollDist
# 		cards = []
#
# 		console.log("number of items:", numItems)
#
# 				## close button ##
# 		closeButton = new IconButton
# 			icon:"close"
# 			name:"close"
#
# 			x:@options.pageMargin
# 			y:dpr 44
# 			parent:@
#
# 		closeButton.onClick =>
# 			@emit(Events.closeClicked, @)
#
# 	# listType = switch
# 	# 	when @options.listType == "venue" then "<div class= 'close'></div>"
# 	# 	when @options.icon == "closeBlue" then "<div class='closeBlue'></div>"
# 	# 	when @options.icon == "back" then "<div class='back'></div>"
# 	# 	when @options.icon == "burger" then "<div class='burger'></div>"
# 	# 	when @options.icon == "weather" then "<div class='weather'></div>"
# 	# 	else "<div class='placeholder'></div>"
#
# ############################ LAYER STRUCTURE ########################################
#
# 			# pages.onMove =>
# 			#
# 			# 	cardMaster.y = pages.content.y
# 				# scrollSpeed = compactHeight / scrollDist
# 				# cardMaster.y = pages.content.y * scrollSpeed
#
#
#
#
#
# ### SCROLLING BEHAVIOR WIP
# 				# currentCellIndex = pages.scrollY / scrollDist
# 				#
# 				# topFeatureIndex = Math.max(Math.floor(currentCellIndex),0)
# 				#
# 				# indexPercent = (currentCellIndex % 1).toFixed(2)
# 				# # print "currentCellIndex: #{currentCellIndex}"
# 				# # print "topFeatureIndex: #{topFeatureIndex}"
# 				# # print "percent travelled: #{indexPercent}"
# 				#
# 				# compactToFeature = Utils.modulate(indexPercent, [0,1], [compactHeight,featureHeight], true)
# 				#
# 				# amountToGrow = Math.max((featureHeight - compactHeight) *indexPercent, 0);
# 				# newHeight = compactHeight + amountToGrow;
# 				#
# 				#
# 				# for card, i in cards
# 				# 	if i == topFeatureIndex
# 				# 		card.height = Utils.modulate(indexPercent, [0,1], [featureHeight, compactHeight], true)
# 				# 		card.y = Utils.modulate(indexPercent, [0,1], [0, -compactHeight])
# 				# 		lastY = -compactHeight
# 				# 		lastHeight = compactHeight
# 				#
# 				# 	if i == (topFeatureIndex + 1) && i < numItems
# 				# 		card.height = Utils.modulate(indexPercent, [0,1], [compactHeight, featureHeight], true)
# 				# 		card.y = Utils.modulate(indexPercent, [0,1], [featureHeight, 0], true)
# 				#
# 				#
# 				# 	else
# 				# 		originalY = card.startingY
# 				# 		offestFromTop = card.startingY - pages.scrollY
# 				# 		indexBased = (topFeatureIndex * compactHeight) + featureHeight
# 				# 		print "originalY: #{card.startingY}"
# 				# 		print "pages scrollY:  #{pages.scrollY}"
# 				# 		print "offsetFromTop: #{offestFromTop}"
# 				# 		print "indexBased: #{indexBased}"
#
#
# 				###
#
#
#
#
#
#
#
# ## /// GETTERS / SETTERS ##
# 	@define 'list',
# 			get: ->
# 				if @options.list == ""
# 					console.error("No list defined for image templat")
# 				else
# 					@options.list
# 			set: (value) ->
# 				@options.list = value
#
# 	@define 'pageMargin',
# 			get: ->
# 				@options.pageMargin
# 			set: (value) ->
# 				@options.pageMargin = value
#
# 	@define 'testDate',
# 			get: ->
# 				@options.testDate
# 			set: (value) ->
# 				@options.testDate = value
#
# 	@define 'compactHeight',
# 			get: ->
# 				@options.compactHeight
# 			set: (value) ->
# 				@options.compactHeight = value
#
# 	@define 'featureHeight',
# 			get: ->
# 				@options.featureHeight
# 			set: (value) ->
# 				@options.featureHeight = value
#
# 	@define 'scrollDist',
# 			get: ->
# 				@options.scrollDist
# 			set: (value) ->
# 				@options.scrollDist = value
#
# 	@define 'listType',
# 			get: ->
# 				@options.listType
# 			set: (value) ->
# 				@options.listType = value
