export default function Button({ children, variant }) {
    return  <button className={"button " + variant}> {children}</button>
}