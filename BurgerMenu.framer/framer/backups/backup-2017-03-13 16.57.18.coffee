### INCLUDES ###

{dpr} = require 'DevicePixelRatio'

{BurgerMenu} = require 'BurgerMenu'
{burgerData} = require 'burgerData'



hello = new BurgerMenu
	name: "burgerMenuContainer"
	basicData: burgerData
	width: Screen.width



print hello.width





