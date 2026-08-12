import Part from './Part'

export default function Content({ parts }) {
    return (
        <>
            {parts.map((part) => (
                <Part key={part.name} name={part.name} exercises={part.exercises} />
            ))}
        </>
    )
}