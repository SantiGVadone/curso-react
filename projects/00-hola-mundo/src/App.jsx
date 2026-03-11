import './app.css'
import { TwitterFollowCard } from "./TwitterFollowCard";

// vamos a simular una db 
const users = [
    {
        id: 1,
        userName: 'midudev',
        name: 'Miguel Angel Duran',
        isFollowing: true
    },
    {
        id: 2,
        userName: 'vegetta777',
        name: 'Samuel De Luque',
        isFollowing: false
    },
    {
        id: 3,
        userName: 'elrubius',
        name: 'Rubén Doblas Gundersen',
        isFollowing: false
    }
]

export function App() {
    const format = (userName) => `@${userName}`

    return (
        <section className='App'>
        {
            users.map(({id, userName, name, isFollowing}) => (
                <TwitterFollowCard
                    key={id} //le tengo que mandar una key unica a cada elemento que se renderiza dentro de un map, para que react pueda identificar cada elemento y optimizar el renderizado
                    formatUserName={format} //le paso la funcion format como prop al componente TwitterFollowCard, para que el componente pueda usarla para formatear el userName
                    initialIsFollowing={isFollowing} //le paso el isFollowing como prop al componente TwitterFollowCard, para que el componente pueda usarlo para inicializar el estado de isFollowing
                    userName={userName} //le paso el userName como prop al componente TwitterFollowCard, para que el componente pueda usarlo para mostrar el avatar y el userName formateado
                >
                    {name} {/*le paso el name como children al componente TwitterFollowCard, para que el componente pueda usarlo para mostrar el nombre del usuario*/}
                </TwitterFollowCard>
            ))


        }
  </section>
    )
}