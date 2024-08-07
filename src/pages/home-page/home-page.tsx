import { Button } from '@/src/shared/ui'
import { Input } from '@/src/shared/ui/custom-input'

const HomePage: React.FC = () => {
	return (
		<div>
			<h1 className='text-midnight'>sosu</h1>
			<Button variant='solid' color='primary'>
				hello
			</Button>
			<Input
				label='hello'
				variant='bordered'
				isInvalid={true}
				errorMessage='Please enter a valid email'
				children={undefined}
			/>
		</div>
	)
}

export default HomePage
