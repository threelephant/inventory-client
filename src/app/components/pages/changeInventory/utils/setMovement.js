const setMovement = (newItem, item) => {
  let newMovement = newItem.movement
  let newMovementInfo = newItem.movement_info
  if (newItem.movement === "" || newItem.movement === undefined) {
    newMovement = item.movement
  }
  if (newItem.movement_info === "" || newItem.movement_info === undefined) {
    newMovementInfo = item.movement_info
  }
  return { newMovement, newMovementInfo }
}

export default setMovement