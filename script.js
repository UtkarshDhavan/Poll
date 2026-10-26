var i;
var j;

var questions=["Which language do you like most?","Which season is the best?"];
var options=[["HTML","CSS","JavaScript"],["Summer","Monsoon","Winter"]];
var votes=[[0,0,0],[0,0,0]];
var done=[false,false];

function showPolls()
{
  var text="";

  for(i=0;i<questions.length;i++)
  {
    text=text+"<div class='poll'>";
    text=text+"<h3>"+questions[i]+"</h3>";

    if(done[i]==false)
    {
      for(j=0;j<options[i].length;j++)
      {
        text=text+"<input type='radio' name='poll"+i+"' id='poll"+i+"opt"+j+"'> "+options[i][j]+"<br>";
      }
      text=text+"<button onclick='submitVote("+i+")'>Submit</button>";
    }
    else
    {
      var total=0;
      for(j=0;j<options[i].length;j++)
      {
        text=text+options[i][j]+": "+votes[i][j]+"<br>";
        total=total+votes[i][j];
      }
      text=text+"<p>Total votes: "+total+"</p>";
    }

    text=text+"</div>";
  }

  document.getElementById("polls").innerHTML=text;
}

function submitVote(n)
{
  var chosen=-1;

  for(j=0;j<options[n].length;j++)
  {
    if(document.getElementById("poll"+n+"opt"+j).checked==true)
    {
      chosen=j;
    }
  }

  if(chosen==-1)
  {
    alert("Please select an option first");
  }
  else
  {
    votes[n][chosen]=votes[n][chosen]+1;
    done[n]=true;
    showPolls();
  }
}

function createPoll()
{
  var q=document.getElementById("question").value;
  var newOptions=[];
  var newVotes=[];

  for(i=0;i<4;i++)
  {
    var o=document.getElementById("opt"+i).value;
    if(o!="")
    {
      newOptions.push(o);
      newVotes.push(0);
    }
  }

  if(q==""||newOptions.length<2)
  {
    alert("Please write a question and at least 2 options");
  }
  else
  {
    questions.push(q);
    options.push(newOptions);
    votes.push(newVotes);
    done.push(false);

    document.getElementById("question").value="";
    for(i=0;i<4;i++)
    {
      document.getElementById("opt"+i).value="";
    }

    showPolls();
  }
}

showPolls();
