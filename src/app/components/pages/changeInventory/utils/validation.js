const isValid = (item, newItem) => {
  const messages = []

  if (item.object_id === "" || item.object_id === undefined) {
    messages.push('Заполните инвентарный номер')
  }

  if (newItem.division === "" || newItem.division === undefined) {
    messages.push('Заполните отдел')
  }

  if (newItem.placement === "" || newItem.placement === undefined) {
    messages.push('Заполните помещение')
  }

  return messages
}

export default isValid