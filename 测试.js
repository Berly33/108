function gapFilling() {
    var result = 0;
    var uml = document.getElementById("uml");
    var umlValue = uml.value;
    if (umlValue === "统一建模语言") {
        result += 5;
    }
    var uml1 = document.getElementById("uml1");
    var umlValue = uml1.value;
    if (umlValue === "封装") {
        result += 5;
    }
    var uml2 = document.getElementById("uml2");
    var umlValue = uml2.value;
    if (umlValue === "继承") {
        result += 5;
    }
    var uml3 = document.getElementById("uml3");
    var umlValue = uml3.value;
    if (umlValue === "多态") {
        result += 5;
    }
    return result;
}

function choiceQuestion() {
    var result = 0;
    var umls = document.getElementsByName("uml");
    for (var i = 0; i < umls.length; ++i) {
        if (umls[i].checked) {
            result += umls[i].value == 2 ? 10 : 0;
        }
    }
    var umls1 = document.getElementsByName("uml1");
    for (var i = 0; i < umls1.length; ++i) {
        if (umls1[i].checked) {
            result += umls1[i].value == 1 ? 10 : 0 ;
        }
    }
        return result;
    }

    function multipleChoice() {
        var result = 0;
        var boxs = document.getElementsByName("uml2");
        if (boxs[0].checked === true && boxs[1].checked === false && boxs[2].checked === true && boxs[3].checked === true) {
            result += 10;
        }
        var boxs1 = document.getElementsByName("uml3");
        if (boxs1[0].checked === true && boxs1[1].checked === true && boxs1[2].checked === true && boxs1[3].checked === false) {
            result += 10;
        }
        return result;
    }

    function trueFalseItems() {
        var result = 0;
        var boxs3 = document.getElementsByName("uml4");
        for (var i = 0; i < boxs3.length; ++i) {
            if (boxs3[i].checked) {
                result += boxs3[i].value == 2 ? 10 : 0 ;
            }
        }
        var boxs4 = document.getElementsByName("uml5");
        if (boxs4[0].checked === true) {
            result += 10;
        }
        return result;
    }
    function answerQuestions() {
        var result = 0;
        var boxs5 = document.getElementById("uml33")
        var umlValue = boxs5.value;
        if (umlValue === "模型是对现实世界的简化和抽象，模型是对所研究的系统、过程、事物或概念的一种表达形式。可以是物理实体；可以是某种图形；或者是一种数学表达式") {
            result += 20;
        }
        return result;
    }
    function main() {
        var gapFillingScore = gapFilling();
        var choiceQuestionScore = choiceQuestion();
        var multipleChoiceScore = multipleChoice();
        var trueFalseItemsScore = trueFalseItems();
        var answerQuestionsScore = answerQuestions();
        alert(gapFillingScore + choiceQuestionScore + multipleChoiceScore + trueFalseItemsScore + answerQuestionsScore);
    }