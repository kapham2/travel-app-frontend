import React from 'react'
import UserDestinationCard from './UserDestinationCard'

class UserDestinationContainer extends React.Component {

    render() {
        // console.log("UserDestinationContainer: this.props =>", this.props)

        let list
        
        switch (this.props.activeView) {
            case "Visited":
                list = this.props.user_visited_destinations
                break
            case "Saved":
                list = this.props.user_saved_destinations
                break
            // case "Explore Destinations":
            //     list = this.props.more_destinations
            //     break
            case "Followers":
                list = this.props.user_followers
                break
            case "Following":
                list = this.props.user_following
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
                            return <UserDestinationCard key={item.id} item={item} {...this.props} />
                        })
                    }
                </div>
            </div>
        )
    }
}

export default UserDestinationContainer