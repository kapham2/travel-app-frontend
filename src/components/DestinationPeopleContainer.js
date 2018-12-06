import React from 'react'
import DestinationPeopleCard from './DestinationPeopleCard'

class DestinationPeopleContainer extends React.Component {

    getSearchedUser = (users) => {
        return [...users].filter(user => {
            return user.username.includes(this.props.search)
        })
    }

    render() {
        // console.log("DestinationPeopleContainer: this.props =>", this.props)

        let list
        let empty
        
        switch (this.props.activeView) {
            case "People Who Visited":
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
            case "People Who Saved":
                list = this.getSearchedUser(this.props.users_saved)
                if (this.props.users_saved.length === 0) {
                    empty = <div>No one has added {this.props.destination.city}, {this.props.destination.country} to their saved list.</div>
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
                            return <DestinationPeopleCard key={item.id} item={item} {...this.props} />
                        })
                    }
                </div>
            </div>
        )
    }
}

export default DestinationPeopleContainer