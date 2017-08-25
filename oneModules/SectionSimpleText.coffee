	############################ INCLUDES    ############################

{dpr} = require 'DevicePixelRatio'

class exports.SectionSimpleText extends Layer



############################ CLASS EVENTS    ############################



############################ CONSTRUCTOR: ALL OPERATIONS THAT SHOULD RUN WHEN YOUR OBJECT IS CREATED ############################
	constructor: (@options = {}) ->
		@options.sectionLabel 					?= "Heading Here"
		@options.sectionContent 				?= "Content Herzhafte"
		@options.pageMargin							?= dpr 24
		@options.hasStroke							?= false


		super @options


############################ CSS ############################
############################ /// LAYER CONSTRUCTION ############################

		@.backgroundColor = "white"
		@.name = "simpleTextSection"
		grey2 = "#555555"
		


		css = """
			.spacer {
				margin-top:#{@options.pageMargin}px;

			}
			.line {
				border-top:#{dpr 1}px solid #e3e3e3;
				margin-bottom:#{@options.pageMargin}px;

			}
			.secST {
				font-family: FrutigerLTStd-Light, 'Open Sans', sans-serif;
				font-weight: 200;
				color: #{grey2};
				width: #{@.width - (@options.pageMargin * 2) }px;
				margin-left: #{@options.pageMargin}px;
				margin-bottom:#{@options.pageMargin}px;
				}

			.secSTSectionHeader {
				text-transform: uppercase;
				margin-bottom:#{dpr 10}px;
				font-size: #{dpr 16}px;
				line-height:1.1;
				margin-top:#{@options.pageMargin}px;

			}

			.secSTText {
				margin-bottom:#{dpr 4}px;
				font-size: #{dpr 16}px;
			}

		"""
		Utils.insertCSS(css)



		seperator = "<div class='spacer'></div>"
		if @options.hasStroke
			seperator = "<div class='spacer line'></div>"

		@.html = "
		<div class='secST'>
			#{seperator}
			<div class='secSTSectionHeader'>#{@options.sectionLabel}</div>
			<div class='secSTText'>#{@options.sectionContent}</div>
		</div>
		"
		@.size = Utils.textSize(@.html)


	@define 'hasStroke',
			get: ->
				@options.hasStroke
			set: (value) ->
				@options.hasStroke = value

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

	@define 'sectionContent',
			get: ->
				@options.sectionContent
			set: (value) ->
				@options.sectionContent = value

# ///
