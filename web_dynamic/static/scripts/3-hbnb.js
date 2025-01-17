$(document).ready(function(){
    let url_stat = "http://0.0.0.0:5001/api/v1/status/"
    $.get(url_stat, function(data){
        if (data.status === "OK"){
            $('#api_status').addClass("available");
        }
        else {
            $('#api_status').removeClass("available");
        }
    });


    let url = "http://0.0.0.0:5001/api/v1/places_search/"
    let data = {}
    $.post({url,
           contentType: 'application/json',
           data: JSON.stringify({}),
           dataType: 'json',
           success: data => {
                console.log(data);
                for (let place of data){
                    const template = `
                    <article>
                        <div class="title_box">
                            <h2>${ place.name }</h2>
                            <div class="price_by_night">${ place.price_by_night }</div>
                        </div>
                        <div class="information">
                            <div class="max_guest">${ place.max_guest } Guest</div>
                                <div class="number_rooms">${ place.number_rooms } Bedrooms</div>
                                <div class="number_bathrooms">${ place.number_bathrooms } Bathrooms</div>
                        </div>
                        <div class="user">
                           
                        </div>
                        <div class="description">
                            ${ place.description}
                        </div>
                    </article>
                    `;
                    $('section.places').append(template);
                };
            }
    })
})