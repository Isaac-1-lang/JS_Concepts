function getUserName(callback) {
    setTimeout(() => {
        const user = { Username: "NIYOBYOSE Isaac Precieux" };
        console.log("Step 1: Got username -", user.Username);
        callback(user);
    }, 1000);
}

function getRepo(callback, username) {
    setTimeout(() => {
        const repos = { Username: username, Repos: ["HackTheBox", "Repo2", "Repo3"] };
        console.log("Step 2: Got repos -", repos.Repos[0],"The username is: ", repos.Username);
        callback(repos);
    }, 1000);
}

function getCommits(callback, username, repo) {
    setTimeout(() => {
        const commits = { Username: username, Repo: repo, Commits: ["Commit1", "Commit2", "Commit3"] };
        console.log("Step 3: Got commits for", repo, "-", commits.Commits);
        callback(commits);
    }, 1000);
}

console.log("Starting process...");
getUserName((user) => {
    getRepo((repos) => {
        getCommits((commits) => {
            console.log("Step 4: Final result -", commits);
        }, user.Username, repos.Repos[0]);
    }, user.Username);
});