var btnref = document.getElementById("btn");
        var inputref = document.getElementById("pwd");



        function show() {

            var btnref = document.getElementById("btn");
            var inputref = document.getElementById("pwd");

            inputref.type = "text";

            btnref.innerText = "hide password";
        }
        function hide() {
            var btnref = document.getElementById("btn");
            var inputref = document.getElementById("pwd");

            inputref.type = "password";

            btnref.innerText = "show password";
        }
        function pwd() {
            var inputref = document.getElementById("pwd");
            if (inputref.type == "password") {
                show();
            }
            else {
                hide();
            }
        }
