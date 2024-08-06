'use client'

import { Container, Wrapper } from "@/src/shared/ui"

const Header: React.FC = () => {
    return (
        <header>
            <Container>
                <Wrapper className='py-5'>
                    <h1 className='text-2xl text-red-500'>Hello, world!</h1>
                </Wrapper>
            </Container>
        </header>
    )
}

export default Header