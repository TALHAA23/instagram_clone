export function userDefaults(creds) {
    const email = creds.email;
    const uid = creds.uid;
    const username = creds.username

    return {
        auth: {
            email,
            uid
        },
        about: {
            username,
            bio: null
        },
        summary: {
            posts: [],
            followers: [],
            followings: [],
        },
        confidentialData: {
            settings: null
        }
    }
}