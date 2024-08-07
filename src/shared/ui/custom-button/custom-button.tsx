import { Button } from '@nextui-org/button'

type Props = {
    children: React.ReactNode,
    variant: 'solid' | 'bordered' | 'light',
    color?: 'primary' | 'secondary'
    isDisabled?: boolean,
    isIconOnly?: boolean,
}
const CustomButton: React.FC<Props> = props => {
    return (
        <Button {...props}/>
    )
}

export default CustomButton