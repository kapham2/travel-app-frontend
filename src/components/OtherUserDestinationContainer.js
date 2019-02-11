import React from 'react'
import OtherUserDestinationCard from './OtherUserDestinationCard'

class OtherUserDestinationContainer extends React.Component {

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
        // console.log("OtherUserDestinationContainer: this.props =>", this.props)

        let list
        let empty
        
        switch (this.props.activeView) {
            case "Visited":
                list = this.getSearchedDestination(this.props.other_user_visited_destinations)
                if (this.props.other_user_visited_destinations.length === 0) {
                    empty = <div>{this.props.other_user.username} doesn't have any visited places yet.</div>
                }
                else if (list.length === 0) {
                    empty = <div>No visited places match your search. :(</div>
                }
                else {
                    empty = <div></div>
                }
                break
            // case "Saved":
            //     list = this.getSearchedDestination(this.props.other_user_saved_destinations)
            //     if (this.props.other_user_saved_destinations.length === 0) {
            //         empty = <div>{this.props.other_user.username} doesn't have any saved places yet.</div>
            //     }
            //     else if (list.length === 0) {
            //         empty = <div>No saved places match your search. :(</div>
            //     }
            //     else {
            //         empty = <div></div>
            //     }
            //     break
            // case "Explore Destinations":
            //     list = this.props.more_destinations
            //     break
            case "Followers":
                list = this.getSearchedUser(this.props.other_user_followers)
                if (this.props.other_user_followers.length === 0) {
                    empty = <div>No one has followed {this.props.other_user.username} yet. :\</div>
                }
                else if (list.length === 0) {
                    empty = <div>No one matches your search. :(</div>
                }
                else {
                    empty = <div></div>
                }
                break
            case "Following":
                list = this.getSearchedUser(this.props.other_user_following)
                if (this.props.other_user_following.length === 0) {
                    empty = <div>{this.props.other_user.username} hasn't followed anyone yet. :(</div>
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
            
            case "Destination":
                list = this.getSearchedUser(this.props.users_visited)
                if (this.props.users_visited.length === 0) {
                    empty = <div>No one has added {this.props.destination.city}, {this.props.destination.country} to their visited list.</div>
                }
                else if (list.length === 0) {
                    empty = <div>No one matches your search. :(</div>
                }
                else {
                    empty = <div></div>
                }
                break

            case "Explore Cities":
                list = this.getSearchedDestination(this.props.more_destinations)
                if (this.props.more_destinations.length === 0) {
                    empty = <div>You've added all the places to your lists! :)</div>
                }
                else if (list.length === 0) {
                    empty = <div>No places match your search. :(</div>
                }
                else {
                    empty = <div></div>
                }
                break

            case "Explore People":
                list = this.getSearchedUser(this.props.more_users)
                if (this.props.more_users.length === 0) {
                    empty = <div>You've followed everyone! :)</div>
                }
                else if (list.length === 0) {
                    empty = <div>No one matchs your search. :(</div>
                }
                else {
                    empty = <div></div>
                }
                break

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
                            return <OtherUserDestinationCard key={item.id} item={item} {...this.props} />
                        })
                    }
                </div>
            </div>
        )
    }
}

export default OtherUserDestinationContainer