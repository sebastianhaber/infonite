import { Heading } from '../../utils/Heading'
export default function Template({ children, title, className, description }) {
    return (
        <div className={className}>
            <Heading>
                <h1>{ title }</h1>
                <p>{ description }</p>
            </Heading>
            {children}
        </div>
    )
}