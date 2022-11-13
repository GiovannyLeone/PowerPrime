import type { NextPage } from 'next'
import { useState } from 'react'
import stylesForm from './Form.module.scss'
import 'animate.css';


const MainContact: NextPage = () => {
    const [email, setEmail]     = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')
    const [success, setSuccess] = useState(false)
    const [error, setError]      = useState(false)

    const onChangeEmail = (e: any) => {
        setEmail(e.target.value)
    }

    const onChangeSubject = (e: any) => {
        setSubject(e.target.value)
    }

    const onChangeMessage = (e: any) => {
        setMessage(e.target.value)
    }

    const sendMessage = async (e: any) => {
        e.preventDefault()

        //testando se existe valores no campos
        if (email && subject !== "default" && message) {
            //testando se tamanho dos campos
            if (email.length > 3 && message.length > 3) {
                //testando o que está escrito nos campos
                if (!(email.search( /\s/g ) != -1)) {
                    const url: string = "http://localhost/back-end-powerprime/api/model/sendMessage.php"
                    const data: string = JSON.stringify({
                        email: email,
                        subject: subject,
                        message: message
                    })
            
                    await fetch(url, {
                        method: 'POST',
                        mode: 'no-cors',
                        headers: {
                            Accept: 'application/json',
                            'Access-Control-Allow-Origin': '*',
                            'Content-type': 'application/json'
                        },
                        body: data
            
                    }).then(function reqDone(res: any) {
                        console.log(res);
                        if (res.error !== undefined) {
                            return false
                        }
                        if (res.sendEmail !== undefined) {
                            console.log(email, subject, message);
                            return false
                        }
            
                        setSuccess(true)
                        /* 
                        console.log(email, subject, message); 
                        
                        return false
                        */
                    })

                } else{
                    setError(true)
                }
            } else {
                setError(true)
            }
        } else {
            setError(true)
        }

    }

    return (
        <>
            <form id={stylesForm.form} method='POST'>
                <label htmlFor="emailUser">Email</label>
                <input type="email" name='emailUser' value={email} id='emailUser' onChange={onChangeEmail} />

                <label htmlFor="subjectMessage">Assunto</label>
                <select name="subjectMessage" id="subjectMessage" onChange={onChangeSubject}>
                    <option value="default">Selecione Um Assunto</option>
                    <option value="orcamento">Orçamento</option>
                </select>

                <label htmlFor="message">Mensagem</label>
                <textarea name="textByUser" id="textByUser" value={message} onChange={onChangeMessage} cols={30} rows={10}></textarea>
                <span>
                    <button id={stylesForm.sendMessage} onClick={sendMessage}>Enviar</button>
                </span>
                {success && <p>E-mail enviado com sucesso!</p>}
                {error && <p>E-mail invalido ou mensagem invalida</p>}
            </form>
        </>
    )
}


export default MainContact