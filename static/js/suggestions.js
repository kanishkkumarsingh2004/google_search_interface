//-------------------------------------------------------------------------------------------------------------------------------------------------------------//-------------------------------------------------------------------------------------------------------------------------------------------------------------//
//-------------------------------------------------------------------------------------------------------------------------------------------------------------//-------------------------------------------------------------------------------------------------------------------------------------------------------------//
//-------------------------------------------------------------------------------------------------------------------------------------------------------------//-------------------------------------------------------------------------------------------------------------------------------------------------------------//


document.addEventListener("DOMContentLoaded", function() {
    const dropdownInput = document.querySelector(".search");
    const dropdownOptions = document.querySelector(".dropdown-options");
    
      
    dropdownInput.addEventListener("click", function() {
      dropdownOptions.style.display = "block";
    });

    dropdownOptions.addEventListener("click", function(event) {
      if (event.target.tagName === "LI") {
        dropdownInput.value = event.target.dataset.value;
        dropdownOptions.style.display = "none";
      }
    });

    document.addEventListener("click", function(event) {
      if (!dropdownInput.contains(event.target) && !dropdownOptions.contains(event.target)) {
        dropdownOptions.style.display = "none";
      }

      

    });
});



//-------------------------------------------------------------------------------------------------------------------------------------------------------------//-------------------------------------------------------------------------------------------------------------------------------------------------------------//
//-------------------------------------------------------------------------------------------------------------------------------------------------------------//-------------------------------------------------------------------------------------------------------------------------------------------------------------//
//-------------------------------------------------------------------------------------------------------------------------------------------------------------//-------------------------------------------------------------------------------------------------------------------------------------------------------------//


document.addEventListener("DOMContentLoaded", function() {



  let names = ["chatgpt", "google", "facebook", "twitter", "instagram",
    "linkedin", "blackbox.ai", "github", "gmail","youtube music", "youtube", "twitch", "discord", "w3school",
    "amazon", "flipkart", "amazon primr", "Microsoft", "Spotify","Apple", "WhatsApp", "Reddit", "Zoom", "eBay",
    "Adobe", "Airbnb", "Slack", "Netflix", "Microsoft","TikTok", "LinkedIn", "Snapchat", "Pinterest", "Zoom",
    "Messenger", "SoundCloud", "Telegram", "WeChat", "Skype","Dropbox", "Medium", "PayPal", "Quora", "Wikipedia",
    "AliExpress", "PlayStation", "Xbox", "Etsy", "Vimeo","Viber", "Duolingo", "Twitch", "Hulu", "Wordpress",
    "Vkontakte", "Bing", "Yahoo", "Safari", "Opera","Mozilla", "Brave", "Chrome", "Edge", "Windows",
    "iOS", "Android", "Linux", "Ubuntu", "Fedora","Debian", "RedHat", "CentOS", "Mint", "Kali",
    "Arch", "Gentoo", "Raspberry Pi", "Arduino", "Adobe","Photoshop", "Illustrator", "Premiere Pro", "After Effects", "Audition",
    "InDesign", "Acrobat", "Lightroom", "Bridge", "XD","Wordpress", "Blogger", "Tumblr", "Medium", "Quora",
    "Stack Overflow", "GitHub", "GitLab", "Bitbucket", "Jira","Asana", "Trello", "Slack", "Discord", "Zoom",
    "Skype", "Microsoft Teams", "Cisco Webex", "GoToMeeting", "Google Meet","Facebook Live", "Instagram Live", "Twitch", "YouTube Live", "LinkedIn Live",
    "Dropbox", "Google Drive", "OneDrive", "Box", "iCloud","Adobe Creative Cloud", "Microsoft Office 365", "Google Workspace", "Zoho", "Salesforce",
    "Trello", "Airtable", "Notion", "Evernote", "Todoist","Microsoft To Do", "Google Tasks", "Wunderlist", "TickTick", "Any.do",
    "LastPass", "1Password", "Dashlane", "Keeper", "Bitwarden","Google Chrome", "Mozilla Firefox", "Apple Safari", "Microsoft Edge", "Opera",
    "Brave", "Vivaldi", "Tor Browser", "UC Browser", "Safari","Google Pixel", "Samsung Galaxy", "Apple iPhone", "OnePlus", "Xiaomi",
    "Huawei", "LG", "Sony Xperia", "Motorola Moto", "Nokia","Google Nest", "Amazon Echo", "Apple HomePod", "Samsung SmartThings", "Philips Hue",
    "Google Fit", "Samsung Health", "Apple Health", "Fitbit", "Garmin","MyFitnessPal", "Strava", "Runkeeper", "MapMyRun", "Nike Run Club","Google Photos", "Apple Photos", "Microsoft Photos", "Dropbox Photos", 
    "Amazon Photos","Google Keep", "Apple Notes", "Microsoft OneNote", "Evernote", "Notion","Google Maps", "Apple Maps", "Waze", "MapQuest", "OpenStreetMap","Google Earth", "Apple Maps", "Microsoft Bing Maps", "Here WeGo",
    "TomTom","Google Translate", "Microsoft Translator",
    "DeepL Translator", "Yandex Translate", "Baidu Translate",
    "Google Docs", "Google Sheets", "Google Slides", "Google Drive", "Google Photos",
    "Google Maps", "Google Earth", "Google Translate", "Google Calendar", "Google Keep",
    "Google Classroom", "Google Forms", "Google Hangouts", "Google Meet", "Google Play",
    "Google Pay", "Google Analytics", "Google Ads", "Google Cloud", "Google Search Console",
    "Facebook Messenger", "Facebook Watch", "Facebook Marketplace", "Facebook Gaming", "Facebook Business",
    "Facebook Portal", "Facebook Events", "Facebook Dating", "Facebook Live", "Facebook Ads",
    "Facebook Groups", "Facebook Pages", "Facebook Workplace", "Facebook Creator Studio", "Facebook Blueprint",
    "Twitter Spaces", "Twitter Lists", "Twitter Fleets", "Twitter Moments", "Twitter Spaces",
    "Twitter API", "Twitter Ads", "Twitter Analytics", "Twitter Developer", "Twitter Business",
    "Instagram Reels", "Instagram Stories", "Instagram IGTV", "Instagram Live", "Instagram Shop",
    "Instagram Creator", "Instagram Business", "Instagram Ads", "Instagram Insights", "Instagram Checkout",
    "LinkedIn Learning", "LinkedIn Sales Navigator", "LinkedIn Recruiter", "LinkedIn Ads", "LinkedIn Events",
    "LinkedIn Publishing", "LinkedIn SlideShare", "LinkedIn Learning Paths", "LinkedIn Pulse", "LinkedIn Profile",
    "Netflix Originals", "Netflix Series", "Netflix Documentaries", "Netflix Movies", "Netflix Comedy",
    "Netflix Drama", "Netflix Thriller", "Netflix Action", "Netflix Horror", "Netflix Sci-Fi",
    "GitHub Actions", "GitHub Projects", "GitHub Issues", "GitHub Gists", "GitHub Pages",
    "GitHub Marketplace", "GitHub Sponsors", "GitHub Discussions", "GitHub Copilot", "GitHub CLI",
    "Gmail Inbox", "Gmail Labels", "Gmail Filters", "Gmail Snooze", "Gmail Archive",
    "Gmail Priority Inbox", "Gmail Forwarding", "Gmail Canned Responses", "Gmail Labs", "Gmail Offline",
    "YouTube Shorts", "YouTube Premium", "YouTube TV", "YouTube Ads", "YouTube Studio",
    "YouTube Analytics", "YouTube Live", "YouTube Music Premium", "YouTube Originals", "YouTube Kids"
    // Add more names to reach 1000 words
  ];


//-------------------------------------------------------------------------------------------------------------------------------------------------------------//-------------------------------------------------------------------------------------------------------------------------------------------------------------//
//-------------------------------------------------------------------------------------------------------------------------------------------------------------//-------------------------------------------------------------------------------------------------------------------------------------------------------------//
//-------------------------------------------------------------------------------------------------------------------------------------------------------------//-------------------------------------------------------------------------------------------------------------------------------------------------------------//
  

  // Get the input field and ul element
  var inputField = document.getElementById('inpt');
  var ulElement = document.getElementById('suggestions');

  // Add event listener to input field
  inputField.addEventListener('input', function() {
      var inputValue = inputField.value.trim().toLowerCase(); // Get input value and convert to lowercase

      // Filter names array based on input value
      var filteredNames = names.filter(function(name) {
          return name.toLowerCase().startsWith(inputValue); // Filter names that start with input value
      });

      // If there are fewer than 6 names starting with input value, include names containing the input value
      if (filteredNames.length < 6) {
          var containsNames = names.filter(function(name) {
              return name.toLowerCase().includes(inputValue) && !filteredNames.includes(name); // Filter names that contain input value but are not already included
          });
          filteredNames = filteredNames.concat(containsNames).slice(0, 6); // Concatenate filteredNames and containsNames, limit to 6 names
      }

      // Clear existing content of ul element
      ulElement.innerHTML = '';

      // Create and append li elements for filtered names, limited to 6 names
      for (var i = 0; i < 6 && i < filteredNames.length; i++) {
          var newLi = document.createElement('li');
          newLi.setAttribute('id', 'li'); // Set id attribute
          newLi.setAttribute('data-value', filteredNames[i]); // Set data-value attribute
          newLi.innerText = filteredNames[i]; // Set text content
          ulElement.appendChild(newLi);
      }
  });
});

//-------------------------------------------------------------------------------------------------------------------------------------------------------------//-------------------------------------------------------------------------------------------------------------------------------------------------------------//
//-------------------------------------------------------------------------------------------------------------------------------------------------------------//-------------------------------------------------------------------------------------------------------------------------------------------------------------//
//-------------------------------------------------------------------------------------------------------------------------------------------------------------//-------------------------------------------------------------------------------------------------------------------------------------------------------------//
