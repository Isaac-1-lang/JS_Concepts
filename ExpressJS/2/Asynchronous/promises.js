function getUsername() 
{
    return new Promise((resolve,reject)=> {
        setTimeout(()=> {
            const username = { Username: "NIYOBYOSE"}
            // console.log(`The username is ${username.Username}`);
            resolve(username);
        },1000)
    })
}


function getRepo(username) {
    return new Promise((resolve,reject)=> {
        setTimeout(()=> {
            const repos = { Repos: ["HackTheBox", "TryHackMe", "PicoCTF"],Username:username};
            // console.log(`The repos are ${repos.Repos}`);
            resolve(repos);
        },1000)
    })
}


function getCommits(repos) {
    return new Promise((resolve,reject)=> {
        setTimeout(()=> {
            const commits = { Commits: ["Commit1", "Commit2", "Commit3"],Username:repos.Username,Repo:repos.Repos[1]};
            // console.log(`The commits are ${commits.Commits}`);
            resolve(commits);
        },1000)
    })
}

getUsername()
.then((username)=> {
    console.log(username.Username);
   return  getRepo(username);
})
.then((repos)=> {
    console.log(repos.Repos[1])
   return getCommits(repos);
})
.then((commits)=> {
    console.log(`The commits are ${commits.Commits}`);
})