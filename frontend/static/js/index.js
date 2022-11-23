//client-side router


//loading content of each of the paths(20s,60s,70s,90s)
const router = async () => {

    //running a function whenever we meet a "/" in a path
    const routes = [
        { path: "/20s", view: () => console.log("Viewing 20s") },
        { path: "/60s", view: () => console.log("Viewing 60s") },
        { path: "/70s", view: () => console.log("Viewing 70s") },
        { path: "/90s", view: () => console.log("Viewing 80s") }
    ];

    //test each route for potential match
    const potentialMatches = routes.map(route => {
        return {
            route: route,
            isMatch: location.pathname === route.path
        };
    });

    //finding a matching pathname based on true/false from the isMatch property in the potentialMatches array returned by map()
    let match = potentialMatches.find(potentialMatch => potentialMatch.isMatch);

    //if pathname is not one of the existing ones go to index 0, tht is 20s - the main page
    if (!match) {
        match = {
            route: routes[0],
            isMatch: true
        };
    }

    console.log(match.route.view);
}

document.addEventListener("DOMContentLoaded", () => {
    router();
})
