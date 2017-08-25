# {dpr} = require 'DevicePixelRatio'
{locations} = require 'data_locations'

npm = require 'npm'
moment = npm.moment

class exports.myDaySegments extends Layer
	############################ CLASS EVENTS    ############################
	## ACCEPTS A SAILING AS DATA OBJECT


############################ CONSTRUCTOR    ############################
	constructor: (@options = {}) ->
		@options.sailing									?= ""
		@options.itineraryList						?= []
		@options.testDate 								?= moment("04/29/2017 00:00:00")

		super @options

	# set time options - used in determining which segment data.
		moment.locale('de')
		newNow = moment(@options.testDate)
		moment.now = ->
			newNow

		@.visible = false
		@.name = "myDayDataModel"
		@constructDataObject()




############## METHODS ##############
	constructDataObject:() ->
		console.group("Segment Selection:")

		segments = @options.sailing.segments
		now = moment()
		startDate = moment(@options.sailing.startAt)
		endDate = moment(segments[segments.length - 1].allFromBoard) #  ////  assumes last segment is offboarding

		currentSegment = @findSegmentInSailing(segments)

		# we are in the sailing - put together the list of objects for our pages
		if currentSegment
			console.log("Current Segment:", currentSegment)
			currentSegmentIndex = segments.indexOf(currentSegment)
			@options.itineraryList.push(@addMyDayObject(currentSegment))

			startingIndex = @determineStartIndex(currentSegment, currentSegmentIndex)

			for i in [startingIndex...segments.length]
				@options.itineraryList.push(@addItinObject(segments[i]))

			# add rest of objects to object list, checking to see if we're arriving or not
		else
			@checkPreOrPostCruise(startDate, endDate)


		# logging for constructed object
		console.log("Itinerary list for my Day:", @options.itineraryList)
		console.groupEnd()



	findSegmentInSailing: (segmentList) ->

		# give me the segment list
		startDate = moment(@options.sailing.startAt)
		endDate = moment(segmentList[segmentList.length - 1].segmentEnd) #  ////  assumes last segment is offboarding

		# look through the segment list to see where I am
		currentSegment = segmentList.find((segment) => moment().isBetween(
			moment(segment.segmentStart),
			moment(segment.segmentEnd)
		))

		if currentSegment
			# segment is between start and arrival time
			return currentSegment

		else
			return null



	checkPreOrPostCruise: (startDate, endDate) ->
		console.log("we returned no match for test date in sailing")
		if moment().isBefore(startDate)
			console.log("out of segment; testDate is before sailing start.  Precruise Mode of app")
		else if moment().isAfter(endDate)
			console.log("out of segment; testDate is after sailing start.  Post-cruise Mode of app")




	determineStartIndex: (currentSegment, currentSegmentIndex) ->

		if !@options.arriving
			startingIndex = currentSegmentIndex + 1

		else if currentSegment.type =="seaday"

			startingIndex = currentSegmentIndex + 1
				# print "BUT...THIS IS A SEADAY, NO ARRIVAL"
		else
			startingIndex = currentSegmentIndex

		return startingIndex




	addItinObject: (currentSegment) ->

		itineraryObject = {
			name:"#{currentSegment.location.name}_page"
			pageType:currentSegment.type
			segment:currentSegment
			testDate:@options.testDate
			segmentImage:currentSegment.location.images.day[0]
		}

		return itineraryObject



	addMyDayObject: (currentSegment) ->

		if currentSegment.type != "seaday"

			arrival = moment(currentSegment.arrivalTime)
			departure = moment(currentSegment.departureTime)

			selectedImage = ""
			pageType = "location"

			if moment().isBetween(arrival, departure)
				# we are on land
				@options.arriving = false
				selectedImage = @selectImage(moment().hour(), currentSegment.location)
				pageType = currentSegment.type


			else if moment().isSameOrBefore(arrival)
				# we are at sea, arriving
				@options.arriving = true
				selectedImage = @selectImage(moment().hour(), locations.XXSEA)
				pageType = "arriving"


			else if moment().isSameOrAfter(departure)
				# we are at sea, departing

				@options.arriving = false
				selectedImage = @selectImage(moment().hour(), locations.XXSEA)
				pageType = "departing"
			else
				print "error - can't determine phase"

		else
			#we are at sea, but we have a sea day
			@options.arriving = false
			selectedImage = @selectImage(moment().hour(), currentSegment.location)
			pageType = "seaday"



		myDayObject = {
			name:"ItineraryNow"
			pageType:pageType
			segment:currentSegment
			testDate:@options.testDate
			segmentImage:selectedImage
		}
		return myDayObject



	daytime: (h) ->
		return "night" if h in [21..24] || h in [0..4]
		return "dusk" if h in [19..21] # (abenddämmerung)
		return "day" if h in [7..18]
		return "dawn" if h in [5..6]

	selectImage: (forTime, forLocation) ->

		list = ""

		switch @daytime(forTime)

			when "night"
				list = forLocation.images.night
			when "dusk"
				list =  forLocation.images.dusk
			when "day"
				list =  forLocation.images.day
			when "dawn"
				list =  forLocation.images.dawn

		index = Math.round(Utils.randomNumber(0, list.length-1))
		return list[index]


##### GETTERS / SETTERS ######



	@define 'sailing',
			get: ->
				if @options.sailing == ""
					console.error("Must define a sailing")
				else
					@options.sailing
			set: (value) ->
				@options.sailing = value

	@define 'itineraryList',
			get: ->
				if @options.itineraryList == ""
					console.error("pages are empty")
				else
					@options.itineraryList

			set: (value) ->
				@options.itineraryList = value

	@define 'testDate',
			get: ->
				@options.testDate
			set: (value) ->
				@options.testDate = value
