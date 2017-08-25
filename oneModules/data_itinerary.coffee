
{ locations } = require 'data_locations'

exports.sailing =
	{
		startAt: "04/29/2017 08:00:00"
		ship: "AIDAprima"
		departurePort:locations.DEHAM
		arrivalPort: locations.DEHAM
		segments: [
			{
				type: "onboarding"
				segmentNumber: 0
				duration: "09:00:00"
				segmentStart:"04/29/2017 08:00:00"
				segmentEnd:"04/29/2017 23:59:59"
				arrivalTime: "04/29/2017 08:00"
				boardingStart: "04/29/2017 09:00"
				allOnBoard:"04/29/2017 15:00"
				securityStart: "04/29/2017 16:00"
				departureTime: "04/29/2017 18:00"
				location: locations.DEHAM
				nextLand: locations.GBSOU
				nextArrivalTime:"05/01/2017 09:30"
			},
			{
				type: "seaday"
				segmentNumber: 1
				segmentStart:"04/30/2017 00:00:00"
				segmentEnd:"04/30/2017 23:59:59"
				duration: "39:30:00"
				location: locations.XXSEA
				nextLand: locations.GBSOU
				nextArrivalTime:"05/01/2017 09:30"
			},
			{
				type: "location"
				segmentNumber: 2
				duration: "12:00:00"
				segmentStart:"05/01/2017 00:00:00"
				segmentEnd:"05/01/2017 23:59:59"
				arrivalTime: "05/01/2017 09:30"
				backOnBoard: "05/01/2017 20:30"
				departureTime: "05/01/2017 21:30"
				location: locations.GBSOU
				nextLand: locations.FRLEH
				nextArrivalTime:"05/02/2017 07:00"
			},
			{
				type: "location"
				segmentNumber: 3
				duration: "12:00:00"
				segmentStart:"05/02/2017 00:00:00"
				segmentEnd:"05/02/2017 23:59:59"
				arrivalTime: "05/02/2017 07:00"
				backOnBoard: "05/02/2017 18:00"
				departureTime: "05/02/2017 19:00"
				location: locations.FRLEH
				nextLand: locations.BEZEE
				nextArrivalTime: "05/03/2017 10:00"
			},

			{
				type: "location"
				segmentNumber: 4
				duration: "09:00:00"
				segmentStart:"05/03/2017 00:00:00"
				segmentEnd:"05/03/2017 23:59:59"
				arrivalTime: "05/03/2017 10:00"
				backOnBoard: "05/03/2017 18:00"
				departureTime: "05/03/2017 19:00"
				location: locations.BEZEE
				nextLand: locations.NLRTM
				nextArrivalTime: "05/04/2017 08:00"
			},

			{
				type: "location"
				segmentNumber: 5
				duration: "24:00:00"
				segmentStart:"05/04/2017 00:00:00"
				segmentEnd:"05/05/2017 08:00:00"
				arrivalTime: "05/04/2017 08:00"
				backOnBoard: "05/05/2017 07:00"
				departureTime: "05/05/2017 08:00"
				location: locations.NLRTM
				nextLand: locations.DEHAM
				nextArrivalTime: "05/06/2017 08:00"
			},
			{
				type: "seaday"
				segmentNumber: 6
				segmentStart:"05/05/2017 07:01"
				segmentEnd:"05/05/2017 23:59"
				duration: "39:30:00"
				location: locations.XXSEA
				nextLand: locations.DEHAM
				nextArrivalTime:"05/06/2017 08:00"
			},
			{
				type:"offboarding"
				segmentNumber:7
				segmentStart:"05/06/2017 00:00"
				segmentEnd:"05/06/2017 09:59"
				arrivalTime:"05/06/2017 08:00"
				allFromBoard:"05/06/2017 10:00"
				duration:"08:00:00"
				location:locations.DEHAM
				nextLand:locations.DEHAM
			},
		],
	}
