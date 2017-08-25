{dpr} = require 'DevicePixelRatio'
npm = require 'npm'
moment = npm.moment

#submodules
{VenueCoverTile} = require 'CoverTile_Venue'
{SectionMainArticle} = require 'SectionMainArticle'
{SectionOpeningHours} = require 'SectionOpeningHours'
{SectionSimpleText} = require 'SectionSimpleText'
{SectionStaff} = require 'SectionStaff'
{SectionLocation} = require 'SectionLocation'
{SectionPopularTimes} = require 'SectionPopularTimes'
{SectionOverallRatings} = require 'SectionOverallRatings'
{BlueButton} = require 'BlueButton'

{IconButton} = require 'IconButton'


class exports.Venue extends Layer

	############################ CLASS EVENTS    ############################
	Events.purchaseClicked = "Venue.purchaseClicked"
	Events.menuClicked = "Venue.menuClicked"
	Events.closeClicked = "Venue.closeClicked"

	############################ CONSTRUCTOR    ############################
	constructor: (@options = {}) ->
		@options.venue 										?= ""
		@options.pageMargin								?= dpr 24
		@options.bookable									?=	true
		@options.testDate									?= moment("05/03/2017 8:30")

		super @options


		@.backgroundColor = "white"
		# @.style =
		# 	"background-image": "url('modules/moduleImages/interface/img_underConstruction.png')"
		# 	"background-repeat":"no-repeat"
		# 	"background-position": "center"
		# 	"background-size" : "#{dpr 90}px #{dpr 90}px"

		coverImage = new VenueCoverTile
			name:"CoverTile"
			size:@.size
			venue:@options.venue
			parent:@

		detailScroll = new ScrollComponent
			name:"venueScrollView"
			size:@.size
			scrollHorizontal: false
			parent:@

		bookableMargin = @options.pageMargin

		contentContainer = new Layer
			name:"detailContentContainer"
			width:@.width
			height:@.height
			backgroundColor: "white"
			y:@.height
			parent:detailScroll.content





		if @options.bookable

			purchaseButton = new BlueButton
				buttonText:"Jetzt Buchen"
				parent:@
				name:"purchaseButton"
				pageMargin:0
				width:@.width
				outlineStyle:false
				shadowY: dpr(-1)
				shadowSpread:dpr(1)
				shadowBlur:dpr(2)

			purchaseButton.y = Align.bottom()
			bookableMargin = bookableMargin + purchaseButton.height

			purchaseButton.on Events.Click, =>
				@emit(Events.purchaseClicked, @)

		else
				contentContainer.shadowY =  dpr(-1)
				contentContainer.shadowSpread = dpr(1)
				contentContainer.shadowBlur = dpr(2)





		itemDescription = new SectionMainArticle
			name:"itemDescription"
			parent:contentContainer
			width:Screen.width
			articleTitle:@options.venue.tagline
			articleContent:@options.venue.description



		menuButton = new BlueButton
			buttonText:"Speisekarte"
			width:Screen.width
			name:"menuButton"
			y:itemDescription.maxY + @options.pageMargin
			pageMargin:@.pageMargin
			outlineStyle:true
			parent:contentContainer
		#
		menuButton.on Events.Click, =>
			@emit(Events.menuClicked, @)


		openingHours = new SectionOpeningHours
			parent:contentContainer
			name:"OpeningHours"
			testDate:@options.testDate
			width:@.width
			x:@.pageMargin
			sectionLabel:"Öffnungszeiten"
			venue:@options.venue
			hasStroke:true
			y:menuButton.maxY


		inclusive = new SectionSimpleText
			sectionLabel:@options.venue.includedInPrice.title
			sectionContent:@options.venue.includedInPrice.content
			name:"WhatsIncluded"
			hasStroke:true
			parent:contentContainer
			width:@.width
			x:0
			y:openingHours.maxY

		exclusive = new SectionSimpleText
			sectionLabel:@options.venue.excludedInPrice.title
			sectionContent:@options.venue.excludedInPrice.content
			name:"WhatsNotIncuded"
			hasStroke:true
			parent:contentContainer
			width:@.width
			x:0
			y:inclusive.maxY

		if @options.venue.staff
			staff = new SectionStaff
				staffList:@options.venue.staff.content
				width:@.width
				name:"StaffList"
				sectionLabel:"Ihre Crew im #{@options.venue.name}"
				hasStroke:true
				parent:contentContainer
				y:exclusive.maxY


		location = new SectionLocation
			width:Screen.width
			parent:contentContainer
			y:staff.maxY

		popTimes = new SectionPopularTimes
			width:Screen.width
			parent:contentContainer
			y:location.maxY
			hasStroke:true
			sectionLabel:"Beliebte Besuchszeiten"

		overallRatings = new SectionOverallRatings
			width:Screen.width
			parent:contentContainer
			y:popTimes.maxY
			hasStroke:true
			sectionLabel:"Kundenbewertung"
			rating:@options.venue.rating
			ratingCount:@options.venue.numRatings



		contentContainer.height = contentContainer.subLayers[contentContainer.subLayers.length - 1].maxY + bookableMargin

		detailScroll.updateContent()

		navigationTint = new Layer
			width:@.width
			height:dpr 100
			x:0
			y:0
			backgroundColor:"pink"
			parent:@

		navigationTint.style.background =
			"linear-gradient(rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.3) 60%, rgba(0,0,0,0) 100%)"


		## close button ##
		closeButton = new IconButton
			icon:"back"
			name:"back"

			x:dpr 8
			y:dpr 44
			parent:@

		closeButton.origY = closeButton.y
		closeButton.origX = closeButton.x

		closeButton.onClick =>
			@emit(Events.closeClicked, @)

# # parallax and scroll behaviors
		detailScroll.onMove ->
			#cover image
			coverImage.y = Utils.modulate(detailScroll.scrollY, [0, 600],[0,-100])
			coverImage.scale = Utils.modulate(detailScroll.scrollY, [-1,-1200],[1,1.3], true)
			navigationTint.opacity = 0


			#back button
			closeButton.opacity = Utils.modulate(detailScroll.scrollY, [800, 1200],[1,0])
			navigationTint.opacity = Utils.modulate(detailScroll.scrollY, [800,1200], [1,0])
			closeButton.y = Utils.modulate(detailScroll.scrollY, [1200, 1800],[dpr(44), -40],true)



			if detailScroll.scrollY < 0
				coverImage.y = 0



## /// THE CSS ##




		css = """






			"""
		Utils.insertCSS(css)

# /// METHODS


## /// GETTERS / SETTERS ##
	@define 'venue',
			get: ->
				if @options.venue == ""
					console.log("No venue defined for venue template")
				else
					@options.venue
			set: (value) ->
				@options.venue = value

	@define 'pageMargin',
			get: ->
				@options.pageMargin
			set: (value) ->
				@options.pageMargin = value

	@define 'bookable',
			get: ->
				@options.bookable
			set: (value) ->
				@options.bookable = value

	@define 'testDate',
			get: ->
				@options.testDate
			set: (value) ->
				@options.testDate = value
