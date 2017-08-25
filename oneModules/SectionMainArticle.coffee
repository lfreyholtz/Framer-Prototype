	############################ INCLUDES    ############################

{dpr} = require 'DevicePixelRatio'
{headingSizes} = require 'data_headings'
class exports.SectionMainArticle extends Layer

# The prefix for this module is secEx


	############################ CLASS EVENTS    ############################
 # Events.EventName = "myModuleTitle.eventExternalName"
 # I'm not sure about the "eventExternalName part, but the above example defines a listenable event"


	############################ CONSTRUCTOR: ALL OPERATIONS THAT SHOULD RUN WHEN YOUR OBJECT IS CREATED ############################
	constructor: (@options = {}) ->

		# define your properties before calling 'super @options' at the top of the constructor
		@options.articleTitle 						?= "articleTitle"
		@options.articleContent 					?= "detailPage"


		@options.pageMargin 							?= dpr 24

		# if extending layer, set layer properties here
		super @options

		@.x = @options.pageMargin
		@.backgroundColor = "transparent"
## /// THE CSS (SET INSIDE CONSTRUCTOR)##

# Some variables for the CSS:

		defaultblue = "#3399CC"
		grey2 = "#555555"

# CSS inserted into this module. Be careful with naming:
# all CSS is complied together into a master CSS. This means that there can be name conflicts.

		css = """

			.articleContainer {
				font-family: FrutigerLTStd-Light, 'Open Sans', sans-serif, 'Open Sans', sans-serif;
				width: #{@.width - (@options.pageMargin * 2) }px;
			}
			.articleTitle {
				font-weight:100;
				font-size: #{headingSizes.xl}px;
				line-height: 1.2;
				padding-bottom: #{dpr 16}px;
				padding-top:#{dpr 24}px;
				color: #{grey2};
				}

			.articleSecHeader {
				font-size: #{dpr 32}px;
				line-height: 1.2;
				padding-bottom: #{dpr 16}px;
				}

			.articleBody {
				font-size: #{dpr 18}px;
				line-height: 1.4;
				color: #{grey2};
				}

			"""

		Utils.insertCSS(css)
# ///


## CREATE LAYERS NEEDED FOR YOUR MODULE  - NOTE: Be sure to parent these '@' where appropriate ##
		@.html = "
			<div class='articleContainer'>
				<div class='articleTitle'>
					#{@options.articleTitle}
				</div>
				<div class='articleBody'>
					#{@options.articleContent}
				</div>
			</div>
			"

		@.size = Utils.textSize @.html
## /// METHODS ##

# for organization sake, put all of your methods for the class here.  Note these sit OUTSIDE the constructor, which is also a class method.
# these are called from other places using @methodname - e.g. @createsomething(stuff)


# NOTE: later in the complete DetailPage module, we'll have one fixLayer method that
# checks for all section submodule layers

# ///



## /// GETTERS / SETTERS ##

# for each property, a getter and setter must be defined.  These are properties that can be accessed and defined outside of the class.

	@define 'articleTitle',
			get: ->
				@options.articleTitle
			set: (value) ->
				@options.articleTitle = value

	@define 'articleContent',
			get: ->
				@options.articleContent
			set: (value) ->
				@options.articleContent = value

	@define 'pageMargin',
			get: ->
				@options.pageMargin
			set: (value) ->
				@options.pageMargin = value

# ///
