### INCLUDES ###

{dpr} = require 'DevicePixelRatio'

{topicPage} = require 'topicPage'
{topics} = require 'topics'

{BurgerMenu} = require 'BurgerMenu'
{burgerData} = require 'burgerData'




hello = new topicPage
	size:Screen.size
# 	topicTitle: topics.events.title
# 	topicSubtitle: topics.events.subtitle
	topicCategories: topics.categories
	name: "topicPage"
	hasPromotion: true
# 	hasPromotion: false

	topicData: topics.wellness

# print topicCatLink3.maxY