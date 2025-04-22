export const Contato = () => { 

return ( 

        <div>
            <form action="">

                <label htmlFor="nome">Nome:</label>
                <input type="text" id="nome" name="nome" required />

                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />

                <label htmlFor="mensagem">Mensagem:</label>
                <textarea id="mensagem" name="mensagem" required></textarea>

                <button type="submit">Enviar</button>
            </form>
        </div>
) 

}