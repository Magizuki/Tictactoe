

$('#result').hide()
var board
var p1, p2
var turn = 0

function initializeBoard(size)
{
    board = new Array(size)
    //Create 2 dimensional array
    for (var i = 0; i < board.length; i++) {
        board[i] = [];
    }

    //Initialize
    for (var i = 0; i < board.length; i++) {
        for (var j = 0; j < board.length; j++) {
    
            board[i][j] = 0;
        }
    }

}

function startGame(size)
{
    resetBoard()
    initializeBoard(size)
    var random = Math.floor(Math.random() * 10) + 1; 
    if(random <= 5)
    {
        p1 = 2
        p2 = 1

        var firstTurn = 'PLAYER 1 TURN'
        $('#turn').append(firstTurn)
        turn = turn + 1
    }
    else
    {
        p1 = 1
        p2 = 2

        var firstTurn = 'PLAYER 2 TURN'
        $('#turn').append(firstTurn)
        turn = turn + 1
    }

}

function boardClicked(row, col)
{
    var boardPosition = 'board'+row+col
    var playerturn
    var noPlayer

    $('#'+boardPosition).empty()
    $('#turn').empty()
    console.log((turn%2) + 1)
    if((turn % 2) + 1 == p1)
    {
        board[(row-1)][(col-1)] = 1
        var url = 'http://www.w3.org/2000/svg'
        var logo_p1 ="<h1 style='margin-top:20px'>"+"<svg xmlns="+url+" width='60' height='60' fill='currentColor' class='bi bi-circle' viewBox='0 0 16 16'>"+
    "<path d='M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z'/>"+"</svg>"+"</h1>"

        noPlayer = 1
        $('#'+boardPosition).append(logo_p1)
        playerturn = "PLAYER 2 TURN"
        
    }
    else
    {
      board[(row-1)][(col-1)] = 2
      var logo_p2 = "<h1 style='margin-top:20px'><svg xmlns='http://www.w3.org/2000/svg' width='60' height='60' fill='currentColor' class='bi bi-x-lg' viewBox='0 0 16 16'>"+
    "<path d='M1.293 1.293a1 1 0 0 1 1.414 0L8 6.586l5.293-5.293a1 1 0 1 1 1.414 1.414L9.414 8l5.293 5.293a1 1 0 0 1-1.414 1.414L8 9.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L6.586 8 1.293 2.707a1 1 0 0 1 0-1.414z'/>"
  +"</svg>"+"</h1>"

      noPlayer = 2
      $('#'+boardPosition).append(logo_p2)
      playerturn = "PLAYER 1 TURN"
    }
    turn = turn + 1
    $('#turn').append(playerturn)
    
    checkBoard(row, col, noPlayer)

}

function back()
{
  $('#backBtn2').click(function(e){
      console.log("dsadasd")
      // e.preventDefault()
      window.location.href = "https://magizuki.github.io/Tictactoe/"
  })
}

function checkBoard(row, col, player)
{
  var flag = 0
  console.log(board)
  
  if(board[0][0] == player && board[0][1] == player && board[0][2] == player)
  {
    $('#board').hide()
    $('#result').show()
    $('#result').append("<h1 style:'text-align:center;'>Player "+ player +" Win</h1>")
    $('#result').append("<br><br>")
    $('#result').append("<button id='backBtn2' onclick='back()' class='btn btn-warning'>BACK TO MENU</button>")
    return
  }
  else if(board[0][0] == player && board[1][0] == player && board[2][0] == player)
  {
    $('#board').hide()
    $('#result').show()
    $('#result').append("<h1 style:'text-align:center;'>Player "+ player +" Win</h1>")
    $('#result').append("<br><br>")
    $('#result').append("<button id='backBtn2' onclick='back()' class='btn btn-warning'>BACK TO MENU</button>")
    return
  }
  else if(board[1][0] == player && board[1][1] == player && board[1][2] == player)
  {
    $('#board').hide()
    $('#result').show()
    $('#result').append("<h1 style:'text-align:center;'>Player "+ player +" Win</h1>")
    $('#result').append("<br><br>")
    $('#result').append("<button id='backBtn2' onclick='back()' class='btn btn-warning'>BACK TO MENU</button>")
    return
  }
  else if(board[2][0] == player && board[2][1] == player && board[2][2] == player)
  {
    $('#board').hide()
    $('#result').show()
    $('#result').append("<h1 style:'text-align:center;'>Player "+ player +" Win</h1>")
    $('#result').append("<br><br>")
    $('#result').append("<button id='backBtn2' onclick='back()' class='btn btn-warning'>BACK TO MENU</button>")
    return
  }
  else if(board[0][1] == player && board[1][1] == player && board[2][1] == player)
  {
    $('#board').hide()
    $('#result').show()
    $('#result').append("<h1 style:'text-align:center;'>Player "+ player +" Win</h1>")
    $('#result').append("<br><br>")
    $('#result').append("<button id='backBtn2' onclick='back()' class='btn btn-warning'>BACK TO MENU</button>")
    return
  }
  else if(board[0][2] == player && board[1][2] == player && board[2][2] == player)
  {
    $('#board').hide()
    $('#result').show()
    $('#result').append("<h1 style:'text-align:center;'>Player "+ player +" Win</h1>")
    $('#result').append("<br><br>")
    $('#result').append("<button id='backBtn2' onclick='back()' class='btn btn-warning'>BACK TO MENU</button>")
    return
  }
  else if(board[0][0] == player && board[1][1] == player && board[2][2] == player)
  {
    $('#board').hide()
    $('#result').show()
    $('#result').append("<h1 style:'text-align:center;'>Player "+ player +" Win</h1>")
    $('#result').append("<br><br>")
    $('#result').append("<button id='backBtn2' onclick='back()' class='btn btn-warning'>BACK TO MENU</button>")
    return
  }
  else if(board[0][2] == player && board[1][1] == player && board[2][0] == player)
  {
    $('#board').hide()
    $('#result').show()
    $('#result').append("<h1 style:'text-align:center;'>Player "+ player +" Win</h1>")
    $('#result').append("<br><br>")
    $('#result').append("<button id='backBtn2' onclick='back()' class='btn btn-warning'>BACK TO MENU</button>")
    return
  }

  for (var i = 0; i < board.length; i++) {
      for (var j = 0; j < board.length; j++) {
          if(board[i][j] == 0)
          {
            flag = 1
          }
      }
  }

  if(flag == 0)
  {
    $('#board').hide()
    $('#result').show()
    $('#result').append("<h1 style:'text-align:center;'>DRAW</h1>")
    $('#result').append("<br><br>")
    $('#result').append("<button id='backBtn2' onclick='back()' class='btn btn-warning'>BACK TO MENU</button>")
    return
  }


  // for (var i = 0; i < board.length; i++) {
  //       for (var j = 0; j < board.length; j++) {
  //           if(board[i][j] == 1)
  //           {
  //             // if(i == 1 && j == 1)
  //             // {
  //               if((board[i-1][j-1] == 1 && board[i+1][j+1] == 1) || (board[i-1][j] == 1 && board[i+1][j] == 1) || (board[i+1][j-1] == 1 && board[i-1][j+1] == 1) || (board[i][j-1] == 1 && board[i][j+1] == 1))
  //               {
  //                 $('#board').hide()
  //                 $('#result').show()
  //                 $('#result').append("<h1 style:'text-align:center;'>Player "+ 1 +" Win</h1>")
  //                 return
  //               }
              
  //             //}
              
              
  //           }
  //           else if(board[i][j] == 2)
  //           {
  //             // if(i == 1 && j == 1)
  //             // {
                
  //               if((board[i-1][j-1] == 2 && board[i+1][j+1] == 2) || (board[i-1][j] == 2 && board[i+1][j] == 2) || (board[i+1][j-1] == 2 && board[i-1][j+1] == 2) || (board[i][j-1] == 2 && board[i][j+1] == 2))
  //               {
  //                 $('#board').hide()
  //                 $('#result').show()
  //                 $('#result').append("<h1 style:'text-align:center;'>Player "+ 2 +" Win</h1>")
  //                 return
  //               }
  //             //}
  //           }
  //       }
  //   }
}

function resetBoard()
{
    $('#turn').empty()   
}

$('#board').hide()

$('#backBtn').click(function(){
    window.location.href = "https://magizuki.github.io/Tictactoe/"
})

//   $(document).ready(function() {
//     $('#backBtn2').click(function(){
//         console.log("dsadasd")
//         window.location.href = "tictactoe.html"
//     })
// })

$('#small').click(function(){
    $('#board').show()
    $('#MainMenu').hide()
    $('#smallBoard').show()
    $('#mediumBoard').hide()
    $('#largeBoard').hide()
    startGame(3)
})

$('#medium').click(function(){
    $('#board').show()
    $('#MainMenu').hide()
    $('#smallBoard').hide()
    $('#mediumBoard').show()
    $('#largeBoard').hide()
})

$('#large').click(function(){
    $('#board').show()
    $('#MainMenu').hide()
    $('#smallBoard').hide()
    $('#mediumBoard').hide()
    $('#largeBoard').show()
})

$('#small').hover(function(){
    $(this).animate({
        width: "+=10%"
    })
}, function(){
    $(this).animate({
        width: "-=10%"
    })
})

$('#medium').hover(function(){
    $(this).animate({
        width: "+=10%"
    })
}, function(){
    $(this).animate({
        width: "-=10%"
    })
})

$('#large').hover(function(){
    $(this).animate({
        width: "+=10%"
    })
}, function(){
    $(this).animate({
        width: "-=10%"
    })
})
