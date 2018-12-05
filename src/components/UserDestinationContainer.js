import React from 'react'
import { Link } from 'react-router-dom'
import UserDestinationCard from './UserDestinationCard'

class UserDestinationContainer extends React.Component {

    getSearchedDestination = (destinations) => {
        return [...destinations].filter(destination => {
            return destination.city.toLowerCase().includes(this.props.search) || destination.state.toLowerCase().includes(this.props.search) || destination.country.toLowerCase().includes(this.props.search) || destination.continent.toLowerCase().includes(this.props.search)
        })
    }

    getSearchedUser = (users) => {
        return [...users].filter(user => {
            return user.username.includes(this.props.search)
        })
    }

    render() {
        // console.log("UserDestinationContainer: this.props =>", this.props)

        let list
        let empty
        
        switch (this.props.activeView) {
            case "Visited":
                list = this.getSearchedDestination(this.props.user_visited_destinations)
                if (this.props.user_visited_destinations.length === 0) {
                    empty = <div>You don't have any visited places yet. Click <Link to={`/explore`} >Explore</Link> to add places to your visited list!</div>
                }
                else if (list.length === 0) {
                    empty = <div>No visited places match your search. :(</div>
                }
                else {
                    empty = <div></div>
                }
                break
            case "Saved":
                list = this.getSearchedDestination(this.props.user_saved_destinations)
                if (this.props.user_saved_destinations.length === 0) {
                    empty = <div>You don't have any saved places yet. Click <Link to={`/explore`} >Explore</Link> to add places to your saved list!</div>
                }
                else if (list.length === 0) {
                    empty = <div>No saved places match your search. :(</div>
                }
                else {
                    empty = <div></div>
                }
                break
            // case "Explore Destinations":
            //     list = this.props.more_destinations
            //     break
            case "Followers":
                empty = <div>No one has followed you yet. :(</div>
                list = this.getSearchedUser(this.props.user_followers)
                if (this.props.user_followers.length === 0) {
                    empty = <div>No one has followed you yet. :\</div>
                }
                else if (list.length === 0) {
                    empty = <div>No one matches your search. :(</div>
                }
                else {
                    empty = <div></div>
                }
                break
            case "Following":
                list = this.getSearchedUser(this.props.user_following)
                if (this.props.user_following.length === 0) {
                    empty = <div>You haven't followed anyone yet. Click <Link to={`/explore`} >Explore</Link> to start following people!</div>
                }
                else if (list.length === 0) {
                    empty = <div>No one matches your search. :(</div>
                }
                else {
                    empty = <div></div>
                }
                break
            // case "Explore Users":
            //     list = this.props.more_users
            //     break
            default:
                console.log("Oh no!")
                break
        }

        return (
            <div className="ui container">
                <div className="ui special centered cards">
                    {empty}
                    {
                        list.map(item => {
                            return <UserDestinationCard key={item.id} item={item} {...this.props} />
                        })
                    }
                </div>
            </div>
        )
    }
}

export default UserDestinationContainer