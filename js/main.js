var github = new Github({
    token : '146932e06e00f6762000cee199f7d9b5f005f00d',
    auth : 'oauth'
});
var repo = github.getRepo('danlucas', 'danlucas.github.io');

repo.getCommits({}, function(err, commits) {
    var item, link;
    _.each(commits, function(elem){
        link = $('<a />', {
            text: elem.commit.message,
            href: elem.html_url
        });
        item = $('<li>').append(link);
        $('.commit-list > ul').append(item);
        console.log(elem);
    });
});
