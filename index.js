// Create the playable character
const pc = newPlayableCharacter(100, 110)

// Create a non-playable character
const npc = newNonPlayableCharacter(150, 800)

// have the NPC start walking east immediately
async function moveNPC(){
    
    await npc.walkSouth(1500)
    
}
moveNPC()

// Create the inventory
