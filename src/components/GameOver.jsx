import './GameOver.css'

const GameOver = ({retry, score}) => {

    return(
        <div>
            <h2>Fim de jogo</h2>
            <h3>
                A sua pontuação foi: <span>{score}</span>
            </h3>
            <button onClick={retry}>Resetar jogo</button>
        </div>
    )
}

export default GameOver