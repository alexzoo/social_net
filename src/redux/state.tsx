

type MessageType = {
    id: number
    message: string
}

type DialogType = {
    id: number
    name: string
}

export type PostType = {
    id: number
    message: string
    likesCount: number
}

export type ProfilePageType = {
    posts: Array<PostType>
}

export type DialogPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
}

type SidebarType = {}

export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogPageType
    sidebar: SidebarType
}

let state: RootStateType = {
    profilePage: {
        posts:  [
            {id: 1, message: 'How are you', likesCount: 3},
            {id: 2, message: 'I\'m fine bro!', likesCount: 5},
            {id: 3, message: 'Trololo', likesCount: 15}
        ],
    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Alex'},
            {id: 2, name: 'Sveta'},
            {id: 3, name: 'Jora'},
            {id: 4, name: 'Konya'}
        ],
        messages:  [
            {id: 1, message: 'Hi!'},
            {id: 2, message: 'Yooooooo!'},
            {id: 3, message: 'Viski!'},
            {id: 4, message: 'Igogo!'}
        ]
    },
    sidebar: {}
}

export default state