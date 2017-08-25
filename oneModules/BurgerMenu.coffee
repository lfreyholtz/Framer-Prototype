	############################ INCLUDES    ############################

{dpr} = require 'DevicePixelRatio'
{IconButton} = require 'IconButton'
class exports.BurgerMenu extends Layer

	############################ CLASS EVENTS    ############################
 # Events.EventName = "myModuleTitle.eventExternalName"
 # I'm not sure about the "eventExternalName part, but the above example defines a listenable event"

	Events.closeClicked = "BurgerMenu.closeClicked"
	Events.itemClicked = "BurgerMenu.itemClicked"
	Events.meineTermineClicked = "BurgerMenu.meineTermineClicked"
	Events.profileNavClicked = "BurgerMenu.profileNavClicked"
	Events.chatNavClicked = "BurgerMenu.chatNavClicked"

	############################ CONSTRUCTOR: ALL OPERATIONS THAT SHOULD RUN WHEN YOUR OBJECT IS CREATED ############################
	constructor: (@options = {}) ->

		# define your properties before calling 'super @options' at the top of the constructor
		@options.topics 											?= ""
		@options.name 												?= "burgerMenuContainer"
		@options.pageMargin										?= dpr 24
		@options.clickedItemData							?= ""


		super @options

		# if extending layer, set layer properties here
		@.backgroundColor = "#F3F3F3"
		@.name = @options.name
		@.propogateEvents = false


## /// THE CSS (SET INSIDE CONSTRUCTOR)##

# Define some variables for the CSS:
# we should give our colors meaningful names, like e.g. "blue500"

		defaultblue 	= "#3399CC"
		lightblue 		= "#8DCEE5"

    # menuItemPadding = dpr 24

# css inserted into this module.  be careful with naming - the css file is
# complied together into a master CSS; this means that there can be name conflicts.

		css = """



				.burgerLinkItem {
					font-family: FrutigerLTStd-Light, 'Open Sans', sans-serif;
					padding-top:#{dpr 15}px;
					padding-bottom:#{dpr 12}px;
					border-width: 1px 0 0 0;
					border-color: #aaa;
					letter-spacing:#{dpr 1}px;
					border-style: solid;
					background-color: #FFF;
					width:#{@.width}px;

			}

				.burgerLinkTitle {
					font-size: #{dpr 16}px;
					color: #{defaultblue};
					font-weight: 200;
					line-height: #{dpr 22}px;
					text-transform: uppercase;
					width: #{@.width - (@options.pageMargin * 2)}px;
					margin-left:#{@options.pageMargin}px;

				}
			"""
		Utils.insertCSS(css)
# ///

## CREATE LAYERS NEEDED FOR YOUR MODULE - NOTE: Be sure to parent these '@' where appropriate ##


		burgerScroller = new ScrollComponent
			size: Screen.size
			name: "burgerScroller"
			backgroundColor: "white"
			parent: @
			scrollHorizontal: false

		burgerScroller.content.draggable.overdrag = false



		closeButton = new IconButton
			icon:"closeBlue"
			name:"BurgerCloseButton"
			x:@options.pageMargin
			y:dpr 44
			parent:@

		closeButton.onClick =>
			@emit(Events.closeClicked, @)


## METHODS ##
# for organization sake, put all of your methods for the class here.  Note these sit OUTSIDE the constructor, which is also a class method.
# these are called from other places using @methodname - e.g. @createsomething(stuff)


#
##///

#
# A close button in a burger menu is different than a standard closer for a layer.
# TODO: E.g. if possible, it should to be in the same position as the icon that opened the menu,
# and there should be an animation to make sure the user gets where the close button is
# TODO: We should also have a Close Button module so we dont need to repeat this in every module




		# if the menu fits on a device screen then switch off all scroll in order to get rid of unnessesary overdragging
		checkIfScrollingIsNecessary: ->
			if Framer.Device.screen.height <= burgerScroller.content.maxY < device.frame.maxY
				burgerScroller.scrollVertical = false


		menuItemY = 0

		menuitemContainer = new Layer
			name:"MenuItemContainer"
			width:@.width
			parent:burgerScroller.content


		meineTermineItem = new Layer
			name: "meineTermine"
			parent:menuitemContainer
			width:@.width
			y:menuItemY
			color:defaultblue
			backgroundColor:"transparent"
			html:"<div class='burgerLinkItem'><div class='burgerLinkTitle'>Meine Termine</div></div>"

		meineTermineItem.height = Utils.textSize(meineTermineItem.html).height

		menuitemContainer.height = menuitemContainer.height + meineTermineItem.height
		menuItemY = menuItemY + meineTermineItem.height

		meineTermineItem.on Events.Click, () =>
			@emit(Events.meineTermineClicked)

		for item, value of @options.topics

			burgerLinkItem = new Layer
				name: value.title.replace(/\s+/g, '')
				parent:menuitemContainer
				width:@.width
				y:menuItemY
				color:defaultblue
				backgroundColor:"transparent"
				html:"<div class='burgerLinkItem'><div class='burgerLinkTitle'>#{value.title}</div></div>"

			burgerLinkItem.data = value

			burgerLinkItem.on Events.Click, (events, layer) =>
				# @options.clickedItemData = layer.data
				d = layer.data
				@emit(Events.itemClicked, d)



			burgerLinkItem.height = Utils.textSize(burgerLinkItem.html).height

			# createChevrons()
			menuItemY = menuItemY + burgerLinkItem.height
			menuitemContainer.height = burgerLinkItem.maxY

		chatNav = new Layer
			name: "chatNav"
			parent:menuitemContainer
			width:@.width
			y:menuItemY
			color:defaultblue
			backgroundColor:"transparent"
			html:"<div class='burgerLinkItem'><div class='burgerLinkTitle'>Chat</div></div>"

		chatNav.height = Utils.textSize(chatNav.html).height
		menuItemY = menuItemY + chatNav.height

		chatNav.on Events.Click, () =>
			@emit(Events.chatNavClicked)

		profileNav = new Layer
			name: "profileNav"
			parent:menuitemContainer
			width:@.width
			y:menuItemY
			color:defaultblue
			backgroundColor:"transparent"
			html:"<div class='burgerLinkItem'><div class='burgerLinkTitle'>Mein Profil</div></div>"

		profileNav.height = Utils.textSize(profileNav.html).height
		menuitemContainer.height = profileNav.maxY

		profileNav.on Events.Click, () =>
			@emit(Events.profileNavClicked)

		menuitemContainer.y = Align.center(dpr(30))
## /// GETTERS / SETTERS ##
 # for each property, a getter and setter must be defined.  These are properties that can be accessed and defined outside of the class.

	@define 'topics',
			get: ->
				if @options.topics ==""
					console.error("no topics were defined for the menu")
				else
					@options.topics
			set: (value) ->
				@options.topics = value

	@define 'name',
			get: ->
				@options.name
			set: (value) ->
				@options.name = value

	@define 'viewPadding',
			get: ->
				@options.pageMargin
			set: (value) ->
				@options.pageMargin = value

	@define 'clickedItemData',
			get: ->
				@options.clickedItemData
			set: (value) ->
				@options.clickedItemData = value
## ///
