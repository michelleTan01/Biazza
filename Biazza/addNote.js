
var divId = "note"+noteId;
console.log(divId);
var d = document.createElement("div");
d.setAttribute("id",divId);
document.body.appendChild(d);

var t = document.createElement("TABLE");
t.setAttribute("id", "notesTable"+noteId);
d.appendChild(t);

var b = document.createElement("TBODY");
t.appendChild(b);

var f = document.createElement("form");
var fs = document.createElement("fieldset");
var l = document.createElement("label");
l.setAttribute("for","input")
l.innerHTML = "Input: "
var i = document.createElement("input");
i.setAttribute("type","text");
i.setAttribute("id","input"+ divId);
i.setAttribute("name","input");
i.setAttribute("class","text ui-widget-content ui-corner-all");
fs.appendChild(l);
fs.appendChild(i);
f.appendChild(fs);
d.appendChild(f);
/*
var input = $( "#input"+noteId ), allFields = $( [] ).add( input )
function submitInput(ui){
	var test = $(ui.element).attr('id');
	console.log(test);
    $( "#"+ $(this).divId+" tbody" ).append( "<tr>" +
	    "<td>" + input.val() + "</td>" +
        "</tr>" );
	document.cookie = "input = "+input.val()+";";
}*/
dialog = $( "#"+divId ).dialog({
    autoOpen: true, 
    draggable: true,
    resizable: true,
    height: 'auto',
    width: 500,
    zIndex:3999,
    modal: false,
    position: {my: "center", at:"center", of: window},
    open: function(event, ui) {/*
        $(event.target).parent().css('position','relative');
        $(event.target).parent().css('top', '5px');
        $(event.target).parent().css('left', '10px');*/
       // position({my: "center", at:"right+123 top+234", of: $(document)})
     //   position({my: "bottom right", at:"right+123 top+234", of: $(document)})
      //  position: ({my: "center", at:"right+123 top+234", of: $(document)})
    },
 	buttons: {
        "Submit": function(event, ui) {
	    var currentdivID = $(this).attr('id');
        var input = $( "#input"+ currentdivID ), allFields = $( [] ).add( input )
        $( "#"+ currentdivID +" tbody" ).append( "<tr>" +
	    "<td>" + input.val() + "</td>" +
        "</tr>" );
	}
	,
        Cancel: function() {
            dialog.dialog( "close" );
        }
    },
    close: function() {
        form[ 0 ].reset();
        allFields.removeClass( "ui-state-error" );
    }
});

