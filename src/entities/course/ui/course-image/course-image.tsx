import Image from 'next/image'

type Props = {
    imageSrc: string
}
const CourseImage: React.FC<Props> = props => {
    return (
        <div>
            {/* <Image
                src={props.imageSrc}
                key={props.imageSrc}
                alt='course image'
                fill
            /> */}
        </div>
    )
}

export default CourseImage