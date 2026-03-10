import './app.css'
import { TwitterFollowCard } from "./TwitterFollowCard";

export function App() {
    const format = (userName) => `@${userName}`

    return (
        <section className='App'>
      <TwitterFollowCard
      formatUserName={format}
      isFollowing 
      userName="midudev"
      name= "Miguel Angel Duran"
      />

      <TwitterFollowCard
      formatUserName={format}
      isFollowing={false} 
      userName="pheralb"
      name= "Pablo Hernandez"
      />

      <TwitterFollowCard
      formatUserName={format}
      isFollowing 
      userName="vegetta777"
      name= "Samuel De Luque"
      />
  </section>
    )
}