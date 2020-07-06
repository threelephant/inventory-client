import React from 'react'
import {
  UncontrolledDropdown, DropdownToggle,
  DropdownMenu, DropdownItem
} from 'reactstrap'

const DropdownPlace = () => {
  return (
    <UncontrolledDropdown nav inNavbar>
      <DropdownToggle nav caret>
        Добавление отделов и помещений
      </DropdownToggle>
      <DropdownMenu direction="left">
        <DropdownItem href="/">
          Добавление отделов
        </DropdownItem>
        <DropdownItem href="/">
          Добавление помещений
        </DropdownItem>
      </DropdownMenu>
    </UncontrolledDropdown>
  )
}

const DropdownReports = () => {
  return (
    <UncontrolledDropdown nav inNavbar>
      <DropdownToggle nav caret>
        Отчеты
      </DropdownToggle>
      <DropdownMenu direction="left">
        <DropdownItem href="/">
          Отчет по остаткам
        </DropdownItem>
        <DropdownItem href="/">
          Отчет по движениям
        </DropdownItem>
      </DropdownMenu>
    </UncontrolledDropdown>
  )
}

const DropdownInventory = () => {
  return (
    <UncontrolledDropdown nav inNavbar>
      <DropdownToggle nav caret>
        Инвентаризация
      </DropdownToggle>
      <DropdownMenu direction="left">
        <DropdownItem href="/inventory/add">
          Добавление инвентарной карточки
        </DropdownItem>
        <DropdownItem href="/">
          Изменение инвентарной карточки
        </DropdownItem>
      </DropdownMenu>
    </UncontrolledDropdown>
  )
}

const DropdownSearch = () => {
  return (
    <UncontrolledDropdown nav inNavbar>
      <DropdownToggle nav caret>
        Поиск
      </DropdownToggle>
      <DropdownMenu direction="left">
        <DropdownItem href="/">
          Поиск материальных обектов
        </DropdownItem>
        <DropdownItem href="/">
          Поиск отделов и помещений
        </DropdownItem>
      </DropdownMenu>
    </UncontrolledDropdown>
  )
}

export {
  DropdownPlace,
  DropdownInventory,
  DropdownReports,
  DropdownSearch
}