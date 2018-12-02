import React from 'react'
import ExplorePlacesPeopleCard from './ExplorePlacesPeopleCard'

class ExplorePlacesPeopleContainer extends React.Component {

    render() {
        // console.log("ExplorePlacesPeopleContainer: this.props =>", this.props)

        let list
        
        switch (this.props.activeView) {
            // case "Visited":
            //     list = this.props.user_visited_destinations
            //     break
            // case "Saved":
            //     list = this.props.user_saved_destinations
            //     break
            case "Places":
                list = this.props.more_destinations
                break
            // case "Followers":
            //     list = this.props.user_followers
            //     break
            // case "Following":
            //     list = this.props.user_following
            //     break
            case "People":
                list = this.props.more_users
                break
            default:
                console.log("Oh no!")
                break
        }

        return (
            <div className="ui container">
                <div className="ui special centered cards">
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