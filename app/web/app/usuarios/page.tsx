export default async function UsuariosIndex() {
    const response = await fetch("http://localhost:3000/usuarios", {
    cache: "no-cache",
    });
    const data = await response.json();
    return <div>{JSON.stringify(data)}</div>;
    }