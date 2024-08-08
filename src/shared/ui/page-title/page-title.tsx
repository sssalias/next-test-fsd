type Props = {
    children: React.ReactNode    
}

const PageTitle: React.FC<Props> = props => {
    return (
        <h2 className='font-bold'>{props.children}</h2>
        
    )
}

export default PageTitle