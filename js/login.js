function validateForm() {
  let formContato = document.forms["form"]["formNome"].value;
  let formContato2 = document.forms["form"]["email"].value;

  if (formContato == "" && formContato2 == "") {
    alert("Nome e email não podem estar em branco");
    return false;
  } else if (formContato == "") {
    alert("Nome não pode estar em branco");
    return false;
  } else {
    alert("Email não pode estar em branco");
  }
}
