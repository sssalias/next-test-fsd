import clsx from 'clsx'

type Props = {
    children: React.ReactNode
    className?: string
}
const Wrapper: React.FC<Props> = props => {
    return (
        <div className={clsx('w-full h-full', props.className)}>
            {props.children}
        </div>
    )
}

export default Wrapper