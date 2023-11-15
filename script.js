

//1.Display number in inputbox

function displayNumber(num)
{
    inp.value+=num;
}

//2.Clear textbox
function clearText()
{
    inp.value=''
}

//evaluate expression
function evaluateExpression()
{
    inp.value=eval(inp.value);
    //eval js property to evaluate the operation
    //7*8=56
}
// remove last item from the textbox
function clearLastItem()
{
    inp.value=inp.value.slice(0,-1)
}