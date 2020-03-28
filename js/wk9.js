var questions = new Array(); 
var effects = new Array(); 

function Question(id, weight, label) {
    this.id = id;
    this.weight = weight;
    this.label = label;
}

function Effect(id, weight, label) {
    this.id = id;
    this.weight = weight;
    this.label = label;
}

function Patient(fm) {  
    this.question = new Array();
    this.effect = new Array();

    var list_question = document.querySelectorAll("#container_questions input[type='checkbox']");
            for (var x=0; x < list_question.length; x++) {
                this.question[x] = list_question[x].checked;
            }

    var list_effect = document.querySelectorAll("#container_effects input[type='checkbox']");
            for (var x=0; x < list_effect.length; x++) {
                this.effect[x] = list_effect[x].checked;
            }

    this.diagnose = function () {

    }
}

function process_form() {
    var fm = document.getElementById("my_form");
    var out = document.getElementById("output");
    var patient = new Patient(fm);
    //console.log("Debug:" + JSON.stringify(patient));
    out.innerHTML = patient.diagnose();
}

function load_data() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var qn = this.responseXML.getElementsByTagName("question");
            for (var x = 0; x < qn.length; x++) {
                var question = new Question(
                    qn[x].attributes['id'].value,
                    qn[x].attributes['weight'].value,
                    qn[x].attributes['label'].value,
                    qn[x].innerHTML);
                questions.push(question);
            }
            
            var ef = this.responseXML.getElementsByTagName("effect");
            for (var x = 0; x < ef.length; x++) {
                var effect = new Effect(
                    ef[x].attributes['id'].value,
                    ef[x].attributes['weight'].value,
                    ef[x].attributes['label'].value,
                    ef[x].innerHTML);
                effects.push(effect); 
            }


            var qns = "";
            for (var x = 0; x < questions.length; x++) {
                qns = qns + "<div class='form-group form-check' onmouseover='display_description(" + x + ", 0)' onmouseout='display_description(-1,0)'>";
                qns = qns + "<input type='checkbox' class='form-check-input' id='question" + questions[x].id + "'>";
                qns = qns + "<label class='form-check-label' for='question" + questions[x].id + "'>" + questions[x].label + "</label></div>";
            }
            document.getElementById("container_questions").innerHTML = qns;
            
            var efs = "";
            for (var x = 0; x < effects.length; x++) {
                efs = efs + "<div class='form-group form-check' onmouseover='display_description(" + x + ",1)' onmouseout='display_description(-1,1)'>";
                efs = efs + "<input type='checkbox' class='form-check-input' id='effect" + effects[x].id + "'>";
                efs = efs + "<label class='form-check-label' for='effect" + effects[x].id + "'>" + effects[x].label + "</label></div>";
            }
            document.getElementById("container_effects").innerHTML = efs;
        }
    };
    xhttp.open("GET", "./phq.xml", true);
    xhttp.send();
}