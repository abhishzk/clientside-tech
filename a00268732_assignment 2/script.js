function insert(val) {
    document.getElementById("ans").value += val;
}

function solve() {
    let x = document.getElementById("ans").value;
    let y = eval(x);
    document.getElementById("ans").value = y;


}

function clr() {
    document.getElementById("ans").value = "";
}

/* function Dot() //PUT IN "." if appropriate.
{
    if (Current.length == 0) //no leading ".", use "0."
    {
        Current = "0.";
    } else {
        if (Current.indexOf(".") == -1) {
            Current = Current + ".";
        };
    };
    document.Calculator.Display.value = Current;
} */
/* function decimal() {
    var value = y;
    var y = num.toFixed(2);
    document.getElementById("decimal").innerHTML = y;

}
 */
/* <script>
function myFunction() {
  var num = 5.56789;
  var n = num.toFixed(2);
  document.getElementById("demo").innerHTML = n;
} */