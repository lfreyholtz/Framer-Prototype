npm = require 'npm'
moment = npm.moment
{dpr} = require 'DevicePixelRatio'
testDate = moment("04/30/2017 12:30")
# venueData = data_eatdrinknightlife.marktrestaurant
# {TopicPage} = require 'topicPage'
{ImageList} = require 'Template_imageList'


tempList = [
	{
		name:"item_01"
		image:"modules/moduleImages/itinerary/southampton/img_london_day.png"
	},
	{
		name:"item_02"
		image:"modules/moduleImages/itinerary/hamburg/img_hamburg_dusk.png"
	},
	{
		name:"item_03"
		image:"modules/moduleImages/itinerary/rotterdam/img_rotterdam_dawn.jpg"
	},
	{
		name:"item_04"
		image:"modules/moduleImages/itinerary/lehavre/img_lehavre_dawn.jpg"
	},
	{
		name:"item_05"
		image:"modules/moduleImages/itinerary/zeebrugge/img_brussels_day.png"
	}]
	
# print tempList[0].name
lewslist = new ImageList
	size:Screen.size
	list:tempList
	
# ### STUB ###
# list = tempList
# numItems = list.length
# featureHeight = dpr 300
# compactHeight = dpr 100
# scrollDist = dpr 180
# cards = []
# 
# 
# ############################ LAYER STRUCTURE ########################################
# cardMaster = new Layer
# 	width:Screen.width
# 	height:compactHeight
# 	name:"cardContainer"
# 	backgroundColor:"pink"
# # 	parent:@
# 
# pages = new PageComponent
# 	scrollHorizontal:false
# 	name:"pagesContainer"
# 	width:Screen.width
# 	backgroundColor:"transparent"
# 	height:scrollDist
# 	clip:false
# # 	parent:@
# a
# 
# 
# 
# newY = 0
# for item, i in list
# 	if i == 0
# 		firstHeight = featureHeight
# 	else
# 		firstHeight = compactHeight
# 	
# 	# listItem = @options.list[i]
# 	
# 	card = new Layer
# 		width:Screen.width
# 		height:firstHeight
# 		image:item.image
# 		name:item.name
# 		html:"#{item.name}"
# 		parent:cardMaster
# 		originY: 1
# 	
# 		y:newY
# 	card.sendToBack()
# 	cards.push(card)
# 	
# 	newY = newY + firstHeight
# 	
# 	page = new Layer
# 		height:scrollDist
# 		width:Screen.width
# 		backgroundColor:"transparent"
# 	
# 	
# 	pages.addPage(page, "bottom")
# 
# pages.onMove ->
# 
# 	# scroll behavior
# 	maxIndex = cardMaster.children.length
# 	currentCellIndex = pages.scrollY / scrollDist
# 
# 	topFeatureIndex = Math.max(Math.floor(currentCellIndex),0)
# 
# 	indexPercent = (currentCellIndex % 1).toFixed(2)
# 	print "currentCellIndex: #{currentCellIndex}"
# 	print "topFeatureIndex: #{topFeatureIndex}"
# 	print "percent travelled: #{indexPercent}"
# 
# 	compactToFeature = Utils.modulate(indexPercent, [0,1], [compactHeight,featureHeight], true)
# 	
# 	amountToGrow = Math.max((featureHeight - compactHeight) *indexPercent, 0);
# 	newHeight = compactHeight + amountToGrow;
# 	print "newHeight: #{newHeight}"
# 	
# 	print "grow :#{compactToFeature}"
# 
# 	for card, i in cards
# 		if i == topFeatureIndex
# 			card.height = Utils.modulate(indexPercent, [0,1], [featureHeight, compactHeight], true)	
# 			card.y = Utils.modulate(indexPercent, [0,1], [0, -compactHeight])
# 			
# 		if i == topFeatureIndex + 1 && i < numItems
# 			card.height = Utils.modulate(indexPercent, [0,1], [compactHeight, featureHeight], true)
# 			card.y = Utils.modulate(indexPercent, [0,1], [featureHeight, 0], true)
# 	
# 			# featured card
# 
# 	
# 
# 	
# 
# 	
# 
# 
# 
# 
# 	
