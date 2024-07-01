

function createCard(title, cName, views, monthsOld, duration, thumbnail) {
    let vieNum
    if (views < 1000000) {
        viewNum = views / 1000 + "k";
    }
    else if (views > 1000000) {
        viewNum = views / 1000000 + "k";
    }
    else {
        viewNum = views / 1000 + "k"
    }

    let html = ` <div id="card">
    <div class="image">
        <img src="${thumbnail}">
            <div id="capsule">
          ${duration}
        </div>
    </div>
    <div id="content">
        <h1>${title}</h1>
        <p>${cName} . ${viewNum} views. ${monthsOld} months old</p>

    </div>
</div>
`


    document.querySelector(".container").innerHTML = document.querySelector(".container").innerHTML + html
}

createCard("Learn How to Earn on YouTube", "CodeWithUrooj ", 560000, 7, "31:22", "/Day56/ad-eye-catching-youtube-thumbnail-clickbait-eyecatching-youtube-thumbnail-psd_574881-3825.jpg")



/* <div id="card">
    <div class="image">
        <img src="/Day56/ad-eye-catching-youtube-thumbnail-clickbait-eyecatching-youtube-thumbnail-psd_574881-3825.jpg"
            alt="">
    </div>
    <div id="content">
        <h1>Learn How to Earn on YouTube</h1>
        <p>CodeWithUrooj . 727k views . 2 months age</p>

    </div>
</div> */
