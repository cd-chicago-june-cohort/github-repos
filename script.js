

function getListOfRepos (repos) {

  var list = document.getElementById('main-list');
  // list.innerHTML = '<li>First</li><li>Second</li>';

  var listHtml = '';

  for (var i = 0; i < repos.length; i += 1) {

    var repo = repos[i];

    var pushedAt = new Date(repo.pushedAt).toDateString();
    // console.log(pushedAt);

    var itemHtml = '<li class="cool-class">' + repo.id + ' ' + pushedAt + '<br>' + repo.name + '</li>';

    listHtml = listHtml + itemHtml;    

  }

  list.innerHTML = listHtml;

}

getListOfRepos(REPOS);
