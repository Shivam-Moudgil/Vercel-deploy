import { Box, Icon } from '@chakra-ui/react'
import React from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import AdminSidebar from './Admin.sidebar'

const AdminBurgerNav = ({ toggleSidebarVisiblity, isVisible, bg }) => {
  return (
    <>
      <Icon
        cursor={'pointer'}
        onClick={toggleSidebarVisiblity}
        fontSize={20}
        as={GiHamburgerMenu}
      />
      {isVisible && <AdminSidebar bg={bg} />}
    </>
  )
}

export default AdminBurgerNav
