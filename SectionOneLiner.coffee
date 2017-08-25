	############################ INCLUDES    ############################

{dpr} = require 'DevicePixelRatio'
{data_eatdrinknightlife} = require 'data_eatdrinknightlife'

class exports.SectionOneLiner extends Layer

# The prefix for this module is secEx


	############################ CLASS EVENTS    ############################
 # Events.EventName = "myModuleTitle.eventExternalName"
 # I'm not sure about the "eventExternalName part, but the above example defines a listenable event"


	############################ CONSTRUCTOR: ALL OPERATIONS THAT SHOULD RUN WHEN YOUR OBJECT IS CREATED ############################
	constructor: (@options = {}) ->

		# define your properties before calling 'super @options' at the top of the constructor
		@options.secOneLinerVenue								?= data_eatdrinknightlife.brauhaus
		@options.sectionOneLinerContent					?= "minimumAge"
		@options.name 											?= "sectionOneLinerXX"
		@options.parent 										?= "detailPage"

		@options.pageMargin 							?= dpr 24
		@options.bgColor 									?= "yellow"
		@options.width 										?= Screen.width - (2* ( dpr 24))
		# @options.width 										?= Screen.width - (2* @options.pageMargin)

		# if extending layer, set layer properties here
		super @options

		@.backgroundColor = @options.bgColor
		@.name = @options.name
		@.width = @options.width
		@.parent = @options.parent
		@.x = @options.pageMargin

		oneLinerSwitch = @options.sectionOneLinerContent

		myOneLinerVenue = @options.secOneLinerVenue
		myOneLinerTitle = myOneLinerVenue[oneLinerSwitch].title
		myOneLinerContent = myOneLinerVenue[oneLinerSwitch].content



## /// THE CSS (SET INSIDE CONSTRUCTOR)##

# Some variables for the CSS:

		defaultblue = "#3399CC"
		grey2 = "#555555"

# CSS inserted into this module. Be careful with naming:
# all CSS is complied together into a master CSS. This means that there can be name conflicts.

		css = """
			.secOneLiner {
				font-family: FrutigerLTStd-Light;
				font-weight: 200;
				color: #{grey2};
				# width: #{@.width - (@options.pageMargin * 2) }px;
				# padding: #{dpr 23}px 0 #{dpr 18}px #{dpr 24}px;
				}

			.secOneLinerSectionHeader {
				text-transform: uppercase;
				font-size: #{dpr 16}px;
				line-height: #{dpr 16}px;
				letter-spacing: #{dpr 1}px;
				}

			.secOneLinerBody {
				font-weight: 600;
				font-size: #{dpr 18}px;
				line-height: #{dpr 24}px;
				}

			# .sectionDP {
			# 	border-top: solid 10px #555555;
			# 	# padding: #{dpr 24}px 0;
			# 	padding: 24px 0;
			# }


			"""

		Utils.insertCSS(css)
# ///


## CREATE LAYERS NEEDED FOR YOUR MODULE  - NOTE: Be sure to parent these '@' where appropriate ##

		secOneLinerBodyHTML = "
			<div class='sectionDP'>
				<div class='secOneLiner secOneLinerSectionHeader'>
					#{myOneLinerTitle}
				</div>
				<div class='secOneLiner secOneLinerBody'>
					#{myOneLinerContent}
				</div>
			</div>
			"

# # The body layer
		secOneLinerBodyLayer = new Layer
			width: @.width
			parent: @
			# y: (dpr 24) + (secOneLinerTitleLayer.height)
			y: (dpr 24)
			height: (dpr 100)
			backgroundColor: "lightgreen"
			html: secOneLinerBodyHTML
			name: "secOneLinerBodyLayer"

# The top border
		secExtopBorder = new Layer
			width: @.width
			parent: @
			height: 1
			backgroundColor: "#555555"
			x: 0
			y: @.Y
			name: "secExtopBorder"


# ///


## /// METHODS ##

# for organization sake, put all of your methods for the class here.  Note these sit OUTSIDE the constructor, which is also a class method.
# these are called from other places using @methodname - e.g. @createsomething(stuff)

		# After we filled our framer layers with HTML, we have to
		# make sure that these layers have the correct height:

		fixSectionOneLinerHeights = ->
			secOneLinerBodyLayer.height = Utils.textSize(secOneLinerBodyLayer.html).height
			@.height = secOneLinerBodyLayer.height + (2* (dpr 24))

		fixSectionOneLinerHeights()

# NOTE: later in the complete DetailPage module, we'll have one fixLayer method that
# checks for all section submodule layers

# ///



## /// GETTERS / SETTERS ##

# for each property, a getter and setter must be defined.  These are properties that can be accessed and defined outside of the class.

	@define 'secOneLinerVenue',
			get: ->
				@options.secOneLinerVenue
			set: (value) ->
				@options.secOneLinerVenue = value

	@define 'exOrIn',
			get: ->
				@options.exOrIn
			set: (value) ->
				@options.exOrIn = value

	@define 'tags',
			get: ->
				@options.tags
			set: (value) ->
				@options.tags = value

	@define 'bgColor',
			get: ->
				@options.bgColor
			set: (value) ->
				@options.bgColor = value

# ///
