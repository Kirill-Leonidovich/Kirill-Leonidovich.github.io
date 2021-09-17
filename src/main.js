import { navigation, goAnimationTo } from './scripts/animation.js'
import { getMessengersData, getAutorInfo, getSkillsData, getAllRepository } from './scripts/request.js'

getMessengersData()
getAutorInfo()
getSkillsData()
getAllRepository()

navigation.addEventListener('click', goAnimationTo)