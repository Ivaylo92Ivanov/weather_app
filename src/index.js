import './style.css'
import createPage from './dom_initializer'
import getWeatherData from './weather_data_getter';


// to add credits
//Photo by <a href="https://unsplash.com/@grakozy?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Greg Rakozy</a> on <a href="https://unsplash.com/photos/silhouette-photography-of-person-oMpAz-DN-9I?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>


getWeatherData("Veliko Tarnovo")
createPage();