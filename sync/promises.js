function getGitHubUserName() {
    return new Promise((resolve,reject)=> {
        setTimeout(()=> {
            resolve({Username: "BYIRINGIRO Aloys"});
        },2000);
    });
}
// No parameter is passed on the first function since it is not referencing any other thing
// getGitHubUserName().then((username)=> {console.log("Usernam:",username)});
function getRepoName(Username) {
    return new Promise((resolve,reject)=> {
        setTimeout(()=> {
            const success = true;
            if (success) {
                resolve({repos:["New Project","WUI work"],Username:Username});
            } else {
                reject("The user is not found");
            }
        },2000);
    });
}


function getCommits(Repo) {
    return new Promise((resolve,reject)=> {
        setTimeout(()=> {
            const success = true;
            if(success) {
                resolve({Repo:Repo,Commits:["Added file","Removed styles","Shut down"]})
            } else {
                reject("The repositories not found");
            }
           
        },2000)
    });
}
// Using promises to avoid callback hell
getGitHubUserName()
.then((UserData)=> {
    console.log(UserData);
    return getRepoName(UserData.Username);
})
.then((RepoData)=> {
    console.log(RepoData);
    return getCommits(RepoData.repos[0])
})
.then((commitsData)=> {
    console.log(commitsData);
})
.catch((error)=> console.log("Error:",error))