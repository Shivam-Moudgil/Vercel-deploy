import { Box, HStack, Icon, Stack, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import Link from 'next/link'
import { IoHome } from 'react-icons/io5'
import { RxBorderSplit } from 'react-icons/rx'
import { RiProductHuntFill } from 'react-icons/ri'
import AdminBurgerNav from '../home/Admin.burgerNav'

const links = [
  { text: 'Dashboard', icon: IoHome, link: '/admin' },
  { text: 'Orders', icon: RxBorderSplit, link: '/admin/orders' },
  { text: 'Products', icon: RiProductHuntFill, link: '/admin/products' },
]

const AdminLoginNav = () => {
  const [isVisible, setIsVisible] = useState(false)
  const toggleSidebarVisiblity = () => setIsVisible(!isVisible)
  return (
    <HStack
      w="full"
      rounded={'14px'}
      h="80px"
      boxShadow={'xl'}
      justify={{ base: 'flex-end', md: 'center' }}
      bg="teal.400"
      px="18px"
      spacing={10}
    >
      {links.map((ele, ind) => (
        <HStack
          display={{ base: 'none', md: 'flex' }}
          cursor={'pointer'}
          key={new Date().getMilliseconds() + ind}
        >
          <Icon color="white" as={ele.icon} />
          <Link href={ele.link}>
            <Text fontWeight={700} fontSize={17} color="white">
              {ele.text}
            </Text>
          </Link>
        </HStack>
      ))}
      <HStack display={{ base: 'flex', md: 'none' }}>
        <AdminBurgerNav
          bg="white"
          isVisible={isVisible}
          toggleSidebarVisiblity={toggleSidebarVisiblity}
        />
      </HStack>
    </HStack>
  )
}

export default AdminLoginNav
