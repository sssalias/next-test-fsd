import { PageTitle } from '@/src/shared/ui'
import { CoursesList } from '@/src/widgets/courses-list'

const HomePage: React.FC = () => {


	return (
		<>
			<PageTitle>Курсы</PageTitle>
			<CoursesList/>
		</>
	)
}

export default HomePage
