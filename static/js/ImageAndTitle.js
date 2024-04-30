document.addEventListener("DOMContentLoaded", function() {
    var videoLink = "https://www.youtube.com/watch?v=XlH7ejLtKyw&ab_channel=AvengersDanceGroup";
    var apiKey = "AIzaSyDZ0pHuiBmdVxosHQThn5UdPTr1TLaFZxg";
    var apiUrl = "https://www.googleapis.com/youtube/v3/videos?id=" + getVideoId(videoLink) + "&key=" + apiKey + "&part=snippet";
    const container = document.getElementById('videoTitle');

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if(data.items.length > 0) {
                var videoTitle = data.items[0].snippet.title;
                var videoThumbnail = data.items[0].snippet.thumbnails.medium.url;
                const newPTag = document.createElement('p');
                const enteredtextvalue = videoTitle;
                newPTag.textContent = enteredtextvalue;
                container.appendChild(newPTag);
                document.getElementById('videoThumbnail').src = videoThumbnail;
            } else {
                document.getElementById('videoTitle').innerText = "Video not found";
            }
        })
        .catch(error => console.error("Error fetching video details:", error));

    // Function to extract video ID from URL
    function getVideoId(url) {
        var videoId = url.split('v=')[1];
        var ampersandPosition = videoId.indexOf('&');
        if(ampersandPosition !== -1) {
            videoId = videoId.substring(0, ampersandPosition);
        }
        return videoId;
    }
});




