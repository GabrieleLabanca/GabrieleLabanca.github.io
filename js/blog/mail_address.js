function create_mail(){
  var user = 'gabrielelabanca',
    domain = 'gmail.com',
    mail_element = document.getElementById('email');
  mail_element.innerHTML = user + '@' + domain;
}
