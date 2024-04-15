
// API URL 
const apiUrl = "https://api.nasa.gov/planetary/apod?api_key=gGfQXszpRd0bOYCNHBdgQd2Wdu0nZr5opObxF2a9";

// API LINK WHICH I HAVE USED 
// https://api.nasa.gov/?search=https%3A%2F%2Fapi.nasa.gov%2Fplanetary%2Fapod%3Fapi_key%3DgGfQXszpRd0bOYCNHBdgQd2Wdu0nZr5opObxF2a9#browseAPI
// https://apod.nasa.gov/apod/astropix.html ( API LINK FOR APOD   ) 



// Function to  add student id and name dynamically 
function addStudentInfo() {
    const studentInfo = "Name: Manik Malhotra , Student ID: 200553423 ";
    const studentElement = document.getElementById("student-info");
    studentElement.textContent = studentInfo;
}
// function to fetching data from NASA APOD 
function fetchAPODData() {
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const apodElement = document.getElementById("apod-container");
            const apodTitle = document.createElement("h2");
            apodTitle.textContent = data.title;
            const apodDate = document.createElement("p");
            apodDate.textContent = "Date: " + data.date;
            const apodExplanation = document.createElement("p");
            apodExplanation.textContent = data.explanation;
            
            // Check if media_type is image or video
            if (data.media_type === "image") {
                const apodImage = document.createElement("img");
                apodImage.src = data.url;
                apodImage.alt = data.title;
                apodElement.appendChild(apodImage);
                //if the media type is video , then it will show video 
            } else if (data.media_type === "video") {
                const apodVideo = document.createElement("iframe");
                apodVideo.src = data.url;
                apodVideo.width = "560";
                apodVideo.height = "315";
                apodVideo.allowFullscreen = true;
                apodElement.appendChild(apodVideo);
            } else {
                // Handle other media types
                const unsupportedMedia = document.createElement("p");
                unsupportedMedia.textContent = "Unsupported media type: " + data.media_type;
                apodElement.appendChild(unsupportedMedia);
            }

            // Append other elements
            apodElement.appendChild(apodTitle);
            apodElement.appendChild(apodDate);
            apodElement.appendChild(apodExplanation);
        })
        // catching error 
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

// Calling functions to add student info and fetch APOD data
addStudentInfo();
fetchAPODData();
