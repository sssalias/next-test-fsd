import { Button } from '@nextui-org/button'
import { Card, CardHeader, CardFooter, CardBody } from '@nextui-org/card'
import { Image } from '@nextui-org/image'
import { User } from '@nextui-org/user'

type Props = {
    img: string,
    title: string,
    author: string,
    authorImg: string,
    about: string
}

const CourseCard: React.FC<Props> = props => {
    return (
        <Card className='flex flex-col gap-2 min-w-3 p-[15px]'>
            <CardHeader>
                <Image
                    alt="Card background"
                    className="object-cover rounded-xl"
                    src={props.img}
                    height={300}
                />
            </CardHeader>
            <CardBody className='items-start gap-3'>
                <h4 className='text-[19px]'>{props.title}</h4>
                <User
                    name={props.author}
                    avatarProps={{
                        src: props.authorImg,
                        size: 'sm'
                    }}
                    className='text-base font-semibold'
                />
                <span className='text-xs text-primary-grey'>{props.about}</span>
            </CardBody>
            <CardFooter>
                <Button
                    color='primary'
                    variant='solid'
                    className='w-full font-semibold'
                >
                    Начать
                </Button>
            </CardFooter>
        </Card>
    )
}

export default CourseCard