import clsx from 'clsx'

type Props = {
    children: React.ReactNode,
    className?: string
}
const Container: React.FC<Props> = props => {
    return (
        <div className={clsx('container mx-auto w-3/4 h-full', props.className)}>
            {props.children}
        </div>
    )
}

export default Container