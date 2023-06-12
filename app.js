document.addEventListener('DOMContentLoaded'/* html and css loaded before js*/, () => {

    const grid = document.querySelector('.grid') 

    const grid1 = document.querySelector('.grid1') 
    const grid2 = document.querySelector('.grid2') 
    const grid3 = document.querySelector('.grid3') 
    const grid4 = document.querySelector('.grid4') 
    const grid5 = document.querySelector('.grid5') 
    const grid6 = document.querySelector('.grid6') 
    const grid7 = document.querySelector('.grid7') 
    const grid8 = document.querySelector('.grid8') 

    // const board = document.querySelector('.result')

    const bton = document.querySelector('.bton')

    let current = 0, currentArr = []
    let board = []
    let squa =[]
    let arr= []
    function createBoard() {
        let width=6
        for(let i=0; i<width*width; i++) {
            const square = document.createElement('div')
            square.setAttribute('id',i) 
            grid.appendChild(square)
            squa.push(square)
            square.oncontextmenu = function(e) {
                e.preventDefault()
                click(square)
            }
        }
        for(let i=0;i<width*width;i++)
            arr[i] = 0
        arr[16] = 4
        arr[17] = 2
        arr[22] = 3
        arr[23] = 2
        for(let i=0;i<width;i++){
            board[i]=[]
            for(let j=0;j<width;j++)
                board[i][j]=arr[i*width+j]
        }
        squa[16].innerHTML=4
        squa[17].innerHTML=2
        squa[22].innerHTML=3
        squa[23].innerHTML=2
        // board.classList.add('bang')
        // console.log(board)
        // for(let i=0;i<board.length;i++)
        //     for(let j=0;j<board[i].length;j++)
        //     console.log(board[i][j])
        create1()
        create2()
        create3()
        create4()
        create5()
        create6()
        create7()
        create8()     
    }
    createBoard()

    // console.log(board)
    // let width=6
    // for(let i=0;i<width;i++) {
    //     for(let j=0;j<width;j++)
    //     console.log(board[i][j])
    // }
    // for(let i=0;i<width*width;i++) {
    //     console.log(result[i])
    // }

    function updateBoard() {
        let width=6
        // console.log(board)
        for (let i = 0; i < width * width; i++) {
            let x = (i - (i % width)) / width, y = i % width
            // console.log(board[x][y])
            if (board[x][y] != 0)
                squa[i].innerHTML = board[x][y]
        }
    }
    function click(square) {
        let width=6
        console.log(1)
        let x = (square.id - (square.id % width)) / width, y = square.id % width
        console.log(x, y)
        if (x % 2 == 0 && y % 2 == 0) {
            console.log(currentArr)
            board[x][y] = currentArr[0];
            board[x][y + 1] = currentArr[1];
            board[x + 1][y] = currentArr[2];
            board[x + 1][y + 1] = currentArr[3];
            currentArr = []
        }

        updateBoard();
    }

    function create1() {
        let width=2
        let squares = [], arr=[]
        for(let i=0;i<width*width;i++) {
            const square = document.createElement('div')
            // square.setAttribute('id',i) 
            grid1.appendChild(square)
            squares.push(square)
        }
        arr[0]=4, arr[1]=3, arr[2]=1, arr[3]=1
        for(let i=0;i<4;i++)
        squares[i].innerHTML=arr[i]
        arr[0]=4,arr[1]=3,arr[2]=1,arr[3]=1
        grid1.addEventListener('click', function(e) {
            rotate(grid1)
            for(let i=0;i<4;i++)
            squares[i].innerHTML=arr[i]
        })
        function rotate(grid){
            let a=arr[0], b=arr[1], c=arr[2], d=arr[3]
            arr[0]=b
            arr[1]=d
            arr[2]=a
            arr[3]=c
        }
        grid1.addEventListener('contextmenu',function(e){
            e.preventDefault()
            currentArr[0]=arr[0]
            currentArr[1]=arr[1]
            currentArr[2]=arr[2]
            currentArr[3]=arr[3]
        })
    }
    
    function create2() {
        let width=2
        let squares = [], arr=[]
        for(let i=0;i<width*width;i++) {
            const square = document.createElement('div')
            // square.setAttribute('id',i) 
            grid2.appendChild(square)
            squares.push(square)
        }
        arr[0]=2, arr[1]=2, arr[2]=4, arr[3]=4
        for(let i=0;i<4;i++)
        squares[i].innerHTML=arr[i]
        grid2.addEventListener('click', function(e) {
            rotate(grid2)
            for(let i=0;i<4;i++)
            squares[i].innerHTML=arr[i]
        })
        function rotate(grid){
            let a=arr[0], b=arr[1], c=arr[2], d=arr[3]
            arr[0]=b
            arr[1]=d
            arr[2]=a
            arr[3]=c
        }
        grid2.addEventListener('contextmenu',function(e){
            e.preventDefault()
            currentArr[0]=arr[0]
            currentArr[1]=arr[1]
            currentArr[2]=arr[2]
            currentArr[3]=arr[3]
        })
    }

    function create3() {
        let width=2
        let squares = [], arr= []
        for(let i=0;i<width*width;i++) {
            const square = document.createElement('div')
            // square.setAttribute('id',i) 
            grid3.appendChild(square)
            squares.push(square)
        }
        arr[0]=4, arr[1]=2, arr[2]=2, arr[3]=4
        for(let i=0;i<4;i++)
        squares[i].innerHTML=arr[i]
        grid3.addEventListener('click', function(e) {
            rotate(grid3)
            for(let i=0;i<4;i++)
            squares[i].innerHTML=arr[i]
        })
        function rotate(grid){
            let a=arr[0], b=arr[1], c=arr[2], d=arr[3]
            arr[0]=b
            arr[1]=d
            arr[2]=a
            arr[3]=c
        }
        grid3.addEventListener('contextmenu',function(e){
            e.preventDefault()
            currentArr[0]=arr[0]
            currentArr[1]=arr[1]
            currentArr[2]=arr[2]
            currentArr[3]=arr[3]
        })
    }

    function create4() {
        let width=2
        let squares = [], arr = []
        for(let i=0;i<width*width;i++) {
            const square = document.createElement('div')
            // square.setAttribute('id',i) 
            grid4.appendChild(square)
            squares.push(square)
        }
        arr[0]=1, arr[1]=2, arr[2]=4, arr[3]=4
        for(let i=0;i<4;i++)
        squares[i].innerHTML=arr[i]
        grid4.addEventListener('click', function(e) {
            rotate(grid4)
            for(let i=0;i<4;i++)
            squares[i].innerHTML=arr[i]
        })
        function rotate(grid){
            let a=arr[0], b=arr[1], c=arr[2], d=arr[3]
            arr[0]=b
            arr[1]=d
            arr[2]=a
            arr[3]=c
        }
        grid4.addEventListener('contextmenu',function(e){
            e.preventDefault()
            currentArr[0]=arr[0]
            currentArr[1]=arr[1]
            currentArr[2]=arr[2]
            currentArr[3]=arr[3]
        })
    }

    function create5() {
        let width=2
        let squares = [], arr =[]
        for(let i=0;i<width*width;i++) {
            const square = document.createElement('div')
            // square.setAttribute('id',i) 
            grid5.appendChild(square)
            squares.push(square)
        }
        arr[0]=2, arr[1]=3, arr[2]=3, arr[3]=1
        for(let i=0;i<4;i++)
        squares[i].innerHTML=arr[i]
        grid5.addEventListener('click', function(e) {
            rotate(grid5)
            for(let i=0;i<4;i++)
            squares[i].innerHTML=arr[i]
        })
        function rotate(grid){
            let a=arr[0], b=arr[1], c=arr[2], d=arr[3]
            arr[0]=b
            arr[1]=d
            arr[2]=a
            arr[3]=c
        }
        grid5.addEventListener('contextmenu',function(e){
            e.preventDefault()
            currentArr[0]=arr[0]
            currentArr[1]=arr[1]
            currentArr[2]=arr[2]
            currentArr[3]=arr[3]
        })
    }

    function create6() {
        let width=2
        let squares = [], arr = []
        for(let i=0;i<width*width;i++) {
            const square = document.createElement('div')
            // square.setAttribute('id',i) 
            grid6.appendChild(square)
            squares.push(square)
        }
        arr[0]=4, arr[1]=4, arr[2]=3, arr[3]=4
        for(let i=0;i<4;i++)
        squares[i].innerHTML=arr[i]
        grid6.addEventListener('click', function(e) {
            rotate(grid6)
            for(let i=0;i<4;i++)
            squares[i].innerHTML=arr[i]
        })
        function rotate(grid){
            let a=arr[0], b=arr[1], c=arr[2], d=arr[3]
            arr[0]=b
            arr[1]=d
            arr[2]=a
            arr[3]=c
        }
        grid6.addEventListener('contextmenu',function(e){
            e.preventDefault()
            currentArr[0]=arr[0]
            currentArr[1]=arr[1]
            currentArr[2]=arr[2]
            currentArr[3]=arr[3]
        })
    }

    function create7() {
        let width=2
        let squares = [], arr =[]
        for(let i=0;i<width*width;i++) {
            const square = document.createElement('div')
            // square.setAttribute('id',i) 
            grid7.appendChild(square)
            squares.push(square)
        }
        arr[0]=4, arr[1]=2, arr[2]=1, arr[3]=3
        for(let i=0;i<4;i++)
        squares[i].innerHTML=arr[i]
        
        grid7.addEventListener('click', function(e) {
            rotate(grid7)
            for(let i=0;i<4;i++)
            squares[i].innerHTML=arr[i]
        })
        function rotate(grid){
            let a=arr[0], b=arr[1], c=arr[2], d=arr[3]
            arr[0]=b
            arr[1]=d
            arr[2]=a
            arr[3]=c
        }
        grid7.addEventListener('contextmenu',function(e){
            e.preventDefault()
            currentArr[0]=arr[0]
            currentArr[1]=arr[1]
            currentArr[2]=arr[2]
            currentArr[3]=arr[3]
        })
    }

    function create8() {
        let width=2
        let squares = []
        for(let i=0;i<width*width;i++) {
            const square = document.createElement('div')
            // square.setAttribute('id',i) 
            grid8.appendChild(square)
            squares.push(square)
        }
        arr[0]=4, arr[1]=2, arr[2]=1, arr[3]=3
        for(let i=0;i<4;i++)
        squares[i].innerHTML=arr[i]
        
        grid8.addEventListener('click', function(e) {
            rotate(grid8)
            for(let i=0;i<4;i++)
            squares[i].innerHTML=arr[i]
        })
        function rotate(grid){
            let a=arr[0], b=arr[1], c=arr[2], d=arr[3]
            arr[0]=b
            arr[1]=d
            arr[2]=a
            arr[3]=c
        }
        // grid8.oncontextmenu = function(e) {
        //     e.preventDefault()
        //     let a=arr[0], b=arr[1], c=arr[2], d=arr[3]
        //     currentArr[0]=a, currentArr[1]=b, currentArr[2]=c, currentArr[3]=d
        // }
        grid8.addEventListener('contextmenu',function(e){
            e.preventDefault()
            currentArr[0]=arr[0]
            currentArr[1]=arr[1]
            currentArr[2]=arr[2]
            currentArr[3]=arr[3]
        })
        
    }

    bton.addEventListener('click',function(e){
        checkk()
    })

    function check(){
        let width = 6;
        for(let i = 1; i < width; i++){
            for(let j = 1; j < width - 1; j+=2){
                if(board[i][j] !== board[i][j+1])
                    return false;
            }
        }
        for(let i = 1; i < width-1; i+=2){
            for(let j = 1; j < width; j++){
                if(board[i][j] !== board[i+1][j])
                    return false;
            }
        }
        return true;
        
    }
    
    function checkk(){
       if(check()){
        alert('Win');
       }
       else{
        alert('Lose');
       }
    //    return null
    }
    
})