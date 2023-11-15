import { useRouteError } from "react-router-dom"


export default function Error(){

const error = useRouteError()
console.log(error)

    return (

        <>
           <pre>error: {error.data}</pre>
            
        </>
    )
}