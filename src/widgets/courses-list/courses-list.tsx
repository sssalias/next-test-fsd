import { CourseCard } from '@/src/entities/course'

const CoursesList: React.FC = () => {


	const courses = [
		{
			img: 'https://nextui.org/images/hero-card-complete.jpeg',
			title: 'Курс Motion Design Базовый',
			author: 'Mr.Kowlad',
			authorImg: 'https://i.pravatar.cc/150?u=a04258114e29026702d',
			about: 'Курс по Motion Design для начинающих'
		},
		{
			img: 'https://nextui.org/images/hero-card-complete.jpeg',
			title: 'Курс Motion Design Базовый',
			author: 'Mr.Kowlad',
			authorImg: 'https://i.pravatar.cc/150?u=a04258114e29026702d',
			about: 'Курс по Motion Design для начинающих'
		},
		{
			img: 'https://nextui.org/images/hero-card-complete.jpeg',
			title: 'Курс Motion Design Базовый',
			author: 'Mr.Kowlad',
			authorImg: 'https://i.pravatar.cc/150?u=a04258114e29026702d',
			about: 'Курс по Motion Design для начинающих'
		},
		{
			img: 'https://nextui.org/images/hero-card-complete.jpeg',
			title: 'Курс Motion Design Базовый',
			author: 'Mr.Kowlad',
			authorImg: 'https://i.pravatar.cc/150?u=a04258114e29026702d',
			about: 'Курс по Motion Design для начинающих'
		},
		{
			img: 'https://nextui.org/images/hero-card-complete.jpeg',
			title: 'Курс Motion Design Базовый',
			author: 'Mr.Kowlad',
			authorImg: 'https://i.pravatar.cc/150?u=a04258114e29026702d',
			about: 'Курс по Motion Design для начинающих'
		},
		{
			img: 'https://nextui.org/images/hero-card-complete.jpeg',
			title: 'Курс Motion Design Базовый',
			author: 'Mr.Kowlad',
			authorImg: 'https://i.pravatar.cc/150?u=a04258114e29026702d',
			about: 'Курс по Motion Design для начинающих'
		}
	]

    return (
        <div className='grid grid-cols-4 gap-6'>
            {courses.map(el => <CourseCard img={el.img} title={el.title} author={el.author} authorImg={el.authorImg} about={el.about}/>)}
        </div>
    )
}

export default CoursesList