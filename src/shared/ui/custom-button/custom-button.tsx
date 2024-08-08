import { Button } from '@nextui-org/button'

type Props = {
	children: React.ReactNode
	variant: 'solid' | 'bordered' | 'light'
	color?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger'
	isDisabled?: boolean
	isIconOnly?: boolean
	className?: string
}
const CustomButton: React.FC<Props> = props => {
	return <Button {...props} />
}

export default CustomButton
