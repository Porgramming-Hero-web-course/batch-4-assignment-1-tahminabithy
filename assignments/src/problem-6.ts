{
    interface Profile {
        name: string,
        age: number,
        email: string,
    }

    const updateProfile = (profile: Profile, val: Partial<Profile>): Profile => {
        return { ...profile, ...val }
    }
    const myProfile = { name: "Alice", age: 25, email: "alice@example.com" };
    console.log(updateProfile(myProfile, { age: 26 }));
}