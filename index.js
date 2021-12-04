// import {} from './src/scripts/UI/showText.js'
import { navigation, goAnimationTo } from './src/scripts/UI/smoothNavigation.js'
import { getMessengersData, getAutorInfo, getSkillsData, getAllRepository } from './src/scripts/request.js'
import { setNavLinks } from './src/scripts/createNav.js'


window.addEventListener('load', () =>{
  setNavLinks()
  getMessengersData()
  getAutorInfo()
  getSkillsData()
  getAllRepository()
  
  navigation.addEventListener('click', goAnimationTo)
})