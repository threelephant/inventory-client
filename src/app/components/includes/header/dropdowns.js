import React from 'react'
import {
  UncontrolledDropdown, DropdownToggle,
  DropdownMenu, DropdownItem
} from 'reactstrap'

const DropdownReports = () => {
  return (
    <UncontrolledDropdown nav inNavbar>
      <DropdownToggle nav caret>
        Отчеты
      </DropdownToggle>
      <DropdownMenu direction="left">
        <DropdownItem href="/report/balance">
          Отчет по остаткам
        </DropdownItem>
        <DropdownItem href="/report/motion">
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
        <DropdownItem href="/inventory/change">
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
        <DropdownItem href="/search/object">
          Поиск материальных обектов
        </DropdownItem>
        <DropdownItem href="/search/place">
          Поиск отделов и помещений
        </DropdownItem>
      </DropdownMenu>
    </UncontrolledDropdown>
  )
}

export {
  DropdownInventory,
  DropdownReports,
  DropdownSearch
}