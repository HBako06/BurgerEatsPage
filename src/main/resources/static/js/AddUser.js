var users = [];

function addUser(event) {
  event.preventDefault();

  var nameInput = document.getElementById("name");
  var emailInput = document.getElementById("email");
  var ContraseñaInput= document.getElementById("Contraseña");
  var CargoInput = document.getElementById("Cargo");

  var name = nameInput.value;
  var email = emailInput.value;
  var Contraseña = ContraseñaInput.value;
  var Cargo= CargoInput.value;


  if (name && email &&Contraseña&&Cargo) {
    var user = {
      name: name,
      email: email,
      Contraseña: Contraseña,
      Cargo: Cargo
    };

    users.push(user);
    renderUsers();

    nameInput.value = "";
    emailInput.value = "";
    ContraseñaInput.value= "";
    CargoInput.value= "";
  }
}

function deleteUser(index) {
  users.splice(index, 1);
  renderUsers();
}

function renderUsers() {
  var userList = document.getElementById("users").getElementsByTagName('tbody')[0];
  userList.innerHTML = "";

  users.forEach(function(user, index) {
    var userRow = document.createElement("tr");
    userRow.innerHTML = '<td>' + user.name + '</td><td>' + user.email +'</td><td>' + user.Contraseña + '</td><td>' + user.Cargo + '</td><td><button onclick="deleteUser(' + index + ')">Eliminar</button></td>'+'<td><button>Editar</button></td>';

    userList.appendChild(userRow);
  });
}

var addUserForm = document.getElementById("add-user-form");
addUserForm.addEventListener("submit", addUser);