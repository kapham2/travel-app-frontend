export default function manageUser(state = {
    user: {},
    user_visited_destinations: [],
    user_saved_destinations: [],
    more_destinations: [],
    user_followers: [],
    user_following: [],
    more_users: [],
    user_destinations: [],
    follows: []
}, action) {
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.data.user,
                user_visited_destinations: action.data.visited_destinations,
                user_saved_destinations: action.data.saved_destinations,
                more_destinations: action.data.more_destinations,
                user_followers: action.data.followers,
                user_following: action.data.following,
                more_users: action.data.more_users
            }
        case 'SET_USER_DESTINATIONS':
            return {
                ...state,
                user_destinations: action.data.user_destinations
            }
        case 'SET_FOLLOWS':
            return {
                ...state,
                follows: action.data.follows
            }
        case 'ADD_VISITED_DESTINATION':
            return {
                ...state,
                user_visited_destinations: [...state.user_visited_destinations, action.destination],
                more_destinations: state.more_destinations.filter(destination => destination.id !== action.destination.id)
            }
        case 'ADD_SAVED_DESTINATION':
            return {
                ...state,
                user_saved_destinations: [...state.user_saved_destinations, action.destination],
                more_destinations: state.more_destinations.filter(destination => destination.id !== action.destination.id)
            }
        case 'DELETE_FROM_VISITED_DESTINATIONS':
            return {
                ...state,
                user_visited_destinations: state.user_visited_destinations.filter(destination => destination.id !== action.destination.id),
                more_destinations: [...state.more_destinations, action.destination]
            }
        case 'DELETE_FROM_SAVED_DESTINATIONS':
            return {
                ...state,
                user_saved_destinations: state.user_saved_destinations.filter(destination => destination.id !== action.destination.id),
                more_destinations: [...state.more_destinations, action.destination]
            }
        case 'PATCH_FROM_VISITED_DESTINATIONS':
            return {
                ...state,
                user_visited_destinations: state.user_visited_destinations.filter(destination => destination.id !== action.destination.id),
                user_saved_destinations: [...state.user_saved_destinations, action.destination]
            }
        case 'PATCH_FROM_SAVED_DESTINATIONS':
            return {
                ...state,
                user_saved_destinations: state.user_saved_destinations.filter(destination => destination.id !== action.destination.id),
                user_visited_destinations: [...state.user_visited_destinations, action.destination]
            }
        case 'ADD_FOLLOWING':
            return {
                ...state,
                user_following: [...state.user_following, action.user],
                more_users: state.more_users.filter(user => user.id !== action.user.id)
            }
        case 'DELETE_FROM_FOLLOWING':
            return {
                ...state,
                user_following: state.user_following.filter(user => user.id !== action.user.id),
                more_users: [...state.more_users, action.user]
            }
        case 'DELETE_FROM_FOLLOWERS':
            return {
                ...state,
                user_followers: state.user_followers.filter(user => user.id !== action.user.id),
                more_users: [...state.more_users, action.user]
            }
        default:
            return state
    }
}