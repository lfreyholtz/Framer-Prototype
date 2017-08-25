	############################ INCLUDES    ############################
npm = require 'npm'
moment = npm.moment
{dpr} = require 'DevicePixelRatio'
{venues} = require 'data_venues'



class exports.SectionOpeningHours extends Layer



############################ CLASS EVENTS    ############################



############################ CONSTRUCTOR: ALL OPERATIONS THAT SHOULD RUN WHEN YOUR OBJECT IS CREATED ############################
	constructor: (@options = {}) ->
		@options.testDate 							?=  moment("04/29/2017")
		@options.venue 									?= ""
		@options.sectionLabel 					?= "this is sectionLabel"
		@options.pageMargin							?= dpr 24
		@options.width									?= 400
		@options.hasStroke							?= false


		super @options


		@.backgroundColor = "white"
		@.name = "openingHoursSection"

		moment.locale('de')
		newNow = moment(@options.testDate)
		moment.now = ->
			newNow

############################ CSS ############################
############################ /// LAYER CONSTRUCTION ############################



		grey2 = "#555555"


		css = """
			.spacer {
				margin-top:#{@options.pageMargin}px;

			}
			.line {
				border-top:#{dpr 1}px solid #e3e3e3;
				margin-bottom:#{@options.pageMargin}px;

			}
			.secOH {
				font-family: FrutigerLTStd-Light, 'Open Sans', sans-serif;
				font-size: #{dpr 16}px;
				font-weight: 200;
				color: #{grey2};
				width: #{@.width - (@options.pageMargin * 2) }px;
				}

			.secOHSectionHeader {
				text-transform: uppercase;
				margin-bottom:#{dpr 10}px;
				font-size: #{dpr 16}px;
				line-height:1.1;
				margin-top:#{@options.pageMargin}px;
			}

			.secOHLabel {
				display:block;
				float:left;
				font-weight:600;
			}
			
			.secOHValue {
				display:block;
				margin-bottom:#{dpr 8}px;
				float:right;
				font-weight:300;
			}

		"""
		Utils.insertCSS(css)



		today = moment()
		tomorrow = moment().add(1, 'day')

		todaysTimes = ""
		tomorrowsTimes = ""
		seperator = "<div class='spacer'></div>"

		for day in @options.venue.openingHours.content

			if moment(day.date).isSame(today, 'day')
				todaysTimes = "<div class='secOHLabel'>Heute:</div>"
				for openingTime in day.times
					if today.isSameOrBefore(moment(openingTime.open, 'HH:mm'))
						todaysTimes = todaysTimes +
						"<div class='secOHValue'>#{moment(openingTime.open, 'HH:mm').format('HH:mm')} - #{moment(openingTime.close, 'HH:mm').format('HH:mm')}</div><div style='clear:both;'></div>"

			if moment(day.date).isSame(tomorrow, 'day')
				tomorrowsTimes = "<div class='secOHLabel'>Morgen:</div>"
				for openingTime in day.times
					tomorrowsTimes = tomorrowsTimes +
					"<div class='secOHValue'>#{moment(openingTime.open, 'HH:mm').format('HH:mm')} - #{moment(openingTime.close, 'HH:mm').format('HH:mm')}</div><div style='clear:both;'></div>"



			if @options.hasStroke
				seperator = "<div class='spacer line'></div>"


		@.html = "
		<div class='secOH'>
			#{seperator}
			<div class='secOHSectionHeader'>#{@options.sectionLabel}</div>
				#{todaysTimes}
				<div style='height:#{dpr 16}px;'></div>
				#{tomorrowsTimes}
		</div>
		"
		@.size = Utils.textSize(@.html)


	@define 'hasStroke',
			get: ->
				@options.hasStroke
			set: (value) ->
				@options.hasStroke = value


	@define 'venue',
			get: ->
				if @options.venue == ""
					print "Define a venue"
				else
					@options.venue
			set: (value) ->
				@options.venue = value

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

	@define 'testDate',
			get: ->
				@options.testDate
			set: (value) ->
				@options.testDate = value
# ///
