var enterButton = document.getElementById("enter");
        var input = document.getElementById("benutzerInput");
        var ul = document.querySelector("ul");
        var item = document.getElementsByTagName("li");


        function prüfInput() {
                if (input.value.length > 0) {
                    erstellenEintrag();
                }
            }

        function erstellenEintrag() {

            var li = document.createElement("li");
            li.appendChild(document.createTextNode(input.value));
            ul.appendChild(li);
            input.value = "";


            li.addEventListener("click", abgehaktEintrag);
            function abgehaktEintrag() {
                li.classList.toggle("done");
                
                var löschenBtn = document.createElement("button");
                löschenBtn.appendChild(document.createTextNode("X"));
                li.appendChild(löschenBtn);

                löschenBtn.addEventListener("click", löschenEintrag);

                function löschenEintrag() {
                    li.classList.add("delete");
                }
            }
        }

        enterButton.addEventListener("click", prüfInput);
