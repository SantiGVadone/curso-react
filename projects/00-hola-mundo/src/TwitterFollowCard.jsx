export function TwitterFollowCard ({children ,formatUserName, userName, isFollowing}) {
    return (
        console.log(isFollowing),
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
                <button className='tw-followCard-button'>
                    seguir
                </button>
            </aside>
        </article>
        )
}