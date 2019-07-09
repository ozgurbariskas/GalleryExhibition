function loadItems() {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        var myObj = JSON.parse(this.responseText);
        for (x in myObj.Employees) {
            document.getElementById("item-container").innerHTML += "<tr><td>" + myObj.Employees[x]["firstName"] + "</td><td>" + myObj.Employees[x]["lastName"]
            +"</td><td>" + myObj.Employees[x]["jobTitle"] + "</td></tr>";
        }
    }
  };
  xmlhttp.open("GET", "items.json", true);
    xmlhttp.send();
    document.getElementById("loadbutton").style.display="none";
}