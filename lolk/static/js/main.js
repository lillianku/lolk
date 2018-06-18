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

const $choice = $('.Choice')
$choice.click(function(){
  console.log('you clicked it!');
  $('#Attack').empty()
  $('#Defense').empty()
  $('#Magic').empty()

  const alt = $(this).find('img').attr('alt')
  console.log(alt);

  $.get(`http://ddragon.leagueoflegends.com/cdn/6.24.1/data/en_US/champion/${alt}.json`, json => {
    const stack = json.data[`${alt}`]
    $('#Attack').text(stack['info']['attack'])
    $('#Defense').text(stack['info']['defense'])
    $('#Magic').text(stack['info']['magic'])
    $('#Lore').html(stack['lore'])
  })
});

  // $.get('http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Velkoz_0.jpg', users => {
  //   users.forEach(addUser)
  // });
  // $.get('http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Velkoz_0.jpg', users => {
  //   users.forEach(addUser)
  // });
  //
  //
  //
  //
  //
  //
  //
  // const $usersList = $('#users-ul');
  // const $button = $('#jquery-ajax');
  //
  // const addUser = user => {
  //   const $li = $('<li>');
  //   $li.text(user.username);
  //   $usersList.append($li);
  // };
  //
  // $button.click(function () {
  //
  //   // $.get takes a url and a callback to execute when the get request is successful
  //   // the first argument of the callback is the body of the response (in this case an array of users)
  //   $.get('https://jsonplaceholder.typicode.com/users', users => {
  //     users.forEach(addUser)
  //   });
  //
  //   // the $.ajax function provides more customizability - check it out!
  //
  // });

});
