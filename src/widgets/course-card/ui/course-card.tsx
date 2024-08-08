import { Button } from '@/src/shared/ui'

// TODO: Переделай компонент карточтки:
// 		1) Чекни nextUi card;
// 		2) Она должна быть выстроена по относительным величинам, => 
// 			юзай padding, чтобы не писать для карточки отдельные media quries.
// 			Избегай в таких случаях использования  фиксированных величин.
// 		3) Наша карточка должна быть описана по сущности, т.е мы создаём её не в слое widgets, а в слое entities: 
// 			- создаёшь срез model, там описываешь имплементацию карточки, т.е interface и поля, которые карточка содержит
// 			- создаёшь срез ui, там описываешь код карточки + пропсы, которые построены по interface (это нужно, ведь наша карточка только отображает данные и не более)
//


const CourseCard: React.FC = () => {
	return (
		// Юзай next ui - https://nextui.org/docs/components/card
		<div>
			<div className='m-16 w-[347px] h-[488px] p-[15px] shadow-xl rounded-md bg-white'>
				<img
					src='https://www.linearity.io/blog/content/images/2024/03/motion-design-cover.png'
					alt='logo'
					className='w-[320px] h-[295px] rounded-small '
				/>
				<h5 className='mt-[22px]'>Курс Motion Design Базовый</h5>
				<div className='flex items-center pt-[5px] gap-[7px]'>
					<img
						src='https://sun9-78.userapi.com/impg/EB5_hmZLWEbkKVY_CJy_Q0c39NWpuHM_RZ-kgA/kr9Sf-j1crA.jpg?size=640x640&quality=96&sign=63a45be804662760b0d083b3b01f5b05&type=album'
						alt='avatar'
						className='w-5 h-5 rounded-full'
					/>
					{/* Без margins, юзай flexbox */}
					<div className='flex flex-col items-center'>
						<div className='w-full '></div>
						<p className='text-large mt-[2px] font-semibold'>Mr. Kowlad</p>
					</div>
				</div>
				<p className='text-large'>Курс по Motion Design для начинающих</p>
				<div>
					<Button
						variant='solid'
						color='primary'
						className='w-full h-[34px] mt-[22px] text-large text-white'
					>
						Начать
					</Button>
				</div>
			</div>
		</div>
	)
}

export default CourseCard
