type Props = {
    children: React.ReactNode
}
const Container: React.FC<Props> = props => {
    return (
        <div className='container mx-auto w-3/4'>
            {props.children}
        </div>
    )
}

export default Container