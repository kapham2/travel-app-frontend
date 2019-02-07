export default function manageUser(state = {
    user: {},
    avatar_url: "",
    user_visited_destinations: [],
    user_saved_destinations: [],
    more_destinations: [],
    user_followers: [],
    user_following: [],
    more_users: [],
    user_destinations: [],
    follows: [],
    other_user: {},
    other_avatar_url: "",
    other_user_visited_destinations: [],
    other_user_saved_destinations: [],
    other_user_followers: [],
    other_user_following: [],
    destination: {},
    photo_url: "",
    users_visited: [],
    users_saved: []
}, action) {
    switch (action.type) {
        case 'SET_DESTINATION':
            return {
                ...state,
                destination: action.data.destination,
                photo_url: action.data.photo_url,
                users_visited: action.data.users_visited,
                users_saved: action.data.users_saved
            }
        case 'SET_USER':
            return {
                ...state,
                user: action.data.user,
                avatar_url: action.data.avatar_url,
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
                other_user_visited_destinations: state.other_user_visited_destinations.filter(destination => destination.id !== action.destination.id),
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
                // other_user_following: [...state.other_user_following, action.user],
                more_users: state.more_users.filter(user => user.id !== action.user.id)
            }
        case 'ADD_OTHER_FOLLOWING':
            return {
                ...state,
                other_user_following: [...state.other_user_following, action.user],
            }
        case 'DELETE_FROM_FOLLOWING':
            return {
                ...state,
                user_following: state.user_following.filter(user => user.id !== action.user.id),
                // other_user_following: state.other_user_following.filter(user => user.id !== action.user.id),                
                more_users: [...state.more_users, action.user]
            }
        case 'DELETE_FROM_OTHER_FOLLOWING':
            return {
                ...state,
                other_user_following: state.other_user_following.filter(user => user.id !== action.user.id),                
            }
        case 'DELETE_FROM_FOLLOWERS':
            return {
                ...state,
                user_followers: state.user_followers.filter(user => user.id !== action.user.id),
            }
        case 'SET_OTHER_USER':
            return {
                ...state,
                other_user: action.data.user,
                other_avatar_url: action.data.avatar_url,
                other_user_visited_destinations: action.data.visited_destinations,
                other_user_saved_destinations: action.data.saved_destinations,
                other_user_followers: action.data.followers,
                other_user_following: action.data.following,
            }
        case 'ADD_USER_DESTINATION':
            return {
                ...state,
                user_destinations: [...state.user_destinations, action.data.user_destination]
            }
        case 'ADD_FOLLOW':
            return {
                ...state,
                follows: [...state.follows, action.data.follow]
            }
        case 'DELETE_FROM_USER_DESTINATIONS':
            return {
                ...state,
                user_destinations: state.user_destinations.filter(user_destination => user_destination.id !== action.userDestination.id)
            }
        case 'DELETE_FROM_FOLLOWS':
            return {
                ...state,
                follows: state.follows.filter(follow => follow.id !== action.follow.id)
            }
        case 'UPDATE_USER_DESTINATIONS':
            return {
                ...state,
                user_destinations: [...(state.user_destinations.filter(user_destination => user_destination.id !== action.userDestination.id)), {...action.userDestination, visited: !action.userDestination.visited } ]
            }
        case 'SET_AVATAR_URL':
            return {
                ...state,
                avatar_url: action.avatar_url
            }
        case 'CLEAR_STATE':
            return {
                user: {},
                avatar_url: "",
                user_visited_destinations: [],
                user_saved_destinations: [],
                more_destinations: [],
                user_followers: [],
                user_following: [],
                more_users: [],
                user_destinations: [],
                follows: [],
                other_user: {},
                other_avatar_url: "",
                other_user_visited_destinations: [],
                other_user_saved_destinations: [],
                other_user_followers: [],
                other_user_following: [],
                destination: {},
                photo_url: "",
                users_visited: [],
                users_saved: []
            }
        default:
            return state
    }
}