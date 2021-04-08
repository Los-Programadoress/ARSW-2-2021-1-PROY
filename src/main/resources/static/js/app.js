var Module = (function () {
    const showPasscode = function (mockdata) {
        document.getElementById("getpasscode").innerHTML = mockdata;
        document.getElementById("ready").innerHTML = "¡Código de acceso asignado!";
    };

    var addGameRoom = function(){
        var name = $("#newname").val();
        var passcode = $("#newpasscode").val();
        var gameRoom = { name: name, passcode: passcode };
        apiclient.addGameRoom(gameRoom).then(
            function () {
                getPasscodeByName();
            },
            function () {
                alert("failed!");
            }
		);
    };

    var getPasscodeByName = function(){
        var name = $("#newname").val();
        apiclient.getPasscodeByName(name);
    };

    return{
        addGameRoom: addGameRoom,
        showPasscode: showPasscode
    }
})();