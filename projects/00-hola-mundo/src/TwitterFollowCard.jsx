import { useState } from "react"

export function TwitterFollowCard ({children ,formatUserName, userName, initialIsFollowing}) { 
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing)

    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }




    const text = isFollowing ? 'Siguiendo' : 'Seguir'
    const className = isFollowing ? 'tw-followCard-button is-following' : 'tw-followCard-button'
    return (
         <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img
                className='tw-followCard-avatar'
                alt="Avatar de Vegetta 777"
                src= {`https://unavatar.io/youtube/${userName}`}/>
            <div className='tw-followCard-info'>
                <strong> {children}</strong>
                <span className='tw-followCard-infoUserName'>
                    {formatUserName(userName)}
                </span>
            </div>
            </header>

            <aside>
                <button className={className} onClick = {handleClick}>
                    <span className="tw-followCard-text">{text}</span>
                    <span className="tw-followCard-stopFollow">Dejar de seguir</span>
                </button>
            </aside>
        </article>
        )
}