import estilo from './Post.module.css'


function Post(){
    return(
        <div className={estilo.principal}>
            <p className={estilo.Letra}> 
                9 * 9 = 81
            </p>
            <p className={estilo.Calculadora}>
                Calculadora
            </p>
        </div>

    )
}

export default Post;