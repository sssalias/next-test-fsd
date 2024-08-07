import { Container, Wrapper } from '@/src/shared/ui'

import { Navbar, NavbarContent, NavbarItem } from '@nextui-org/navbar'
import { Input } from '@nextui-org/input'
import { User } from '@nextui-org/user'

import { FaSearch, FaBell } from 'react-icons/fa'

import { Button } from '@nextui-org/button'


const Header: React.FC = () => {
    return (
        <header className='shadow-md'>
            <Container>
                <Wrapper className='py-3'>
                    <Navbar maxWidth='full'>
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
                </Wrapper>
            </Container>
        </header>
    )
}

export default Header