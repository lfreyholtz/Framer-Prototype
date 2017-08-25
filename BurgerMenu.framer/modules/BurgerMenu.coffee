	############################ INCLUDES    ############################

{dpr} = require 'DevicePixelRatio'

class exports.BurgerMenu extends Layer

	############################ CLASS EVENTS    ############################
 # Events.EventName = "myModuleTitle.eventExternalName"
 # I'm not sure about the "eventExternalName part, but the above example defines a listenable event"


	############################ CONSTRUCTOR: ALL OPERATIONS THAT SHOULD RUN WHEN YOUR OBJECT IS CREATED ############################
	constructor: (@options = {}) ->

		# define your properties before calling 'super @options' at the top of the constructor
		@options.basicData 		?= "please define the data as coffee file"
		@options.name 					?= "burgerMenuContainer"

		super @options

		# if extending layer, set layer properties here
		@.backgroundColor = "pink"
		@.name = @options.name

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
					font-family:FrutigerLTStd-Light;
					font-weight: 200;
					width: #{@.width - (2 * dpr 24)}px;
					padding: #{dpr 26}px #{dpr 24}px #{dpr 20}px;
					border-bottom: solid 1px #CDCDCD;
					# border-top: solid 1px #CDCDCD;
					font-size: #{dpr 18}px;
					color: defaultblue;
					background-color: white;
					text-transform: uppercase;
				}

				.chevronIcon {
					background-image: url('./images/interface/icn_carat.svg');
					background-repeat:no-repeat;
					background-position:center;
					background-size: 100%;
					# background-color:purple;
					width: #{dpr 6}px;
					height: #{dpr 11}px;
				}

				.closeButton {
					background-image: url('./images/interface/icn_close.svg');
					background-repeat:no-repeat;
					background-position:center;
					background-size:100%;
					//background-color:purple;
					width: #{dpr 30}px;
					height: #{dpr 30}px;
				}

			"""
		Utils.insertCSS(css)
# ///

## CREATE LAYERS NEEDED FOR YOUR MODULE - NOTE: Be sure to parent these '@' where appropriate ##


		burgerScroller = new ScrollComponent
			size: Screen.size
			name: "burgerScroller"
			backgroundColor: "#white"
			parent: @
			scrollHorizontal: false

		burgerScroller.content.draggable.overdrag = false


		burgerPinkBox = new Layer
			width: Screen.width
			height: dpr 160
			backgroundColor: "pink"
			parent: burgerScroller.content
			name: "burgerPinkBox"


## METHODS ##
# for organization sake, put all of your methods for the class here.  Note these sit OUTSIDE the constructor, which is also a class method.
# these are called from other places using @methodname - e.g. @createsomething(stuff)


## /// CREATE CHEVRONS ##
#
# In order to make this re-usable, we need to define the name of the
# chevron's parent layer (which is the link item)
# TODO: make the link item name a required property when creating the burger menu
# UPDATE: we dont have chevrons in the menu :)

		createChevrons = ->
			chevronContainer = new Layer
				name: "chevronContainer"
				backgroundColor: "transparent"
				# backgroundColor: "blue"
				parent: burgerLinkItem
				height: burgerLinkItem.height
				width: dpr 6
				maxX: burgerLinkItem.maxX - (dpr 24)

			chevronIcon = new Layer
				name:"chevronIcon"
				backgroundColor: "transparent"
				parent: chevronContainer
				html:"<div class='chevronIcon'></div>"

			chevronIcon.size = Utils.textSize(chevronIcon.html)
			chevronIcon.y = Align.center()
			chevronIcon.x = Align.center()
##///

## /// THE CLOSE BUTTON ##
#
# A close button in a burger menu is different than a standard closer for a layer.
# TODO: E.g. if possible, it should to be in the same position as the icon that opened the menu,
# and there should be an animation to make sure the user gets where the close button is
# TODO: We should also have a Close Button module so we dont need to repeat this in every module

		menuCloseButton = new Layer
			width: dpr 60
			height: dpr 60
			backgroundColor:"rgba(0,0,0,0.02)"
			# backgroundColor:"transparent"
			x: dpr 5
			y: dpr 20
			name:"menuCloseButton"
			parent:@
			borderRadius: @.width/2
			# shadowX: 0
			# shadowY: 2
			# shadowBlur: 5
			# shadowColor: "rgba(0,0,0,0.2)"

		closeIcon = new Layer
			name:"close_icon"
			backgroundColor: "transparent"
			parent: menuCloseButton
			html:"<div class='closeButton'></div>"

		closeIcon.size = Utils.textSize(closeIcon.html)
		closeIcon.y = Align.center()
		closeIcon.x = Align.center()

		# just a test to see if the closeButton has been disabled
		menuCloseButton.onClick ->
			print "Menu Close button pressed!"
# ///


		# if the menu fits on a device screen then switch off all scroll in order to get rid of unnessesary overdragging
		checkIfScrollingIsNecessary: ->
			if Framer.Device.screen.height <= burgerScroller.content.maxY < device.frame.maxY
				burgerScroller.scrollVertical = false

		listOfMenuItems = ["Mein Profil / Einstellungen", "Essen, Trinken, Nightlife", "Veranstaltungen", "Ausflüge", "Shopping", "Meine Termine", "Chat"]

		menuItemY = burgerPinkBox.height

		# for myBurgerItem in @options.burgerData
		for myBurgerItem in listOfMenuItems

			menuItemHTML = "
				<div class='burgerLinkItem'>#{myBurgerItem}</div>
				"
			burgerLinkItem = new Layer
				name: myBurgerItem
				html: menuItemHTML
				parent: burgerScroller.content
				width: Screen.width
				y: menuItemY
				color: defaultblue
				backgroundColor: "transparent"

			print "burgerLinkItem.height is:" + Utils.textSize(burgerLinkItem.html).height

			burgerLinkItem.height = Utils.textSize(burgerLinkItem.html).height

			createChevrons()
			menuItemY = menuItemY + burgerLinkItem.height


		print "Framer.Device.screen.height is " + Framer.Device.screen.height
		print "burgerScroller.content.maxY is " + burgerScroller.content.maxY

## /// GETTERS / SETTERS ##
 # for each property, a getter and setter must be defined.  These are properties that can be accessed and defined outside of the class.

	@define 'burgerData',
			get: ->
				@options.burgerData
			set: (value) ->
				@options.burgerData = value

	@define 'name',
			get: ->
				@options.name
			set: (value) ->
				@options.name = value

## ///
