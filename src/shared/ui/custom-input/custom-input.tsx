import { Input } from '@nextui-org/input'

type Props = {
	children: React.ReactNode
	type?: 'email' | 'password'
	label?: string
	placeholder?: string
	color?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger'
	variant?: 'flat' | 'bordered' | 'faded' | 'underlined'
	isDisabled?: boolean
	isInvalid?: boolean
	errorMessage?: string
}
const CustomInput: React.FC<Props> = props => {
	return <Input {...props} />
}

export default CustomInput
