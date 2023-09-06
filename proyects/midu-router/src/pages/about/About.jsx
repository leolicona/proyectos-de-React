import Link from "../../components/Link/Link";

export default function About({navigateTo}) {
    return (
        <>
        <img src="https://0.gravatar.com/avatar/5363f9c195bc3fcba00d0361f08e7b05ece1aa862823fa6e497c18c588f4fadd?size=128" alt="" />
        <p>Hola, soy Leo Licona y sigo el curso de midu para crear un rect router desde 0 </p>
        <Link to="/">Ir al Home</Link>
        {/* <button onClick={() => navigateTo('/')}> Ir al Home</button> */}
        </>
    )
}