$(function () {
    //define an object, you can both with or without quations for the keys.
    var employee = { name: "John Johnson", "street": "Oslo West 16", phone: "555 1234567" };

    //use JSON.stringify to convert it to json string
    var jsonstring = JSON.stringify(employee);
    var jsonobject = JSON.parse(jsonstring);
    var info = '<ul><li>Name:' + jsonobject.name + '</li><li>Street:' + jsonobject.street + '</li><li>Phone:' + jsonobject.phone + '</li></ul>';
    $("#result").append(info);
});
