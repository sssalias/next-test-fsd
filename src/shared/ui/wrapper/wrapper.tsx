import classNames from "classnames"

type Props = {
    children: React.ReactNode,
    className?: string
}
const Wrapper: React.FC<Props> = props => {
    return (
        <div className={classNames('w-full h-full', props.className)}>
            {props.children}
        </div>
    )
}

export default Wrapper