export default function TapButton({ children, onSelected }) {
    return (
        <li>
            <button onClick={onSelected}>{children}</button>
        </li>
    )
}