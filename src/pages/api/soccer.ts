
const options = {
    method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'q67ztsb1LTmshvoSlA85QfRadGRTp1dOfCTjsnCogv4OcbeFKs',
		'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
	}
}

// let currentDate = new Date().toJSON().slice(0, 10);


console.log(); 

// fetch(`https://api-football-v1.p.rapidapi.com/v3/fixtures?date=${currentDate}`, options)
// 	.then(response => response.json())
// 	.then(response => console.log(response.response))
// 	.catch(err => console.error(err));

export default async function soccerMatches (req:any, res:any){  

}