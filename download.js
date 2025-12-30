// MIME types: Complete list of MIME types
// https://docs.w3cub.com/http/basics_of_http/mime_types/complete_list_of_mime_types.html

function downloadCSV (data){
    var MIME_TYPE = "text/csv";

    var blob = new Blob([data], {type: MIME_TYPE});
    window.location.href = window.URL.createObjectURL(blob);
}
