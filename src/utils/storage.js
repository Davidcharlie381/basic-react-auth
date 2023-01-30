export const saveToLocal = (user) => {
    console.log(user);

    let userString = JSON.stringify(user);

    localStorage.setItem(user.firstName, userString)
}

export const getFromLocal = (user) => {
    let checkUser = localStorage.getItem(user);

    return checkUser;

    // if (checkUser) {
    //     console.log(user);
    // } else {
    //     console.log("continue")
    // }
}