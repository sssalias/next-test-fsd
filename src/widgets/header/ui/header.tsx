import { Navbar, NavbarContent, NavbarItem } from '@nextui-org/navbar'
import { Input } from '@nextui-org/input'
import { User } from '@nextui-org/user'

import { FaSearch, FaBell } from 'react-icons/fa'

import { Button } from '@nextui-org/button'


const Header: React.FC = () => {
    return (
        <Navbar className='bg-white z-[11] pl-[150px] py-3 shadow-sm' maxWidth='2xl' position='sticky'>
            <NavbarContent>
                <NavbarItem>
                     <Input
                        variant='bordered'
                        type='search'
                        placeholder='Search'
                        endContent={
                            <button>
                                <FaSearch/>
                            </button>
                        }  
                        className='w-[500px]'
                    />
                    </NavbarItem>
                </NavbarContent>
                <NavbarContent justify='end'>
                    <NavbarItem>
                        <Button color='secondary' variant='light' isIconOnly>
                            <FaBell size={18}/>
                        </Button>
                    </NavbarItem>
                    <NavbarItem>
                        <User
                            name='Анастасия Иванова'
                            description='Преподаватель'
                            avatarProps={{
                                src: 'https://i.pravatar.cc/150?u=a04258114e29026702d'
                            }}
                        />
                    </NavbarItem>
            </NavbarContent>
        </Navbar>
    )
}

export default Header