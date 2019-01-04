import {Projects} from "./Projects";
/**
 * Created by Bahgat on 1/11/16.
 */







export var  setupPrototypeAnother=function(){

    Projects.prototype.setupTable =function() {

        var nColNumber = -1;
        var x:any=jQuery(this.table_dom_id)
        var that=this;
        this.DataTable = x.DataTable({
            "aaData": this.Projects,
            "order": [[0, "asc"]],
            // , dom: '<"clear"T>rlftip', // f:filter r:processing  i:info t:table p:paging l:lenght
            dom: 'Z<"clear">Tlfrtip',
            // "sDom": '<"row view-filter"<"col-sm-12"<"pull-left"l><"pull-right"f><"clearfix">>>t<"row view-pager"<"col-sm-12"<"text-center"ipT>>>',
            //"processing": true,
            //"bPaginate": false,
            //  "bFilter": true,
             "bSort": false,
            "bInfo": true,
            //  destroy: true,

            "info": true,
            // "dom": 'Rlfrtip',//move column
            "paging": false,

            "sScrollY": this.the_height - 50,
            "scrollX": false,//full dock لكن المشكلة في الهيدر مش بيطبقها جاري حلها - تم حلها عن طريق حدث الريسايز
            "sScrollXInner": "100%",//لازم مع اللي قبلها عشان تعمل دك
            //"sScrollX": "100%",//سكرول بالعرض

            "bScrollCollapse": false,
            //  , "lengthMenu": [[10, 25, 50, 100, -1], [10, 25, 50, 100, "All"]] //combobox
            //  , "iDisplayLength": 50//combobox defult value
            //مهم للتسريع
            "deferRender": true,
            // autoWidth: true,
            //  , dom: "rtiS",

            // , "dom": 'T<"clear">rtiplf',
            "tableTools": {
                "sSwfPath": 'http://versatrax.com/wp-content/TableTools-2.1.5/media/swf/copy_csv_xls_pdf.swf' ,
                //  "sSwfPath": "lib/DataTables/extensions/TableTools/swf/copy_csv_xls_pdf.swf",
                "sRowSelect": "os",
                // "sRowSelector": 'td:first-child',
                "aButtons": [
                    {
                        "sExtends": "text", "sButtonText": "New Project",
                        "fnClick": function (nButton, oConfig, oFlash,e) {

                            that.presentNewForm(this);
                            e.preventDefault();
                            e.stopPropagation();
                            return false;

                        }

                    },

                ],

                //aButtons: [
                //    { sExtends: "editor_create", editor: editor },
                //    { sExtends: "editor_edit", editor: editor },
                //    { sExtends: "editor_remove", editor: editor }
                //]
            }

            //العناوين
            , "language": {
                "lengthMenu": "<div style='display: inline-flex;'><lable style='align-self: center;margin-right: 2px;'>Row(s) per page  </lable>   _MENU_     </div>",
                "zeroRecords": "Nothing found - sorry",
                //  "info": "Showing page _PAGE_ of _PAGES_",
                "infoEmpty": "No records available",
                "infoFiltered": "(filtered from _MAX_ total records)"
            }




            //     "render": function ( data, type, row ) {
            //    return data +' ('+ row[3]+')';
            //},
            //"targets": 0
            //},


            //Row created callback
            //      "createdRow": function ( row, data, index ) {
            //    if ( data[5].replace(/[\$,]/g, '') * 1 > 150000 ) {
            //        $('td', row).eq(5).addClass('highlight');
            //    }
            //}

            //وضع الاجمالي او المتوسط
            // Update footer هناك خطوات قبل ذلك
            //$( api.column( 4 ).footer() ).html(
            //    '$'+pageTotal +' ( $'+ total +' total)'
            //);


            , 'columnDefs': [
                {
                    'targets': [++nColNumber],
                    //sClass: "alignRight",
                    'sDefaultContent': '',
                    'title': 'Project Id',
                    'name': 'projectID',
                    'data': 'projectID',
                    'sWidth': '220px',
                    sClass: "alignCenter the_id_forClick",

                    "fnCreatedCell": function (nTd, sData, oData, iRow, iCol)
                    {
                        jQuery(nTd).css('text-align', 'center');
                    },
                    "mRender": function (data, type, param) {

                        return ' <a   class="disableEdit    click_' + param.projectID + '">' + param.projectID + '</a> ';
                    },

                },
                {
                    'targets': [++nColNumber],
                    'sWidth': '220px',
                    sClass: "alignCenter",
                    'title': 'Project Name',
                    'name': 'projectName',
                    'data': 'projectName',

                }
            ]


        })



        jQuery(this.table_dom_id + ' tbody').on('click', 'tr', function () {
            jQuery(this.table_dom_id + ' tr.selected').removeClass('DTTT_selected');
            jQuery(this.table_dom_id + ' tr.selected').removeClass('selected');
            jQuery(this).addClass('selected');
        });

        jQuery(this.table_dom_id + ' tbody').on('click', 'td', function () {
            jQuery(this.table_dom_id + ' tr.selected').removeClass('DTTT_selected');
            jQuery(this.table_dom_id + ' tr.selected').removeClass('selected');
            if (jQuery(this).hasClass('the_id_forClick')) {
                var row = jQuery(this).closest('tr')
                //var exam_id = row[0].childNodes['2'].innerText;
                var project_name = row[0].childNodes['1'].innerText;
                that.update_project(this.innerText.trim(),project_name.trim());
            }
        });









        this.editor = new jQuery.fn.DataTable.Editor({
            ajax: function (method, url, data, successCallback, errorCallback) {
                // alert("");
                successCallback({ "id": 5 });
                // successCallback()
            },
            table: this.table_dom_id,
            fields: [
                {   name: "projectID" },

                {
                    label: "project Name",
                    name: "projectName",

                }
            ]
        });

        this.editor.on('open', function (e, type) {
                if (type === 'inline') {
                    // Listen for a tab key event when inline editing
                    jQuery(document).on('keydown.editor', function (e) {
                        if (e.keyCode === 9) {
                            e.preventDefault();

                            // Find the cell that is currently being edited
                            var cell = jQuery('div.DTE').parent();

                            if (e.shiftKey && cell.prev().length && cell.prev().index() !== 0) {
                                // One cell to the left (skipping the first column)
                                cell.prev().click();
                            }
                            else if (e.shiftKey) {
                                // Up to the previous row
                                cell.parent().prev().children().last(0).click();
                            }
                            else if (cell.next().length) {
                                // One cell to the right
                                cell.next().click();
                            }
                            else {
                                // Down to the next row
                                cell.parent().next().children().eq(1).click();
                            }
                        }
                    });
                }
            })

            .on('close', function () {
                jQuery(document).off('keydown.editor');
            });




    }
}