import React from 'react'
import ExplorePlacesPeopleCard from './ExplorePlacesPeopleCard'

class ExplorePlacesPeopleContainer extends React.Component {

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
        // console.log("ExplorePlacesPeopleContainer: this.props =>", this.props)

        let list
        let empty
        
        switch (this.props.activeView) {
            // case "Visited":
            //     list = this.props.user_visited_destinations
            //     break
            // case "Saved":
            //     list = this.props.user_saved_destinations
            //     break
            case "Places":
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
            // case "Followers":
            //     list = this.props.user_followers
            //     break
            // case "Following":
            //     list = this.props.user_following
            //     break
            case "People":
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
                            return <ExplorePlacesPeopleCard key={item.id} item={item} {...this.props} />
                        })
                    }
                </div>
            </div>
        )
    }
}

export default ExplorePlacesPeopleContainer