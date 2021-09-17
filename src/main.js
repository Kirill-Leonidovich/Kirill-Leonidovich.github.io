import {} from './scripts/UI/showText.js'

import { navigation, goAnimationTo } from './scripts/UI/smoothNavigation.js '
import { getMessengersData, getAutorInfo, getSkillsData, getAllRepository } from './scripts/request.js'

getMessengersData()
getAutorInfo()
getSkillsData()
getAllRepository()

navigation.addEventListener('click', goAnimationTo)