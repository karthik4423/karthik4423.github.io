// var axioscdn = document.createElement("script");
// axioscdn.setAttribute("src", "https://unpkg.com/axios/dist/axios.min.js");
// document.head.appendChild(axioscdn);
const axios = window.axios;
var reponames = [];
const url = "https://api.github.com/users/karthik4423/repos";
axios
  .get(url, {
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  })
  .then(function (datas) {
    console.log(datas.data.length);
    for (var i = 0; i < datas.data.length; i++) {
      console.log(JSON.stringify(datas.data[i].fork));
      //if (JSON.stringify(datas.data[i].fork) == "false") {
      reponames.push(JSON.stringify(datas.data[i].name));
      // }
    }
    var commitlengths = [];
    for (var i = 0; i < reponames.length; i++) {
      const url1 =
        "https://api.github.com/repos/karthik4423/" +
        reponames[i].slice(1, reponames[i].length - 1) +
        "/commits";
      console.log(url1);
      axios.get(url1).then(function (datas1) {
        console.log(datas1.data);
        commitlengths.push(JSON.stringify(datas1.data.length));
        console.log(commitlengths);
      });
    }
    console.log(commitlengths);
    console.log(reponames);
    document.getElementById("repos").innerHTML = reponames;
    console.log(datas);
  });
