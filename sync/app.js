function getGitHubUserName(callback) {
    return new Promise((re))
    setTimeout(() => {
        callback({Username:"NIYOBYOSE"});
        
    }, 5000)
}


function getRepoName(Username,callback) {
    setTimeout(()=> {
       callback({Repos:["Repo1","Repo2","Repo3"],Username:Username})
    },2000)
}


function getCommits(Repos,callback) {
    setTimeout(()=> {
         callback({Repo:Repos,commits: ["commit1","commit2","commit3"]});
    },2000)
}


getGitHubUserName((UserData)=> {
    console.log(UserData);
    getRepoName(UserData.Username,(RepoData)=> {
        console.log(RepoData);
        getCommits(RepoData.Repos[1],(commitsData)=> {
            console.log(commitsData);
        })
    })
    
})