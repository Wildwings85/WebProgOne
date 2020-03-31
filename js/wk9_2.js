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
    for (var x = 0; x < list_question.length; x++) {
        this.question[x] = list_question[x].checked;
    }

    var list_effect = document.querySelectorAll("#container_effects input[type='checkbox']");
    for (var x = 0; x < list_effect.length; x++) {
        this.effect[x] = list_effect[x].checked;
    }

    this.diagnose = function () {
        var score_q = 0.0;
        var score_e = 0.0;
        this.score = function () {
            for (var x = 0; x < questions.length; x++) {
                if (this.question[x]) {
                    score_q += Number(questions[x].weight);
                } 
            }
            
            for (var x = 0; x < effects.length; x++) {
                if (this.effect[x]) {
                    score_e += Number(effects[x].weight);
                } 
            }
            console.log("DEBUG: score_q=" + score_q + " score_e=" + score_e);   
        }
        console.log("DEBUG: score_q=" + score_q + " score_e=" + score_e);
        if (score_q >=7 && score_e >=1) {
            return "Your answers suggest you are suffering from severe depression. It is important that you schedule an appointment with your doctor or a mental health worker now."
        } else if (score_q >=4 || score_q <=6 && score_e >=1) {
            return "Your answers suggest you are suffering from moderate depression. Consider watchful waiting, and testing again normally within two weeks."
        } else if (score_q >=1 || score_q <=3 && score_e >=1) {
            return "Your answers suggest you are suffering from mild depression.Consider watchful waiting, and testing again normally within two weeks."
        } else {
            return "Your answers suggest you may not be suffering from depression. Still if you feel something isn’t quite right we recommend you schedule an appointment with your doctor. "
        }
    }
    if (!(this.question[0] || this.question[1] || this.question[2] || this.question[4] || this.question[5] || this.question[6] || this.question[7] || this.question[8]) && (this.question[9]) && !(this.effect[0] || this.effect[1] || this.effect[2])) {
        return "If you’re having thoughts about hurting or killing yourself please reach out straight away and talk to someone who’s trained to help. Even if you feel like no-one in the world gets you right now, there are people who can support you.";
    }
}

function process_form() {
    var fm = document.getElementById("my_form");
    var out = document.getElementById("output");
    var patient = new Patient(fm);
    //console.log("Debug:" + JSON.stringify(patient));
    out.innerHTML = patient.diagnose();
    var score = patient.score();
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
                qns = qns + "<div class='form-group form-check'>";
                qns = qns + "<input type='checkbox' class='form-check-input' id='question" + questions[x].id + "'>";
                qns = qns + "<label class='form-check-label' for='question" + questions[x].id + "'>" + questions[x].label + "</label></div>";
            }
            document.getElementById("container_questions").innerHTML = qns;

            var efs = "";
            for (var x = 0; x < effects.length; x++) {
                efs = efs + "<div class='form-group form-check'>";
                efs = efs + "<input type='checkbox' class='form-check-input' id='effect" + effects[x].id + "'>";
                efs = efs + "<label class='form-check-label' for='effect" + effects[x].id + "'>" + effects[x].label + "</label></div>";
            }
            document.getElementById("container_effects").innerHTML = efs;
        }
    };
    xhttp.open("GET", "./phq.xml", true);
    xhttp.send();
}