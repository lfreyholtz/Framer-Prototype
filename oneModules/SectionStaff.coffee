	############################ INCLUDES    ############################

{dpr} = require 'DevicePixelRatio'
# {Text} = require 'Text'
# {venues} = require 'data_venues'

class exports.SectionStaff extends Layer

# This thing will later used only for opening hours, so we will call the module SectionOpeningHours. The prefix for variable is secOH


	############################ CLASS EVENTS    ############################
 # Events.EventName = "myModuleTitle.eventExternalName"
 # I'm not sure about the "eventExternalName part, but the above example defines a listenable event"


	############################ CONSTRUCTOR: ALL OPERATIONS THAT SHOULD RUN WHEN YOUR OBJECT IS CREATED ############################
	constructor: (@options = {}) ->

		@options.staffList							?= ""
		@options.hasStroke 							?= false
		@options.sectionLabel 					?= "sectionLabel"
		@options.pageMargin							?= dpr 24

		super @options


		@.backgroundColor = "white"
		grey2 = "#555555"


# CSS inserted into this module. Be careful with naming:
# all CSS is complied together into a master CSS. This means that there can be name conflicts.

		css = """

			.container {
				font-family: FrutigerLTStd-Light, 'Open Sans', sans-serif;
				# width: #{@.width - (@options.pageMargin * 2) }px;
			}
			.secSSSectionHeader {
				text-transform: uppercase;
				margin-bottom:#{@options.pageMargin}px;
				color:#{grey2};
				font-size: #{dpr 16}px;
				line-height:1.1;
				margin-top:#{@options.pageMargin}px;

			}
			.spacer {
				margin-top:#{@options.pageMargin}px;

			}
			.line {
				border-top:#{dpr 1}px solid #e3e3e3;
				margin-bottom:#{@options.pageMargin}px;

			}

			.staffName {
				font-weight:600;
				font-size: #{dpr 16}px;
				line-height:1.5;
			}

			.staffTitle {
				font-weight:200;
				font-size: #{dpr 14}px;
			}

			.staffInfoContainer {
				color:#{grey2};

				margin-top:#{dpr 4}px;

			}
			"""

		Utils.insertCSS(css)
# ///
		seperator = "<div class='spacer'></div>"
		if @options.hasStroke
			seperator = "<div class='spacer line'></div>"


## CREATE LAYERS NEEDED FOR YOUR MODULE  - NOTE: Be sure to parent these '@' where appropriate ##
		header = new Layer
			name:"headerLayer"
			backgroundColor:"white"
			parent:@
			x:@options.pageMargin
			width: @.width - (@options.pageMargin * 2)
			html:"<div class='container'>
							#{seperator}
							<div class='secSSSectionHeader'>#{@options.sectionLabel}</div>
						</div>"


		header.height  = Utils.textSize(header.html).height
		startY = header.maxY
		for staffMember,i in @options.staffList

			# image layer
			staffMemberRow = new Layer
				name:"Staff Member Row #{i}"
				width:@.width
				parent:@
				backgroundColor:"transparent"

			staffPic = new Layer
				name:"staffPic"
				width: dpr 48
				height: dpr 48
				backgroundColor:"yellow"
				parent:staffMemberRow
				x:@options.pageMargin
				borderRadius: dpr 48
				borderWidth:dpr 2
				borderColor:"##3399cc"
				image:staffMember.staffImage

			staffInfo = new Layer
				name:"Staff Info"
				width:@.width - (staffPic.width + @options.pageMargin/2)
				backgroundColor:"transparent"
				html: "
				<div class='staffInfoContainer'>
					<div class='staffName'>#{staffMember.name}</div>
					<div class='staffTitle'>#{staffMember.title}</div>
				</div>
				"
				y:staffPic.y
				x:staffPic.maxX + @options.pageMargin/2
				parent:staffMemberRow

			staffInfo.size = Utils.textSize(staffInfo.html)
			staffMemberRow.height = staffPic.height + @options.pageMargin/2
			staffMemberRow.y = startY + ((staffPic.height + @options.pageMargin/2) * i)
			@.height = staffMemberRow.maxY + @options.pageMargin

# ///


## /// METHODS ##


## /// GETTERS / SETTERS ##

	@define 'hasStroke',
			get: ->
				@options.hasStroke
			set: (value) ->
				@options.hasStroke = value

	@define 'staffList',
			get: ->
				if @options.staffList == ""
					print "Define a staff list"
				else
					@options.staffList
			set: (value) ->
				@options.staffList = value

	@define 'pageMargin',
			get: ->
				@options.pageMargin
			set: (value) ->
				@options.pageMargin = value#

	@define 'sectionLabel',
			get: ->
				@options.sectionLabel
			set: (value) ->
				@options.sectionLabel = value




# ///
