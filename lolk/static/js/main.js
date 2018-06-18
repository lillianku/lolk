$(function () {
//declare link? #link
//get url http://ddragon.leagueoflegends.com/cdn/img/champion/splash/{{champ}}_0.jpg
//set img, info/stats, and blurb
  const $link = $('.Link');

  $link.click(function(){
    console.log('hi');
    $('#Attack').empty()
    $('#Defense').empty()
    $('#Magic').empty()
    const alt = $(this).find('img').attr('alt')

    const splash = `http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${alt}_0.jpg`
    $('#Splash').attr('src', splash)

    const thumbnail = `http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/${alt}.png`
    $('#Thumbnail').attr('src', thumbnail)

    $.get(`http://ddragon.leagueoflegends.com/cdn/6.24.1/data/en_US/champion/${alt}.json`, json => {
      const stack = json.data[`${alt}`]
      $('#Attack').text(stack['info']['attack'])
      $('#Defense').text(stack['info']['defense'])
      $('#Magic').text(stack['info']['magic'])
      $('#Lore').html(stack['lore'])
    })
  });

});
