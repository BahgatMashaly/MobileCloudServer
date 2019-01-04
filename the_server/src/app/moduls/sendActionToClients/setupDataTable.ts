
import {sendActionToClients} from "./sendActionToClients";
/**
 * Created by Bahgat on 1/11/16.
 */







export var  setupPrototypeAnother=function(){

    sendActionToClients.prototype.setupTable =function() {

        var nColNumber = -1;
        var x:any=jQuery(this.table_dom_id)
        var that=this;
        this.DataTable = x.DataTable({
            "aaData": this.devices,
            "order": [[0, "asc"]],
            // , dom: '<"clear"T>rlftip', // f:filter r:processing  i:info t:table p:paging l:lenght
            dom: 'Z<"clear">Tlfrtip',
            // "sDom": '<"row view-filter"<"col-sm-12"<"pull-left"l><"pull-right"f><"clearfix">>>t<"row view-pager"<"col-sm-12"<"text-center"ipT>>>',
            //"processing": true,
            //"bPaginate": false,
              "bFilter": true,
             "bSort": false,
            "bInfo": true,
            //  destroy: true,

            "info": true,
            // "dom": 'Rlfrtip',//move column
            "paging": false,

            "sScrollY": this.the_height - 50,
            "scrollX": true,//full dock لكن المشكلة في الهيدر مش بيطبقها جاري حلها - تم حلها عن طريق حدث الريسايز
            //"sScrollXInner": "100%",//لازم مع اللي قبلها عشان تعمل دك
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


            , 'columnDefs': this.dynamicColumns,



        })

        //jQuery(this.table_dom_id + ' tfoot th').each( function () {
        //    var title = $(this).text();
        //    jQuery(this).html( '<input type="text" placeholder="Search '+title+'" />' );
        //} );



        jQuery(".xxx:eq(0)").append("<input type='checkbox' id='mycheckBox'  [(ng-model)]='isSelectAll'   >");
        jQuery("#mycheckBox").on("click", function () {
            if(this.checked){
                that.check_uncheck()
            } else{
                that.check_uncheck()
            }
        })

jQuery(".dataTables_scrollHeadInner").each( function () {

            jQuery(this).css("background-color", "gainsboro" );
        } );




    }
}