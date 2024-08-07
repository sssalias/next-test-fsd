import { Button } from '@nextui-org/button'

type Props = {
    children: React.ReactNode,
    variant: 'solid' | 'bordered',
    isDisabled?: boolean
}
const CustomButton: React.FC<Props> = props => {
    return (
        <Button color='primary' {...props}/>
    )
}

export default CustomButton