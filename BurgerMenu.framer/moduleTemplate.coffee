	############################ INCLUDES    ############################

# {dpr} = require 'DevicePixelRatio'

class exports.myModuleTitle extends Layer

	############################ CLASS EVENTS    ############################
 # Events.EventName = "myModuleTitle.eventExternalName"
 # I'm not sure about the "eventExternalName part, but the above example defines a listenable event"


	############################ CONSTRUCTOR: ALL OPERATIONS THAT SHOULD RUN WHEN YOUR OBJECT IS CREATED ############################
	constructor: (@options = {}) ->

		# define your properties before calling 'super @options' at the top of the constructor
		# @options.topicData ?= "please define data"
  		@options.topicCategories ?= ["eins", "zwei", "drei"]
  		@options.name ?= "topicPageContainer"
		  @options.pageMargin ?= dpr 24
  		@options.hasPromotion ?= true

		super @options

		# if extending layer, set layer properties here
		@.backgroundColor = "pink"
		@.name = @options.name

## /// THE CSS (SET INSIDE CONSTRUCTOR)##

# Some variables for the CSS:
# we should give our colors better names, like e.g. "blue500"
# we should also use short notations for fonts, e.g. "frut-light"

		defaultblue = "#3399CC"
    menuItemPadding = dpr 24

# css inserted into this module.  be careful with naming; the css file is complied together into a master CSS; this means that there can be name conflicts.

		css = """
				.menItem {
					font-family:FrutigerLTStd-Light;
					width: #{@.width - (menuItemPadding * 2) }px;
					padding: #{dpr 23}px 0 #{dpr 18}px #{dpr 24}px;
					}
			"""
		Utils.insertCSS(css)
# ///

### CREATE LAYERS NEEDED FOR YOUR MODULE  - NOTE: Be sure to parent these '@' where appropriate ###

		# coverContainer = new Layer
		# 	width:@.width
		# 	height:@.width * 1.125
		# 	backgroundColor:"purple"
		# 	parent:@
		# 	name:"coverContainer"
		# 	originY: 0
			# clip:false


## /// METHODS ##
# for organization sake, put all of your methods for the class here.  Note these sit OUTSIDE the constructor, which is also a class method.
# these are called from other places using @methodname - e.g. @createsomething(stuff)

  # createSomething: (pass in stuff) ->
  #   do something
  #   return something



## /// GETTERS / SETTERS ##
 # for each property, a getter and setter must be defined.  These are properties that can be accessed and defined outside of the class.

	# @define 'pageMargin',
	# 		get: ->
	# 			@options.pageMargin
	# 		set: (value) ->
	# 			@options.pageMargin = value
