import { Container, Wrapper } from '@/src/shared/ui'

const Aside: React.FC = () => {

    const navigation = [
        {
            route: '/',
            label: 'Статистика'
        },
        {
            route: '/',
            label: 'Статистика'
        },
        {
            route: '/',
            label: 'Статистика'
        },
        {
            route: '/',
            label: 'Статистика'
        },
        {
            route: '/',
            label: 'Статистика'
        },
        {
            route: '/',
            label: 'Статистика'
        },
        {
            route: '/',
            label: 'Статистика'
        },
    ]

    return (
        <aside className='w-[250px] absolute'>
            <Container>
                <Wrapper className='flex flex-col'>
                    {/* brand */}
                    <div className=''>
                        {/* logo */}
                        <div className=''></div>
                        <h1 className='uppercase'>неясыть</h1>
                    </div>
                    {/* content */}
                    <div className=''>
                        <nav>

                        </nav>
                    </div>
                </Wrapper>
            </Container>
        </aside>
    )
}

export default Aside