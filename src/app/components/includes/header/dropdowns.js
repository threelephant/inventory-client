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
        <DropdownItem href="/place/division">
          Добавление отделов
        </DropdownItem>
        <DropdownItem href="/place/placement">
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
        <DropdownItem href="/object/search">
          Поиск материальных обектов
        </DropdownItem>
        <DropdownItem href="/place/search">
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