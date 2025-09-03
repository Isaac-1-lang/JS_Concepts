// git hub handling


function getUsernameSync() {
    const start = Date.now();
    while(Date.now() - start < 1000) {
        return { gitUserName: "Isaac-1-lang"};
    }
}
function getRepoSync(username) {
    const start= Date.now();
    while(Date.now() - start < 1000) {
        return {
            gitUserName: username, repositories:["Repo1","Repo2"]
        };
    }
}
function getCommitSync(repo) {
    const start = Date.now();
    while(Date.now()- start);
}