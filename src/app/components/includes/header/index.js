import React, { useState } from 'react'
import {
  Collapse, Nav, Navbar, NavbarToggler,
  NavbarBrand, NavItem, NavLink
} from 'reactstrap'
import {
  DropdownInventory,
  DropdownReports, DropdownSearch
} from './dropdowns'

const NavbarLinks = () => {
  return (
    <Nav className="mr-auto" navbar>
      <DropdownInventory />
      <DropdownReports />
      <DropdownSearch />
      <NavItem>
        <NavLink href="/place">
          Добавление отделов и помещений
        </NavLink>
      </NavItem>
    </Nav>
  )
}

const NavBody = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => setIsOpen(!isOpen)

  return (
    <div>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <NavbarLinks />
      </Collapse>
    </div>
  )
}

const Header = () => {
  return (
    <Navbar color="dark" dark expand="md" className="mb-4">
      <NavbarBrand href="/">Inventory System</NavbarBrand>
      <NavBody />
    </Navbar>
  )
}

export default Header