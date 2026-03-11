import './app.css'
import { TwitterFollowCard } from "./TwitterFollowCard";

export function App() {
    const format = (userName) => `@${userName}`

    return (
        <section className='App'>
      <TwitterFollowCard
      formatUserName={format}
      initialIsFollowing
      userName="midudev"> Miguel Angel Duran </TwitterFollowCard> 
      

      <TwitterFollowCard
      formatUserName={format}
      initialIsFollowing= {false}
      userName="vegetta777">Samuel De Luque</TwitterFollowCard> 
  </section>
    )
}