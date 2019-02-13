$(function(){
    //variables

    let name    = $('.name');
    let year    = $('.year');
    let sex     = $('.sex');
    let height  = $('.height');
    let eye     = $('.eye');
    let showStats = $('.statsName');


    function getCharacter(){
        showStats.css('display', 'grid');
        var numb = Math.floor((Math.random() * 50) + 1);
        var apiurl = 'https://swapi.co/api/people/'+ numb + '/';
        axios.get(apiurl).then(function(response){
            updateChar(response)

        }).catch(function(e){
            errorChar();
        })
    };

    function updateChar(response){
        name.text(response.data.name);
        sex.text(response.data.gender);
        year.text(response.data.birth_year);
        height.text(response.data.height);
        eye.text(response.data.eye_color)
    }

    function errorChar(){
        name.text('Ther is some problem with that person right now.');
    };

    //load();
    let btn = $('.btn');
    btn.on('click', getCharacter)

});