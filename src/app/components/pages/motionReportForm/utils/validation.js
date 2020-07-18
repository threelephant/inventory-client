/* eslint-disable eqeqeq */
const Valid = (item) => {
  const messages = []

  if (item.object_id === undefined 
    || !(item.object_id == parseInt(item.object_id))) {
      messages.push('Заполните инвентарный номер в правильном формате')
  }

  if (item.begin === undefined || item.begin === "") {
    messages.push('Заполните начальную дату')
  }

  if (item.end === undefined || item.end === "") {
    messages.push('Заполните конечную дату')
  }

  if (item.begin > item.end && item.begin !== "" && item.end !== "") {
    messages.push('Конечная дата раньше начальной даты')
  }

  return messages
}

export default Valid