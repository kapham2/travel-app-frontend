import React from 'react'
import DestinationPeopleContainer from './DestinationPeopleContainer'

class DestinationPeopleNavigation extends React.Component {

    constructor() {
        super()
        this.state = {
            activeView: "People Who Visited"
        }
    }

    onClickMenu = (event) => {
        // console.log("DestinationPeopleNavigation: clicked", event.target.getAttribute('name'))
        const newActive = event.target
        const oldActive = document.getElementsByClassName("link item active")[0]
        if (newActive !== oldActive) {
            oldActive.classList.remove("active")
            newActive.classList.add("active")
            this.setState({
                activeView: event.target.getAttribute('name')
            })
        }
        this.props.clearSearch()
    }

    render() {
        // console.log("UserDestinationNavigation: this.props =>", this.props)
        return (
            <div className="ui container">
                <div className="ui text container">
                    <div className="ui stackable secondary menu">
                            <div className="link item active" data-tab="People Who Visited" name="People Who Visited" onClick={this.onClickMenu} >People Who Visited</div>
                            {/* <div className="link item" data-tab="People Who Saved" name="People Who Saved" onClick={this.onClickMenu} >People Who Saved</div> */}
                    </div>
                </div>
                
                <br/><br/><br/>
                <div className="ui active tab">
                    <DestinationPeopleContainer {...this.props} activeView={this.state.activeView}/>
                </div>

            </div>
        )
    }
}

export default DestinationPeopleNavigation














