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
        
        switch (this.props.activeView) {
            case "Visited":
                list = this.getSearchedDestination(this.props.other_user_visited_destinations)
                break
            case "Saved":
                list = this.getSearchedDestination(this.props.other_user_saved_destinations)
                break
            // case "Explore Destinations":
            //     list = this.props.more_destinations
            //     break
            case "Followers":
                list = this.getSearchedUser(this.props.other_user_followers)
                break
            case "Following":
                list = this.getSearchedUser(this.props.other_user_following)
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