import { Header } from "../components/Header";

export function NotFound({cart}){
    return (
        <>
            <Header cart={cart}/>
            <br />
            <br />
            <br />
            <h1>
                PAGE NOT FOUND
            </h1>
        </>
    );
}