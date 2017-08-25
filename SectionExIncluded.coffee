	############################ INCLUDES    ############################

{dpr} = require 'DevicePixelRatio'
{data_eatdrinknightlife} = require 'data_eatdrinknightlife'

class exports.SectionExIncluded extends Layer

# The prefix for this module is secEx


	############################ CLASS EVENTS    ############################
 # Events.EventName = "myModuleTitle.eventExternalName"
 # I'm not sure about the "eventExternalName part, but the above example defines a listenable event"


	############################ CONSTRUCTOR: ALL OPERATIONS THAT SHOULD RUN WHEN YOUR OBJECT IS CREATED ############################
	constructor: (@options = {}) ->

		# define your properties before calling 'super @options' at the top of the constructor
		@options.secExInVenue								?= data_eatdrinknightlife.brauhaus
		@options.name 											?= "sectionExcludedXX"
		@options.parent 										?= "detailPage"
		# this accepts either "excluded" or "included". Otherwise it will be "error":
		@options.exOrIn											?= "excluded"

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



## DO WE WANT TO SHOW INCLUDED OR EXCLUDED ? ##

		myExOrInOption =  @options.exOrIn
		if myExOrInOption.charAt(0) == "e"
			exOrInSwitch = "excludedInPrice"
		else if myExOrInOption.charAt(0) == "i"
			exOrInSwitch = "includedInPrice"
# # now we use "popularTimes" as error case so we can see it in the front end
		else exOrInSwitch = "popularTimes"
		print exOrInSwitch



		# print "myExOrInOption is: " + myExOrInOption
		myExInVenue = @options.secExInVenue
		# print "myExInVenue is: "
		# print myExInVenue
		# print "---------"
		myExInTitle = myExInVenue[exOrInSwitch].title
		# print "myExInTitle is: " + myExInTitle
		myExInContent = myExInVenue[exOrInSwitch].content
		# print "myExInContent is: " + myExInContent


## /// THE CSS (SET INSIDE CONSTRUCTOR)##

# Some variables for the CSS:

		defaultblue = "#3399CC"
		grey2 = "#555555"

# CSS inserted into this module. Be careful with naming:
# all CSS is complied together into a master CSS. This means that there can be name conflicts.

		css = """
			.secExIn {
				font-family: FrutigerLTStd-Light;
				font-weight: 200;
				color: #{grey2};
				# width: #{@.width - (@options.pageMargin * 2) }px;
				# padding: #{dpr 23}px 0 #{dpr 18}px #{dpr 24}px;
				}

			.secExInSectionHeader {
				text-transform: uppercase;
				font-size: #{dpr 16}px;
				line-height: #{dpr 16}px;
				letter-spacing: #{dpr 1}px;
				}

			.secExInBody {
				font-weight: 600;
				font-size: #{dpr 18}px;
				line-height: #{dpr 24}px;
				}

			"""

		Utils.insertCSS(css)
# ///


## CREATE LAYERS NEEDED FOR YOUR MODULE  - NOTE: Be sure to parent these '@' where appropriate ##

		secExInTitleHTML = "
			<div class='secExIn secExInSectionHeader'>
				#{myExInTitle} fuck
			</div>
			"

		secExInBodyHTML = "
			<div class='secExIn secExInBody'>
				#{myExInContent}
			</div>
			"

# # The title layer
		secExInTitleLayer = new Layer
			width: @.width
			height: dpr 20
			y: dpr 24
			parent: @
			name: "secExInTitleLayer"
			html: secExInTitleHTML
			backgroundColor: "lightblue"

# # The body layer
		secExInBodyLayer = new Layer
			width: @.width
			parent: @
			y: (dpr 24) + (secExInTitleLayer.height)
			height: (dpr 100)
			backgroundColor: "lightgreen"
			html: secExInBodyHTML
			name: "secExInBodyLayer"

# # The top border
		secExtopBorder = new Layer
			width: @.width
			parent: @
			height: 1
			backgroundColor: "#555555"
			x: 0
			y: @.Y
			name: "secExtopBorder"

		secExInTitleLayer.height = Utils.textSize(secExInTitleLayer.html).height
		secExInBodyLayer.height = Utils.textSize(secExInBodyLayer.html).height
		@.height = secExInBodyLayer.height + secExInTitleLayer.height + (2* (dpr 24))


# ///


## /// METHODS ##

# for organization sake, put all of your methods for the class here.  Note these sit OUTSIDE the constructor, which is also a class method.
# these are called from other places using @methodname - e.g. @createsomething(stuff)

# createSomething: (pass in stuff) ->
#   do something
#   return something

# ///



## /// GETTERS / SETTERS ##

# for each property, a getter and setter must be defined.  These are properties that can be accessed and defined outside of the class.

	@define 'secExInVenue',
			get: ->
				@options.secExInVenue
			set: (value) ->
				@options.secExInVenue = value

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
