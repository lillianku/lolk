$(function () {
//declare link? #link
//get url http://ddragon.leagueoflegends.com/cdn/img/champion/splash/{{champ}}_0.jpg
//set img, info/stats, and blurb
const $link = $('.Link');
const $img = $('#Splash');

$link.click(function(){
  // console.log($(this).find('img').attr('alt'));
  $('#Attack').empty()
  $('#Defense').empty()
  $('#Magic').empty()
  const alt = $(this).find('img').attr('alt')
  const url = `http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${alt}_0.jpg`
  $img.attr('src', url)
  $.get(`http://ddragon.leagueoflegends.com/cdn/6.24.1/data/en_US/champion/${alt}.json`, json => {
    const stack = json.data[`${alt}`]
    $('#Attack').text(stack['info']['attack'])
    $('#Defense').text(stack['info']['defense'])
    $('#Magic').text(stack['info']['magic'])
    $('#Blurb').text(stack['blurb'])
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
