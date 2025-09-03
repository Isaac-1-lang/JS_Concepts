function getGitHubUserName() {
    return new Promise((resolve)=> {
        setTimeout(()=> {
            resolve({Username: "BYIRINGIRO Aloys"});
        },2000);
    });
}
// No parameter is passed on the first function since it is not referencing any other thing
function getRepoName(Username) {
    return new Promise((resolve)=> {
        setTimeout(()=> {
            resolve({repos:["New Project","WUI work"],Username:Username})
        },2000);
    });
}


function getCommits(Repo) {
    return new Promise((resolve)=> {
        setTimeout(()=> {
            resolve({Repo:Repo,Commits:["Added file","Removed styles","Shut down"]})
        },2000)
    });
}
// Using promises to avoid callback hell
// getGitHubUserName()
// .then((UserData)=> {
//     console.log(UserData);
//     return getRepoName(UserData.Username);
// })
// .then((RepoData)=> {
//     console.log(RepoData);
//     return getCommits(RepoData.repos[0])
// })
// .then((commitsData)=> {
//     console.log(commitsData);
// })
// .catch((error)=> console.log("Error:",error))

// fetching the whole data

async function getGitHubInfo() {
    try {
        const UserData = await getGitHubUserName();  // ✅ Await the promise
        console.log(UserData);

        const repoData = await getRepoName(UserData.Username); 
        console.log(repoData);

        const commitsData = await getCommits(repoData.repos[0]);  
        console.log(commitsData);    
    } catch (error) {
        console.log("Error:", error);  // ✅ Correct error logging
    }
}

getGitHubInfo();
