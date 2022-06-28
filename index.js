console.log("Working");
// ae0cbcd52ad64ab18829f38a6617057b

// news api
let source = "bbc-news";
let apiKey = "ae0cbcd52ad64ab18829f38a6617057b";

// grab news
let newsAccordian = document.getElementById("newsAccordian");

//create a get request
const xhr = new XMLHttpRequest();

xhr.open(
  "GET",
  `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apiKey}`,
  true
);

xhr.onload = function () {
  if (this.status === 200) {
    let json = JSON.parse(this.responseText);
    let articles = json.articles;

    let newsHtml = "";
    // let title = "";
    articles.forEach(function(element) {

      let news = ` <div class="card">
                    <p>
                        <a
                        class="btn btn-primary"
                        data-bs-toggle="collapse"
                        href="#collapseExample"
                        role="button"
                        aria-expanded="false"
                        aria-controls="collapseExample"
                        >
                        ${element["title"]}
                        </a>
                    </p>
                    <div class="collapse" id="collapseExample">
                        <div class="card card-body">
                        ${element["content"]} . <a href="${element['url']}" target="_blank"> Read more here </a>
                        </div>
                    </div>
                    
                    </div>`;
            newsHtml += news;
        
    }); 
    newsAccordian.innerHTML = newsHtml;
  } 
  else {
    console.log("Some error occured");
  }
};

xhr.send();
