{locations} = require 'data_locations'
{venues} = require 'data_venues'
{types} = require 'data_types'
{events} = require 'data_events'

npm = require 'npm'
moment = npm.moment
class exports.SegmentModel extends Framer.BaseClass




	console.group("Segment Model")



	# model properties

	@define 'sailing',
		get: () -> @_sailing
		set: (value) ->
			@_sailing = value
			@constructItineraryList()

			# Emit the change so data changes can trigger responses
			@emit "change:sailing"
			console.log("Sailing Object", @_sailing)


	@define 'itineraryList',
		get: () -> @_itineraryList = @constructItineraryList()
		# @emit "change:itineraryList"
		console.log("Itinerary List", @_itineraryList)

	@define 'currentSegment',
		get:() -> @findSegmentInSailing(@_sailing.segments)
			# console.log("Sailing Object", @_sailing)

	@define 'testDate',
		get: () -> @_testDate

		set: (value) ->
			@emit "change:testDate"
			@_testDate = value

	@define 'arriving',
		get: () -> @_arriving
		set: (value) ->
			@_arriving = value

	@define 'openVenues',
		get: () -> @findOpenVenues(@_testDate)

	@define 'currentEvents',
		get: () -> @findCurrentEvents(@_testDate)

	@define 'openTimeThreshold',
		get: () -> @_openTimeThreshold
		set: (value) ->
			# print @_openTimeThreshold
			@_openTimeThreshold = value



################################# METHODS #######################################

	constructItineraryList:() ->
				console.group("Construct Itinerary List Object")
				segmentList = []
				if @_sailing.segments
					segments = @_sailing.segments
				else
					console.error("No segment was received to construct list within model object")
				now = moment()
				startDate = moment(segments.startAt)
				endDate = moment(segments[segments.length - 1].allFromBoard) #  ////  assumes last segment is offboarding

				currentSegment = @findSegmentInSailing(segments)


				if currentSegment
					console.log("Current Segment:", currentSegment)
					currentSegmentIndex = segments.indexOf(currentSegment)
					segmentList.push(@addMyDayObject(currentSegment))
					#
					startingIndex = @determineStartIndex(currentSegment, currentSegmentIndex)

					for i in [startingIndex...segments.length]
						segmentList.push(@addItinObject(segments[i]))

				console.groupEnd()

				return segmentList


	addMyDayObject: (currentSegment) ->
		@_arriving = false
		if currentSegment.type != "seaday"

			arrival = moment(currentSegment.arrivalTime)
			departure = moment(currentSegment.departureTime)

			selectedImage = ""
			pageType = "location"

			if moment().isBetween(arrival, departure)
				# we are on land
				@_arriving = false
				selectedImage = @selectImage(moment().hour(), currentSegment.location)
				pageType = currentSegment.type


			else if moment().isSameOrBefore(arrival)
				# we are at sea, arriving
				@_arriving = true
				selectedImage = @selectImage(moment().hour(), locations.XXSEA)
				pageType = "arriving"


			else if moment().isSameOrAfter(departure)
				# we are at sea, departing

				@_arriving = false
				selectedImage = @selectImage(moment().hour(), locations.XXSEA)
				pageType = "departing"
			else
				console.error("error - can't determine phase")

		else
			#we are at sea, but we have a sea day
			@_arriving = false
			selectedImage = @selectImage(moment().hour(), currentSegment.location)
			pageType = "seaday"



		myDayObject = {
			# name:"ItineraryNow"
			pageType:pageType
			segment:currentSegment
			testDate:@_testDate
			segmentImage:selectedImage
		}
		return myDayObject


	determineStartIndex: (currentSegment, currentSegmentIndex) ->

		if !@_arriving
			startingIndex = currentSegmentIndex + 1

		else if currentSegment.type =="seaday"

			startingIndex = currentSegmentIndex + 1
				# print "BUT...THIS IS A SEADAY, NO ARRIVAL"
		else
			startingIndex = currentSegmentIndex

		return startingIndex


	findSegmentInSailing: (segmentList) ->
		console.group("Find segment in sailing with start date #{@_sailing.startAt}")
		console.log("Segment list: ", segmentList)
		# give me the segment list
		startDate = moment(@_sailing.startAt)
		endDate = moment(segmentList[segmentList.length - 1].segmentEnd) #  ////  assumes last segment is offboarding

		# look through the segment list to see where I am
		currentSegment = segmentList.find((segment) => moment().isBetween(
			moment(segment.segmentStart),
			moment(segment.segmentEnd)
		))

		if currentSegment
			# segment is between start and arrival time
			console.log("Current Segment", currentSegment)
			console.groupEnd()

			return currentSegment

		else
			console.log("Segment was not found in sailing")
			console.groupEnd()
			return null

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

	daytime: (h) ->
		return "night" if h in [21..24] || h in [0..4]
		return "dusk" if h in [19..21] # (abenddämmerung)
		return "day" if h in [7..18]
		return "dawn" if h in [5..6]

	addItinObject: (currentSegment) ->

		itineraryObject = {
			name:"#{currentSegment.location.name}_page"
			pageType:currentSegment.type
			segment:currentSegment
			testDate:@_testDate
			segmentImage:currentSegment.location.images.day[0]
		}

		return itineraryObject


	findOpenVenues: (testDate) ->
		console.groupCollapsed("Model: Find open venues")
		allVenues = Object.values(venues)

		console.log("Model: All venues", allVenues)
		date = moment(testDate)
		# filter out non-restaurant places
		restaurantsOnly = allVenues.filter(
			(venue) =>
				venue.type.title != types.venues.place.title and venue.type.title != types.venues.wellnessfitness.title and venue.type.title != types.venues.nightclub and venue.type.title != types.venues.kids
		)

		console.log("Model: List of only restaurants", restaurantsOnly)

		# restaurants open now
		openNow = restaurantsOnly.filter( (ven) =>

			openingHours = ven.openingHours.content
			todaysHours = openingHours.find((day) => moment(day.date).isSame(date, 'day')

			)

			if todaysHours
				allTimes = todaysHours.times
				if @_openTimeThreshold
					openTimeThreshold = @_openTimeThreshold
				else openTimeThreshold = 1

				curOpenTime = allTimes.find((time) => date.isBetween(
					moment(time.open, 'HH:mm').subtract(openTimeThreshold, 'minutes'),
					moment(time.close, 'HH:mm')
				))


			console.log("Model: opening hours", openingHours)
			console.log("Model: today's hours", todaysHours)
			console.log("Model: current Open Time", curOpenTime)

			if curOpenTime || openNow
				return true

		)

		console.log("open now", openNow)
		console.groupEnd()
		return openNow


	findCurrentEvents: (testDate) ->
		console.group("Find Current Events")
		console.log("All events raw", events)

		date = moment(testDate)
		allEvents = Object.values(events)



		# console.log("Events as is", events)


		console.log("Model: all events", allEvents)

		currentEvents = allEvents.filter( (event) =>
			eventTimes = event.times
			todaysTimes = eventTimes.find ((day) => moment(day.date).isSame(date, 'day'))

			if todaysTimes
				# print todaysTimes.times


				allTimesToday = todaysTimes.times
				if @_openTimeThreshold
					openTimeThreshold = @_openTimeThreshold
				else openTimeThreshold = 1

				console.log("Model: All Times Today", allTimesToday)

				currentTime = allTimesToday.find((time) => date.isBetween(
					moment(time.open, 'HH:mm').subtract(openTimeThreshold, 'minutes'),
					moment(time.close, 'HH:mm')
				))

				if currentTime
					return true
		)





		console.log("Model: current events", currentEvents)
		console.groupEnd()
		return currentEvents
