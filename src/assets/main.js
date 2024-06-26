const API = 'https://youtube-v31.p.rapidapi.com/search?channelId=UCbZgdwlGtW6FHKYXF72gKEA&part=snippet%2Cid&order=date&maxResults=5';

const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-host': 'youtube-v31.p.rapidapi.com',
        'x-rapidapi-key': '00c5590c3cmsh247e1653968835bp1bcb18jsn0823e41e102e'
	}
};

const content = null || document.getElementById('content');

async function fetchData(urlApi){
    const response = await fetch(urlApi, options);
    const data = await response.json();
    return data;
}

(async () => {
    // Function that runs automatically
    try {
        const videos = await fetchData(API);
        let view = `
            ${videos.items.map(video => `
                <div class="group relative">
                    <div
                        class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                        <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.decription}" class="w-full">
                    </div>
                    <div class="mt-4 flex justify-between">
                        <h3 class="text-sm text-gray-700">
                            <span aria-hidden="true" class="absolute inset-0"></span>
                            ${video.snippet.tittle}
                        </h3>
                    </div>
                </div>
                `).slice(0,4).join('')}
        `;
        content.innerHTML = view;

    } catch (error) {
        console.error(error);
    }
})();
