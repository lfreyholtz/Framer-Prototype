{dpr} = require 'DevicePixelRatio'
{locations} = require 'data_locations'

npm = require 'npm'
moment = npm.moment


class exports.ItineraryView extends Layer

############################ CONSTRUCTOR    ############################
	constructor: (@options = {}) ->

		@options.segment	?= "no segment defined"
		@options.sailing ?= "no segment defined"
		@options.testDate ?= "04/29/2017 00:00:00"
		@options.pageType ?= "segment"
		@options.imageScaleFactor		?= ""

		@options.segmentImage ?= "default"
		@options.imageScaleFactor ?= 1.25
		@options.viewPadding ?= dpr 20

		@options.pageName ?= "Page"

		super @options


		css = """
				.itineraryInfoBlock {
					font-family:font-family: FrutigerLTStd-Roman, 'Open Sans', sans-serif;
					width:#{@.width}px;
					padding:#{@options.viewPadding}px;
					//background:#33CC22;
					}

				.itineraryMoustache {
					font-size:#{dpr 16}px;
					font-weight:100;
					line-height:1;
					margin-bottom:#{dpr 5}px;
					text-transform: capitalize;
					//background:#663300;
					width:#{@.width-@options.viewPadding*2}px;

				}
				.itineraryTitle {
					font-size:#{dpr 38}px;
					font-weight:600;
					line-height:1.1;
					//background:#663300;
					letter-spacing:-#{dpr 2}px;
					width:#{@.width-@options.viewPadding*2}px;
					text-transform:uppercase;

				}
				.timeBlock {
					width:#{@.width-@options.viewPadding*2 - dpr 40}px;
					margin-top:#{dpr 10}px;
					//border:1px solid #993333;
				}
				.itineraryTime {
					font-size:#{dpr 16}px;
					font-weight:200;
					line-height:1.3;
					//border:1px solid #993333;
					padding-left:#{dpr 40}px;

				}
				.itineraryArrow {
					float:left;
					background-image:url("modules/moduleImages/interface/gr-arrow-callout@3x.png");
					background-size:100%;
					padding-top:#{dpr 4}px;
					background-repeat:no-repeat;
					background-position:left center;
					margin-top:#{dpr 2}px;
					width:#{dpr 27}px;
					height:#{dpr 9}px;
				}

				.navigationIndicatorContainer {

					width:#{@.width-@options.viewPadding*2}px;
				}

				.navigationIndications {
					background-image:url("modules/moduleImages/interface/icn_shipPositionPlaceholder.png");
					background-size:100%;
					padding-top:#{@options.viewPadding}px;
					background-repeat:no-repeat;
					background-position:bottom center;
					width:#{dpr 280}px;

					margin-left:auto;
					margin-right:auto;
					height:#{dpr 24}px;
					//border:4px solid #993333;

				}
			"""
		Utils.insertCSS(css)
		@.name = "#{@options.pageName}_container"
		# manipulate moment to simulate testDate and time correctly



		#
		moment.locale 'de', calendar:
		  lastDay: '[gestern] [um] LT'
		  sameDay: '[heute] [um] LT'
		  nextDay: '[morgen] [um] LT'
		  lastWeek: '[Letzter] dddd [um] LT'
		  nextWeek: 'dddd [um] LT'
		  sameElse: 'dddd, LL [um] LT'

		moment.updateLocale 'de', longDateFormat:
		  LT: 'H:mm [Uhr]'
		  LTS: 'H:mm:ss [Uhr]'


		# print "The date and time right now is #{moment().format('LLLL')}"
		# print moment(@options.sailing.startAt).toNow()
		# print moment(@options.sailing.startAt).diff(moment(), 'days')

####################### SUBLAYERS #################################


		page = new Layer
			size:@.size
			backgroundColor:"#FB8E7E"
			name:"#{@options.pageName}_image"
			image:@options.segmentImage
			parent:@

		if @options.segmentImage == "default"
			page.style=
				"background-image": "url('modules/moduleImages/interface/img_underConstruction.png')"
				"background-repeat":"no-repeat"
				"background-position": "center"
				"background-size" : "#{dpr 90}px #{dpr 90}px"

		#gradient per screen
		gradientMask = new Layer
			name:"#{@options.pageName}_tint"
			parent:page
			width: @.width
			height: @.height / 2
			maxY: @.height
		gradientMask.style.background ="linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.60) 50%, rgba(0,0,0,0.8) 100%)"


		card = new Layer
				backgroundColor: "transparent"
				name:"#{@options.pageName}_info"
				parent: page
				html:@getInfoByType(@options.pageType, @options.segment)

		card.size = Utils.textSize card.html
		card.y = Align.bottom(-dpr(40) )



###### METHODS #######
	getInfoByType: (type, segment) ->

		# print "pageType passed: #{@options.pageType}"

		if moment().isBetween(moment(segment.arrivalTime), moment(segment.segmentEnd))
			moustacheTime = "Jetzt"
		else
			moustacheTime = moment(segment.segmentStart).calendar().split(" um")[0]


		switch type

			when "onboarding"
				beforeBoardStart = moment().isBefore(moment(segment.boardingStart))
				boarding = moment().isBetween(moment(segment.boardingStart), moment(segment.allOnBoard))
				afterBoardingEnd = moment().isAfter(moment(segment.allOnBoard))
				afterMuster = moment().isAfter(moment(segment.securityStart))

				if beforeBoardStart
					boardingBlock = "<div class='timeBlock'>
																<div class='itineraryArrow'></div>
																<div class='itineraryTime'>Boarding ab #{moment(segment.boardingStart).format('LT')}</div>
														</div>"
				else if boarding
					boardingBlock = "<div class='timeBlock'>
															<div class='itineraryArrow'></div>
															<div class='itineraryTime'>Jetzt: Boarding - alle an Board bis #{moment(segment.allOnBoard).format('LT')}</div>
													</div>"
				else
					boardingBlock = ""

				if afterMuster
					securityBlock = ""

				else
					securityBlock = "<div class='timeBlock'>
															<div class='itineraryArrow'></div>
																<div class='itineraryTime'>Sicherheitsübung um #{moment(segment.securityStart).format('LT')}</div>
													</div>"


				return "<div class='itineraryInfoBlock'>
									<div class='itineraryMoustache'>#{moustacheTime}</div>
									<div class='itineraryTitle'>#{segment.location.marketingName}</div>
									#{boardingBlock}
									#{securityBlock}

									<div class='timeBlock'>
										<div class='itineraryArrow'></div>
										<div class='itineraryTime'>Los geht's nach #{segment.nextLand.name} um #{moment(segment.departureTime).format('LT')}</div>
									</div>
								</div>"

			when "location"

				segStart = moment(segment.segmentStart)
				segEnd = moment(segment.segmentEnd)


				if segEnd.diff(segStart, 'hours') >= 24
					# print "overnight"
					allOnBoardString = "<div class='itineraryTime'>Alle an Bord #{moment(segment.backOnBoard).calendar()}</div>"
					departureString = "<div class='itineraryTime'>Weiterfahrt nach #{segment.nextLand.name} #{moment(segment.departureTime).calendar()}</div>"
				else
					allOnBoardString = "<div class='itineraryTime'>Alle an Bord #{moment(segment.backOnBoard).format('LT')}</div>"
					departureString = "<div class='itineraryTime'>Weiterfahrt nach #{segment.nextLand.name} um #{moment(segment.departureTime).format('LT')}</div>"


				afterArrival = moment().isAfter(moment(segment.arrivalTime))
				afterAllOnboard = moment().isAfter(moment(segment.backOnBoard))


				if afterArrival
					arrivalBlock = ""
				else
					arrivalBlock = "<div class='timeBlock'>
													<div class='itineraryArrow'></div>
													<div class='itineraryTime'>Ankunft um #{moment(segment.arrivalTime).format('LT')}</div>
												</div>"

				if afterAllOnboard
					allOnBoardBlock = ""
				else
					allOnBoardBlock = "<div class = 'timeBlock'>
															<div class='itineraryArrow'></div>
															#{allOnBoardString}
													</div>"


				return "<div class='itineraryInfoBlock'>
									<div class='itineraryMoustache'>#{moustacheTime}</div>
									<div class='itineraryTitle'>#{segment.location.marketingName}</div>
									#{arrivalBlock}
									#{allOnBoardBlock}

									<div class = 'timeBlock'>
											<div class='itineraryArrow'></div>
												#{departureString}
									</div>

								</div>"


			when "seaday"
				if moment().isBetween(moment(segment.segmentStart), moment(segment.segmentEnd))

					segmentTitle = segment.location.marketingName
					navSec = "<div class='navigationIndicatorContainer'>
												<div class='navigationIndications'></div>
										</div>"
				else
					segmentTitle = "Seetag"
					navSec = ""
										# //
				return "<div class='itineraryInfoBlock'>
									<div class='itineraryMoustache'>#{moustacheTime}</div>
									<div class='itineraryTitle'>#{segmentTitle}</div>
									<div class='timeBlock'>
										<div class='itineraryArrow'></div>
											<div class='itineraryTime'>Ankunft in #{segment.nextLand.name} #{moment(segment.nextArrivalTime).calendar()}</div>
										</div>

									#{navSec}

								</div>"

			when "arriving"


				return "<div class='itineraryInfoBlock'>
									<div class='itineraryMoustache'>Jetzt</div>
													<div class='itineraryTitle'>Auf See</div>
									<div class='timeBlock'>
										<div class='itineraryArrow'></div>
										<div class='itineraryTime'>Ankunft in #{segment.location.marketingName} um #{moment(segment.arrivalTime).format('LT')}</div>
									</div>

									<div class='navigationIndicatorContainer'>
												<div class='navigationIndications'></div>
									</div>

								</div>"
														# //<div class='itineraryTime'>Ankunft in #{segment.nextLand.name}  in #{moment().to(moment(segment.nextArrivalTime))} um #{moment(segment.nextArrivalTime).format('LT')}</div>
			when "departing"
								return "<div class='itineraryInfoBlock'>
													<div class='itineraryMoustache'>Jetzt</div>
													<div class='itineraryTitle'>Auf See</div>
													<div class='timeBlock'>
														<div class='itineraryArrow'></div>
															<div class='itineraryTime'>Ankunft in #{segment.nextLand.marketingName} #{moment(segment.nextArrivalTime).calendar()}</div>
													</div>

													<div class='navigationIndicatorContainer'>
																<div class='navigationIndications'></div>
													</div>

												</div>"

			when "offboarding"

				if moment().isAfter(moment(segment.arrivalTime))
					arrivalBlock = ""

				else
					arrivalBlock = "<div class = 'timeBlock'>
						<div class='itineraryArrow'></div>
						<div class='app itineraryTime'>Ankunft um #{moment(segment.arrivalTime).format('LT')}</div>
					</div>"

				return "<div class='itineraryInfoBlock'>
									<div class='itineraryMoustache'>#{moustacheTime.split(" um")[0]}</div>
								<div class='itineraryTitle'>#{segment.location.marketingName}</div>
								#{arrivalBlock}
								<div class = 'timeBlock'>
									<div class='itineraryArrow'></div>
									<div class='app itineraryTime'>Alle vom Bord um #{moment(segment.allFromBoard).format('LT')}</div>
								</div>
							</div>"



##### GETTERS / SETTERS ######
	@define 'sailing',
		get: ->
			@options.sailing
		set: (value) ->
			@options.sailing = value

	@define 'segment',
		get: ->
			@options.segment
		set: (value) ->
			@options.segment = value

	@define 'viewPadding',
		get: ->
			@options.viewPadding
		set: (value) ->
			@options.viewPadding = value

	@define 'imageScaleFactor',
		get: ->
			@options.imageScaleFactor
		set: (value) ->
			@options.imageScaleFactor = value

	@define 'pageName',
		get: ->
			@options.pageName
		set: (value) ->
			@options.pageName = value

	@define 'segmentImage',
		get: ->
			@options.segmentImage
		set: (value) ->
			@options.segmentImage = value

	@define 'testDate',
			get: ->
				@options.testDate
			set: (value) ->
				@options.testDate = value

	@define 'pageType',
			get: ->
				@options.pageType
			set: (value) ->
				@options.pageType = value
