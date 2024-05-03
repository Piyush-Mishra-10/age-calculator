let userInput = document.getElementById("date");
userInput.max = new Date().toISOString().split("T")[0];
let result = document.getElementById("result");
/*How can I get a date having the format yyyy-mm-dd from an ISO 8601 date?

My  8601 date is

2013-03-10T02:00:00Z
How can I get the following?

2013-03-10
split the string by T and store 0th index elemnt in unseInput
---------------------------------------------------------
The toISOString() method returns a date object as a string, using the ISO standard.

The standard is called ISO-8601 and the format is: YYYY-MM-DDTHH:mm:ss.sssZ*/
function calculateAge() {
    let birthdate = new Date(userInput.value);
    let d1 = birthdate.getDate();
    let m1 = birthdate.getMonth() + 1;
    let y1 = birthdate.getFullYear();
    let today = new Date();
    let d2 = today.getDate();
    let m2 = today.getMonth() + 1;//becoz the month value starts from zero value 
    let y2 = today.getFullYear();
    let d3, m3, y3;
    y3 = y2 - y1;
    if (m2 >= m1) {
        m3 = m2 - m1;
    }
    else {
        y3--;
        m3 = 12 + m2 - m1;

    }
    if (d2 >= d1) {
        d3 = d2 - d1;

    }
    else {
        m3--;
        d3 = getDaysInMonth(y1, m1) + d2 - d1;
    }
    if (m3 < 0) {
        m3 = 11;
        y3--;
    }
    result.innerHTML = 'you are '+y3+ 'years,'+m3 +'months  and'+d3+' days old';//important

    function getDaysInMonth(year, month) {//important
        return new Date(year, month, 0).getDate();
    }



}
