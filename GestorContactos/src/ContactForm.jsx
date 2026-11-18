import { useState } from "react";

export default function ContactForm({addContact}){
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");

    function handleSubmit(e){
        e.preventDefautl();

    }

    return(
        <form onSubmit={handleSubmit}>
            <imput type="text" placeholder="Nombre" value="name"/>

            
        </form>
    )
}