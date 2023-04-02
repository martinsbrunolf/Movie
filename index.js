fetch("https://api.themoviedb.org/3/discover/movie?language=fr&sort_by=popularity.desc&include_adult=false&append_to_response=images&api_key=b1bb009f89a909c0ae0b65bc17104e0e")
	.then((response) => response.json())
	.then((data) => {
		console.log('------ ETAPE 1 -----', data.results)
		data.results.forEach(film => {

			const divCard = document.createElement('div')
			divCard.className = 'row'
			document.body.appendChild(divCard)
			
			
			const div2 = document.createElement('div')
			div2.className = 'colage'
			divCard.appendChild(div2)
			
			const div3 = document.createElement('div')
			div3.className = 'card'
			div2.appendChild(div3)

			const div4 = document.createElement('div')
			div4.className = 'card-image'
			div3.appendChild(div4)
			
			const img = document.createElement('img')
			img.src = 'https://image.tmdb.org/t/p/w500' + film.poster_path
			div4.appendChild(img)

			const span = document.createElement('span')
			span.className = 'card-title'
			span.innerText = film.title
			div4.appendChild(span)

			const divCardContent = document.createElement('div')
			divCardContent.className = 'card-content'
			div4.appendChild(divCardContent)

			const paragraphe = document.createElement('p')
			paragraphe.innerText = film.overview
			divCardContent.appendChild(paragraphe)


		});
	
	});























// Get All Movies url

// https://api.themoviedb.org/3/discover/movie?language=fr&sort_by=popularity.desc&include_adult=false&append_to_response=images&api_key=b1bb009f89a909c0ae0b65bc17104e0e

 

// Get one movie with trailer video 

// https://api.themoviedb.org/3/movie/666?api_key=b1bb009f89a909c0ae0b65bc17104e0e&append_to_response=videos&include_adult=false


 

// Search Movie url 

// https://api.themoviedb.org/3/search/movie?language=fr&include_adult=false&api_key=b1bb009f89a909c0ae0b65bc17104e0e&query=avatar