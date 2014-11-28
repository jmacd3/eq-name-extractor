
    function BindNamesToolTip(names) {
        var groupNamePopupTemplate = $("#multipleNameDialog").tmpl({
        commaList: names.toString(),
    });
        var control = $('#extractNamesGroupLink_Elders');
        control.qtip({
            content : {
                text : groupNamePopupTemplate
            },
            hide : false,
            events : {
                // Hide the tooltip when the close buttons in the dialogue is clicked
                render : function (event, api) {
                    // Inject names
                    $("#elderscloseGroupNamePopup").click(api.destroy);
                    //listItemELDER_EldersgroupNamelList
                    $("#eldersSelectAllGroupNamePopup").click(function() {
                        var element = $("#listItemELDER_EldersgroupNamelList");

                        var doc = document
                            , text = element.html()
                            , range, selection
                            ;
                        if (doc.body.createTextRange) { //ms
                            range = doc.body.createTextRange();
                            range.moveToElementText(element[0]);
                            range.select();
                        } else if (window.getSelection) { //all others
                            selection = window.getSelection();
                            range = doc.createRange();
                            range.selectNodeContents(element[0]);
                            selection.removeAllRanges();
                            selection.addRange(range);
                        }
                    });
                }
            },
            position : {
                my : "top right",
                at : "bottom left",
                target : 'event',
                adjust : {
                    screen : true,
                    scroll : true
                }
            },
            show : {
                event : "click",
                solo : true
            },
            style : {
                background : "#E8E5DE",
                classes : "ui-tooltip-medium ui-tooltip-shadow ui-tooltip-rounded",
                tip : {
                    corner : "right top",
                    mimic : false,
                    width : 20,
                    height : 20,
                    border : true,
                    offset : 0
                },
                widget : true
            }
        });

    }
    // Inject new dialog
    $("#multipleEmailDialog").after('<script id="multipleNameDialog" type="text/x-query-tmpl"> <div class="emailGroupLinkPopup"> <div class="emailGroupLinkPopupTitle"> <span>Copy all Elders</span> </div> <div style="" class="emailGroupLinkPopupDescription"><span id="titleText">${gen.getMsg().roster.email.popup_directions}</span></div><div class="emailGroupLinkPopupList" id="EldersgroupNamelList" class="">${commaList}</div><div class="buttonBar" style="margin-right:auto; margin-left:auto; text-align:center; width:220px; padding:0px 20px 10px 20px"><button id="eldersSelectAllGroupNamePopup">${gen.getMsg().roster.email.selectAll}</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button id="eldersCloseGroupNamePopup" class="emailGroupLinkPopupButtonBar">${gen.getMsg().roster.email.done}</button></div></div></script>');

    // Inject new link
    $("#emailGroupLink_Elders").after('<div id="emailGroupdiv">    <a id="extractNamesGroupLink_Elders" href="#" class="emailAddress" aria-describedby="ui-tooltip-4">Copy all Elders . . .</a>   </div>');


    // Extract names
    var namesRaw = $('.rosterName'),
    namesExtracted = [];
    namesRaw.each(function( index ) {
        namesExtracted[index] = $( this ).text();
    });

    // Render tool tip
    BindNamesToolTip(namesExtracted);



