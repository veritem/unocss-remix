import { Link } from "remix";

export default function About() {
    return <section className="bg-green">
        <h1>About page</h1>
        <Link to="/" className="text-blue">Back</Link>
    </section>
}
