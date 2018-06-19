$(function () {
//declare link? #link
//get url http://ddragon.leagueoflegends.com/cdn/img/champion/splash/{{champ}}_0.jpg
//set img, info/stats, and blurb
  $('.Link').click(function(){
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
    });
  });

  $('#Lock').click(function(){
    $('.List').hide()
    $('#Generate').show()
    $('#Lock').hide()
    $('.CompChoice').show()
  });

  $('#Generate').click(function(){
    $.get('http://ddragon.leagueoflegends.com/cdn/6.24.1/data/en_US/champion.json', json => {
      const champions = Object.keys(json.data)
      const random = champions[~~(champions.length * Math.random())]
      $('#CompThumbnail').attr('src', `http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/${random}.png`)
      $.get(`http://ddragon.leagueoflegends.com/cdn/6.24.1/data/en_US/champion/${random}.json`, json => {
        const stack = json.data[`${random}`]
        $('#CompAttack').text(stack['info']['attack'])
        $('#CompDefense').text(stack['info']['defense'])
        $('#CompMagic').text(stack['info']['magic'])
      });
      $('#Generate').hide()
      $('#Battle').show()
    });
  })

  $('#Battle').click(function(){
    console.log($('#Attack').text())
    console.log($('#Defense').text())
    console.log($('#Magic').text())
    console.log($('#CompAttack').text())
    console.log($('#CompDefense').text())
    console.log($('#CompMagic').text())
  })

});
