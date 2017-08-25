### INCLUDES ###

{dpr} = require 'DevicePixelRatio'

{BurgerMenu, testlayer} = require 'BurgerMenu'
{burgerData} = require 'burgerData'



hello = new BurgerMenu
	name: "burgerMenuContainer"
	basicData: burgerData
	width: Screen.width



print hello.width


print Framer.Device.screen.height
print burgerScroller.content.maxY