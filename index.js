// Create a non-playable character
const npc = newNonPlayableCharacter(150, 800)

// have the NPC start walking east immediately
function moveNPC(){
    
    npc.walkSouth(1500)
    
}
moveNPC()

// Create the inventory
const ltw = laserTwo(350, 800)

function moveLTW(){
    
    npc.walkSouth(1500)
    
}
moveLTW()