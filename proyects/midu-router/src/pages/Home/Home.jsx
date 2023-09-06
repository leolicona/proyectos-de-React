import Link from "../../components/Link/Link"
export default function Home() {
    return (
        <>
        <p>Esta es la home</p>
        <Link to="/about">Ir a Sobre mi</Link>
        {/* <button onClick={() => navigateTo('/about')}> Ir a Sobre mi</button> */}
        </>
    )
}