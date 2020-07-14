/* eslint-disable eqeqeq */

const isValid = (item) => {
  const messages = []

  if (item.object_id === undefined 
    || !(item.object_id == parseInt(item.object_id))) {
      messages.push('Заполните инвентарный номер в правильном формате')
  }

  if (item.name === "" || item.name === undefined) {
    messages.push('Заполните название объекта')
  }

  if (item.barcode 
    && !(item.barcode == parseInt(item.barcode))) {
      messages.push('Заполните штрих-код в правильном формате')
  }

  if (item.division === "" || item.division === undefined) {
    messages.push('Заполните отдел')
  }

  if (item.placement === "" || item.placement === undefined) {
    messages.push('Заполните помещение')
  }

  return messages
}

export default isValid