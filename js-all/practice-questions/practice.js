
// breakdown of question 13 in practice 01 file how context execution looks actualy.

function parent1() {
    var ee;
    function child1() {
        function child2() {
            var ee;
            console.log('Question 13: B ', ee);
            ee = 30;
        }
        console.log('Question 13: A ', ee);
        ee = 10;
        child2()
    }

    ee = 20;
    
    child1();
    console.log('Question 13: C ', ee);
}

parent1()