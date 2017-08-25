{TextLayer} = require 'TextLayer'
{sailing} = require 'metropolen01good'
moment = require 'moment'

segments = sailing.segments

dateCursor = moment(sailing.startAt) # we use the moment.js thing instead of Date



# DUSK TIL DAWN
#
# This function tells is if a given day time is either night, dusk, day or dawn. 
# We will use this later to determine which itinerary cover image we should load  

daytime = (h) -> 
	return "night" if h in [21..24] || h in [0..4]
	return "dusk" if h in [19..21] # (abenddämmerung)
	return "day" if h in [7..18]
	return "dawn" if h in [5..6]
	# day, dawn, dusk, night


# NEEDS FIX! DOING IT WITH DATECURSOR

#  view ONBOARDING in Hamburg
# print "Boarding ab: " + moment(dateCursor).format('H:mm') + "Uhr"
# 
# dateCursor = dateCursor.add(moment.duration(sailing.onboarding.duration)).subtract(2, 'hours')
# print "Alle an Bord bis: " + moment(dateCursor).format('H:mm') + " Uhr"
# print "Securityübung beginnt um: " + moment(dateCursor).format('H:mm') + " Uhr"
# dateCursor = dateCursor.add(2, 'hours')
# print "Abfahrt nach #{segments[1].port.name} um: #{(moment(dateCursor).format('H:mm'))}"
# print "------------"
# 
# #  All views in segments 
# for s, i in segments
# 	print s.port.name # this will output the marketing name
# 	if s.type == "port"
# 		print "type is sea"
# 		print "Ankunft um:", dateCursor.toString()
# 		dateCursor = dateCursor.add(1, 'hours')
# 		print "Alle zurück an Bord um: #{moment(dateCursor).format('H:mm')} Uhr"
# 
# 	if s.type == "port"
# 		print "Alle zurück an Bord um: "
# 		print "Weiterfahrt um:", dateCursor.toString()
# 	
# 	
# 	print "Weiterfahrt nach: ", dateCursor.toString()
# 	next_s = segments[(i+1) % segments.length] 
# 	print next_s.port.name
# 	print "------------"
# 	
# #  view OFFBOARDING in Hamburg
# dateCursor = dateCursor.add(moment.duration(sailing.offboarding.duration))
# print "Alle von Bord bis: #{moment(dateCursor).format('H:mm')} Uhr"
# dateCursor = dateCursor.add(moment.duration(sailing.onboarding.duration)).subtract(2, 'hours')
# print "Gute Heimreise."
# print "Hoffentlich sehen wir uns bald wieder!"



itinSwiper = new PageComponent
	size: Screen.size
	scrollVertical: false
# itinSwiper.draggable.directionLock = true	


#  All views in segments 
for s, i in segments
	itinSegment = new ScrollComponent
		size: Screen.size
		scrollHorizontal: false
	itinSegment.content.draggable.overdrag = false
		
	itinSwiper.addPage(itinSegment, "right")
		
	itinCover = new Layer
		size: Screen.size
		parent: itinSegment.content
		
	keyInfos = new Layer
			parent: itinCover
			maxY: Screen.height - 100
			width: Screen.width - 24*2
			x: 24
			height: 500
			
		
	if s.type == "onboarding"
			keyInfos.html = "
				<div style='font-size: 32px; color: yellow; text-transform: uppercase;'>#{s.port.marketingName}</div>
				<div style:'font-size: 32px'>Boarding ab: #{s.boardingStart} Uhr</div>
				<div style:'font-size: 32px'>Sicherheitsübung um: #{s.securityStart} Uhr</div>
				<div style:'font-size: 32px'>Abfahrt nach um #{s.departureTime}</div>
				"
		
	else if s.type == "sea"	
		keyInfos.html = "	
			<div style='font-size: 32px; color: yellow; text-transform: uppercase;'>#{s.port.marketingName}</div>
			<div style='font-size: 32px'>This is the sea #{s.boardingStart} Uhr</div>
			"
		
	else if s.type == "port"
		keyInfos.html = "
			<div style='font-size: 32px; color: yellow; text-transform: uppercase;'>#{s.port.marketingName} </div>
			<div style='font-size: 32px'>Ankunft um: #{s.arrivalTime} Uhr</div>
			<div style='font-size: 32px'>Alle an Bord um: #{s.backOnBoard} Uhr</div>
			<div style='font-size: 32px'>Weiterfahrt nach um #{s.departureTime}</div>
			"
		
	else if s.type == "offboarding"
		keyInfos.html = "
			<div style='font-size: 32px; color: yellow; text-transform: uppercase;'>#{s.port.marketingName}</div>
			<div style='font-size: 32px'>Ankunft um: #{s.arrivalTime} Uhr</div>
			<div style='font-size: 32px'>Alle von Bord bis: #{s.leaveBoard} Uhr</div>
			"



