'use client'

import { Container, Logo, Wrapper } from '@/src/shared/ui'
import Link from 'next/link'

import { AiFillAppstore, AiFillMessage, AiFillSetting } from 'react-icons/ai'

import { FaBook, FaUser, FaArrowLeft, FaArrowRight } from 'react-icons/fa'

import { PiChalkboardTeacherFill } from 'react-icons/pi'

import { GiAchievement } from 'react-icons/gi'
import { useState } from 'react'
import clsx from 'clsx'
 
const Aside: React.FC = () => {

    const navigation = [
        {
            route: '/',
            label: 'Статистика',
            icon: <AiFillAppstore size={18}/>,
        },
        {
            route: '/',
            label: 'Профиль',
            icon: <FaUser size={18}/>
        },
        {
            route: '/',
            label: 'Преподавание',
            icon: <PiChalkboardTeacherFill size={18} />
        },
        {
            route: '/',
            label: 'Курсы',
            icon: <FaBook size={18}/>
        },
        {
            route: '/',
            label: 'Достижения',
            icon: <GiAchievement size={18}/> 
        },
        {
            route: '/',
            label: 'Сообщения',
            icon: <AiFillMessage size={18}/> 
        },
        {
            route: '/',
            label: 'Настройки',
            icon: <AiFillSetting size={18}/> 
        }
    ]


    const [isOpen, setOpen] = useState(true)

    return (
        <aside className={clsx('fixed h-full z-[15] shadow-md bg-white transition-all',isOpen ? 'w-[250px]' : 'w-[75px]')}>
            <Container className='w-3/4'>
                <Wrapper className='flex flex-col justify-between items-center'>
                    {/* brand */}
                    <div className='py-3'>
                        {/* logo */}
                        <Logo isIconOnly={!isOpen}/>
                    </div>
                    {/* content */}
                    <div className='w-full relative'>
                        <button onClick={() => setOpen(!isOpen)} className='absolute right-[-45px] top-[45px] text-primary-grey p-2 rounded-xl shadow-md bg-white'>
                            <i>{isOpen ? <FaArrowLeft/> : <FaArrowRight/>}</i>
                        </button>
                        <nav>
                            <ul className='flex flex-col items-center'>
                                {navigation.map(el => (
                                    <li key={el.label} className='w-full rounded-xl hover:bg-gray-100'>
                                        <Link href={el.route} className='flex items-center gap-4 py-4 px-5 w-full text-primary-grey'>
                                            <i>{el.icon}</i>
                                            {isOpen ? <span className='text-sm font-semibold'>{el.label}</span> : null}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>
                </Wrapper>
            </Container>
        </aside>
    )
}

export default Aside