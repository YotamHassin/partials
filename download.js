// MIME types: Complete list of MIME types
// https://docs.w3cub.com/http/basics_of_http/mime_types/complete_list_of_mime_types.html

function downloadCSV (data){
    var MIME_TYPE = "text/csv";

    var blob = new Blob([data], {type: MIME_TYPE});
    window.location.href = window.URL.createObjectURL(blob);
}

	const downloadStringify = () => {
        const data = JSON.stringify(commands, null, 2);
        const blob = new Blob([data], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `sketch-commands-${Date.now()}.json`;
        a.click();
        URL.revokeObjectURL(url);
    };
