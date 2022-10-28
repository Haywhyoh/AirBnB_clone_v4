$( document ).ready(function(){
    let amenitiesList = [];
    $('input[type=checkbox]').change(function(){
        if($(this).is(":checked")){
            let amenity = $(this).attr("data-id")
            amenitiesList.push(amenity)
        }
    })
    $("div.amenities h4").text(amenitiesList)
})
