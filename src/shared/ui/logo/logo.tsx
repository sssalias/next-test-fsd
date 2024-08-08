import Image from 'next/image'
import logoImg from '@/src/shared/assets/icons/logo.png'

type Props = {
    isIconOnly?:boolean
}

const Logo: React.FC<Props> = props => {
    return (
        <div className='flex items-center gap-2 h-[70px]'>
            <Image
                src={logoImg}
                alt='logo'
            />
            {!props.isIconOnly ? <h1 className='text-[29px] uppercase text-base-900'>Неясыть</h1> : null}
        </div>
    )
}

export default Logo