$(function () {
//declare link? #link
//get url http://ddragon.leagueoflegends.com/cdn/img/champion/splash/{{champ}}_0.jpg
//set img, info/stats, and blurb
  $('.Link').click(function(){
    const alt = $(this).find('img').attr('alt')
    $('#Name').text(`${alt}`)
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
    if($('#Name').text() === ''){
      alert('Please pick your champion')
    }else{
      $('.List').hide()
      $('#Generate').show()
      $('#Lock').hide()
      $('.CompChoice').show()
    }
  });

  $('#Generate').click(function(){
    $.get('http://ddragon.leagueoflegends.com/cdn/6.24.1/data/en_US/champion.json', json => {
      const champions = Object.keys(json.data)
      const random = champions[~~(champions.length * Math.random())]
      $('#CompName').text(`${random}`)
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
  });

  $('#Battle').click(function(){
    $('#Battle').hide()
    $('#Again').show()
    const attack = parseInt($('#Attack').text())
    const defense = parseInt($('#Defense').text())
    const magic = parseInt($('#Magic').text())
    const compAttack = parseInt($('#CompAttack').text())
    const compDefense = parseInt($('#CompDefense').text())
    const compMagic = parseInt($('#CompMagic').text())
    var userChoice = 0
    var compChoice = 0
    if (attack > compAttack){
      userChoice ++
    }else{
      compChoice ++
    }
    if (compDefense > defense){
      userChoice ++
    }else{
      compChoice ++
    }
    if (magic > compMagic){
      userChoice ++
    }else{
      compChoice ++
    }
    determineWin(userChoice, compChoice)
  });

  $('#Again').click(function(){
    location.reload()
  });

  const determineWin = (user, comp) => {
    if (user > comp){
      $('#Result').attr('src', '../../static/images/victory.png')
    }else{
      $('#Result').attr('src', '../../static/images/defeat.png')
    };
  };

});
