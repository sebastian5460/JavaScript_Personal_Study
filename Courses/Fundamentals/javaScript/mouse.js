

function mouse(cursor) {

    document.body.style.cursor = cursor;
    
}

document.getElementsByClassName('hand').addEventListener('mouseover', function(){mouse('pointer');
});

document.getElementsByClassName('hand').addEventListener('mouseout', 
function(){
    mouse('pointer');
});