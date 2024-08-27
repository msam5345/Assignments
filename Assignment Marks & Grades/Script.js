document.write('Welcome <br>')
console.log('Welcome')

let eng = parseFloat(prompt("Enter Your English Marks"))
let urdu = parseFloat(prompt("Enter Your Urdu Marks"))
let Maths = parseFloat(prompt("Enter Your Maths Marks"))
let Phy = parseFloat(prompt("Enter Your Physics Marks"))

let obtainedmarks = eng+urdu+Maths;

let perc=(obtainedmarks/300)*100

let space = " ";

document.write('obtained Marks' + space  + obtainedmarks + "<br>")
document.write("Percentage" + space  + perc.toFixed(2) + "<br>")

console.log('obtained Marks' + space + obtainedmarks )
console.log("Percentage" + space + perc ) 

if (perc<= 100 && perc >= 80)
{
    document.write("Grade Is *A+*")
    console.log("Grade Is *A+*")
}
else if (perc < 80 && perc >= 70)
    {
        document.write("Grade Is *A*")
        console.log("Grade Is *A*")
    }
   else if (perc <=70 && perc >= 60)
        {
            document.write("Grade Is *B*")
            console.log("Grade Is *B*")
        }
     else if (perc <=60 && perc >= 50)
            {
            document.write("Grade Is *C*")
             console.log("Grade Is *C*")
            }
        else
        {
            document.write("*Fail*")
            console.log("*Fail*")
        }