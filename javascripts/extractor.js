console.log('Hello world');
    function ShowToolTip(names) {
        var groupEmailPopupTemplate = '<div id="ui-tooltip-7" class="ui-tooltip qtip ui-helper-reset ui-tooltip-medium ui-tooltip-shadow ui-tooltip-rounded ui-tooltip-pos-tr ui-widget ui-tooltip-focus" tracking="false" role="alert" aria-live="polite" aria-atomic="false" aria-describedby="ui-tooltip-7-content" aria-hidden="false" style="width: 280px; z-index: 15001; top: 191px; left: 372.087890625px; opacity: 1; display: block;"><div class="ui-tooltip-tip" style="border: 0px !important; height: 22px; width: 22px; top: 4px; right: -21px; background-color: transparent !important;"><canvas style="border: 0px !important; background-color: transparent !important;" height="22" width="22"></canvas></div><div class="ui-tooltip-content ui-widget-content" id="ui-tooltip-7-content" aria-atomic="true"><div class="emailGroupLinkPopup" style="display: block;">   <div class="emailGroupLinkPopupTitle">    <span>Email all Elders</span>   </div>   <div style="" class="emailGroupLinkPopupDescription">       </div>   <div class="emailGroupLinkPopupRadioBar">       </div>    <div class="emailGroupLinkPopupList" id="listItemELDER_EldersgroupNamelList"></div>   <div class="buttonBar" style="margin-right:auto; margin-left:auto; text-align:center; width:220px; padding:0px 20px 10px 20px">    <button id="emailGroupLink_Eldersselect_all">Select All</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    <button id="emailGroupLink_ElderscloseGroupEmailPopup" class="emailGroupLinkPopupButtonBar">Done</button>   </div>  </div></div></div>';
        var control = $('#listItemELDER');
        control.qtip({
            content : {
                text : groupEmailPopupTemplate
            },
            hide : false,
            events : {
                // Hide the tooltip when the close buttons in the dialogue is clicked
                render : function (event, api) {
                    // Inject names
                    $("#listItemELDER_EldersgroupNamelList").html(names.toString());
                    $("#" + linkId + "closeGroupEmailPopup").click(api.destroy);
                    //listItemELDER_EldersgroupNamelList
                    $("#" + linkId + "select_all").click(function() {
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
        control("show");
    }

    // Extract names
    var namesRaw = $('.rosterName'),
    namesExtracted = [];
    namesRaw.each(function( index ) {
        namesExtracted[index] = $( this ).text();
    });

    // Render tool tip
    ShowToolTip(namesExtracted);
